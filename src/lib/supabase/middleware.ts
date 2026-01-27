import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        console.warn('Supabase env vars are not configured; skipping auth middleware.')
        return response
    }

    const supabase = createServerClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    response = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const {
        data: { user },
    } = await supabase.auth.getUser()

    const path = request.nextUrl.pathname

    // 1. 未ログインユーザーの制限
    // /recruit/mypage/* はログインユーザーのみ
    // /recruit/jobs/*, /recruit/casual は未ログインでも閲覧可能
    if (
        path.startsWith('/recruit/mypage')
    ) {
        if (!user) {
            const url = request.nextUrl.clone()
            url.pathname = '/recruit/login'
            url.searchParams.set('next', path)
            return NextResponse.redirect(url)
        }
    }

    // 2. ログイン済みユーザーのロールベース制御
    if (user) {
        // ログインページへのアクセス制御 (ログイン済みならリダイレクト)
        if (path === '/recruit/login' || path === '/recruit/register') {
            const url = request.nextUrl.clone()
            url.pathname = '/recruit/mypage'
            return NextResponse.redirect(url)
        }
    }

    return response
}
