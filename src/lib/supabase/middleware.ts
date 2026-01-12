import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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
    // /recruit/mypage/*, /recruit/jobs/*, /recruit/casual はログインユーザーのみ
    if (
        path.startsWith('/recruit/mypage') ||
        path.startsWith('/recruit/jobs') ||
        path === '/recruit/casual'
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
