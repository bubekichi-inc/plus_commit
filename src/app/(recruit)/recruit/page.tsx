import { getRecruitmentJobs } from "@/lib/microcms"
import RecruitTopPageClient from "./RecruitTopPageClient"

export default async function RecruitTopPage() {
    // Fetch recruitment jobs from microCMS
    const { contents: jobs } = await getRecruitmentJobs()

    return <RecruitTopPageClient jobs={jobs} />
}
