import { NextResponse } from "next/server"
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
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

// レートリミット用のシンプルな実装（メモリベース）
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 60秒
const RATE_LIMIT_MAX = 5 // 60秒間に5回まで

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
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
        // サーバーサイド（API Route）ではservice_roleキーを使用
        // これはクライアントには公開されず、安全です
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
            console.error("Supabase environment variables are missing.")
            return NextResponse.json(
                { error: "サーバーの設定に不備があります。" },
                { status: 500 }
            )
        }

        // Supabase REST APIへ直接リクエスト
        const insertData = {
            company: body.company.trim(),
            name: body.name.trim(),
            email: body.email.trim().toLowerCase(),
            phone: body.phone?.trim() || null,
            service: body.service,
            budget: body.budget || null,
            message: body.message.trim(),
            status: "new",
        }

        const response = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Prefer': 'return=representation'
            },
            body: JSON.stringify(insertData)
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

        // メール通知を非同期で送信（エラーがあってもレスポンスには影響しない）
        const contactDataForEmail = {
            company: body.company.trim(),
            name: body.name.trim(),
            email: body.email.trim().toLowerCase(),
            phone: body.phone?.trim() || null,
            service: body.service,
            budget: body.budget || null,
            message: body.message.trim(),
        }

        // 管理者への通知メール
        sendContactNotificationEmail(contactDataForEmail)
            .then(res => {
                if (!res.success) {
                    console.warn("Failed to send notification email:", res.error)
                } else {
                    console.log("Notification email sent successfully")
                }
            })
            .catch(err => console.error("Notification email error:", err))

        // お客様への自動返信メール
        sendContactAutoReplyEmail(contactDataForEmail)
            .then(res => {
                if (!res.success) {
                    console.warn("Failed to send auto-reply email:", res.error)
                } else {
                    console.log("Auto-reply email sent successfully")
                }
            })
            .catch(err => console.error("Auto-reply email error:", err))

        // 成功レスポンス
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

