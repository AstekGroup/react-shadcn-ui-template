# Shadcn UI - Configuration Monorepo

## Vue d'ensemble

shadcn/ui peut être utilisé dans un monorepo pour partager des composants UI entre plusieurs applications. Ce guide couvre la configuration pour un monorepo utilisant pnpm workspaces.

## Structure recommandée

```
monorepo/
├── apps/
│   └── web/              # Application Next.js
│       ├── components/   # Composants spécifiques à l'app
│       └── components.json
├── packages/
│   └── ui/               # Package UI partagé
│       ├── src/
│       │   ├── components/  # Composants shadcn/ui
│       │   ├── lib/         # Utilitaires
│       │   ├── hooks/       # Hooks personnalisés
│       │   └── styles/      # Styles globaux
│       ├── package.json
│       └── components.json
└── package.json          # Root package.json
```

## Configuration initiale

### 1. Initialiser le monorepo

```bash
# Créer la structure
mkdir monorepo && cd monorepo
pnpm init

# Créer pnpm-workspace.yaml
cat > pnpm-workspace.yaml << EOF
packages:
  - "apps/*"
  - "packages/*"
EOF
```

### 2. Créer le package UI partagé

```bash
# Créer la structure du package UI
mkdir -p packages/ui/src/{components,lib,hooks,styles}

# Créer package.json pour UI
cat > packages/ui/package.json << EOF
{
  "name": "@workspace/ui",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    "./components/*": "./src/components/*.tsx",
    "./lib/*": "./src/lib/*.ts",
    "./hooks/*": "./src/hooks/*.ts",
    "./styles/*": "./src/styles/*.css"
  }
}
EOF
```

### 3. Créer l'application web

```bash
# Créer une app Next.js
cd apps
npx create-next-app@latest web

# Retourner à la racine
cd ../..
```

## Configuration de components.json

### Pour packages/ui

Créez `packages/ui/components.json` :

#### Avec Tailwind v4

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  }
}
```

#### Avec Tailwind v3

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  }
}
```

### Pour apps/web

Créez `apps/web/components.json` :

#### Avec Tailwind v4

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "../../packages/ui/src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "utils": "@workspace/ui/lib/utils",
    "ui": "@workspace/ui/components"
  }
}
```

#### Avec Tailwind v3

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "../../packages/ui/tailwind.config.ts",
    "css": "../../packages/ui/src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "utils": "@workspace/ui/lib/utils",
    "ui": "@workspace/ui/components"
  }
}
```

## Configuration TypeScript

### packages/ui/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@workspace/ui/*": ["./src/*"],
      "@workspace/ui/components/*": ["./src/components/*"],
      "@workspace/ui/lib/*": ["./src/lib/*"],
      "@workspace/ui/hooks/*": ["./src/hooks/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### apps/web/tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"],
      "@workspace/ui/*": ["../../packages/ui/src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Ajouter des composants

### À partir de apps/web

```bash
# Naviguer vers l'app
cd apps/web

# Ajouter un composant
npx shadcn@canary add button

# Les composants seront automatiquement installés dans packages/ui
# et les imports seront configurés dans apps/web
```

### Utiliser pnpm dlx (Recommandé)

```bash
# Depuis la racine du monorepo
pnpm dlx shadcn@latest add button -c apps/web
```

La CLI va automatiquement :
1. Installer le composant dans `packages/ui/src/components`
2. Configurer les imports dans `apps/web`
3. Mettre à jour les chemins d'alias

## Importer les composants

### Dans apps/web

```tsx
// Importer des composants UI partagés
import { Button } from "@workspace/ui/components/button"
import { Card } from "@workspace/ui/components/card"

// Importer des utilitaires
import { cn } from "@workspace/ui/lib/utils"

// Importer des hooks
import { useTheme } from "@workspace/ui/hooks/use-theme"
```

### Créer un index pour faciliter les imports

Créez `packages/ui/src/index.ts` :

```typescript
// Composants
export { Button } from "./components/button"
export { Card } from "./components/card"
export { Dialog } from "./components/dialog"
// ... autres composants

// Utilitaires
export { cn } from "./lib/utils"

// Hooks
export { useTheme } from "./hooks/use-theme"
export { useToast } from "./hooks/use-toast"
```

Puis importez facilement :

```tsx
import { Button, Card, Dialog } from "@workspace/ui"
```

## Configuration Tailwind

### packages/ui/tailwind.config.ts

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // ... autres couleurs
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

export default config
```

### apps/web/tailwind.config.ts

```typescript
import type { Config } from "tailwindcss"
import uiConfig from "../../packages/ui/tailwind.config"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [uiConfig],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
```

## Styles globaux

### packages/ui/src/styles/globals.css

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... autres variables ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... autres variables ... */
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### apps/web/src/app/globals.css

```css
@import "@workspace/ui/styles/globals.css";

/* Styles spécifiques à l'application */
```

## Scripts package.json

### Root package.json

```json
{
  "name": "monorepo",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "ui:add": "cd apps/web && npx shadcn@canary add"
  },
  "devDependencies": {
    "turbo": "^2.0.0"
  }
}
```

### packages/ui/package.json

```json
{
  "name": "@workspace/ui",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "dependencies": {
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.312.0",
    "tailwind-merge": "^2.2.0",
    "tw-animate-css": "^0.2.0"
  }
}
```

### apps/web/package.json

```json
{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@workspace/ui": "workspace:*",
    "next": "14.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

## Turbo Configuration

Créez `turbo.json` à la racine :

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "type-check": {}
  }
}
```

## Bonnes pratiques

### 1. Centraliser les composants UI

Tous les composants shadcn/ui doivent être dans `packages/ui`.

### 2. Utiliser des alias cohérents

Configurez les mêmes alias dans TypeScript et components.json.

### 3. Partager la configuration Tailwind

Utilisez des presets pour partager la config Tailwind.

### 4. Gérer les versions

```json
{
  "dependencies": {
    "@workspace/ui": "workspace:*"
  }
}
```

### 5. Scripts utiles

Ajoutez des scripts pour faciliter le développement :

```json
{
  "scripts": {
    "ui:add": "cd apps/web && npx shadcn@canary add",
    "ui:update": "cd packages/ui && npm update"
  }
}
```

## Dépannage

### Erreur : Module non trouvé

**Problème :** `Cannot find module '@workspace/ui/components/button'`

**Solution :**
1. Vérifiez que le package est dans `dependencies`
2. Exécutez `pnpm install`
3. Vérifiez les alias dans `tsconfig.json`

### Erreur : Styles non appliqués

**Problème :** Les styles Tailwind ne s'appliquent pas.

**Solution :**
1. Importez `globals.css` dans votre app
2. Vérifiez que le content path inclut `packages/ui`
3. Redémarrez le serveur de dev

### Erreur : Types non reconnus

**Problème :** TypeScript ne reconnaît pas les types.

**Solution :**
1. Vérifiez que `@workspace/ui` exporte correctement les types
2. Ajoutez `"moduleResolution": "bundler"` dans tsconfig
3. Redémarrez TypeScript server

## Exemple d'utilisation

```tsx
// apps/web/src/app/page.tsx
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { useTheme } from "@workspace/ui/hooks/use-theme"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Monorepo Example</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            Toggle Theme
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
```

## Ressources supplémentaires

- Consultez [01-installation.md](./01-installation.md) pour l'installation de base
- Voir [04-cli.md](./04-cli.md) pour les commandes CLI
- Référez-vous à [02-components.md](./02-components.md) pour les composants disponibles


