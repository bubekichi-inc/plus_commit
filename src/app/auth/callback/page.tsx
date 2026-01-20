"use client"

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function AuthCallbackClientPage() {
  const router = useRouter()
  const [message, setMessage] = useState('処理中...')

  useEffect(() => {
    const supabase = createClient()

    const url = new URL(window.location.href)
    const code = url.searchParams.get('code')
    const next = url.searchParams.get('next') ?? '/'
    const type = url.searchParams.get('type')

    const rawHash = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : window.location.hash
    const hashParams = new URLSearchParams(rawHash)
    const accessToken = hashParams.get('access_token')
    const refreshToken = hashParams.get('refresh_token')
    const errorParam = hashParams.get('error') ?? url.searchParams.get('error')
    const errorDescription = hashParams.get('error_description') ?? url.searchParams.get('error_description')

    const handle = async () => {
      try {
        if (errorParam) {
          // Supabase returns errors in the fragment for some flows
          const fragment = `#error=${encodeURIComponent(errorParam)}&error_description=${encodeURIComponent(errorDescription ?? '')}`
          router.replace(`/auth/auth-code-error/${fragment}`)
          return
        }

        if (code) {
          setMessage('認証コードを処理しています...')
          const { error } = await supabase.auth.exchangeCodeForSession(code)
          if (error) throw error
          if (type === 'recovery') return router.replace('/auth/reset-password')
          // 認証成功時は完了ページへ移動
          return router.replace('/auth/success')
        }

        if (accessToken) {
          setMessage('ログイン情報を設定しています...')
          const sessionPayload: any = { access_token: accessToken }
          if (refreshToken) sessionPayload.refresh_token = refreshToken
          const { error } = await supabase.auth.setSession(sessionPayload)
          if (error) throw error
          if (type === 'recovery') return router.replace('/auth/reset-password')
          // 認証成功時は完了ページへ移動
          return router.replace('/auth/success')
        }

        // パラメータが無ければエラーへ
        router.replace('/auth/auth-code-error')
      } catch (err: any) {
        console.error('Auth callback client error:', err)
        router.replace('/auth/auth-code-error')
      }
    }

    handle()
  }, [router])

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-white animate-spin mx-auto mb-6" />
        <h1 className="text-white font-bold text-xl">{message}</h1>
        <p className="text-slate-400 mt-3">ブラウザを閉じないでください — 処理が完了したら自動的にリダイレクトします。</p>
      </div>
    </div>
  )
}
