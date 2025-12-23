import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'

let supabaseClient: SupabaseClient | null = null

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
    supabaseClient = createBrowserClient(supabaseUrl, supabaseAnonKey)
  }

  return supabaseClient
}

export function isSupabaseConfigured() {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}
