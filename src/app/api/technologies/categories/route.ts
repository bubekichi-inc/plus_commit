import { NextResponse } from "next/server"
import { getAllTechnologies } from "@/lib/microcms"
import type { News, NewsCategory } from "@/types/microcms"

const resolveChildCategoryName = (child?: NewsCategory) => {
  if (!child) return "未分類"
  return child["child-name"] || child.title || child.name || "未分類"
}

export async function GET() {
  try {
    const response = await getAllTechnologies()
    const contents = Array.isArray(response.contents) ? (response.contents as News[]) : []

    const categoryMap = new Map<string, { id: string; name: string; slug?: string }>()

    contents.forEach((tech) => {
      const childCategories = tech["child-category"]
      if (!Array.isArray(childCategories)) {
        return
      }

      childCategories.forEach((child) => {
        if (!child?.id) return

        if (!categoryMap.has(child.id)) {
          categoryMap.set(child.id, {
            id: child.id,
            name: resolveChildCategoryName(child),
            slug: child.slug,
          })
        }
      })
    })

    const categories = Array.from(categoryMap.values())

    return NextResponse.json({ categories })
  } catch (error) {
    console.error("Failed to fetch technology categories", error)
    return NextResponse.json({ categories: [] }, { status: 500 })
  }
}
