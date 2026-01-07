"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/AuthProvider"
import { Header } from "@/components/sections/Header"
import { Footer } from "@/components/sections/Footer"
import {
    BookOpen,
    Video,
    FileText,
    GraduationCap,
    Lock,
    Crown,
    ArrowRight,
    Clock,
    Eye,
} from "lucide-react"

// サンプルコンテンツ（実際はAPIから取得）
const sampleContents = [
    {
        id: '1',
        title: 'Next.js 14 完全ガイド',
        slug: 'nextjs-14-guide',
        description: 'App Router、Server Actions、最新機能を徹底解説',
        contentType: 'ARTICLE',
        requiredPlan: 'FREE',
        thumbnail: null,
        publishedAt: '2024-12-01',
        readTime: '15分',
        views: 1234,
    },
    {
        id: '2',
        title: 'TypeScript実践パターン集',
        slug: 'typescript-patterns',
        description: '現場で使える実践的なTypeScriptパターンを紹介',
        contentType: 'ARTICLE',
        requiredPlan: 'BASIC',
        thumbnail: null,
        publishedAt: '2024-11-15',
        readTime: '20分',
        views: 856,
    },
    {
        id: '3',
        title: 'React Hooks マスター講座',
        slug: 'react-hooks-master',
        description: 'useStateからカスタムHooksまで、動画で学ぶ',
        contentType: 'VIDEO',
        requiredPlan: 'PRO',
        thumbnail: null,
        publishedAt: '2024-10-20',
        readTime: '2時間',
        views: 2341,
    },
    {
        id: '4',
        title: 'Web開発ロードマップ',
        slug: 'web-dev-career',
        description: '未経験からエンジニアになるためのロードマップ',
        contentType: 'DOCUMENT',
        requiredPlan: 'FREE',
        thumbnail: null,
        publishedAt: '2024-09-10',
        readTime: '30分',
        views: 4521,
    },
    {
        id: '5',
        title: 'フルスタック開発コース',
        slug: 'fullstack-course',
        description: 'フロントからバックエンドまで、一気通貫で学ぶ',
        contentType: 'COURSE',
        requiredPlan: 'PRO',
        thumbnail: null,
        publishedAt: '2024-08-01',
        readTime: '10時間',
        views: 1892,
    },
]

const contentTypeIcons = {
    ARTICLE: BookOpen,
    VIDEO: Video,
    DOCUMENT: FileText,
    COURSE: GraduationCap,
}

const contentTypeLabels = {
    ARTICLE: '記事',
    VIDEO: '動画',
    DOCUMENT: 'ドキュメント',
    COURSE: 'コース',
}

const planLabels = {
    FREE: { label: '無料', color: 'text-slate-400 bg-slate-800' },
    BASIC: { label: 'ベーシック', color: 'text-blue-400 bg-blue-500/20' },
    PRO: { label: 'プロ', color: 'text-purple-400 bg-purple-500/20' },
    ENTERPRISE: { label: 'エンタープライズ', color: 'text-amber-400 bg-amber-500/20' },
}

export default function MemberContentsPage() {
    const router = useRouter()
    const { user, profile, loading, isConfigured } = useAuth()
    const [filter, setFilter] = useState<string>('all')

    useEffect(() => {
        if (!loading && !user && isConfigured) {
            router.push('/login?redirect=/mypage/contents')
        }
    }, [user, loading, isConfigured, router])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="text-slate-400">読み込み中...</div>
            </div>
        )
    }

    if (!isConfigured || !user) {
        return null
    }

    // ユーザーがアクセス可能かどうかを判定
    const canAccess = (requiredPlan: string) => {
        if (!profile) return requiredPlan === 'FREE'
        const planOrder = ['FREE', 'BASIC', 'PRO', 'ENTERPRISE']
        const userPlanIndex = planOrder.indexOf(profile.plan)
        const requiredPlanIndex = planOrder.indexOf(requiredPlan)
        return userPlanIndex >= requiredPlanIndex
    }

    const filteredContents = filter === 'all' 
        ? sampleContents 
        : sampleContents.filter(c => c.contentType === filter)

    return (
        <>
            <Header />
            <main className="min-h-screen bg-slate-950 pt-20">
                <div className="container mx-auto px-4 py-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link 
                            href="/mypage" 
                            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors mb-4"
                        >
                            ← マイページへ戻る
                        </Link>
                        <h1 className="text-3xl font-bold text-white mb-4">
                            限定コンテンツ
                        </h1>
                        <p className="text-slate-400">
                            会員限定のコンテンツをお楽しみください
                        </p>
                    </motion.div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {[
                            { id: 'all', label: 'すべて' },
                            { id: 'ARTICLE', label: '記事' },
                            { id: 'VIDEO', label: '動画' },
                            { id: 'DOCUMENT', label: 'ドキュメント' },
                            { id: 'COURSE', label: 'コース' },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setFilter(item.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                    filter === item.id
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredContents.map((content, index) => {
                            const Icon = contentTypeIcons[content.contentType as keyof typeof contentTypeIcons]
                            const plan = planLabels[content.requiredPlan as keyof typeof planLabels]
                            const isAccessible = canAccess(content.requiredPlan)

                            return (
                                <motion.div
                                    key={content.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className={`h-full p-6 bg-slate-900 border rounded-xl transition-all ${
                                        isAccessible 
                                            ? 'border-slate-800 hover:border-blue-500/50' 
                                            : 'border-slate-800/50 opacity-80'
                                    }`}>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-2">
                                                <Icon className="w-5 h-5 text-blue-400" />
                                                <span className="text-slate-400 text-xs">
                                                    {contentTypeLabels[content.contentType as keyof typeof contentTypeLabels]}
                                                </span>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${plan.color}`}>
                                                {content.requiredPlan === 'FREE' ? '無料' : plan.label + '以上'}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {content.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm mb-4">
                                            {content.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {content.readTime}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Eye className="w-3 h-3" />
                                                {content.views.toLocaleString()}
                                            </span>
                                        </div>

                                        {isAccessible ? (
                                            <Link href={`/mypage/contents/${content.slug}`}>
                                                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                                                    コンテンツを見る
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </Link>
                                        ) : (
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-2 text-amber-400 text-sm">
                                                    <Lock className="w-4 h-4" />
                                                    <span>{plan.label}以上で閲覧可能</span>
                                                </div>
                                                <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white">
                                                    <Crown className="w-4 h-4 mr-2" />
                                                    アップグレード
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}


