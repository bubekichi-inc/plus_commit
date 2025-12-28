import Link from 'next/link'

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-black text-white mb-4">認証エラー</h1>
        <p className="text-slate-400 mb-8">
          認証処理中にエラーが発生しました。<br />
          もう一度お試しください。
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-lg transition-colors"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}






