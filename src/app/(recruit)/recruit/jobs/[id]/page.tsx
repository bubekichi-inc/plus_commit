import { notFound } from "next/navigation"
import { getNewsDetail, getRecruitmentJobs } from "@/lib/microcms"
import JobDetailClient from "./JobDetailClient"

export async function generateStaticParams() {
    const { contents } = await getRecruitmentJobs()
    return contents.map((job) => ({
        id: job.id,
    }))
}

// Generate Metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params
    try {
        const job = await getNewsDetail(id)
        return {
            title: `${job.title} | プラスコミット採用サイト`,
            description: job.content ? job.content.substring(0, 100).replace(/<[^>]*>?/gm, '') : '募集要項の詳細です。',
        }
    } catch {
        return {
            title: 'Job Not Found',
        }
    }
}

export default async function JobDetailPage({ params }: { params: { id: string } }) {
    const { id } = params

    // Fetch job detail
    let job
    try {
        job = await getNewsDetail(id)
    } catch {
        notFound()
    }

    if (!job) {
        notFound()
    }

    // Fetch other jobs for the "Other Jobs" section
    const { contents: allJobs } = await getRecruitmentJobs()
    const otherJobs = allJobs
        .filter(j => j.id !== id)
        .slice(0, 3)

    return <JobDetailClient job={job} otherJobs={otherJobs} />
}
