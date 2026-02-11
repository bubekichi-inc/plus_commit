#!/usr/bin/env node
// Usage: SUPABASE_SERVICE_ROLE_KEY=... node scripts/set-admin.ts <user_id>
// This script sets app_metadata.role = 'ADMIN' for a given userId. Run only on server with service key.

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Require NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const userId = process.argv[2]
if (!userId) {
  console.error('Usage: node scripts/set-admin.js <user_id>')
  process.exit(1)
}

const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

async function run() {
  const { data, error } = await admin.auth.admin.updateUserById(userId, {
    app_metadata: { role: 'ADMIN' },
  } as any)

  if (error) {
    console.error('Failed:', error)
    process.exit(1)
  }

  console.log('Updated user:', data)
}

run()
