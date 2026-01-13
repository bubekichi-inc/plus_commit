"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { X, Mail, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react'

type AuthMode = 'login' | 'signup' | 'forgot-password'

type LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [mode, setMode] = useState<AuthMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  
  const supabase = createClient()

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setName('')
    setError(null)
    setMessage(null)
  }

  const handleClose = () => {
    resetForm()
    setMode('login')
    onClose()
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message === 'Invalid login credentials' 
        ? 'メールアドレスまたはパスワードが正しくありません' 
        : error.message)
    } else {
      onSuccess?.()
      handleClose()
    }
    setLoading(false)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('確認メールを送信しました。メール内のリンクをクリックして登録を完了してください。')
    }
    setLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?type=recovery`,
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('パスワードリセット用のメールを送信しました。')
    }
    setLoading(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl font-black text-white mb-2">
                  {mode === 'login' && 'ログイン'}
                  {mode === 'signup' && '新規登録'}
                  {mode === 'forgot-password' && 'パスワードリセット'}
                </h2>
                <p className="text-slate-500 text-sm">
                  {mode === 'login' && 'アカウントにログインしてください'}
                  {mode === 'signup' && '新しいアカウントを作成します'}
                  {mode === 'forgot-password' && 'メールアドレスを入力してください'}
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg mb-6"
                >
                  {error}
                </motion.div>
              )}

              {/* Success Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm p-3 rounded-lg mb-6"
                >
                  {message}
                </motion.div>
              )}

              {/* Form */}
              {!message && (
                <form
                  onSubmit={
                    mode === 'login' ? handleLogin :
                    mode === 'signup' ? handleSignup :
                    handleForgotPassword
                  }
                  className="space-y-4"
                >
                  {mode === 'signup' && (
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type="text"
                        placeholder="お名前"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  )}

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                    <input
                      type="email"
                      placeholder="メールアドレス"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg pl-11 pr-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  {mode !== 'forgot-password' && (
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="パスワード"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-lg pl-11 pr-11 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        required
                        minLength={6}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  )}

                  {mode === 'login' && (
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => { setMode('forgot-password'); resetForm() }}
                        className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                      >
                        パスワードを忘れた方
                      </button>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        {mode === 'login' && 'ログイン'}
                        {mode === 'signup' && '登録する'}
                        {mode === 'forgot-password' && 'リセットメールを送信'}
                      </>
                    )}
                  </Button>
                </form>
              )}

              {/* Mode Switcher */}
              <div className="mt-8 text-center text-sm text-slate-500">
                {mode === 'login' && (
                  <>
                    アカウントをお持ちでない方{' '}
                    <button
                      type="button"
                      onClick={() => { setMode('signup'); resetForm() }}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      新規登録
                    </button>
                  </>
                )}
                {mode === 'signup' && (
                  <>
                    すでにアカウントをお持ちの方{' '}
                    <button
                      type="button"
                      onClick={() => { setMode('login'); resetForm() }}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      ログイン
                    </button>
                  </>
                )}
                {mode === 'forgot-password' && (
                  <button
                    type="button"
                    onClick={() => { setMode('login'); resetForm() }}
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    ログインに戻る
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}













