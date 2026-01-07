import { Resend } from "resend"

// Resendクライアントの初期化（取得関数を介してアクセス）
let resendInstance: Resend | null = null
const getResend = () => {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) return null
    if (!resendInstance) {
        resendInstance = new Resend(apiKey)
    }
    return resendInstance
}

// 通知先メールアドレス（環境変数から取得、カンマ区切りで複数指定可能）
const getNotificationEmails = (): string[] => {
    const emails = process.env.CONTACT_NOTIFICATION_EMAILS || ""
    return emails.split(",").map(email => email.trim()).filter(Boolean)
}

// 送信元メールアドレス
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "noreply@plus-commit.com"

type ContactData = {
    company: string
    name: string
    email: string
    phone?: string | null
    service: string
    budget?: string | null
    message: string
}

// サービス名の日本語変換
const serviceLabels: Record<string, string> = {
    corporate: "コーポレートサイト制作",
    lp: "LP（ランディングページ）制作",
    ec: "ECサイト構築",
    webapp: "Webアプリケーション開発",
    maintenance: "保守・運用サポート",
    other: "その他",
}

// 予算の日本語変換
const budgetLabels: Record<string, string> = {
    "~30": "〜30万円",
    "30-50": "30万円〜50万円",
    "50-100": "50万円〜100万円",
    "100-300": "100万円〜300万円",
    "300~": "300万円以上",
    "undecided": "未定・相談したい",
}

/**
 * 管理者へのお問い合わせ通知メールを送信
 */
export async function sendContactNotificationEmail(contact: ContactData): Promise<{ success: boolean; error?: string }> {
    const notificationEmails = getNotificationEmails()
    
    if (notificationEmails.length === 0) {
        console.warn("CONTACT_NOTIFICATION_EMAILS is not set")
        return { success: false, error: "通知先メールアドレスが設定されていません" }
    }

    if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY is not set")
        return { success: false, error: "Resend APIキーが設定されていません" }
    }

    const serviceName = serviceLabels[contact.service] || contact.service
    const budgetName = contact.budget ? (budgetLabels[contact.budget] || contact.budget) : "未選択"
    const now = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })

    const resend = getResend()
    if (!resend) {
        return { success: false, error: "Resend APIキーが設定されていません" }
    }

    try {
        const { error } = await resend.emails.send({
            from: `プラスコミット <${FROM_EMAIL}>`,
            to: notificationEmails,
            subject: `【お問い合わせ】${contact.company} - ${contact.name}様`,
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: #fff; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 18px; }
        .content { padding: 30px 20px; background: #f9f9f9; }
        .field { margin-bottom: 20px; }
        .label { font-size: 12px; color: #666; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px; }
        .value { font-size: 16px; color: #000; background: #fff; padding: 12px; border-left: 3px solid #000; }
        .message-box { background: #fff; padding: 20px; border: 1px solid #e0e0e0; white-space: pre-wrap; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        .cta { display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; margin-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📩 新しいお問い合わせがありました</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">受信日時</div>
                <div class="value">${now}</div>
            </div>
            <div class="field">
                <div class="label">会社名</div>
                <div class="value">${contact.company}</div>
            </div>
            <div class="field">
                <div class="label">ご担当者名</div>
                <div class="value">${contact.name}</div>
            </div>
            <div class="field">
                <div class="label">メールアドレス</div>
                <div class="value"><a href="mailto:${contact.email}">${contact.email}</a></div>
            </div>
            <div class="field">
                <div class="label">電話番号</div>
                <div class="value">${contact.phone || "未入力"}</div>
            </div>
            <div class="field">
                <div class="label">ご検討中のサービス</div>
                <div class="value">${serviceName}</div>
            </div>
            <div class="field">
                <div class="label">ご予算</div>
                <div class="value">${budgetName}</div>
            </div>
            <div class="field">
                <div class="label">プロジェクトの詳細</div>
                <div class="message-box">${contact.message.replace(/\n/g, "<br>")}</div>
            </div>
        </div>
        <div class="footer">
            <p>このメールはプラスコミットのお問い合わせフォームから自動送信されています。</p>
            <p>2営業日以内にご返信をお願いします。</p>
        </div>
    </div>
</body>
</html>
            `,
            text: `
【新しいお問い合わせ】

受信日時: ${now}

━━━━━━━━━━━━━━━━━━━━━━━━

会社名: ${contact.company}
ご担当者名: ${contact.name}
メールアドレス: ${contact.email}
電話番号: ${contact.phone || "未入力"}
ご検討中のサービス: ${serviceName}
ご予算: ${budgetName}

━━━━━━━━━━━━━━━━━━━━━━━━

【プロジェクトの詳細】
${contact.message}

━━━━━━━━━━━━━━━━━━━━━━━━

※ 2営業日以内にご返信をお願いします。
            `,
        })

        if (error) {
            console.error("Resend error:", error)
            return { success: false, error: error.message }
        }

        return { success: true }
    } catch (error) {
        console.error("Email sending error:", error)
        return { success: false, error: error instanceof Error ? error.message : "メール送信に失敗しました" }
    }
}

/**
 * お客様への自動返信メールを送信
 */
export async function sendContactAutoReplyEmail(contact: ContactData): Promise<{ success: boolean; error?: string }> {
    const resend = getResend()
    if (!resend) {
        console.warn("RESEND_API_KEY is not set")
        return { success: false, error: "Resend APIキーが設定されていません" }
    }

    try {
        const { error } = await resend.emails.send({
            from: `プラスコミット <${FROM_EMAIL}>`,
            to: [contact.email],
            subject: "【プラスコミット】お問い合わせありがとうございます",
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.8; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: #fff; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 20px; }
        .content { padding: 30px 20px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; margin-top: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>お問い合わせありがとうございます</h1>
        </div>
        <div class="content">
            <p>${contact.name} 様</p>
            <p>この度は、プラスコミットにお問い合わせいただき、誠にありがとうございます。</p>
            <p>お問い合わせ内容を確認させていただき、<strong>2営業日以内</strong>に担当者よりご連絡いたします。</p>
            <p>今しばらくお待ちくださいますよう、お願い申し上げます。</p>
            <br>
            <p>ご不明な点がございましたら、下記までお気軽にご連絡ください。</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━━━</p>
            <p>株式会社プラスコミット</p>
            <p>Email: business@plus-commit.com</p>
            <p>━━━━━━━━━━━━━━━━━━━━━━━━</p>
        </div>
        <div class="footer">
            <p>※ このメールは自動送信されています。</p>
            <p>© ${new Date().getFullYear()} 株式会社プラスコミット</p>
        </div>
    </div>
</body>
</html>
            `,
            text: `
${contact.name} 様

この度は、プラスコミットにお問い合わせいただき、誠にありがとうございます。

お問い合わせ内容を確認させていただき、2営業日以内に担当者よりご連絡いたします。
今しばらくお待ちくださいますよう、お願い申し上げます。

ご不明な点がございましたら、下記までお気軽にご連絡ください。

━━━━━━━━━━━━━━━━━━━━━━━━
株式会社プラスコミット
Email: business@plus-commit.com
━━━━━━━━━━━━━━━━━━━━━━━━

※ このメールは自動送信されています。
© ${new Date().getFullYear()} 株式会社プラスコミット
            `,
        })

        if (error) {
            console.error("Resend error:", error)
            return { success: false, error: error.message }
        }

        return { success: true }
    } catch (error) {
        console.error("Email sending error:", error)
        return { success: false, error: error instanceof Error ? error.message : "メール送信に失敗しました" }
    }
}








