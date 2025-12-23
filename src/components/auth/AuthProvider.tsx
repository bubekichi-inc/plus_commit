"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User, Session, AuthChangeEvent } from '@supabase/supabase-js'
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client'

type AuthContextType = {
  user: User | null
  session: Session | null
  loading: boolean
  isConfigured: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  isConfigured: false,
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isConfigured] = useState(() => isSupabaseConfigured())

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
      } catch {
        // エラー時は無視
      }
      setLoading(false)
    }

    getInitialSession()

    // 認証状態の変更を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: AuthChangeEvent, session: Session | null) => {
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [isConfigured])

  const signOut = async () => {
    if (!isConfigured) return
    const supabase = createClient()
    await supabase.auth.signOut()
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, isConfigured, signOut }}>
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
