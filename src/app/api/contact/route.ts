import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
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

        // リクエストボディの取得
        const body: ContactData = await request.json()

        // バリデーション
        const validation = validateContactData(body)
        if (!validation.valid) {
            return NextResponse.json(
                { error: validation.errors.join(", ") },
                { status: 400 }
            )
        }

        // Supabaseクライアントの作成
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
            console.error("Supabase environment variables are missing.")
            return NextResponse.json(
                { error: "サーバーの設定に不備があります。環境変数を確認してください。" },
                { status: 500 }
            )
        }

        const supabase = await createClient()

        // データベースに保存
        const { data, error: dbError } = await supabase
            .from("contacts")
            .insert([
                {
                    company: body.company.trim(),
                    name: body.name.trim(),
                    email: body.email.trim().toLowerCase(),
                    phone: body.phone?.trim() || null,
                    service: body.service,
                    budget: body.budget || null,
                    message: body.message.trim(),
                    status: "new",
                },
            ])
            .select()

        if (dbError) {
            console.error("Supabase error:", dbError)
            return NextResponse.json(
                { error: "データの保存に失敗しました。管理者にお問い合わせください。" },
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
            .then(result => {
                if (!result.success) {
                    console.warn("Failed to send notification email:", result.error)
                } else {
                    console.log("Notification email sent successfully")
                }
            })
            .catch(err => console.error("Notification email error:", err))

        // お客様への自動返信メール
        sendContactAutoReplyEmail(contactDataForEmail)
            .then(result => {
                if (!result.success) {
                    console.warn("Failed to send auto-reply email:", result.error)
                } else {
                    console.log("Auto-reply email sent successfully")
                }
            })
            .catch(err => console.error("Auto-reply email error:", err))

        // 成功レスポンス
        return NextResponse.json(
            { 
                message: "お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。",
                id: data?.[0]?.id 
            },
            { status: 200 }
        )

    } catch (error) {
        console.error("Contact API error:", error)
        return NextResponse.json(
            { error: "予期せぬエラーが発生しました。" },
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

