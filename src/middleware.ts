import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const hostname = request.headers.get('host') || ''
    const url = request.nextUrl.clone()
    
    // ローカル開発環境での対応
    const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1')
    
    // サブドメインを抽出
    let subdomain = ''
    if (isLocalhost) {
        // ローカル開発時: localhost:3000?subdomain=recruit のようにクエリパラメータで切り替え
        subdomain = url.searchParams.get('subdomain') || ''
    } else {
        // 本番環境: recruit.plus-commit.com のようにサブドメインで判定
        const parts = hostname.split('.')
        if (parts.length > 2) {
            subdomain = parts[0]
        }
    }
    
    // 末尾スラッシュの統一: スラッシュなしのURLをスラッシュありにリダイレクト
    // ルートパス（/）とファイル拡張子がある場合は除外
    const pathname = url.pathname
    if (pathname !== '/' && !pathname.endsWith('/') && !pathname.match(/\.[^/]+$/)) {
        url.pathname = `${pathname}/`
        return NextResponse.redirect(url)
    }
    
    // recruitサブドメインの場合は(recruit)グループにリライト
    if (subdomain === 'recruit') {
        // 既に/recruitで始まるパスは除外
        if (!url.pathname.startsWith('/recruit')) {
            url.pathname = `/recruit${url.pathname}`
            return NextResponse.rewrite(url)
        }
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (public directory)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
