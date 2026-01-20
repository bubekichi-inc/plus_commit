import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'
  const type = searchParams.get('type')

  // If 'code' is present, handle server-side exchange for providers
  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      if (type === 'recovery') return NextResponse.redirect(`${origin}/auth/reset-password`)
      // 認証成功時は完了ページへ移動（常に/successへ）
      return NextResponse.redirect(`${origin}/auth/success`)
    }
  }

  // If no 'code', return a small HTML page that preserves the fragment and redirects
  const html = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="robots" content="noindex" />
      <title>Authenticating...</title>
    </head>
    <body>
      <script>
        // Preserve search and hash when navigating to client handler
        const search = location.search || '';
        const hash = location.hash || '';
        // Replace current location with client handler, preserving fragment
        location.replace('/auth/callback/client' + search + hash);
      </script>
      <noscript>Please enable JavaScript to complete authentication.</noscript>
    </body>
  </html>`

  return new Response(html, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}













