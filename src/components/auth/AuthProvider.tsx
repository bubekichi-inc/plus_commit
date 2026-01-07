"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react'
import { User, Session, AuthChangeEvent, AuthError } from '@supabase/supabase-js'
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
  role: 'USER' | 'PREMIUM' | 'ADMIN'
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
  signInWithOAuth: (provider: 'google' | 'github') => Promise<{ error: AuthError | null }>
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
  signInWithOAuth: async () => ({ error: null }),
  signOut: async () => {},
  resetPassword: async () => ({ error: null }),
  updatePassword: async () => ({ error: null }),
  refreshProfile: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [isConfigured] = useState(() => isSupabaseConfigured())

  // リクルートドメインかどうかを判定
  const isRecruitDomain = useCallback(() => {
    if (typeof window === 'undefined') return false
    const hostname = window.location.hostname
    return hostname.startsWith('recruit.') || hostname.includes('localhost') // ローカルは開発用で許可
  }, [])

  // プロファイルを取得
  const fetchProfile = useCallback(async (userId: string) => {
    // リクルートドメイン以外ではプロフィール取得をスキップ
    if (!isRecruitDomain()) return

    try {
      const response = await fetch(`/api/profile?userId=${userId}`)
      if (response.ok) {
        const data = await response.json()
        setProfile(data.profile)
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error)
    }
  }, [])

  // プロファイルをリフレッシュ
  const refreshProfile = useCallback(async () => {
    if (user) {
      await fetchProfile(user.id)
    }
  }, [user, fetchProfile])

  useEffect(() => {
    // Supabaseが設定されていない場合はスキップ
    if (!isConfigured) {
      setLoading(false)
      return
    }

    const supabase = createClient()

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
  }, [isConfigured, fetchProfile])

  // サインアップ
  const signUp = async (email: string, password: string, name?: string) => {
    if (!isConfigured) return { error: null }
    
    const supabase = createClient()
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
  }

  // サインイン
  const signIn = async (email: string, password: string) => {
    if (!isConfigured) return { error: null }
    
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    return { error }
  }

  // OAuth サインイン
  const signInWithOAuth = async (provider: 'google' | 'github') => {
    if (!isConfigured) return { error: null }
    
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    
    return { error }
  }

  // サインアウト
  const signOut = async () => {
    if (!isConfigured) return
    const supabase = createClient()
    await supabase.auth.signOut()
    setProfile(null)
  }

  // パスワードリセット
  const resetPassword = async (email: string) => {
    if (!isConfigured) return { error: null }
    
    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    
    return { error }
  }

  // パスワード更新
  const updatePassword = async (newPassword: string) => {
    if (!isConfigured) return { error: null }
    
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    
    return { error }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      profile,
      loading, 
      isConfigured, 
      signUp,
      signIn,
      signInWithOAuth,
      signOut,
      resetPassword,
      updatePassword,
      refreshProfile,
    }}>
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
