import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import {
  Check,
  CheckCircle2,
  ClipboardCopy,
  LayoutDashboard,
  Rocket,
  ShoppingBag,
  Sparkles,
  Terminal,
} from 'lucide-react'

const REPO_URL = 'https://github.com/AstekGroup/react-shadcn-ui-template'

type KitId = 'dashboard' | 'saas' | 'ecommerce' | 'landing'
type StyleId =
  | 'default'
  | 'react-bits'
  | 'magic-ui'
  | 'aceternity'
  | 'animate-ui'

interface KitOption {
  id: KitId
  label: string
  description: string
  icon: React.ElementType
  layout: string
  color: string
}

interface StyleOption {
  id: StyleId
  label: string
  description: string
  badge?: string
  color: string
}

const kits: KitOption[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Admin dashboard with analytics, charts, and data tables',
    icon: LayoutDashboard,
    layout: 'sidebar',
    color: 'text-blue-500',
  },
  {
    id: 'saas',
    label: 'SaaS',
    description: 'SaaS application with users, billing, and onboarding',
    icon: Rocket,
    layout: 'sidebar',
    color: 'text-violet-500',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    description: 'Online store with product catalog, cart, and orders',
    icon: ShoppingBag,
    layout: 'topbar',
    color: 'text-emerald-500',
  },
  {
    id: 'landing',
    label: 'Landing',
    description: 'Marketing landing page with pricing and testimonials',
    icon: Sparkles,
    layout: 'landing',
    color: 'text-orange-500',
  },
]

const styles: StyleOption[] = [
  {
    id: 'default',
    label: 'Shadcn Default',
    description:
      'Clean and minimal — pure Shadcn UI components, no extra animations',
    color: 'text-foreground',
  },
  {
    id: 'react-bits',
    label: 'React Bits',
    description: '180+ animated and interactive components from reactbits.dev',
    badge: 'Popular',
    color: 'text-violet-500',
  },
  {
    id: 'magic-ui',
    label: 'Magic UI',
    description: '50+ magical effects: particles, marquee, orbiting circles',
    color: 'text-pink-500',
  },
  {
    id: 'aceternity',
    label: 'Aceternity',
    description: 'Spotlight, 3D cards, lamp effects, and aurora backgrounds',
    color: 'text-cyan-500',
  },
  {
    id: 'animate-ui',
    label: 'Animate UI',
    description: 'Flip cards, liquid buttons, magnetic effects, morphing text',
    color: 'text-amber-500',
  },
]

const layoutFileMap: Record<KitId, string> = {
  dashboard: 'src/layouts/sidebar-layout.tsx',
  saas: 'src/layouts/sidebar-layout.tsx',
  ecommerce: 'src/layouts/topbar-layout.tsx',
  landing: 'src/layouts/landing-layout.tsx',
}

function buildSparseCheckoutPaths(kitId: KitId, styleId: StyleId): string[] {
  const paths: string[] = [
    // Config files
    'package.json',
    'tsconfig.json',
    'tsconfig.app.json',
    'vite.config.ts',
    'index.html',
    'components.json',
    '.eslintrc*',
    'eslint.config*',
    // Source base
    'src/index.css',
    'src/main.tsx',
    // Shared source dirs
    'src/components',
    'src/lib',
    'src/hooks',
    'src/pages',
    // Style system
    'src/styles/types.ts',
    'src/styles/registry.ts',
    'src/styles/provider.tsx',
    'src/styles/index.ts',
    'src/styles/default',
    // Layouts
    'src/layouts/kit-layout-resolver.tsx',
    'src/layouts/minimal-layout.tsx',
    layoutFileMap[kitId],
    // Selected kit
    `src/kits/_types.ts`,
    `src/kits/${kitId}`,
  ]

  if (styleId !== 'default') {
    paths.push(`src/styles/${styleId}`)
  }

  return paths
}

function buildPrompt(kit: KitOption, style: StyleOption): string {
  const paths = buildSparseCheckoutPaths(kit.id, style.id)
  const sparseSetArgs = paths.map((p) => `  ${p}`).join(' \\\n')

  const styleNote =
    style.id === 'default'
      ? 'No extra style library — pure Shadcn UI components.'
      : `Visual style: **${style.label}** (see \`src/styles/${style.id}/\` for animated components)`

  const deps =
    style.id === 'default'
      ? ''
      : style.id === 'react-bits'
        ? '\n# React Bits uses motion/react (already in package.json)'
        : style.id === 'magic-ui'
          ? '\n# Magic UI uses motion/react (already in package.json)'
          : style.id === 'aceternity'
            ? '\n# Aceternity uses motion/react (already in package.json)'
            : '\n# Animate UI uses motion/react (already in package.json)'

  return `# Setup: ${kit.label} Kit + ${style.label} Style

I want to set up a **${kit.label}** starter kit with the **${style.label}** visual style
from the AstekGroup react-shadcn-ui template repository.

Repository: ${REPO_URL}

## Step 1 — Sparse-checkout (download only the files I need)

Run these commands to clone only the relevant files without downloading
the entire showcase portal:

\`\`\`bash
# Clone without checking out files
git clone --no-checkout --filter=blob:none ${REPO_URL} .tmp-template
cd .tmp-template

# Enable sparse-checkout in cone mode
git sparse-checkout init --cone

# Select only the files needed for ${kit.label} + ${style.label}
git sparse-checkout set \\
${sparseSetArgs}

# Checkout the main branch
git checkout main
\`\`\`

## Step 2 — Copy files into my project

Copy the contents of \`.tmp-template\` into my project root, then delete the temp folder:

\`\`\`bash
cp -r .tmp-template/. .
rm -rf .tmp-template
\`\`\`

## Step 3 — Install dependencies

\`\`\`bash
pnpm install${deps}
\`\`\`

## Step 4 — Verify the setup

\`\`\`bash
pnpm type-check   # TypeScript check
pnpm dev          # Start dev server at http://localhost:5173
\`\`\`

## Kit details

- **Starter Kit**: ${kit.label} — ${kit.description}
- **Default layout**: ${kit.layout} (use \`?layout=\` URL param to override)
- ${styleNote}
- **Entry point**: \`/kit/${kit.id}\` (add to your router or navigate directly)
- **Auth pages**: \`/auth/login\`, \`/auth/signup\`, \`/auth/forgot-password\`
- **Settings**: \`/kit/${kit.id}/settings\`

## Path aliases

Make sure your project's \`vite.config.ts\` and \`tsconfig.app.json\` have the \`@/*\` alias
pointing to \`./src/*\` — this is already configured in the template files.`
}

export function GetStarted() {
  const [selectedKit, setSelectedKit] = useState<KitOption | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | null>(null)
  const [copied, setCopied] = useState(false)

  const prompt =
    selectedKit && selectedStyle
      ? buildPrompt(selectedKit, selectedStyle)
      : null

  const handleCopy = () => {
    if (!prompt) return
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const step1Done = selectedKit !== null
  const step2Done = selectedStyle !== null
  const allDone = step1Done && step2Done

  return (
    <div className="container mx-auto space-y-12 px-6 py-8">
      {/* Header */}
      <div className="space-y-4">
        <Badge variant="secondary">Get Started</Badge>
        <h1 className="text-3xl font-bold tracking-tight">
          Set up your template
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Choose your starter kit and visual style. We'll generate a
          ready-to-use AI prompt that you can paste into{' '}
          <strong className="text-foreground">Cursor</strong> or{' '}
          <strong className="text-foreground">Claude Code</strong> — it will run
          git sparse-checkout to download only the files you need, without
          pulling the entire showcase portal.
        </p>
      </div>

      <Separator />

      {/* Step 1 — Choose kit */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <StepBadge number={1} done={step1Done} />
          <h2 className="text-xl font-semibold">Choose your starter kit</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kits.map((kit) => {
            const isSelected = selectedKit?.id === kit.id
            return (
              <button
                key={kit.id}
                onClick={() => setSelectedKit(kit)}
                className={cn(
                  'relative flex flex-col items-start gap-3 rounded-xl border p-5 text-left transition-all hover:border-primary/50 hover:shadow-sm',
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-sm'
                    : 'border-border bg-card'
                )}
              >
                {isSelected && (
                  <CheckCircle2 className="absolute right-4 top-4 h-4 w-4 text-primary" />
                )}
                <kit.icon className={cn('h-6 w-6', kit.color)} />
                <div>
                  <div className="font-semibold">{kit.label}</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {kit.description}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {kit.layout} layout
                </Badge>
              </button>
            )
          })}
        </div>
      </section>

      <Separator />

      {/* Step 2 — Choose style */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <StepBadge number={2} done={step2Done} />
          <h2 className="text-xl font-semibold">Choose your visual style</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {styles.map((style) => {
            const isSelected = selectedStyle?.id === style.id
            return (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style)}
                className={cn(
                  'relative flex flex-col items-start gap-2 rounded-xl border p-5 text-left transition-all hover:border-primary/50 hover:shadow-sm',
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-sm'
                    : 'border-border bg-card'
                )}
              >
                {isSelected && (
                  <CheckCircle2 className="absolute right-4 top-4 h-4 w-4 text-primary" />
                )}
                <div className="flex items-center gap-2">
                  <span className={cn('text-sm font-semibold', style.color)}>
                    {style.label}
                  </span>
                  {style.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {style.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {style.description}
                </p>
              </button>
            )
          })}
        </div>
      </section>

      <Separator />

      {/* Step 3 — Generated prompt */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <StepBadge number={3} done={allDone} />
          <h2 className="text-xl font-semibold">Copy your AI prompt</h2>
        </div>

        {!allDone ? (
          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border bg-muted/30">
            <p className="text-sm text-muted-foreground">
              {!step1Done
                ? 'Select a starter kit above to continue'
                : 'Select a visual style above to generate the prompt'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Summary */}
            <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm">
              <Terminal className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="text-muted-foreground">
                Prompt configured for:
              </span>
              <Badge variant="secondary">{selectedKit!.label} kit</Badge>
              <span className="text-muted-foreground">+</span>
              <Badge variant="secondary">{selectedStyle!.label} style</Badge>
            </div>

            {/* Code block */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-muted/30">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <span className="text-xs text-muted-foreground font-medium">
                  AI Setup Prompt — paste into Cursor or Claude Code
                </span>
                <Button
                  size="sm"
                  variant={copied ? 'default' : 'outline'}
                  className="h-7 gap-1.5 text-xs"
                  onClick={handleCopy}
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <ClipboardCopy className="h-3 w-3" />
                      Copy prompt
                    </>
                  )}
                </Button>
              </div>
              <pre className="max-h-[480px] overflow-y-auto p-4 text-xs leading-relaxed">
                <code className="text-foreground whitespace-pre-wrap break-words">
                  {prompt}
                </code>
              </pre>
            </div>

            {/* Instructions */}
            <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground space-y-1.5">
              <p className="font-medium text-foreground">
                How to use this prompt:
              </p>
              <ol className="list-decimal pl-4 space-y-1">
                <li>
                  Click <strong className="text-foreground">Copy prompt</strong>{' '}
                  above
                </li>
                <li>
                  Open a <strong className="text-foreground">Cursor</strong>{' '}
                  chat or a{' '}
                  <strong className="text-foreground">Claude Code</strong>{' '}
                  session in your target project
                </li>
                <li>
                  Paste the prompt — the AI will run the commands to pull only
                  the relevant template files
                </li>
                <li>
                  Run{' '}
                  <code className="rounded bg-muted px-1">pnpm install</code>{' '}
                  and <code className="rounded bg-muted px-1">pnpm dev</code>
                </li>
              </ol>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

function StepBadge({ number, done }: { number: number; done: boolean }) {
  return (
    <div
      className={cn(
        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors',
        done
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-muted-foreground'
      )}
    >
      {done ? <Check className="h-3.5 w-3.5" /> : number}
    </div>
  )
}
