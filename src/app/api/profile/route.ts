import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// プロファイルを取得
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'userId is required' }, { status: 400 })
    }

    const supabase = await createClient()
    
    // UUID形式チェック
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId)
    if (!isUuid) {
      console.warn('Invalid UUID provided to profile API:', userId)
      return NextResponse.json({ profile: null, message: 'Invalid UserID format' })
    }

    // Supabase のプロファイルテーブルから取得
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (error) {
      // プロファイルが存在しない場合は null を返す
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

    const body = await request.json()
    const { name, bio, company, position, website, avatar } = body

    // プロファイルを upsert
    const { data: profile, error } = await supabase
      .from('profiles')
      .upsert({
        user_id: user.id,
        email: user.email,
        name,
        bio,
        company,
        position,
        website,
        avatar,
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









