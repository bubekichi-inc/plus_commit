# Supabase Auth + Resend メール設定ガイド

## 📧 認証メールをResend経由で送信する設定

### 方法1: Supabaseダッシュボードで Custom SMTP設定（推奨）

#### 1. Resend SMTP情報を取得

Resendの設定値:
- **SMTP Host**: `smtp.resend.com`
- **SMTP Port**: `465` (SSL) または `587` (TLS)
- **Username**: `resend`
- **Password**: あなたのResend API Key

#### 2. Supabaseダッシュボードで設定

1. [Supabase Dashboard](https://app.supabase.com) にログイン
2. プロジェクトを選択
3. **Settings** → **Auth** → **SMTP Settings** に移動
4. **Enable Custom SMTP** をONにする
5. 以下を入力:

```
Sender name: Plus Commit
Sender email: noreply@plus-commit.com (またはあなたの認証済みドメイン)
Host: smtp.resend.com
Port: 587
Username: resend
Password: [あなたのResend API Key]
```

6. **Save** をクリック

#### 3. メールテンプレートをカスタマイズ（オプション）

**Settings** → **Auth** → **Email Templates** で以下のテンプレートをカスタマイズ:

- **Confirm signup**: 登録確認メール
- **Invite user**: ユーザー招待メール
- **Magic Link**: マジックリンクメール
- **Change Email Address**: メールアドレス変更確認
- **Reset Password**: パスワードリセットメール

---

### 方法2: 環境変数で設定（.env.local）

`.env.local`に以下を追加:

```bash
# Supabase設定
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend設定（お問い合わせフォーム用 + 認証メール用）
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@plus-commit.com

# お問い合わせ通知先
CONTACT_NOTIFICATION_EMAILS=info@plus-commit.com,admin@plus-commit.com
```

---

## 🔧 Resendドメイン認証設定

認証メールを送信するには、Resendでドメイン認証が必要です:

### 1. Resendダッシュボードでドメインを追加

1. [Resend Dashboard](https://resend.com/domains) にログイン
2. **Add Domain** をクリック
3. ドメイン名を入力（例: `plus-commit.com`）
4. DNS レコードが表示される

### 2. DNSレコードを設定

ドメイン管理画面（お名前.com、ムームードメイン等）で以下のレコードを追加:

**SPFレコード（TXTレコード）**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

**DKIMレコード（TXTレコード）**
```
Type: TXT  
Name: resend._domainkey
Value: [Resendダッシュボードに表示される値]
```

### 3. 検証を実行

DNSレコード追加後、Resendダッシュボードで **Verify DNS Records** をクリック

---

## 📝 メールテンプレートの日本語化例

### 登録確認メール（Confirm signup）

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: #000; color: #fff; padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px;">Plus Commit</h1>
    </div>
    
    <div style="padding: 30px 20px; background: #f9f9f9;">
      <h2 style="color: #000;">メールアドレスの確認</h2>
      <p>Plus Commitにご登録いただきありがとうございます。</p>
      <p>以下のボタンをクリックして、メールアドレスの確認を完了してください。</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{ .ConfirmationURL }}" 
           style="display: inline-block; background: #000; color: #fff; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: bold;">
          メールアドレスを確認
        </a>
      </div>
      
      <p style="font-size: 14px; color: #666;">
        ボタンが機能しない場合は、以下のURLをコピーしてブラウザに貼り付けてください:<br>
        <a href="{{ .ConfirmationURL }}" style="color: #3b82f6; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </p>
    </div>
    
    <div style="text-align: center; padding: 20px; font-size: 12px; color: #666;">
      <p>このメールに心当たりがない場合は、無視してください。</p>
      <p>&copy; 2026 Plus Commit. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
```

### パスワードリセットメール（Reset Password）

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: sans-serif; line-height: 1.6; color: #333;">
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: #000; color: #fff; padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px;">Plus Commit</h1>
    </div>
    
    <div style="padding: 30px 20px; background: #f9f9f9;">
      <h2 style="color: #000;">パスワードのリセット</h2>
      <p>パスワードリセットのリクエストを受け付けました。</p>
      <p>以下のボタンをクリックして、新しいパスワードを設定してください。</p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{ .ConfirmationURL }}" 
           style="display: inline-block; background: #000; color: #fff; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: bold;">
          パスワードをリセット
        </a>
      </div>
      
      <p style="font-size: 14px; color: #666;">
        このリンクは24時間有効です。<br>
        ボタンが機能しない場合は、以下のURLをコピーしてブラウザに貼り付けてください:<br>
        <a href="{{ .ConfirmationURL }}" style="color: #3b82f6; word-break: break-all;">{{ .ConfirmationURL }}</a>
      </p>
    </div>
    
    <div style="text-align: center; padding: 20px; font-size: 12px; color: #666;">
      <p>このメールに心当たりがない場合は、無視してください。</p>
      <p>&copy; 2026 Plus Commit. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
```

---

## ✅ テスト方法

### 1. メール送信のテスト

開発環境で新規登録を実行:

```bash
npm run dev
```

1. ログインモーダルを開く
2. 「新規登録」タブに切り替え
3. メールアドレスとパスワードを入力して登録
4. 登録したメールアドレスに確認メールが届くことを確認

### 2. Resendダッシュボードでログ確認

[Resend Logs](https://resend.com/logs) で送信履歴を確認できます。

---

## 🔒 セキュリティのベストプラクティス

1. **環境変数を.gitignoreに追加**
   ```
   .env.local
   .env*.local
   ```

2. **本番環境では Vercel の Environment Variables を使用**
   - Vercel Dashboard → Settings → Environment Variables
   - `RESEND_API_KEY` を設定

3. **Rate Limitingを有効化**
   - Supabase Dashboard → Auth → Rate Limits
   - 短時間での大量登録を防止

---

## 📚 参考リンク

- [Supabase Custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp)
- [Resend Documentation](https://resend.com/docs)
- [Resend with Next.js](https://resend.com/docs/send-with-nextjs)
- [Supabase Auth UI](https://supabase.com/docs/guides/auth/auth-ui)
