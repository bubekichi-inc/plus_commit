import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
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
