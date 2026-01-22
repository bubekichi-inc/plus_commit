import Link from "next/link"
import { getRecruitmentJobs } from "@/lib/microcms"
import JobsList from "./JobsList"
import { JobsHero, JobsCTA, JobsNavigation } from "./JobsComponents"

export const metadata = {
    title: '募集職種 | プラスコミット採用サイト',
    description: 'プラスコミット株式会社の募集職種一覧です。',
}

export default async function JobsPage() {
    const { contents: jobs } = await getRecruitmentJobs()

    return (
        <>
            {/* Hero */}
            <section className="py-32 px-8 relative overflow-hidden bg-white border-b border-zinc-200">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary-100/40 rounded-full blur-[100px] animate-pulse-slow" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[80px]" />
                       {/* Ambient Background */}
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    {/* We need a client component for the Hero animation or just skip animation for Server Component simplicity? 
                        The user likes "Dynamic Design". So animations are important.
                        I'll use a Client Component for the Hero content.
                     */}
                    <JobsHero />
                </div>
            </section>

            {/* Job List */}
            <section className="py-20 px-8 bg-zinc-50">
                <div className="max-w-4xl mx-auto">
                    <JobsList jobs={jobs} />
                </div>
            </section>

            {/* CTA */}
            <JobsCTA />

            {/* Navigation */}
            <JobsNavigation />
        </>
    )
}

// I need to define JobsHero, JobsCTA, JobsNavigation or put them in the same file if they are client components?
// No, Next.js doesn't like defining 'use client' components inside a server component file. They must be imported.
// I'll create `JobsComponents.tsx` to export these small client parts.
