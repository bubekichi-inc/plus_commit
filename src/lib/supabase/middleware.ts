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
    // /recruit/admin/* は管理者・採用担当者のみ (後でロールチェックも追加)
    // /recruit/mypage/* はログインユーザーのみ
    if (path.startsWith('/recruit/admin') || path.startsWith('/recruit/mypage')) {
        if (!user) {
            const url = request.nextUrl.clone()
            url.pathname = '/recruit/login'
            url.searchParams.set('next', path)
            return NextResponse.redirect(url)
        }
    }

    // 2. ログイン済みユーザーのロールベース制御
    if (user) {
        const role = user.user_metadata?.role || user.app_metadata?.role;

        // 管理画面 (/recruit/admin) へのアクセス制御
        // RECRUITER または ADMIN のみ許可
        if (path.startsWith('/recruit/admin')) {
            if (role !== 'RECRUITER' && role !== 'ADMIN') {
                const url = request.nextUrl.clone()
                url.pathname = '/recruit/mypage'
                return NextResponse.redirect(url)
            }
        }

        // ログインページへのアクセス制御 (ログイン済みならリダイレクト)
        if (path === '/recruit/login' || path === '/recruit/register') {
            const url = request.nextUrl.clone()
            // ロールに応じてリダイレクト先を変更
            if (role === 'RECRUITER' || role === 'ADMIN') {
                url.pathname = '/recruit/admin'
            } else {
                url.pathname = '/recruit/mypage'
            }
            return NextResponse.redirect(url)
        }
    }

    return response
}
