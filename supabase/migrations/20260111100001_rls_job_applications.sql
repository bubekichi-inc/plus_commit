-- Enable RLS on job_applications
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own applications
-- Requires 'profile_id' in job_applications to match the profile linked to auth.uid()
-- Note: job_applications.profile_id is a UUID (FK to profiles.id)
-- profiles.user_id is the auth.uid()
-- So we need to join or assume profiles.id matches something? 
-- Wait, profiles.id is UUID, profiles.user_id is auth.uid.
-- job_applications.profile_id refers to profiles.id.
-- So the check should be: profile_id IN (SELECT id FROM profiles WHERE user_id = auth.uid())

CREATE POLICY "Users can view own applications" ON public.job_applications
  FOR SELECT
  TO authenticated
  USING (
    profile_id IN (
      SELECT id FROM public.profiles WHERE user_id = auth.uid()
    )
  );

-- Policy: Recruiter/Admin can view all
CREATE POLICY "Recruiters and Admins can view all applications" ON public.job_applications
  FOR ALL
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'RECRUITER' OR
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'ADMIN'
  );

-- Policy: Recruiter/Admin can update/delete
CREATE POLICY "Recruiters and Admins can update applications" ON public.job_applications
  FOR UPDATE
  TO authenticated
  USING (
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'RECRUITER' OR
    (auth.jwt() -> 'app_metadata' ->> 'role') = 'ADMIN'
  );
