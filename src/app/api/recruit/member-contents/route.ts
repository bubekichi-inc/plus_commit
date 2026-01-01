import { NextResponse } from "next/server"
import { getMemberContentList } from "@/lib/microcms"

export async function GET() {
    try {
        const data = await getMemberContentList({
            limit: 100,
            orders: "-publishedAt",
        })
        
        return NextResponse.json(data)
    } catch (error) {
        console.error("Failed to fetch member contents:", error)
        
        // microCMSのエンドポイントが存在しない場合は空配列を返す
        return NextResponse.json({ contents: [], totalCount: 0, offset: 0, limit: 100 })
    }
}

