-- Revised Consolidated Schema Setup (Using UUIDs)
-- This script aligns with Supabase defaults (UUID) to avoid type mismatches.

-- 0. Cleanup (Safe to run if you want to reset dependent tables to fix types)
DROP TABLE IF EXISTS "public"."bookmarks" CASCADE;
DROP TABLE IF EXISTS "public"."content_accesses" CASCADE;
DROP TABLE IF EXISTS "public"."job_applications" CASCADE;
-- We do NOT drop profiles/exclusive_contents to preserve data if they exist.

-- 1. Create Enums
DO $$
BEGIN
    -- UserRole
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'UserRole') THEN
        CREATE TYPE "UserRole" AS ENUM ('USER', 'PREMIUM', 'ADMIN', 'RECRUITER');
    ELSE
        ALTER TYPE "UserRole" ADD VALUE IF NOT EXISTS 'RECRUITER';
    END IF;

    -- Plan
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'Plan') THEN
        CREATE TYPE "Plan" AS ENUM ('FREE', 'BASIC', 'PRO', 'ENTERPRISE');
    END IF;

    -- ContentType
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'ContentType') THEN
        CREATE TYPE "ContentType" AS ENUM ('ARTICLE', 'VIDEO', 'DOCUMENT', 'COURSE');
    END IF;

    -- SelectionStatus
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'SelectionStatus') THEN
        CREATE TYPE "SelectionStatus" AS ENUM (
            'APPLIED',
            'DOCUMENT_SCREENING',
            'FIRST_INTERVIEW',
            'SECOND_INTERVIEW',
            'FINAL_INTERVIEW',
            'OFFER',
            'HIRED',
            'REJECTED',
            'DECLINED'
        );
    END IF;
END $$;

-- 2. Create Tables (Using UUID for IDs)

-- Profiles (If exists, we assume it's UUID. If not, we create as UUID)
CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL, -- references auth.users which is UUID
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "bio" TEXT,
    "company" TEXT,
    "position" TEXT,
    "website" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "plan" "Plan" NOT NULL DEFAULT 'FREE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "profiles_user_id_key" ON "public"."profiles"("user_id");
CREATE UNIQUE INDEX IF NOT EXISTS "profiles_email_key" ON "public"."profiles"("email");

-- ExclusiveContent
CREATE TABLE IF NOT EXISTS "public"."exclusive_contents" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "content" TEXT NOT NULL,
    "content_type" "ContentType" NOT NULL DEFAULT 'ARTICLE',
    "thumbnail" TEXT,
    "required_plan" "Plan" NOT NULL DEFAULT 'FREE',
    "is_published" BOOLEAN NOT NULL DEFAULT false,
    "published_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exclusive_contents_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "exclusive_contents_slug_key" ON "public"."exclusive_contents"("slug");

-- Bookmarks
CREATE TABLE IF NOT EXISTS "public"."bookmarks" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "profile_id" UUID NOT NULL,
    "content_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bookmarks_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "bookmarks_profile_id_content_id_key" ON "public"."bookmarks"("profile_id", "content_id");

-- ContentAccess
CREATE TABLE IF NOT EXISTS "public"."content_accesses" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "profile_id" UUID NOT NULL,
    "content_id" UUID NOT NULL,
    "accessed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "content_accesses_pkey" PRIMARY KEY ("id")
);

-- JobApplications
CREATE TABLE IF NOT EXISTS "public"."job_applications" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "profile_id" UUID NOT NULL,
    "job_id" TEXT NOT NULL, -- Keep as TEXT if job_id is not a UUID (it might be slug)
    "status" "SelectionStatus" NOT NULL DEFAULT 'APPLIED',
    "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("id")
);

-- 3. Add Foreign Keys (with UUID types)

DO $$
BEGIN
    -- Bookmarks -> Profiles
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'bookmarks_profile_id_fkey') THEN
        ALTER TABLE "public"."bookmarks" ADD CONSTRAINT "bookmarks_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    -- Bookmarks -> ExclusiveContent
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'bookmarks_content_id_fkey') THEN
        ALTER TABLE "public"."bookmarks" ADD CONSTRAINT "bookmarks_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "public"."exclusive_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    -- ContentAccess -> Profiles
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'content_accesses_profile_id_fkey') THEN
        ALTER TABLE "public"."content_accesses" ADD CONSTRAINT "content_accesses_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    -- ContentAccess -> ExclusiveContent
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'content_accesses_content_id_fkey') THEN
        ALTER TABLE "public"."content_accesses" ADD CONSTRAINT "content_accesses_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "public"."exclusive_contents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;

    -- JobApplications -> Profiles
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'job_applications_profile_id_fkey') THEN
        ALTER TABLE "public"."job_applications" ADD CONSTRAINT "job_applications_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;

-- 4. Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
