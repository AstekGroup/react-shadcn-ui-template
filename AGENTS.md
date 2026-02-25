# AGENTS.md

## Project Overview

React + Vite + TypeScript template with Shadcn UI components.
Production-ready dashboard starter with dark mode support and comprehensive component library.

This template is designed to be cloned and integrated into monorepo projects or used as a standalone application starter.

## Setup Commands

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Build for production: `pnpm build`
- Preview production build: `pnpm preview`
- Lint code: `pnpm lint`
- Type check: `pnpm type-check`
- Format code: `pnpm format`

## Tech Stack

- **React 19.2.4** - Latest React with concurrent features
- **Vite 7.3.1** - Lightning-fast build tool
- **TypeScript 5.9.3** - Type safety with strict mode
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **Shadcn UI** - Accessible and customizable components
- **Recharts** - Charting library for data visualization
- **Lucide React** - Beautiful icon library
- **next-themes** - Dark mode support

## Adding Shadcn UI Components

This project has the Shadcn UI MCP server configured. You can add components using:

### Via MCP Server (Recommended)
Use the shadcn-ui MCP server tools available in your AI environment

### Via CLI
```bash
pnpm dlx shadcn@latest add [component-name]
```

Examples:
```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card table
```

### Available Components
All Shadcn UI components are available. Check the documentation in `/resources` for the full list.

## Code Style

- **TypeScript strict mode** enabled for maximum type safety
- **Functional components** with React hooks (no class components)
- **Tailwind CSS** for all styling (avoid inline styles)
- **Component composition** following Shadcn UI patterns
- **Single quotes** for strings
- **Semicolons optional** (prettier handles consistency)
- **ESLint + Prettier** configured for code quality

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Shadcn UI components (auto-generated)
│   ├── dashboard-layout.tsx
│   ├── stats-cards.tsx
│   ├── recent-activity.tsx
│   ├── analytics-chart.tsx
│   ├── quick-actions.tsx
│   ├── recent-transactions.tsx
│   ├── mode-toggle.tsx
│   └── theme-provider.tsx
├── lib/               # Utilities and helpers
│   ├── utils.ts       # Utility functions (cn, etc.)
│   └── mock-data.ts   # Mock data for demo
├── hooks/             # Custom React hooks
│   └── use-mobile.ts  # Mobile detection hook
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind imports

resources/             # Shadcn UI documentation
├── README.md          # Documentation index
├── 01-installation.md
├── 02-components.md
├── 03-theming.md
├── 04-cli.md
├── 05-dark-mode.md
├── 06-monorepo.md
└── 07-registry.md
```

## Key Files

- **components.json** - Shadcn UI configuration (auto-generated)
- **vite.config.ts** - Vite configuration with Tailwind plugin
- **tsconfig.json** - TypeScript configuration with path aliases
- **package.json** - Dependencies and scripts
- **index.html** - HTML entry point

## Component Guidelines

### Creating New Components

1. Place custom components in `src/components/`
2. Use Shadcn UI components from `src/components/ui/`
3. Follow the existing component patterns
4. Use TypeScript for props typing
5. Export components as named exports

Example:
```tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface MyComponentProps {
  title: string
  content: string
}

export function MyComponent({ title, content }: MyComponentProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  )
}
```

### Using Tailwind CSS

- Use utility classes directly on elements
- For complex styling, use Tailwind's `@apply` directive in CSS
- Follow responsive design patterns: `md:`, `lg:`, etc.
- Use theme colors: `bg-primary`, `text-foreground`, etc.

## Dark Mode

The template includes full dark mode support:

- Toggle is in the header (top right)
- Uses `next-themes` for theme management
- Supports system preference detection
- Persists user preference in localStorage
- All components are dark mode compatible

### Theming Variables

CSS variables are defined in `src/index.css`:
- Light mode: `:root`
- Dark mode: `.dark`

Colors use the `oklch` color space for better consistency.

## Testing Instructions

### Type Checking
```bash
pnpm type-check
```
Fix any TypeScript errors before committing.

### Linting
```bash
pnpm lint
```
ESLint will check for code quality issues.

### Formatting
```bash
pnpm format
```
Prettier will format all source files.

### Build Test
```bash
pnpm build
```
Ensure production build succeeds without errors.

## Building for Production

1. Run type checking: `pnpm type-check`
2. Run linting: `pnpm lint`
3. Build the project: `pnpm build`
4. Preview the build: `pnpm preview`

The production build will be output to the `dist/` folder.

### Optimization Tips

- All components are tree-shakeable
- Vite automatically code-splits
- Images should be optimized before adding
- Use lazy loading for heavy components

## Integration in Monorepo

This template is designed for easy monorepo integration:

### Option 1: Clone into Workspace

```bash
# From monorepo root
cp -r path/to/react-shadcn-ui apps/my-app
cd apps/my-app
pnpm install
```

### Option 2: Use as Package

1. Copy to `apps/` or `packages/` directory
2. Update `package.json` name field:
   ```json
   {
     "name": "@workspace/my-app",
     "version": "1.0.0"
   }
   ```
3. Run `pnpm install` from monorepo root
4. Add to workspace in root `package.json`:
   ```json
   {
     "workspaces": ["apps/*", "packages/*"]
   }
   ```

### Monorepo Scripts

If using pnpm workspaces or Turborepo:

```bash
# From monorepo root
pnpm --filter my-app dev
pnpm --filter my-app build
pnpm --filter my-app lint
```

## Environment Variables

Create a `.env` file for environment-specific configuration:

```env
# Application
VITE_APP_TITLE=My Application
VITE_APP_DESCRIPTION=My application description

# API Configuration
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key_here

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DEBUG=false
```

**Important:** 
- Variables must be prefixed with `VITE_` to be exposed
- Never commit `.env` files with sensitive data
- Use `.env.example` for documentation

## Security Considerations

- **Dependencies:** Keep dependencies up to date with `pnpm update`
- **Environment Variables:** Use `.env` files, never hardcode secrets
- **Input Sanitization:** Sanitize all user inputs in forms
- **XSS Protection:** React provides built-in XSS protection via JSX
- **CSP Headers:** Configure Content Security Policy in production
- **HTTPS:** Always use HTTPS in production
- **OWASP:** Follow OWASP Top 10 best practices

## Performance Tips

- Use React.memo() for expensive components
- Implement lazy loading for routes
- Optimize images (WebP format, proper sizing)
- Use Vite's code splitting
- Monitor bundle size with `pnpm build --analyze`

## Common Tasks

### Add a New Page

1. Create component in `src/components/`
2. Update routing if using a router
3. Add to navigation in `dashboard-layout.tsx`

### Add a New Shadcn Component

```bash
pnpm dlx shadcn@latest add [component-name]
```

### Customize Theme Colors

Edit CSS variables in `src/index.css` under `:root` and `.dark`

### Update Mock Data

Edit `src/lib/mock-data.ts` to modify demo data

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### Type Errors

```bash
# Restart TypeScript server in VSCode
Cmd+Shift+P > TypeScript: Restart TS Server
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Fails

1. Check TypeScript errors: `pnpm type-check`
2. Check lint errors: `pnpm lint`
3. Clear cache: `rm -rf dist node_modules/.vite`

## Documentation

Comprehensive documentation is available in `/resources`:

- [Installation Guide](./resources/01-installation.md)
- [Components Reference](./resources/02-components.md)
- [Theming Guide](./resources/03-theming.md)
- [CLI Reference](./resources/04-cli.md)
- [Dark Mode Setup](./resources/05-dark-mode.md)
- [Monorepo Integration](./resources/06-monorepo.md)
- [Custom Registry](./resources/07-registry.md)

## Notes for AI Agents

- All Shadcn UI components are in `src/components/ui/`
- Custom components are in `src/components/`
- Tailwind config uses CSS variables for theming
- Dark mode is controlled by `next-themes` via `ThemeProvider`
- Mock data is in `src/lib/mock-data.ts`
- Path aliases use `@/` prefix pointing to `src/`
- Use the shadcn MCP server for component discovery and installation
- TypeScript strict mode is enabled - all types must be properly defined
- Components follow functional patterns - no class components
- All styling uses Tailwind CSS utility classes
- The dashboard is fully responsive and mobile-friendly

## Git Workflow

### Before Committing

1. Run `pnpm type-check` - fix all TypeScript errors
2. Run `pnpm lint` - fix all ESLint warnings
3. Run `pnpm format` - format code
4. Test in browser - ensure no runtime errors
5. Test dark mode - ensure both themes work

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

Types: feat, fix, docs, style, refactor, test, chore

Example:
```
feat: add user profile component

- Added UserProfile component with avatar
- Integrated with dashboard layout
- Added mock user data

Closes #123
```

## Support

For issues with:
- **Vite:** https://vitejs.dev/
- **React:** https://react.dev/
- **Shadcn UI:** https://ui.shadcn.com/
- **Tailwind CSS:** https://tailwindcss.com/

## License

MIT License - Free to use in commercial and personal projects.

