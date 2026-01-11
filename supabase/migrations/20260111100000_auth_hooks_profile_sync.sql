-- Sync role from public.profiles to auth.users.raw_app_meta_data
-- This allows using the role in RLS policies via auth.jwt() -> 'app_metadata' ->> 'role'

CREATE OR REPLACE FUNCTION public.handle_profile_role_update() 
RETURNS TRIGGER AS $$
BEGIN
  UPDATE auth.users 
  SET raw_app_meta_data = 
    jsonb_set(COALESCE(raw_app_meta_data, '{}'::jsonb), '{role}', to_jsonb(NEW.role))
  WHERE id = NEW.user_id::uuid;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for update
CREATE TRIGGER on_profile_role_update
  AFTER UPDATE OF role ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_profile_role_update();

-- Trigger for insert
CREATE TRIGGER on_profile_role_insert
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_profile_role_update();
