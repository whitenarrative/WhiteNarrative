-- White Narrative: complete database, security, storage and initial-data setup.
-- Run this file once in the Supabase SQL editor, then create an Authentication
-- user for abinavsrinivas517@gmail.com.

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  type text,
  year text,
  synopsis text not null,
  poster_url text,
  poster_layout text check (poster_layout is null or poster_layout in ('landscape', 'portrait')),
  watch_url text,
  director text,
  cinematographer text,
  editor text,
  colorist text,
  music_director text,
  cast_members text[] not null default '{}',
  links jsonb not null default '[]'::jsonb check (jsonb_typeof(links) = 'array'),
  missing_info text,
  is_featured boolean not null default false,
  is_published boolean not null default false,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.admin_emails (
  email text primary key check (email = lower(email)),
  created_at timestamptz not null default now()
);

insert into public.admin_emails (email)
values ('abinavsrinivas517@gmail.com')
on conflict (email) do nothing;

create index if not exists projects_public_order_idx
  on public.projects (is_published, display_order, created_at desc);

-- ---------------------------------------------------------------------------
-- Shared functions and triggers
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
before update on public.projects
for each row execute function public.set_updated_at();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_emails
    where email = lower(coalesce((select auth.jwt() ->> 'email'), ''))
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- ---------------------------------------------------------------------------
-- Row-level security and grants
-- ---------------------------------------------------------------------------

alter table public.projects enable row level security;
alter table public.admin_emails enable row level security;

revoke all on table public.projects from anon, authenticated;
revoke all on table public.admin_emails from anon, authenticated;

grant select on table public.projects to anon;
grant select, insert, update, delete on table public.projects to authenticated;

drop policy if exists "Published projects are publicly readable" on public.projects;
create policy "Published projects are publicly readable"
on public.projects
for select
to anon
using (is_published = true);

drop policy if exists "Administrators can read every project" on public.projects;
create policy "Administrators can read every project"
on public.projects
for select
to authenticated
using ((select public.is_admin()));

drop policy if exists "Administrators can create projects" on public.projects;
create policy "Administrators can create projects"
on public.projects
for insert
to authenticated
with check ((select public.is_admin()));

drop policy if exists "Administrators can update projects" on public.projects;
create policy "Administrators can update projects"
on public.projects
for update
to authenticated
using ((select public.is_admin()))
with check ((select public.is_admin()));

drop policy if exists "Administrators can delete projects" on public.projects;
create policy "Administrators can delete projects"
on public.projects
for delete
to authenticated
using ((select public.is_admin()));

-- No client-facing policy is created for admin_emails. The security-definer
-- function above performs the allowlist check without exposing its contents.

-- ---------------------------------------------------------------------------
-- Public project-poster storage
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'project-media',
  'project-media',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Administrators can upload project media" on storage.objects;
create policy "Administrators can upload project media"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'project-media' and (select public.is_admin()));

drop policy if exists "Administrators can update project media" on storage.objects;
create policy "Administrators can update project media"
on storage.objects
for update
to authenticated
using (bucket_id = 'project-media' and (select public.is_admin()))
with check (bucket_id = 'project-media' and (select public.is_admin()));

drop policy if exists "Administrators can delete project media" on storage.objects;
create policy "Administrators can delete project media"
on storage.objects
for delete
to authenticated
using (bucket_id = 'project-media' and (select public.is_admin()));

comment on table public.projects is
  'Portfolio projects managed by the separate admin application and read by the public website.';

-- ---------------------------------------------------------------------------
-- Initial portfolio import
-- ---------------------------------------------------------------------------

insert into public.projects (
  title, slug, category, type, year, synopsis, poster_url, poster_layout, watch_url,
  director, cinematographer, editor, colorist, music_director, cast_members, links,
  missing_info, is_featured, is_published, display_order
)
values
  (
    'Until We Meet Again', 'until-we-meet-again', 'Upcoming', null, 'Upcoming',
    'A forthcoming romance about bonds that endure beyond time.',
    '/work/until-we-meet-again.png', null, null,
    'Arunachalam', 'Bhuvanesh Thasma', 'Abinav Srinivas', 'Abinav Srinivas (DI)', 'Sarovar R',
    array['Arunachalam', 'Megha Kammaje'], '[]'::jsonb,
    'A trailer, release date, and public external listings have not been announced yet.',
    true, true, 10
  ),
  (
    'Hoovadagitthi', 'hoovadagitthi', 'Released', null, '2026',
    'A quirky Kannada rom-com about Kotresha, whose job hunt and bus ride turn into a daydream-fuelled crush on a florist.',
    'https://i.ytimg.com/vi/wCSafswwyg8/maxresdefault.jpg', null,
    'https://youtu.be/wCSafswwyg8?si=uOezrXH1pgzp_HxM',
    'Not publicly credited', 'Shivaraj Rathod', 'Shivaraj Rathod', 'Shivaraj Rathod', 'South End Circle',
    array['Deekshith N C', 'Anoushka Gupta', 'Rajalakshmi', 'Sachin'], '[]'::jsonb,
    'A director credit and public IMDb or booking listing were not found.',
    true, true, 20
  ),
  (
    'Byaate', 'byaate', 'Released', null, '2025',
    'A Kannada short film about the difficult phase of life and the drive to pursue aspirations despite hardship.',
    'https://i.ytimg.com/vi/ForT3MmS5hw/maxresdefault.jpg', null,
    'https://www.youtube.com/watch?v=ForT3MmS5hw&t=4s',
    'Sri Raghu', 'Shivaraj Rathod', 'Not publicly credited', 'Not publicly credited', 'Prince Joseph',
    array['Karthik', 'Shruthi', 'Selvan'], '[]'::jsonb,
    'Editor, colorist, IMDb, and booking links were not listed publicly.',
    true, true, 30
  ),
  (
    'Agalike', 'agalike', 'Released', null, '2025',
    'A Kannada song about two people drifting apart, and the memories and quiet ache that remain after separation.',
    'https://i.ytimg.com/vi/q6bxCikcg_Q/maxresdefault.jpg', null,
    'https://youtu.be/q6bxCikcg_Q?si=Qkqz74mymd_fg3l2',
    'Arha Studios (video production)', 'Shivaraj Rathod', 'Shivaraj Rathod', 'Shivaraj Rathod', 'South End Circle',
    array['Deekshith N C', 'Anoushka Gupta'], '[]'::jsonb,
    'An individual director credit and public IMDb or booking listing were not found.',
    false, true, 40
  ),
  (
    'Jackfruit', 'jackfruit', 'Released', null, 'Not announced',
    'An action thriller written, directed and produced by Yash.',
    'https://i.ytimg.com/vi/zmtpM_vhmjM/maxresdefault.jpg', null,
    'https://www.youtube.com/watch?v=zmtpM_vhmjM',
    'Yash', 'Shivaraj Rathod', 'Shivaraj Rathod', 'Shivaraj Rathod', 'Prince Joseph',
    array['Sri Raghu', 'Rakesh', 'Prajwal', 'Adarsh Raj', 'Sanjay Ram', 'Deepak', 'Harshith', 'Sagar Gumballi', 'Venkatesh', 'Akash'],
    '[]'::jsonb,
    'Only the teaser is publicly available; a release year, IMDb, and booking listing were not found.',
    false, true, 50
  ),
  (
    'A Day in the Life of a Dispatcher in India', 'dispatcher-in-india', 'Released', null, '2022',
    'A profile of Zubair, a Hyderabad-based dispatcher who coordinates jobs and parts for field computer engineers.',
    'https://i.ytimg.com/vi/6yGUiqkzQBo/maxresdefault.jpg', null,
    'https://www.youtube.com/watch?v=6yGUiqkzQBo',
    'Not publicly credited', 'Not publicly credited', 'Not publicly credited', 'Not publicly credited', 'Not publicly credited',
    array['Zubair'], '[]'::jsonb,
    'The public description only identifies Zubair and the project synopsis; no production credits or external listings were found.',
    false, true, 60
  ),
  (
    'Mind Reader', 'mind-reader', 'Released', null, '2026',
    'A crime investigation involving a suspect and a police officer that gradually uncovers who committed the crime.',
    'https://i.ytimg.com/vi/JFeSmgEwoK4/maxresdefault.jpg', null,
    'https://www.youtube.com/watch?v=JFeSmgEwoK4',
    'Vijay Mohan', 'Richard Danial', 'Richard Danial', 'Shivaraj Rathod', 'Chandan Heggade, Arjun Heggade',
    array['Yashwanth Shetty', 'Dhanu Harsha', 'Shashank'], '[]'::jsonb,
    'Public IMDb and booking links were not found.',
    false, true, 70
  ),
  (
    'Onty Bunty Love Story', 'onty-bunty-love-story', 'Released', 'Feature Film', '2024',
    'Onty is desperately in need of a girlfriend. To fulfill his wish he takes help from his best friend Bunty but finds shocking twists and turns which might put their friendship in danger.',
    '/work/onty-bunty-love-story.jpg', null, null,
    'Yatish Pannasamudra', 'Hrithik Roshan Shivraj Rathod', 'Abinav Srinivas', 'Shivraj Rathod', 'Shrihari Shresty',
    array['Yatish Pannasamudra', 'Vaibhav Vardhan', 'Shweta S Bhat', 'Shrusthi Chandrashekar', 'Ragavendra Henri'],
    '[{"label":"IMDb","href":"https://www.imdb.com/title/tt30587816/"}]'::jsonb,
    null, false, true, 80
  ),
  (
    'PISHAACHI', 'pishaachi', 'Released', 'Music Video', null,
    'Music Video based on lyrics by Shri. Da Ra Bendre''s Kurudu Kanchana reimagined by C Joyson Rony.',
    'https://i.ytimg.com/vi/2LBzLLle5QE/maxresdefault.jpg', null,
    'https://youtu.be/2LBzLLle5QE',
    'C Joyson Rony', 'Charan', 'Abinav Srinivas', 'Abinav Srinivas', 'C Joyson Rony',
    array['C Joyson Rony', 'Joyson Rony', 'Neha Goyal', 'Vinod Kumar Thangavelu', 'Divarshana Saxena', 'Bhavani Gopi'],
    '[{"label":"Watch on YouTube","href":"https://youtu.be/2LBzLLle5QE"}]'::jsonb,
    null, false, true, 90
  )
on conflict (slug) do update set
  title = excluded.title,
  category = excluded.category,
  type = excluded.type,
  year = excluded.year,
  synopsis = excluded.synopsis,
  poster_url = excluded.poster_url,
  poster_layout = excluded.poster_layout,
  watch_url = excluded.watch_url,
  director = excluded.director,
  cinematographer = excluded.cinematographer,
  editor = excluded.editor,
  colorist = excluded.colorist,
  music_director = excluded.music_director,
  cast_members = excluded.cast_members,
  links = excluded.links,
  missing_info = excluded.missing_info,
  is_featured = excluded.is_featured,
  is_published = excluded.is_published,
  display_order = excluded.display_order;

-- Administrator access is restricted to the authenticated Supabase user whose
-- email is abinavsrinivas517@gmail.com. Create that user in Authentication > Users.
