# agent-skills-manager

Next.js App Router demo for browsing agent skills. Pages are static/mock; auth is a placeholder.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` — Turbopack dev server (default in Next 16; don't pass `--turbopack`).
- `npm run build` / `npm start`
- `npm run lint` — ESLint 9 flat config, whole repo. `next lint` was removed in Next 16.
- `npx tsc --noEmit` — typecheck (no `typecheck` script exists).
- No tests or test runner. Verify with `npm run lint && npx tsc --noEmit && npm run build`.
- Use npm (`package-lock.json`); Next 16 requires Node >= 20.9.

## Layout

- `app/` is the App Router root. `app/(auth)/` is a route group: its pages serve `/login` and `/register`.
- `app/layout.tsx` renders `app/components/Header.tsx` on every route.
- Skill data is the hardcoded `SKILLS` array in `app/skills/SKILLS.ts`. There is no database, API layer, auth backend, or env config yet.
- `app/skills/[id]/page.tsx` is a client component only because it calls `useParams`. A server version should take `PageProps<"/skills/[id]">` and `await params`.
- `@/*` maps to the repo root, not `src/`.

## Next.js and styling gotchas

- `next.config.ts` enables `cacheComponents` and `partialPrefetching` (the latter requires `cacheComponents`). Uncached async work must be inside `<Suspense>` or a `use cache` scope; `cookies()`, `headers()`, `params`, and `searchParams` are request-time data. Read `node_modules/next/dist/docs/01-app/02-guides/migrating-to-cache-components.md` before adding async data.
- `params`/`searchParams` are Promises. `PageProps`, `LayoutProps`, and `RouteContext` are generated globals — don't import them.
- Cache Components is Node-runtime only; don't add `export const runtime = "edge"`.
- Next 16 renamed `middleware` to `proxy` (`proxy.ts`, exported `proxy`). No proxy file exists yet.
- Tailwind CSS 4 + daisyUI 5. There is no `tailwind.config.*`: tokens live in `app/globals.css` under `@theme inline`, and daisyUI loads via `@plugin "daisyui"`. Tailwind runs through the `@tailwindcss/turbopack` loader in `next.config.ts`; `postcss.config.mjs` also exists. Verify both `dev` and `build` after changing either.

## Repo notes

- `README.md` is untouched `create-next-app` boilerplate; trust `package.json` and config over it.
- No formatter, CI, or pre-commit hooks. Don't reformat unrelated files or add tooling unless asked.

