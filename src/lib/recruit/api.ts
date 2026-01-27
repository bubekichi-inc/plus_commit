import type { CasualInterviewFormData } from "./forms"

const CASUAL_INTERVIEW_ENDPOINT = "/api/recruit/casual"
const MOCK_LATENCY_MS = 800

export class RecruitApiError extends Error {
    status?: number

    constructor(message: string, status?: number) {
        super(message)
        this.name = "RecruitApiError"
        this.status = status
    }
}

type ApplicantInfo = {
    name?: string | null
    email?: string | null
}

type SubmitCasualInterviewInput = {
    formData: CasualInterviewFormData
    applicant: ApplicantInfo
}

function resolveRecruitEndpoint(path: string) {
    const baseUrl = process.env.NEXT_PUBLIC_RECRUIT_API_BASE_URL
    if (!baseUrl) {
        return path
    }

    return new URL(path, baseUrl).toString()
}

function shouldMockRecruitApi() {
    return process.env.NEXT_PUBLIC_ENABLE_RECRUIT_API !== "true"
}

async function simulateNetworkLatency(delay = MOCK_LATENCY_MS) {
    return new Promise((resolve) => setTimeout(resolve, delay))
}

export async function submitCasualInterviewRequest({
    formData,
    applicant,
}: SubmitCasualInterviewInput) {
    const payload = {
        ...formData,
        applicantName: (applicant.name ?? "").trim(),
        applicantEmail: (applicant.email ?? "").trim(),
    }

    if (shouldMockRecruitApi()) {
        await simulateNetworkLatency()
        return { ok: true as const }
    }

    const endpoint = resolveRecruitEndpoint(CASUAL_INTERVIEW_ENDPOINT)
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    })

    if (!response.ok) {
        let errorMessage = "フォーム送信に失敗しました。"
        try {
            const body = await response.json()
            errorMessage = body?.message || errorMessage
        } catch {
            /* noop */
        }
        throw new RecruitApiError(errorMessage, response.status)
    }

    return { ok: true as const }
}
