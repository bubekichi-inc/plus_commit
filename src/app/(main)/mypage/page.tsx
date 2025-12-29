"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/AuthProvider"
import { BusinessHeader } from "@/components/business/BusinessHeader"
import { BusinessFooter } from "@/components/business/BusinessFooter"
import {
    User,
    Settings,
    BookOpen,
    Bookmark,
    LogOut,
    Crown,
    ChevronRight,
    Edit,
    Mail,
    Building,
    Briefcase,
    Globe,
    TrendingUp,
    CheckCircle2,
    Clock,
} from "lucide-react"

export default function MyPage() {
    const router = useRouter()
    const { user, profile, loading, isConfigured, signOut, refreshProfile } = useAuth()
    const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'profile' | 'bookmarks' | 'settings'>('overview')
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        bio: '',
        company: '',
        position: '',
        website: '',
    })
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        if (!loading && !user && isConfigured) {
            router.push('/login?redirect=/mypage')
        }
    }, [user, loading, isConfigured, router])

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || '',
                bio: profile.bio || '',
                company: profile.company || '',
                position: profile.position || '',
                website: profile.website || '',
            })
        }
    }, [profile])

    const handleSaveProfile = async () => {
        setSaving(true)
        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                await refreshProfile()
                setIsEditing(false)
            }
        } catch (error) {
            console.error('Failed to save profile:', error)
        } finally {
            setSaving(false)
        }
    }

    const handleSignOut = async () => {
        await signOut()
        router.push('/')
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="text-slate-400">読み込み中...</div>
            </div>
        )
    }

    if (!isConfigured) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="text-center">
                    <p className="text-slate-400 mb-4">認証機能は現在準備中です</p>
                    <Link href="/">
                        <Button variant="outline" className="border-slate-700 text-slate-300">
                            トップへ戻る
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    if (!user) {
        return null
    }

    const planLabels = {
        FREE: { label: '無料プラン', color: 'text-slate-400 bg-slate-800' },
        BASIC: { label: 'ベーシック', color: 'text-blue-400 bg-blue-500/20' },
        PRO: { label: 'プロ', color: 'text-purple-400 bg-purple-500/20' },
        ENTERPRISE: { label: 'エンタープライズ', color: 'text-amber-400 bg-amber-500/20' },
    }

    const currentPlan = planLabels[profile?.plan || 'FREE']

    return (
        <>
            <BusinessHeader />
            <main className="min-h-screen bg-slate-950 pt-20">
                <div className="container mx-auto px-4 py-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                                    {profile?.name?.charAt(0) || user.email?.charAt(0)?.toUpperCase() || 'U'}
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-white">
                                        {profile?.name || 'ユーザー'}
                                    </h1>
                                    <p className="text-slate-400">{user.email}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${currentPlan.color}`}>
                                            <Crown className="w-3 h-3" />
                                            {currentPlan.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                className="border-slate-700 text-slate-300 hover:bg-slate-800"
                                onClick={handleSignOut}
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                ログアウト
                            </Button>
                        </div>
                    </motion.div>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-8 border-b border-slate-800 overflow-x-auto">
                        {[
                            { id: 'overview', label: '概要', icon: User },
                            { id: 'progress', label: '学習進捗', icon: TrendingUp },
                            { id: 'profile', label: 'プロフィール', icon: Edit },
                            { id: 'bookmarks', label: 'ブックマーク', icon: Bookmark },
                            { id: 'settings', label: '設定', icon: Settings },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                                    activeTab === tab.id
                                        ? 'text-blue-400 border-blue-400'
                                        : 'text-slate-400 border-transparent hover:text-white'
                                }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Quick Actions */}
                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="text-lg font-bold text-white mb-4">クイックアクション</h3>
                                    <div className="space-y-3">
                                        <Link
                                            href="/mypage/contents"
                                            className="flex items-center justify-between p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <BookOpen className="w-5 h-5 text-blue-400" />
                                                <span className="text-white">限定コンテンツ</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-500" />
                                        </Link>
                                        <button
                                            onClick={() => setActiveTab('bookmarks')}
                                            className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Bookmark className="w-5 h-5 text-amber-400" />
                                                <span className="text-white">ブックマーク</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-500" />
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('progress')}
                                            className="w-full flex items-center justify-between p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <TrendingUp className="w-5 h-5 text-emerald-400" />
                                                <span className="text-white">学習進捗を確認</span>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-slate-500" />
                                        </button>
                                    </div>
                                </div>

                                {/* Plan Info */}
                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="text-lg font-bold text-white mb-4">現在のプラン</h3>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Crown className="w-8 h-8 text-amber-400" />
                                        <div>
                                            <div className="text-white font-bold">{currentPlan.label}</div>
                                            <div className="text-slate-400 text-sm">
                                                {profile?.plan === 'FREE' ? '基本機能が利用可能' : 'すべての機能が利用可能'}
                                            </div>
                                        </div>
                                    </div>
                                    {profile?.plan === 'FREE' && (
                                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white">
                                            プランをアップグレード
                                        </Button>
                                    )}
                                </div>

                                {/* Recent Activity */}
                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="text-lg font-bold text-white mb-4">最近のアクティビティ</h3>
                                    <div className="text-slate-400 text-sm text-center py-8">
                                        まだアクティビティがありません
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Progress Tab */}
                        {activeTab === 'progress' && (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                                <Clock className="w-5 h-5 text-emerald-400" />
                                            </div>
                                            <span className="text-slate-400 text-sm">今週の学習時間</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">12.5 <span className="text-sm font-normal text-slate-500">時間</span></div>
                                    </div>
                                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <span className="text-slate-400 text-sm">完了したタスク</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">8 <span className="text-sm font-normal text-slate-500">個</span></div>
                                    </div>
                                    <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                                <TrendingUp className="w-5 h-5 text-purple-400" />
                                            </div>
                                            <span className="text-slate-400 text-sm">現在のランク</span>
                                        </div>
                                        <div className="text-2xl font-bold text-white">Junior Lv.3</div>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="text-lg font-bold text-white mb-6">現在の学習ロードマップ</h3>
                                    <div className="space-y-6">
                                        {[
                                            { title: "Next.js App Routerの基礎", status: "completed", progress: 100 },
                                            { title: "Prismaを使用したDB操作", status: "in_progress", progress: 65 },
                                            { title: "Supabase認証の実装", status: "pending", progress: 0 },
                                            { title: "転職ポートフォリオ作成", status: "pending", progress: 0 },
                                        ].map((item, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between items-center text-sm">
                                                    <span className="text-white font-medium">{item.title}</span>
                                                    <span className="text-slate-400">{item.progress}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                                    <div 
                                                        className={`h-full transition-all duration-500 ${
                                                            item.status === 'completed' ? 'bg-emerald-500' : 
                                                            item.status === 'in_progress' ? 'bg-blue-500' : 'bg-slate-700'
                                                        }`}
                                                        style={{ width: `${item.progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="text-lg font-bold text-white mb-4">転職活動ステータス</h3>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex-1 min-w-[200px] p-4 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-slate-400 text-xs mb-1">レジュメ完成度</div>
                                            <div className="text-lg font-bold text-white">80%</div>
                                        </div>
                                        <div className="flex-1 min-w-[200px] p-4 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-slate-400 text-xs mb-1">面接練習</div>
                                            <div className="text-lg font-bold text-white">2回実施済</div>
                                        </div>
                                        <div className="flex-1 min-w-[200px] p-4 bg-slate-800 rounded-lg border border-slate-700">
                                            <div className="text-slate-400 text-xs mb-1">スカウト受信数</div>
                                            <div className="text-lg font-bold text-white">3件</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            <div className="max-w-2xl">
                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-bold text-white">プロフィール情報</h3>
                                        {!isEditing ? (
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="border-slate-700 text-slate-300"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                <Edit className="w-4 h-4 mr-2" />
                                                編集
                                            </Button>
                                        ) : (
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="border-slate-700 text-slate-300"
                                                    onClick={() => setIsEditing(false)}
                                                >
                                                    キャンセル
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="bg-blue-600 hover:bg-blue-500 text-white"
                                                    onClick={handleSaveProfile}
                                                    disabled={saving}
                                                >
                                                    {saving ? '保存中...' : '保存'}
                                                </Button>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                                                <User className="w-4 h-4" />
                                                お名前
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                                />
                                            ) : (
                                                <div className="text-white">{profile?.name || '未設定'}</div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                                                <Mail className="w-4 h-4" />
                                                メールアドレス
                                            </label>
                                            <div className="text-white">{user.email}</div>
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                                                <Edit className="w-4 h-4" />
                                                自己紹介
                                            </label>
                                            {isEditing ? (
                                                <textarea
                                                    value={formData.bio}
                                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                                    rows={3}
                                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                                                />
                                            ) : (
                                                <div className="text-white">{profile?.bio || '未設定'}</div>
                                            )}
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                                                    <Building className="w-4 h-4" />
                                                    会社名
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={formData.company}
                                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                                    />
                                                ) : (
                                                    <div className="text-white">{profile?.company || '未設定'}</div>
                                                )}
                                            </div>

                                            <div>
                                                <label className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    役職
                                                </label>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={formData.position}
                                                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                                    />
                                                ) : (
                                                    <div className="text-white">{profile?.position || '未設定'}</div>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                                                <Globe className="w-4 h-4" />
                                                Webサイト
                                            </label>
                                            {isEditing ? (
                                                <input
                                                    type="url"
                                                    value={formData.website}
                                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                                    placeholder="https://"
                                                />
                                            ) : (
                                                <div className="text-white">
                                                    {profile?.website ? (
                                                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                                            {profile.website}
                                                        </a>
                                                    ) : (
                                                        '未設定'
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Bookmarks Tab */}
                        {activeTab === 'bookmarks' && (
                            <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                <h3 className="text-lg font-bold text-white mb-4">ブックマーク</h3>
                                <div className="text-slate-400 text-center py-12">
                                    ブックマークしたコンテンツがここに表示されます
                                </div>
                            </div>
                        )}

                        {/* Settings Tab */}
                        {activeTab === 'settings' && (
                            <div className="max-w-2xl space-y-6">
                                <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
                                    <h3 className="text-lg font-bold text-white mb-4">アカウント設定</h3>
                                    <div className="space-y-4">
                                        <Link
                                            href="/auth/reset-password"
                                            className="flex items-center justify-between p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                                        >
                                            <span className="text-white">パスワードを変更</span>
                                            <ChevronRight className="w-4 h-4 text-slate-500" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-900 border border-red-900/50 rounded-xl">
                                    <h3 className="text-lg font-bold text-red-400 mb-4">危険な操作</h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        アカウントを削除すると、すべてのデータが完全に削除されます。この操作は取り消せません。
                                    </p>
                                    <Button variant="outline" className="border-red-800 text-red-400 hover:bg-red-900/30">
                                        アカウントを削除
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </main>
            <BusinessFooter />
        </>
    )
}


