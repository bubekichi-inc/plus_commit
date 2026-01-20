"use client"

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { X } from 'lucide-react'

type LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const supabase = createClient()

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        onSuccess?.()
        onClose()
      }
    })

    return () => subscription.unsubscribe()
  }, [supabase, onSuccess, onClose])

  const handleClose = () => {
    onClose()
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
            onClick={(e) => e.stopPropagation()}
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
                  認証
                </h2>
                <p className="text-slate-500 text-sm">
                  Supabase Authで簡単ログイン
                </p>
              </div>

              {/* Supabase Auth UI */}
              <div className="supabase-auth-ui">
                <Auth
                  supabaseClient={supabase}
                  appearance={{
                    theme: ThemeSupa,
                    variables: {
                      default: {
                        colors: {
                          brand: '#3b82f6',
                          brandAccent: '#2563eb',
                          brandButtonText: 'white',
                          defaultButtonBackground: '#1e293b',
                          defaultButtonBackgroundHover: '#334155',
                          defaultButtonBorder: '#334155',
                          defaultButtonText: 'white',
                          dividerBackground: '#334155',
                          inputBackground: '#1e293b',
                          inputBorder: '#334155',
                          inputBorderHover: '#475569',
                          inputBorderFocus: '#3b82f6',
                          inputText: 'white',
                          inputLabelText: '#94a3b8',
                          inputPlaceholder: '#64748b',
                          messageText: '#f1f5f9',
                          messageTextDanger: '#ef4444',
                          anchorTextColor: '#3b82f6',
                          anchorTextHoverColor: '#2563eb',
                        },
                        space: {
                          spaceSmall: '4px',
                          spaceMedium: '8px',
                          spaceLarge: '16px',
                        },
                        fontSizes: {
                          baseBodySize: '14px',
                          baseInputSize: '14px',
                          baseLabelSize: '14px',
                          baseButtonSize: '14px',
                        },
                        borderWidths: {
                          buttonBorderWidth: '1px',
                          inputBorderWidth: '1px',
                        },
                        radii: {
                          borderRadiusButton: '8px',
                          buttonBorderRadius: '8px',
                          inputBorderRadius: '8px',
                        },
                      },
                    },
                    className: {
                      container: 'supabase-auth-container',
                      button: 'supabase-auth-button',
                      input: 'supabase-auth-input',
                    },
                  }}
                  localization={{
                    variables: {
                      sign_in: {
                        email_label: 'メールアドレス',
                        password_label: 'パスワード',
                        email_input_placeholder: 'あなたのメールアドレス',
                        password_input_placeholder: 'あなたのパスワード',
                        button_label: 'ログイン',
                        loading_button_label: 'ログイン中...',
                        social_provider_text: '{{provider}}でログイン',
                        link_text: 'すでにアカウントをお持ちですか？',
                      },
                      sign_up: {
                        email_label: 'メールアドレス',
                        password_label: 'パスワード',
                        email_input_placeholder: 'あなたのメールアドレス',
                        password_input_placeholder: 'あなたのパスワード',
                        button_label: '登録',
                        loading_button_label: '登録中...',
                        social_provider_text: '{{provider}}で登録',
                        link_text: 'アカウントをお持ちでないですか？',
                        confirmation_text: '確認メールをチェックしてください',
                      },
                      magic_link: {
                        email_input_label: 'メールアドレス',
                        email_input_placeholder: 'あなたのメールアドレス',
                        button_label: 'マジックリンクを送信',
                        loading_button_label: '送信中...',
                        link_text: 'マジックリンクでログイン',
                        confirmation_text: 'メールのリンクを確認してください',
                      },
                      forgotten_password: {
                        email_label: 'メールアドレス',
                        password_label: 'パスワード',
                        email_input_placeholder: 'あなたのメールアドレス',
                        button_label: 'パスワードリセット用のメールを送信',
                        loading_button_label: '送信中...',
                        link_text: 'パスワードを忘れましたか？',
                        confirmation_text: 'パスワードリセット用のメールを確認してください',
                      },
                      update_password: {
                        password_label: '新しいパスワード',
                        password_input_placeholder: '新しいパスワードを入力',
                        button_label: 'パスワードを更新',
                        loading_button_label: '更新中...',
                        confirmation_text: 'パスワードが更新されました',
                      },
                      verify_otp: {
                        email_input_label: 'メールアドレス',
                        email_input_placeholder: 'あなたのメールアドレス',
                        phone_input_label: '電話番号',
                        phone_input_placeholder: 'あなたの電話番号',
                        token_input_label: 'トークン',
                        token_input_placeholder: '認証トークン',
                        button_label: '検証',
                        loading_button_label: '検証中...',
                      },
                    },
                  }}
                  providers={[]}
                  redirectTo={typeof window !== 'undefined' ? `${window.location.origin}/auth/callback` : undefined}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}













