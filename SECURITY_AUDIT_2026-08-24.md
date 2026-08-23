# SOHOCHOR Security & Production Audit — 2026-08-24

## Scope
Repository/UI audit plus connected Supabase advisory review. No production data or database policy was changed during this audit.

## Confirmed findings

### Critical / release-blocking
- Admin authorization must be enforced by Supabase RLS/database policy, not only by the browser. `admin.html` checks `profiles.role === 'admin'`, but the client can be modified by an attacker; every admin CRUD operation must be protected server-side.
- The `security_audit_events` table currently has RLS enabled but no policies. Define an intentional policy model before production: ordinary users should not be able to read/write audit events directly; privileged/server-side writes should be controlled.
- Storage operations used by the admin UI (`jamaat-media`, `jamaat-documents`) need explicit Storage policies tied to the admin role and safe object ownership. Public URLs should only be used for content intended to be public.

### High priority
- Verify every personal table (profiles, personal_reports, notes/notepad, amol, reminders, children-related records and push subscriptions) has RLS and owner-based policies.
- Verify admin tables/content tables use separate policies for read, create, approve/publish and delete actions.
- Add negative authorization tests: user A cannot read/update/delete user B's private records; normal users cannot approve/publish/delete admin content; anonymous users cannot access private data.
- Review whether the browser should expose user IDs and whether any personal fields are unnecessarily displayed.

### Performance / maintainability
- Supabase advisory reports repeated `auth.*` evaluation in `push_subscriptions` RLS policies; wrap stable auth calls with `select` as recommended.
- `push_subscriptions` has multiple permissive policies for the same actions; consolidate where possible.
- Several indexes are currently unused. Review them before removing anything; retain indexes justified by expected production query patterns.

## Product/UX gaps observed
- Authentication and personal-space routing exist, but page-level session guards are not a substitute for RLS.
- Personal reports are correctly filtered client-side by `member_id`; the database must independently enforce the same ownership boundary.
- Admin content has pending/published workflow, but approval/delete operations require database-level role enforcement.

## Release gate
Do not call SOHOCHOR production-ready until the RLS/Storage policies and unauthorized-access tests pass.
