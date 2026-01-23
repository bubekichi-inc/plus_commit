"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from 'react'
import { User, Session, AuthChangeEvent, AuthError, SupabaseClient } from '@supabase/supabase-js'
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client'

export type UserProfile = {
  id: string
  userId: string
  email: string
  name: string | null
  avatar: string | null
  bio: string | null
  company: string | null
  position: string | null
  website: string | null
  role: 'USER' | 'PREMIUM' | 'ADMIN' | 'RECRUITER'
  plan: 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE'
}

type AuthContextType = {
  user: User | null
  session: Session | null
  profile: UserProfile | null
  loading: boolean
  isConfigured: boolean
  signUp: (email: string, password: string, name?: string) => Promise<{ error: AuthError | null }>
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: AuthError | null }>
  updatePassword: (newPassword: string) => Promise<{ error: AuthError | null }>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  profile: null,
  loading: true,
  isConfigured: false,
  signUp: async () => ({ error: null }),
  signIn: async () => ({ error: null }),
  signOut: async () => { },
  resetPassword: async () => ({ error: null }),
  updatePassword: async () => ({ error: null }),
  refreshProfile: async () => { },
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  // Supabase設定状態（初期化時に一度だけ評価）
  const isConfigured = useMemo(() => isSupabaseConfigured(), [])

  // Supabaseクライアントを一度だけ作成して再利用
  const supabase = useMemo<SupabaseClient | null>(() => {
    if (!isConfigured) return null
    return createClient()
  }, [isConfigured])

  // リクルートドメインかどうかを判定
  const isRecruitDomain = useMemo(() => {
    if (typeof window === 'undefined') return false
    const hostname = window.location.hostname
    return hostname.startsWith('recruit.') || hostname.includes('localhost')
  }, [])

  // プロファイルを取得
  const fetchProfile = useCallback(async (userId: string) => {
    // リクルートドメイン以外ではプロフィール取得をスキップ
    if (!isRecruitDomain) return

    try {
      const response = await fetch(`/api/profile?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        setProfile(data.profile)
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error)
    }
  }, [isRecruitDomain])

  // プロファイルをリフレッシュ
  const refreshProfile = useCallback(async () => {
    if (user) {
      await fetchProfile(user.id)
    }
  }, [user, fetchProfile])

  useEffect(() => {
    // Supabaseが設定されていない場合はスキップ
    if (!supabase) {
      setLoading(false)
      return
    }

    // 初期セッションの取得
    const getInitialSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          await fetchProfile(session.user.id)
        }
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
          await fetchProfile(session.user.id)
        } else {
          setProfile(null)
        }

        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, fetchProfile])

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
        emailRedirectTo: `${window.location.origin}/auth/callback`,
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
    setProfile(null)
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
    profile,
    loading,
    isConfigured,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    refreshProfile,
  }), [
    user,
    session,
    profile,
    loading,
    isConfigured,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    refreshProfile,
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
