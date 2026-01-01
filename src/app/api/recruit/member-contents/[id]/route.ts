import { NextResponse } from "next/server"
import { getMemberContentDetail } from "@/lib/microcms"

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const content = await getMemberContentDetail(params.id)
        return NextResponse.json(content)
    } catch (error) {
        console.error("Failed to fetch member content detail:", error)
        return NextResponse.json(
            { error: "Content not found" },
            { status: 404 }
        )
    }
}

