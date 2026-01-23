import { NextResponse, after } from "next/server"
import { sendContactNotificationEmail, sendContactAutoReplyEmail } from "@/lib/email"

// お問い合わせデータの型定義
type ContactData = {
    company: string
    name: string
    email: string
    phone?: string
    service: string
    budget?: string
    message: string
}

// 正規表現をモジュールレベルでホイスト
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// バリデーション関数
function validateContactData(data: ContactData): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!data.company || data.company.trim().length === 0) {
        errors.push("会社名は必須です")
    }
    if (!data.name || data.name.trim().length === 0) {
        errors.push("お名前は必須です")
    }
    if (!data.email || data.email.trim().length === 0) {
        errors.push("メールアドレスは必須です")
    } else if (!EMAIL_REGEX.test(data.email)) {
        errors.push("有効なメールアドレスを入力してください")
    }
    if (!data.service || data.service.trim().length === 0) {
        errors.push("サービスを選択してください")
    }
    if (!data.message || data.message.trim().length === 0) {
        errors.push("メッセージは必須です")
    }
    if (data.message && data.message.length > 5000) {
        errors.push("メッセージは5000文字以内で入力してください")
    }

    return { valid: errors.length === 0, errors }
}

// レートリミット用のシンプルな実装（メモリベース + TTLクリーンアップ）
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 60秒
const RATE_LIMIT_MAX = 5 // 60秒間に5回まで
const CLEANUP_INTERVAL = 5 * 60 * 1000 // 5分ごとにクリーンアップ

// 定期的なクリーンアップ関数
function cleanupRateLimitMap() {
    const now = Date.now()
    let deletedCount = 0
    
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now - record.timestamp > RATE_LIMIT_WINDOW) {
            rateLimitMap.delete(ip)
            deletedCount++
        }
    }
    
    // 開発環境でのログ出力
    if (process.env.NODE_ENV === 'development' && deletedCount > 0) {
        console.log(`Cleaned up ${deletedCount} expired rate limit entries. Current size: ${rateLimitMap.size}`)
    }
}

// 前回のクリーンアップ時刻を追跡
let lastCleanup = Date.now()

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    
    // 定期的なクリーンアップ実行
    if (now - lastCleanup > CLEANUP_INTERVAL) {
        cleanupRateLimitMap()
        lastCleanup = now
    }
    
    const record = rateLimitMap.get(ip)

    if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, timestamp: now })
        return true
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return false
    }

    record.count++
    return true
}

export async function POST(request: Request) {
    try {
        // IPアドレスの取得（Vercelの場合）
        const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ||
                   request.headers.get("x-real-ip") ||
                   "unknown"

        // レートリミットチェック
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "リクエストが多すぎます。しばらく待ってから再度お試しください。" },
                { status: 429 }
            )
        }

        // リクエストボディの取得とバリデーション
        let body: ContactData
        try {
            body = await request.json()
        } catch (e) {
            console.error("Failed to parse request body:", e)
            return NextResponse.json(
                { error: "リクエスト形式が正しくありません。" },
                { status: 400 }
            )
        }

        // バリデーション
        const validation = validateContactData(body)
        if (!validation.valid) {
            return NextResponse.json(
                { error: validation.errors.join(", ") },
                { status: 400 }
            )
        }

        // 環境変数の取得
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
            console.error("Supabase environment variables are missing.")
            return NextResponse.json(
                { error: "サーバーの設定に不備があります。" },
                { status: 500 }
            )
        }

        // お問い合わせデータを一度だけ作成（DRY原則）
        const contactData = {
            company: body.company.trim(),
            name: body.name.trim(),
            email: body.email.trim().toLowerCase(),
            phone: body.phone?.trim() || null,
            service: body.service,
            budget: body.budget || null,
            message: body.message.trim(),
        }

        // Supabase REST APIへ直接リクエスト
        const response = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({ ...contactData, status: "new" })
        })

        const result = await response.json()

        if (!response.ok) {
            console.error("Supabase REST API error:", response.status, result)
            return NextResponse.json(
                {
                    error: "データベースのエラーが発生しました。",
                    details: result.message || JSON.stringify(result),
                    hint: result.hint,
                    code: result.code,
                    statusCode: response.status
                },
                { status: 500 }
            )
        }

        // レスポンス送信後にメール送信を非同期で実行
        // after()を使用することで、レスポンスがブロックされない
        after(async () => {
            const results = await Promise.allSettled([
                sendContactNotificationEmail(contactData),
                sendContactAutoReplyEmail(contactData),
            ])

            // 結果をログに記録
            const [notificationResult, autoReplyResult] = results

            if (notificationResult.status === 'fulfilled') {
                if (!notificationResult.value.success) {
                    console.warn("Failed to send notification email:", notificationResult.value.error)
                }
            } else {
                console.error("Notification email error:", notificationResult.reason)
            }

            if (autoReplyResult.status === 'fulfilled') {
                if (!autoReplyResult.value.success) {
                    console.warn("Failed to send auto-reply email:", autoReplyResult.value.error)
                }
            } else {
                console.error("Auto-reply email error:", autoReplyResult.reason)
            }
        })

        // 成功レスポンス（メール送信を待たずに即座に返す）
        return NextResponse.json(
            {
                message: "お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。",
                id: result?.[0]?.id
            },
            { status: 200 }
        )

    } catch (error: unknown) {
        console.error("Contact API unexpected error:", error)
        const errorMessage = error instanceof Error ? error.message : "予期せぬエラーが発生しました。"
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        )
    }
}

// GETリクエストは許可しない
export async function GET() {
    return NextResponse.json(
        { error: "Method not allowed" },
        { status: 405 }
    )
}
