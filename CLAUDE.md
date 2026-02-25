# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React + Vite + TypeScript dashboard template with Shadcn UI (new-york style). Monorepo-ready (`@templates/react-shadcn-ui`).

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

- **Entry**: `main.tsx` → `App.tsx` → `DashboardLayout` wrapping dashboard widgets
- **Theme**: `ThemeProvider` (wraps app in `main.tsx`) uses `next-themes` with `useTheme()` hook. CSS variables in `src/index.css` using `oklch()` color space, with `:root` (light) and `.dark` selectors
- **Layout**: `DashboardLayout` provides sidebar navigation + header with theme toggle + user dropdown
- **Mock data**: `src/lib/mock-data.ts` — stats, chart data, transactions (replace with real API calls)
- **No routing or state management** libraries installed — structure supports adding React Router and Zustand/TanStack Query

### Path Aliases

`@/*` resolves to `./src/*` (configured in both `tsconfig.app.json` and `vite.config.ts`).

### Key Directories

| Path | Purpose |
|------|---------|
| `src/components/ui/` | Shadcn UI primitives (auto-generated, avoid manual edits) |
| `src/components/` | Custom app components |
| `src/lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) |
| `src/hooks/` | Custom hooks (e.g., `use-mobile.ts` — 768px breakpoint) |
| `resources/` | Shadcn UI documentation files |

## Code Style

- **No semicolons**, single quotes, trailing commas in ES5 positions, 2-space indent
- Functional components only with TypeScript interfaces for props
- Named exports for components
- All styling via Tailwind CSS utility classes — use theme tokens (`bg-primary`, `text-foreground`, etc.)
- Responsive design: mobile-first with `md:`, `lg:` breakpoints

## Commit Convention

`<type>: <subject>` — types: feat, fix, docs, style, refactor, test, chore
