"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'

function AuthCodeErrorContent() {
  const searchParams = useSearchParams()
  const error = searchParams?.get('error') ?? ''
  const errorDescription = searchParams?.get('error_description') ?? ''

  // エラータイプに応じたメッセージ
  const isExpiredLink = error === 'access_denied' || errorDescription.includes('expired') || errorDescription.includes('invalid')
  
  return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          {isExpiredLink ? (
            <RefreshCw className="w-20 h-20 text-orange-500" />
          ) : (
            <AlertCircle className="w-20 h-20 text-red-500" />
          )}
        </div>
        
        <h1 className="text-3xl font-black text-zinc-900 mb-4">
          {isExpiredLink ? 'リンクが無効です' : '認証エラー'}
        </h1>
        
        <div className="text-zinc-600 mb-8 space-y-2">
          {isExpiredLink ? (
            <>
              <p>このメール認証リンクは既に使用されているか、有効期限が切れています。</p>
              <p className="text-sm">既にアカウントが有効化されている場合は、ログインページからログインしてください。</p>
            </>
          ) : (
            <>
              <p>認証処理中にエラーが発生しました。</p>
              {errorDescription && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mt-3">
                  {errorDescription}
                </p>
              )}
            </>
          )}
        </div>
        
        <div className="flex flex-col gap-3">
          <Link
            href="/recruit/login"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-black font-bold px-8 py-3 rounded-lg transition-colors"
          >
            ログインページへ
          </Link>
          <Link
            href="/recruit/register"
            className="inline-block bg-zinc-200 hover:bg-zinc-300 text-zinc-900 font-bold px-8 py-3 rounded-lg transition-colors"
          >
            新規登録
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function AuthCodeErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-zinc-600">読み込み中...</p>
        </div>
      </div>
    }>
      <AuthCodeErrorContent />
    </Suspense>
  )
}






