import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { CookieOptions } from '@supabase/ssr'

let supabaseClient: SupabaseClient | null = null

const parseDocumentCookies = () => {
  if (typeof document === 'undefined') {
    return []
  }

  return document.cookie
    .split('; ')
    .filter(Boolean)
    .map((cookie) => {
      const separatorIndex = cookie.indexOf('=')
      const name = separatorIndex > -1 ? cookie.substring(0, separatorIndex) : cookie
      const value = separatorIndex > -1 ? cookie.substring(separatorIndex + 1) : ''
      return {
        name,
        value: decodeURIComponent(value),
      }
    })
}

const setDocumentCookie = (name: string, value: string, options: CookieOptions = {}) => {
  if (typeof document === 'undefined') {
    return
  }

  let cookieString = `${name}=${encodeURIComponent(value)}`
  cookieString += `; Path=${options.path ?? '/'}`

  if (options.maxAge !== undefined) {
    cookieString += `; Max-Age=${options.maxAge}`
  }

  if (options.expires) {
    cookieString += `; Expires=${options.expires.toUTCString()}`
  }

  if (options.domain) {
    cookieString += `; Domain=${options.domain}`
  }

  if (options.sameSite) {
    cookieString += `; SameSite=${options.sameSite}`
  }

  if (options.secure) {
    cookieString += '; Secure'
  }

  if (options.httpOnly) {
    // document.cookie では httpOnly を設定できないため無視
  }

  document.cookie = cookieString
}

const cookieMethods = typeof document === 'undefined'
  ? undefined
  : {
      getAll: () => parseDocumentCookies(),
      setAll: (cookiesToSet: { name: string; value: string; options: CookieOptions }[]) => {
        cookiesToSet.forEach(({ name, value, options }) => setDocumentCookie(name, value, options))
      },
    }

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // 環境変数が設定されていない場合はダミークライアントを返す
  if (!supabaseUrl || !supabaseAnonKey) {
    // ダミーのSupabaseクライアントを作成（環境変数未設定時用）
    return createBrowserClient(
      'https://placeholder.supabase.co',
      'placeholder-key'
    )
  }

  if (!supabaseClient) {
    supabaseClient = createBrowserClient(supabaseUrl, supabaseAnonKey, cookieMethods ? { cookies: cookieMethods } : undefined)
  }

  return supabaseClient
}

export function isSupabaseConfigured() {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}
