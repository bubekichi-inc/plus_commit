# PlusCommit 静的サイト - 教育カリキュラム用

このディレクトリには、PlusCommitのWebサイトをHTML/CSSのみで再現した静的バージョンが含まれています。
JavaScriptのアニメーションや動的機能は削除されており、基本的なHTMLとCSSのみで構成されています。

## 📁 ファイル構成

```
curriculum/static/
├── index.html          # トップページ
├── company.html        # 会社概要
├── technologies.html   # 取り扱い技術
├── works.html          # 導入事例
├── news.html           # お知らせ
├── contact.html        # お問い合わせ
├── recruit.html        # 採用情報
├── styles.css          # 共通スタイルシート
└── README.md           # このファイル
```

## 🚀 使い方

### ローカルでの表示方法

#### 方法1: Python の HTTP サーバー（推奨）

```bash
# このディレクトリに移動
cd curriculum/static

# サーバーを起動
python3 -m http.server 8000

# ブラウザで開く
open http://localhost:8000
```

#### 方法2: Node.js の HTTP サーバー

```bash
# http-server をインストール（初回のみ）
npm install -g http-server

# このディレクトリに移動
cd curriculum/static

# サーバーを起動
http-server -p 8000

# ブラウザで http://localhost:8000 を開く
```

#### 方法3: VS Code の Live Server 拡張機能

1. VS Code で `index.html` を開く
2. 右クリック → "Open with Live Server" を選択

## 🎯 学習ポイント

### 1. HTML の基本構造
- セマンティックHTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- フォーム要素の使い方
- リンクの相対パス指定

### 2. CSS の基本
- CSS変数（カスタムプロパティ）の使用
- Flexbox レイアウト
- Grid レイアウト
- レスポンシブデザイン（メディアクエリ）

### 3. ナビゲーション
すべてのページが相対パスでリンクされています：
- `./index.html` - トップページ
- `./company.html` - 会社概要
- `./technologies.html` - 取り扱い技術
- など

## 📝 変更履歴

### 2026-01-27
- 初版作成
- トップページ、会社概要、取り扱い技術、導入事例、お知らせ、お問い合わせ、採用情報ページを作成
- 相対パスでのページ間リンクを実装
- JavaScript アニメーションを削除し、HTML/CSSのみで表現

## 🔧 カスタマイズ方法

### 色の変更
`styles.css` の `:root` セクションで色を変更できます：

```css
:root {
  --color-text-primary: #242422;
  --color-primary-500: #008CFF;
  --color-accent: #FF9D48;
  /* など */
}
```

### レイアウトの変更
各HTMLファイルの構造を変更することで、レイアウトをカスタマイズできます。

## 📚 参考リソース

- [MDN Web Docs - HTML](https://developer.mozilla.org/ja/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/ja/docs/Web/CSS)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## ⚠️ 注意事項

- このサイトは教育目的で作成されており、本番環境での使用は想定していません
- フォームの送信機能は実装されていません（`action="#"` のダミー）
- 画像パスは元のプロジェクトの `/general/` を参照しています
- JavaScriptは使用していないため、動的な機能（モバイルメニュー、アニメーションなど）は動作しません

## 🎓 次のステップ

1. **JavaScript の追加**: モバイルメニューの開閉機能を実装
2. **フォーム検証**: お問い合わせフォームに JavaScript でバリデーションを追加
3. **アニメーション**: CSS アニメーションやトランジションを追加
4. **レスポンシブ改善**: より多くのブレークポイントを追加
