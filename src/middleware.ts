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
        // ローカル開発時: localhost:3000?subdomain=business のようにクエリパラメータで切り替え
        subdomain = url.searchParams.get('subdomain') || ''
    } else {
        // 本番環境: business.plus-commit.com のようにサブドメインで判定
        const parts = hostname.split('.')
        if (parts.length > 2) {
            subdomain = parts[0]
        }
    }
    
    // businessサブドメインの場合は(business)グループにリライト
    if (subdomain === 'business') {
        // 既に/businessで始まるパスは除外
        if (!url.pathname.startsWith('/business')) {
            url.pathname = `/business${url.pathname}`
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

