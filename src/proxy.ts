import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { updateSession } from '@/lib/supabase/middleware'

export default async function proxy(request: NextRequest) {
    // 1. Supabase Auth Session Handling
    // This updates the session and handles redirects for protected routes
    const authResponse = await updateSession(request)

    // If there is a redirect from Auth (e.g. to login), return it immediately
    if (authResponse.status === 307 || authResponse.status === 302 || authResponse.headers.get('Location')) {
        return authResponse
    }

    const url = request.nextUrl.clone()
    const pathname = url.pathname

    // 2. SEO: Trailing Slash Handling
    // Redirect paths without trailing slash to having one (except API, files, etc.)
    if (pathname !== '/' && !pathname.startsWith('/api') && !pathname.endsWith('/') && !pathname.match(/\.[^/]+$/)) {
        url.pathname = `${pathname}/`
        return NextResponse.redirect(url, 301)
    }

    let response = authResponse // Default to authResponse (which has updated cookies)

    // 4. Merge Cookies
    // If we changed the response (e.g. rewrite), ensure auth cookies keep their original attributes.
    if (response !== authResponse) {
        authResponse.headers.getSetCookie().forEach(cookie => {
            response.headers.append('set-cookie', cookie)
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
