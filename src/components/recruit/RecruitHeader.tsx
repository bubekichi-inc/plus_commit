"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/AuthProvider"
import { User, LogOut, Menu, X } from "lucide-react"

type RecruitHeaderProps = {
  onLoginClick?: () => void
}

export function RecruitHeader({ onLoginClick }: RecruitHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { user, loading, isConfigured, signOut } = useAuth()

  // スクロール制御
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 80) { // Scrolling down
          setIsVisible(false)
        } else { // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/recruit" className="flex items-center gap-3 group">
          <Image
            src="/general/logo.svg"
            alt="プラスコミット"
            width={200}
            height={44}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/recruit#culture" 
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            社風・環境
          </Link>
          <Link 
            href="/recruit#workflow" 
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            開発の流れ
          </Link>
          <Link 
            href="/recruit#jobs" 
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            募集職種
          </Link>
          <Link 
            href="/recruit#faq" 
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Auth & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {isConfigured && !loading && (
            user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-white/70">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <User className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm font-medium max-w-[120px] truncate">
                    {user.user_metadata?.full_name || user.email}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="text-white/50 hover:text-white transition-colors"
                  title="ログアウト"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10"
                onClick={onLoginClick}
              >
                <User className="w-4 h-4 mr-2" />
                ログイン
              </Button>
            )
          )}
          <Button
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold px-6 rounded-full"
          >
            エントリー
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <Link 
              href="/recruit#culture" 
              className="text-white/70 hover:text-white text-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              社風・環境
            </Link>
            <Link 
              href="/recruit#workflow" 
              className="text-white/70 hover:text-white text-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              開発の流れ
            </Link>
            <Link 
              href="/recruit#jobs" 
              className="text-white/70 hover:text-white text-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              募集職種
            </Link>
            <Link 
              href="/recruit#faq" 
              className="text-white/70 hover:text-white text-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              {isConfigured && !loading && !user && (
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10"
                  onClick={() => {
                    onLoginClick?.()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  ログイン
                </Button>
              )}
              <Button
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-bold rounded-full"
              >
                エントリー
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

