# 🧪 認証メールのテスト方法

## 開発環境でのテスト

### 方法1: 実際のメールアドレスでテスト（推奨）

1. **環境変数を設定**
   ```bash
   # .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

2. **Supabaseダッシュボードで確認メールを有効化**
   - Settings → Auth → Email Auth
   - **Confirm email** をONにする
   - **Secure email change** をONにする（推奨）

3. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

4. **テスト登録**
   - http://localhost:3000 にアクセス
   - ログインモーダルを開く
   - 新規登録で実際のメールアドレスを入力
   - 登録後、メールを確認

5. **メール内のリンクをクリック**
   - 確認メールが届く
   - リンクをクリックすると `/auth/callback` を経由して `/auth/success` へリダイレクト
   - 5秒後に自動的にマイページへ移動

---

### 方法2: Mailtrapを使ったテスト（メール受信不要）

開発環境で実際のメールを送信せずにテストする方法:

1. **Mailtrapアカウントを作成**
   - https://mailtrap.io/ でアカウント作成（無料）

2. **Supabaseに Mailtrap SMTP設定**
   - Supabase Dashboard → Settings → Auth → SMTP Settings
   - Enable Custom SMTP: ON
   ```
   Host: smtp.mailtrap.io
   Port: 587
   Username: [Mailtrapのユーザー名]
   Password: [Mailtrapのパスワード]
   Sender email: test@example.com
   ```

3. **テスト実行**
   - 新規登録を実行
   - Mailtrapの受信トレイでメールを確認
   - メール内のリンクをテスト

---

### 方法3: Supabaseのテストメール機能

Supabaseダッシュボードから直接テストメールを送信:

1. **Authentication → Users**
2. **Add user** → **Create new user**
3. メールアドレスを入力して作成
4. **Send confirmation email** をクリック

---

## 本番環境での設定

### Resend + Custom SMTPの設定

1. **Resend APIキーを取得**
   ```bash
   # .env.local（または Vercel Environment Variables）
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=noreply@plus-commit.com
   ```

2. **ドメイン認証**
   - Resend Dashboard → Domains → Add Domain
   - DNSレコードを設定（SPF, DKIM）

3. **Supabaseに設定**
   ```
   Host: smtp.resend.com
   Port: 587
   Username: resend
   Password: [RESEND_API_KEY]
   Sender email: noreply@plus-commit.com
   ```

4. **テスト送信**
   - Authentication → Users → Test email
   - 実際のメールアドレスに送信してテスト

---

## 📧 メールテンプレートのカスタマイズ

Supabase Dashboard → Settings → Auth → Email Templates

### 確認メール（Confirm signup）

```html
<h2>メールアドレスの確認</h2>
<p>Plus Commitにご登録いただきありがとうございます。</p>
<p>以下のリンクをクリックして、メールアドレスの確認を完了してください。</p>
<p><a href="{{ .ConfirmationURL }}">メールアドレスを確認</a></p>
```

### パスワードリセット（Reset Password）

```html
<h2>パスワードのリセット</h2>
<p>パスワードリセットのリクエストを受け付けました。</p>
<p>以下のリンクをクリックして、新しいパスワードを設定してください。</p>
<p><a href="{{ .ConfirmationURL }}">パスワードをリセット</a></p>
<p>このリンクは24時間有効です。</p>
```

---

## 🔍 トラブルシューティング

### メールが届かない場合

1. **Supabase Logsを確認**
   - Dashboard → Logs → Auth Logs
   - メール送信のエラーを確認

2. **SMTP設定を確認**
   - Settings → Auth → SMTP Settings
   - **Test Configuration** をクリック

3. **メールがスパムフォルダに入っていないか確認**

4. **Rate Limitに引っかかっていないか確認**
   - Settings → Auth → Rate Limits
   - 短時間に大量のメールを送信していないか

### メール内リンクが動作しない場合

1. **リダイレクトURL設定を確認**
   - Settings → Auth → URL Configuration
   - Site URLとRedirect URLsを確認
   ```
   Site URL: https://plus-commit.com (本番)
   Site URL: http://localhost:3000 (開発)
   
   Redirect URLs:
   https://plus-commit.com/auth/callback
   http://localhost:3000/auth/callback
   ```

2. **コールバックルートを確認**
   - `/src/app/auth/callback/route.ts` が正しく実装されているか

---

## ✅ チェックリスト

- [ ] Supabaseプロジェクト作成済み
- [ ] 環境変数（SUPABASE_URL, SUPABASE_ANON_KEY）設定済み
- [ ] Resend APIキー取得済み
- [ ] Resendドメイン認証完了
- [ ] Supabase Custom SMTP設定完了
- [ ] メールテンプレート日本語化済み
- [ ] リダイレクトURL設定済み
- [ ] テストメール送信成功
- [ ] 本番環境でテスト完了
