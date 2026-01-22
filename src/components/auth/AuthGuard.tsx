"use client"

import { useEffect, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useAuth, UserProfile } from "./AuthProvider"
import { Lock, Crown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type AuthGuardProps = {
    children: ReactNode
    fallback?: ReactNode
    requiredPlan?: UserProfile['plan']
    requiredRole?: UserProfile['role']
}

/**
 * 認証が必要なコンテンツをガードするコンポーネント
 */
export function AuthGuard({ 
    children, 
    fallback,
    requiredPlan,
    requiredRole,
}: AuthGuardProps) {
    const { user, profile, loading, isConfigured } = useAuth()
    const router = useRouter()

    // ローディング中
    if (loading) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="text-slate-400">読み込み中...</div>
            </div>
        )
    }

    // 認証機能が設定されていない場合
    if (!isConfigured) {
        return fallback || (
            <div className="flex items-center justify-center py-12">
                <div className="text-slate-400">認証機能は現在準備中です</div>
            </div>
        )
    }

    // 未ログイン
    if (!user) {
        return fallback || <LoginRequired />
    }

    // プラン制限のチェック
    if (requiredPlan && profile) {
        const planOrder = ['FREE', 'BASIC', 'PRO', 'ENTERPRISE']
        const userPlanIndex = planOrder.indexOf(profile.plan)
        const requiredPlanIndex = planOrder.indexOf(requiredPlan)

        if (userPlanIndex < requiredPlanIndex) {
            return <PlanRequired requiredPlan={requiredPlan} currentPlan={profile.plan} />
        }
    }

    // ロール制限のチェック
    if (requiredRole && profile) {
        const roleOrder = ['USER', 'PREMIUM', 'ADMIN']
        const userRoleIndex = roleOrder.indexOf(profile.role)
        const requiredRoleIndex = roleOrder.indexOf(requiredRole)

        if (userRoleIndex < requiredRoleIndex) {
            return <RoleRequired requiredRole={requiredRole} />
        }
    }

    return <>{children}</>
}

// 未ログイン時の表示
function LoginRequired() {
    return (
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
                ログインが必要です
            </h3>
            <p className="text-slate-400 text-sm mb-6">
                このコンテンツを閲覧するにはログインが必要です。
            </p>
            <div className="flex flex-col gap-3">
                <Link href="/login">
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                        ログイン
                    </Button>
                </Link>
                <Link href="/register">
                    <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800">
                        新規登録
                    </Button>
                </Link>
            </div>
        </div>
    )
}

// プラン制限時の表示
function PlanRequired({ requiredPlan, currentPlan }: { requiredPlan: string, currentPlan: string }) {
    const planLabels: Record<string, string> = {
        FREE: '無料プラン',
        BASIC: 'ベーシックプラン',
        PRO: 'プロプラン',
        ENTERPRISE: 'エンタープライズプラン',
    }

    return (
        <div className="p-8 bg-gradient-to-br from-amber-950/30 to-slate-900 border border-amber-500/30 rounded-xl text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
                {planLabels[requiredPlan]}以上が必要です
            </h3>
            <p className="text-slate-400 text-sm mb-6">
                このコンテンツは{planLabels[requiredPlan]}以上の会員限定です。<br />
                現在のプラン: {planLabels[currentPlan]}
            </p>
            <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white">
                プランをアップグレード
            </Button>
        </div>
    )
}

// ロール制限時の表示
function RoleRequired({ requiredRole }: { requiredRole: string }) {
    const roleLabels: Record<string, string> = {
        USER: '一般ユーザー',
        PREMIUM: 'プレミアムユーザー',
        ADMIN: '管理者',
    }

    return (
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-xl text-center max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
                アクセス権限がありません
            </h3>
            <p className="text-slate-400 text-sm">
                このコンテンツは{roleLabels[requiredRole]}以上限定です。
            </p>
        </div>
    )
}
