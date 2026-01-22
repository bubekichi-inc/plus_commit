import { NextResponse } from "next/server"
import { getAllTechnologies } from "@/lib/microcms"

export async function GET() {
  try {
    const { contents } = await getAllTechnologies()

    const categoryMap = new Map<string, { id: string; name: string; slug?: string }>()

    contents.forEach((tech: any) => {
      const childCategories = tech["child-category"]
      if (Array.isArray(childCategories)) {
        childCategories.forEach((child: any) => {
          if (!child?.id) return

          if (!categoryMap.has(child.id)) {
            categoryMap.set(child.id, {
              id: child.id,
              name: child["child-name"] || child.title || child.name,
              slug: child.slug,
            })
          }
        })
      }
    })

    const categories = Array.from(categoryMap.values())

    return NextResponse.json({ categories })
  } catch (error) {
    console.error("Failed to fetch technology categories", error)
    return NextResponse.json({ categories: [] }, { status: 500 })
  }
}
