-- STEP 13: Member Directory
-- Extends profiles with directory and contact privacy controls.
alter table public.profiles add column if not exists full_name text;
alter table public.profiles add column if not exists role_title text;
alter table public.profiles add column if not exists mobile text;
alter table public.profiles add column if not exists whatsapp text;
alter table public.profiles add column if not exists directory_visible boolean not null default false;
alter table public.profiles add column if not exists allow_call boolean not null default false;
alter table public.profiles add column if not exists allow_whatsapp boolean not null default false;

-- Members may read only profiles explicitly made visible in the directory.
drop policy if exists "members_read_visible_directory" on public.profiles;
create policy "members_read_visible_directory"
on public.profiles for select to authenticated
using (id = auth.uid() or directory_visible = true);

-- Members can update only their own public-directory preferences/contact fields.
drop policy if exists "members_update_own_directory" on public.profiles;
create policy "members_update_own_directory"
on public.profiles for update to authenticated
using (id = auth.uid())
with check (id = auth.uid());
