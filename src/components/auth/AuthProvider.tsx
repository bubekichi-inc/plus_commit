"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from 'react'
import { User, Session, AuthChangeEvent, AuthError, SupabaseClient } from '@supabase/supabase-js'
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  isConfigured: boolean
  signUp: (email: string, password: string, name?: string) => Promise<{ error: AuthError | null }>
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>
  updatePassword: (newPassword: string) => Promise<{ error: AuthError | null }>
  // profile removed: use `session.user.user_metadata` or `session.user.email`
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  isConfigured: false,
  signUp: async () => ({ error: null }),
  signIn: async () => ({ error: null }),
  signOut: async () => { },
  resetPassword: async () => ({ error: null }),
  updatePassword: async () => ({ error: null }),
  // profile methods removed
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  // Supabase設定状態（初期化時に一度だけ評価）
  const isConfigured = useMemo(() => isSupabaseConfigured(), [])

  // Supabaseクライアントを一度だけ作成して再利用
  const supabase = useMemo<SupabaseClient | null>(() => {
    if (!isConfigured) return null
    return createClient()
  }, [isConfigured])

  // profile handling removed — use session.user.user_metadata or session.user.email where needed

  const handleAuthError = useCallback(async (error: AuthError | null) => {
    if (!error || !supabase) return false

    const message = error.message || ''
    const isRefreshError = message.includes('Invalid Refresh Token') || message.includes('Refresh Token Not Found')

    if (isRefreshError) {
      await supabase.auth.signOut()
      setSession(null)
      setUser(null)
      return true
    }

    console.error('Supabase auth error:', error)
    return false
  }, [supabase])

  useEffect(() => {
    // Supabaseが設定されていない場合はスキップ
    if (!supabase) {
      setLoading(false)
      return
    }

    // 初期セッションの取得
    const getInitialSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (await handleAuthError(error)) {
          setLoading(false)
          return
        }

        const session = data.session
        setSession(session)
        setUser(session?.user ?? null)
      } catch {
        // エラー時は無視
      }
      setLoading(false)
    }

    getInitialSession()

    // 認証状態の変更を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event: AuthChangeEvent, session: Session | null) => {
        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          // no-op: profile handling removed
        }

        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, handleAuthError])

  // サインアップ
  const signUp = useCallback(async (email: string, password: string, name?: string) => {
    if (!supabase) return { error: null }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
        // PKCEフローを使用せず、自動確認を無効化
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/recruit`,
      },
    })

    return { error }
  }, [supabase])

  // サインイン
  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return { error: null }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    return { error }
  }, [supabase])

  // サインアウト
  const signOut = useCallback(async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    // profile removed
  }, [supabase])

  // パスワードリセット
  const resetPassword = useCallback(async (email: string) => {
    if (!supabase) return { error: null }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })

    return { error }
  }, [supabase])

  // パスワード更新
  const updatePassword = useCallback(async (newPassword: string) => {
    if (!supabase) return { error: null }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })

    return { error }
  }, [supabase])

  // Context値をメモ化して不要な再レンダリングを防ぐ
  const contextValue = useMemo<AuthContextType>(() => ({
    user,
    session,
    loading,
    isConfigured,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
  }), [
    user,
    session,
    loading,
    isConfigured,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
  ])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
