-- 1. Update UserRole Enum (Add RECRUITER if not exists)
DO $$
BEGIN
    ALTER TYPE "UserRole" ADD VALUE 'RECRUITER';
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 2. Create SelectionStatus Enum
DO $$
BEGIN
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

-- 3. Create job_applications table
CREATE TABLE IF NOT EXISTS "public"."job_applications" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "job_id" TEXT NOT NULL,
    "status" "SelectionStatus" NOT NULL DEFAULT 'APPLIED',
    "applied_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("id")
);

-- 4. Create Foreign Key
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE constraint_name = 'job_applications_profile_id_fkey') THEN
        ALTER TABLE "public"."job_applications" ADD CONSTRAINT "job_applications_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    END IF;
END $$;

-- 5. Create Index
CREATE INDEX IF NOT EXISTS "job_applications_profile_id_idx" ON "public"."job_applications"("profile_id");
