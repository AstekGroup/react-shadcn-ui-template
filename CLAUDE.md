# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + Vite + TypeScript **multi-template system** with Shadcn UI (new-york style). Monorepo-ready (`@templates/react-shadcn-ui`).

Features 4 starter kits, 4 interchangeable layouts, shared pages (auth, settings, errors), and a showcase gallery — all with React Router.

## Commands

```bash
pnpm dev          # Dev server at http://localhost:5173
pnpm build        # TypeScript check + Vite production build
pnpm lint         # ESLint (ts,tsx files)
pnpm type-check   # TypeScript strict mode check
pnpm format       # Prettier format src/**/*.{ts,tsx,css,md}
pnpm preview      # Preview production build
```

No test framework is configured yet.

## Adding Shadcn UI Components

```bash
pnpm dlx shadcn@latest add [component-name]
```

Components are installed to `src/components/ui/`. The Shadcn MCP server is configured in `.cursor/mcp.json`.

## Architecture

### Entry & Routing

- **Entry**: `main.tsx` → `ThemeProvider` → `StyleProvider` → `RouterProvider`
- **Router**: `src/lib/router.tsx` — `createBrowserRouter` with lazy-loaded pages
- **Theme**: `ThemeProvider` uses `next-themes` with `useTheme()` hook. CSS variables in `src/index.css` using `oklch()` color space
- **Styles**: `StyleProvider` context for visual variation switching via `?style=` query param

### Layouts (`src/layouts/`)

4 interchangeable layouts, selectable via `?layout=` query param:

| Layout | File | Description |
|--------|------|-------------|
| `sidebar` | `sidebar-layout.tsx` | Traditional sidebar + header (default for dashboard/saas) |
| `topbar` | `topbar-layout.tsx` | Horizontal top navigation (default for e-commerce) |
| `minimal` | `minimal-layout.tsx` | Centered, no nav (auth, errors) |
| `landing` | `landing-layout.tsx` | Marketing header + footer (default for landing) |

`KitLayoutResolver` reads `?layout=` from URL, falls back to kit's `defaultLayout`.

### Starter Kits (`src/kits/`)

Each kit is self-contained with its own data, components, pages, and manifest:

| Kit | Path | Layout | Description |
|-----|------|--------|-------------|
| Dashboard | `/kit/dashboard` | sidebar | Admin dashboard with analytics |
| SaaS | `/kit/saas` | sidebar | SaaS app with users, billing |
| E-commerce | `/kit/ecommerce` | topbar | Store with products, cart, orders |
| Landing | `/kit/landing` | landing | Marketing page with pricing, FAQ |

Kit manifest structure: `{ id, label, description, icon, defaultLayout, basePath, nav, routes }`

### Shared Pages (`src/pages/`)

| Page | Path | Description |
|------|------|-------------|
| Login | `/auth/login` | Email/password login form |
| Signup | `/auth/signup` | Registration form |
| Forgot Password | `/auth/forgot-password` | Password reset |
| Settings | `/kit/*/settings` | Tabbed settings (general, profile, notifications) |
| Profile | `/kit/*/profile` | User profile page |
| 404 | `/error/404` | Not found |
| 500 | `/error/500` | Server error |

### Showcase (`src/showcase/`)

Root route (`/`) renders a gallery of all kits and shared pages with navigation.

### Visual Styles (`src/styles/`)

5 style variants (default Shadcn + 4 external registries). `StyleProvider` context + `useStyle()` hook. Switchable via `?style=` query param.

### Path Aliases

`@/*` resolves to `./src/*` (configured in both `tsconfig.app.json` and `vite.config.ts`).

### Key Directories

| Path | Purpose |
|------|---------|
| `src/components/ui/` | Shadcn UI primitives (auto-generated, avoid manual edits) |
| `src/components/` | Shared app components (mode-toggle, theme-provider) |
| `src/layouts/` | 4 interchangeable layout components |
| `src/pages/` | Shared pages (auth, settings, profile, errors) |
| `src/kits/` | 4 self-contained starter kits |
| `src/showcase/` | Showcase gallery shell |
| `src/styles/` | Visual style variants and provider |
| `src/lib/router.tsx` | React Router configuration |
| `src/lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) |
| `src/hooks/` | Custom hooks (e.g., `use-mobile.ts` — 768px breakpoint) |
| `resources/` | Shadcn UI documentation files |

## URL Query Parameters

- `?layout=sidebar|topbar|landing` — Override kit's default layout
- `?style=default|react-bits|magic-ui|aceternity|animate-ui` — Switch visual style

## Code Style

- **No semicolons**, single quotes, trailing commas in ES5 positions, 2-space indent
- Functional components only with TypeScript interfaces for props
- Named exports for components
- All styling via Tailwind CSS utility classes — use theme tokens (`bg-primary`, `text-foreground`, etc.)
- Responsive design: mobile-first with `md:`, `lg:` breakpoints
- Kit-internal imports use relative paths; cross-module imports use `@/` aliases

## Commit Convention

`<type>: <subject>` — types: feat, fix, docs, style, refactor, test, chore
