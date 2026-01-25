import { ReactNode } from "react"
import { AuthProvider } from "@/components/auth/AuthProvider"
import RecruitShell from "./_components/RecruitShell"
import RecruitSidebar from "./_components/RecruitSidebar"

export default function RecruitLayout({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <RecruitShell sidebar={<RecruitSidebar />}>{children}</RecruitShell>
        </AuthProvider>
    )
}
