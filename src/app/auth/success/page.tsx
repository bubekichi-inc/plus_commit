"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function AuthSuccessPage() {
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = '/recruit'
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        
        <h1 className="text-4xl font-black text-slate-900 mb-4">
          認証が完了しました！
        </h1>
        
        <p className="text-slate-600 mb-8">
          メールアドレスの確認が完了しました。<br />
          {countdown}秒後に採用トップへ移動します。
        </p>
        
        <Link
          href="/recruit"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          今すぐ採用トップへ
        </Link>
      </div>
    </div>
  )
}
