"use client"

import { useAuth } from "@/components/auth/AuthProvider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Users, FileText, CheckCircle, XCircle } from "lucide-react"

export default function RecruitAdminPage() {
    const { profile, loading } = useAuth()

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center p-8">Loading...</div>
    }

    if (!profile || (profile.role !== 'RECRUITER' && profile.role !== 'ADMIN')) {
        return <div className="min-h-screen flex items-center justify-center p-8">Access Denied</div>
    }

    return (
        <div className="min-h-screen bg-zinc-50">
            {/* Header */}
            <header className="bg-white border-b border-zinc-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/recruit" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <h1 className="text-lg font-bold text-zinc-900">採用管理ダッシュボード</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-zinc-600">{profile.name} ({profile.role})</span>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-zinc-500 text-sm font-medium">新規応募</h3>
                            <Users className="w-5 h-5 text-blue-500" />
                        </div>
                        <p className="text-3xl font-bold text-zinc-900">0</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-zinc-500 text-sm font-medium">選考中</h3>
                            <FileText className="w-5 h-5 text-orange-500" />
                        </div>
                        <p className="text-3xl font-bold text-zinc-900">0</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-zinc-500 text-sm font-medium">内定</h3>
                            <CheckCircle className="w-5 h-5 text-green-500" />
                        </div>
                        <p className="text-3xl font-bold text-zinc-900">0</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-zinc-500 text-sm font-medium">不採用/辞退</h3>
                            <XCircle className="w-5 h-5 text-red-500" />
                        </div>
                        <p className="text-3xl font-bold text-zinc-900">0</p>
                    </div>
                </div>

                {/* Main Area */}
                <div className="bg-white rounded-xl border border-zinc-200 shadow-sm min-h-[400px] flex items-center justify-center text-zinc-500">
                    応募者データがまだありません
                </div>
            </main>
        </div>
    )
}
