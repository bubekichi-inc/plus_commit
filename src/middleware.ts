import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
    // 0. Basic認証チェック（環境変数で有効化されている場合）
    const basicAuthEnabled = process.env.BASIC_AUTH_ENABLED === 'true'
    const basicAuthUser = process.env.BASIC_AUTH_USER
    const basicAuthPassword = process.env.BASIC_AUTH_PASSWORD

    if (basicAuthEnabled && basicAuthUser && basicAuthPassword) {
        const authHeader = request.headers.get('authorization')
        
        if (!authHeader || !authHeader.startsWith('Basic ')) {
            return new NextResponse('Authentication required', {
                status: 401,
                headers: {
                    'WWW-Authenticate': 'Basic realm="Secure Area"',
                },
            })
        }

        const base64Credentials = authHeader.split(' ')[1]
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
        const [username, password] = credentials.split(':')

        if (username !== basicAuthUser || password !== basicAuthPassword) {
            return new NextResponse('Invalid credentials', {
                status: 401,
                headers: {
                    'WWW-Authenticate': 'Basic realm="Secure Area"',
                },
            })
        }
    }

    // 1. Supabase Auth Session Handling
    // This updates the session and handles redirects for protected routes
    const authResponse = await updateSession(request)

    // If there is a redirect from Auth (e.g. to login), return it immediately
    if (authResponse.status === 307 || authResponse.status === 302 || authResponse.headers.get('Location')) {
        return authResponse
    }

    const hostname = request.headers.get('host') || ''
    const url = request.nextUrl.clone()
    const pathname = url.pathname

    // 2. SEO: Trailing Slash Handling
    // Redirect paths without trailing slash to having one (except API, files, etc.)
    if (pathname !== '/' && !pathname.startsWith('/api') && !pathname.endsWith('/') && !pathname.match(/\.[^/]+$/)) {
        url.pathname = `${pathname}/`
        return NextResponse.redirect(url, 301)
    }

    // 3. Subdomain Handling
    const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1')
    let subdomain = ''
    if (isLocalhost) {
        subdomain = url.searchParams.get('subdomain') || ''
    } else {
        const parts = hostname.split('.')
        if (parts.length > 2) {
            subdomain = parts[0]
        }
    }

    let response = authResponse // Default to authResponse (which has updated cookies)

    // Recruit Subdomain Rewrite
    if (subdomain === 'recruit') {
        if (!url.pathname.startsWith('/recruit')) {
            url.pathname = `/recruit${url.pathname}`
            response = NextResponse.rewrite(url)
        }
    }

    // 4. Merge Cookies
    // If we changed the response (e.g. rewrite), we must ensure auth cookies are carried over.
    if (response !== authResponse) {
        authResponse.cookies.getAll().forEach(cookie => {
            response.cookies.set(cookie)
        })
    }

    return response
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
