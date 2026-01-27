"use client"

import { motion } from "framer-motion"
import { Mail, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RegisterPendingPage() {
    return (
        <div className="min-h-screen bg-zinc-50 flex items-center justify-center py-12 px-6">
            <div className="w-full max-w-2xl">
                {/* Success Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                            <Mail className="w-12 h-12 text-black" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center border-4 border-zinc-50">
                            <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl border border-zinc-200 p-8 md:p-12 shadow-sm text-center"
                >
                    <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">
                        仮登録が完了しました
                    </h1>
                    
                    <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                        ご登録いただいたメールアドレス宛に<br className="hidden sm:block" />
                        確認メールを送信しました。
                    </p>

                    <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-6 mb-8">
                        <h2 className="text-lg font-bold text-primary-900 mb-3 flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5" />
                            次のステップ
                        </h2>
                        <ol className="text-left text-sm text-primary-800 space-y-3 max-w-md mx-auto">
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-black rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                <span>メール受信ボックスを確認してください</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-black rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                <span>メール内の「メールアドレスを認証する」ボタンをクリック</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-black rounded-full flex items-center justify-center text-xs font-bold">3</span>
                                <span>認証完了後、ログインしてご利用ください</span>
                            </li>
                        </ol>
                    </div>

                    <div className="border-t border-zinc-200 pt-6">
                        <p className="text-sm text-zinc-500 mb-6">
                            メールが届かない場合は、迷惑メールフォルダをご確認ください。<br />
                            それでも届かない場合は、お問い合わせください。
                        </p>

                    </div>
                </motion.div>

            </div>
        </div>
    )
}
