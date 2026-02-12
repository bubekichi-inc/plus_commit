import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// キャッシュを無効化
export const dynamic = 'force-dynamic'

const DEFAULT_REDIRECT_PATH = '/recruit'

function sanitizeNextPath(path?: string | null): string {
  if (!path) return DEFAULT_REDIRECT_PATH
  const trimmed = path.trim()
  if (!trimmed.startsWith('/')) return DEFAULT_REDIRECT_PATH
  if (trimmed.startsWith('//') || trimmed.includes('://')) return DEFAULT_REDIRECT_PATH
  return trimmed || DEFAULT_REDIRECT_PATH
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = sanitizeNextPath(requestUrl.searchParams.get('next'))
  const type = requestUrl.searchParams.get('type')
  const error = requestUrl.searchParams.get('error')
  const errorDescription = requestUrl.searchParams.get('error_description')

  // エラーがある場合
  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/auth/auth-code-error?error=${encodeURIComponent(error)}&error_description=${encodeURIComponent(errorDescription ?? '')}`
    )
  }

  // 認証コードがある場合はセッションに交換
  if (code) {
    try {
      const supabase = await createClient()
      const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)

      if (exchangeError) {
        return NextResponse.redirect(`${requestUrl.origin}/auth/auth-code-error?error=${encodeURIComponent(exchangeError.message)}`)
      }

      // パスワードリセットの場合
      if (type === 'recovery') {
        return NextResponse.redirect(`${requestUrl.origin}/auth/reset-password`)
      }

      // 認証成功 - 指定されたページへリダイレクト
      return NextResponse.redirect(`${requestUrl.origin}${next}`)
    } catch {
      return NextResponse.redirect(`${requestUrl.origin}/auth/auth-code-error?error=unexpected_error`)
    }
  }

  // コードがない場合はエラーページへ
  return NextResponse.redirect(`${requestUrl.origin}/auth/auth-code-error?error=no_code`)
}
