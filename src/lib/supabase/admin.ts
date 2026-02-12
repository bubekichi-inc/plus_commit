import { createClient as createBrowserClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is not set')
}

/**
 * サーバー専用クライアント（service_role key 必須）
 * 注意: このクライアントのキーは絶対にクライアントに露出しないこと
 */
export function createAdminClient() {
  if (!SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set in environment')
  }

  return createBrowserClient(SUPABASE_URL, SERVICE_ROLE_KEY)
}

export async function setUserRole(userId: string, role: string) {
  const admin = createAdminClient()
  const res = await admin.auth.admin.updateUserById(userId, {
    app_metadata: { role },
  } as any)
  return res
}

export function isAdminUser(user: any) {
  return user?.app_metadata?.role === 'ADMIN'
}
