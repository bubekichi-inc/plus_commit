import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

const optionalTrimmedString = (max: number) =>
  z.preprocess((value) => {
    if (value === null || value === undefined) return undefined
    if (typeof value !== 'string') return undefined
    const trimmed = value.trim()
    return trimmed.length ? trimmed : undefined
  }, z.string().max(max, `最大${max}文字で入力してください`)).optional()

const optionalUrl = z.preprocess((value) => {
  if (value === null || value === undefined) return undefined
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  return trimmed.length ? trimmed : undefined
}, z.string().url('有効なURLを入力してください').max(200, 'URLは200文字以内で入力してください')).optional()

const profileSchema = z.object({
  name: z.string().trim().min(1, 'お名前は必須です').max(100, 'お名前は100文字以内で入力してください'),
  bio: optionalTrimmedString(1000),
  company: optionalTrimmedString(120),
  position: optionalTrimmedString(120),
  website: optionalUrl,
  avatar: optionalTrimmedString(2048),
})

// プロファイルを取得
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const requestedUserId = searchParams.get('userId') ?? user.id

    if (!UUID_REGEX.test(requestedUserId)) {
      console.warn('Invalid UUID provided to profile API:', requestedUserId)
      return NextResponse.json({ profile: null, message: 'Invalid UserID format' }, { status: 400 })
    }

    const isSelfRequest = requestedUserId === user.id
    let isAdminRequest = false

    if (!isSelfRequest) {
      const { data: requesterProfile } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .single()

      isAdminRequest = requesterProfile?.role === 'ADMIN'

      if (!isAdminRequest) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
      }
    }

    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', requestedUserId)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ profile: null })
      }
      throw error
    }

    return NextResponse.json({ profile })
  } catch (error) {
    console.error('Failed to get profile:', error)
    return NextResponse.json({ error: 'Failed to get profile' }, { status: 500 })
  }
}

// プロファイルを作成・更新
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // 認証確認
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    const parsed = profileSchema.safeParse(body)

    if (!parsed.success) {
      const errors = parsed.error.flatten()
      return NextResponse.json(
        {
          error: 'Invalid profile payload',
          details: errors.fieldErrors,
        },
        { status: 400 }
      )
    }

    const { name, bio, company, position, website, avatar } = parsed.data

    // プロファイルを upsert
    const { data: profile, error } = await supabase
      .from('profiles')
      .upsert({
        user_id: user.id,
        email: user.email,
        name,
        bio: bio ?? null,
        company: company ?? null,
        position: position ?? null,
        website: website ?? null,
        avatar: avatar ?? null,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: 'user_id',
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json({ profile })
  } catch (error) {
    console.error('Failed to update profile:', error)
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 })
  }
}









