# Shadcn UI - Créer et Utiliser des Registres Personnalisés

## Vue d'ensemble

Les registres shadcn/ui permettent de partager des composants, blocs et configurations personnalisés. Ce guide explique comment créer et utiliser vos propres registres.

## Qu'est-ce qu'un registre ?

Un registre est une collection de ressources (composants, blocs, styles, etc.) accessibles via une URL ou un namespace. Il permet de :

- Partager des composants entre équipes
- Distribuer des bibliothèques de composants
- Créer des registres privés d'entreprise
- Versionner vos composants

## Structure d'un registre

### registry.json

Le fichier principal qui définit votre registre :

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

### Structure de dossiers

```
my-registry/
├── registry/
│   └── new-york/
│       └── hello-world/
│           └── hello-world.tsx
├── registry.json
└── package.json
```

## Créer un registre basique

### 1. Initialiser le projet

```bash
# Créer le dossier
mkdir my-registry && cd my-registry

# Initialiser npm
npm init -y

# Installer la CLI shadcn
npm install shadcn@canary
```

### 2. Créer registry.json

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": []
}
```

### 3. Créer un composant

Créez `registry/new-york/hello-world/hello-world.tsx` :

```tsx
import { Button } from "@/components/ui/button"

export function HelloWorld() {
  return <Button>Hello World</Button>
}
```

### 4. Enregistrer le composant

Ajoutez dans `registry.json` :

```json
{
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

## Types de ressources

### registry:ui

Composant UI de base.

```json
{
  "name": "my-button",
  "type": "registry:ui",
  "description": "A customized button component",
  "dependencies": ["@radix-ui/react-slot"],
  "registryDependencies": ["utils"],
  "files": [
    {
      "path": "registry/new-york/my-button.tsx",
      "type": "registry:ui"
    }
  ]
}
```

### registry:block

Bloc de composants complexes.

```json
{
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.tsx",
      "type": "registry:page",
      "target": "app/login/page.tsx"
    },
    {
      "path": "blocks/login-01/components/login-form.tsx",
      "type": "registry:component"
    }
  ]
}
```

### registry:component

Composant réutilisable.

```json
{
  "name": "custom-card",
  "type": "registry:component",
  "files": [
    {
      "path": "registry/new-york/custom-card.tsx",
      "type": "registry:component"
    }
  ]
}
```

### registry:page

Page complète.

```json
{
  "path": "registry/new-york/hello-world/page.tsx",
  "type": "registry:page",
  "target": "app/hello/page.tsx"
}
```

### registry:hook

Hook personnalisé.

```json
{
  "path": "registry/new-york/hello-world/hooks/use-hello.ts",
  "type": "registry:hook"
}
```

### registry:utils

Fonction utilitaire.

```json
{
  "path": "registry/new-york/hello-world/lib/format-date.ts",
  "type": "registry:utils"
}
```

### registry:file

Fichier de configuration.

```json
{
  "path": "registry/new-york/hello-world/hello.config.ts",
  "type": "registry:file",
  "target": "~/hello.config.ts"
}
```

## Dépendances

### Dépendances npm

```json
{
  "dependencies": ["is-even@3.0.0", "motion"]
}
```

### Dépendances du registre

```json
{
  "registryDependencies": [
    "button",
    "@acme/input-form",
    "https://example.com/r/foo"
  ]
}
```

## Configuration Tailwind

### Ajouter des variables CSS

```json
{
  "cssVars": {
    "theme": {
      "text-base": "3rem",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      "font-heading": "Poppins, sans-serif"
    }
  }
}
```

### Ajouter des animations CSS

```json
{
  "cssVars": {
    "theme": {
      "--animate-wiggle": "wiggle 1s ease-in-out infinite"
    }
  },
  "css": {
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```

### Styles de composants

```json
{
  "css": {
    "@layer components": {
      "card": {
        "background-color": "var(--color-white)",
        "border-radius": "var(--rounded-lg)",
        "padding": "var(--spacing-6)",
        "box-shadow": "var(--shadow-xl)"
      }
    }
  }
}
```

## Créer un thème personnalisé

```json
{
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    },
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)"
    },
    "dark": {
      "background": "oklch(0.141 0.005 285.823)",
      "foreground": "oklch(1 0 0)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)"
    }
  }
}
```

## Créer un style personnalisé

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000"
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff"
    }
  }
}
```

## Utiliser un registre personnalisé

### Configuration dans components.json

#### Registre simple

```json
{
  "registries": {
    "@acme": "https://registry.acme.com/{name}.json"
  }
}
```

#### Registre avec authentification

```json
{
  "registries": {
    "@private": {
      "url": "https://registry.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

#### Registre avec paramètres

```json
{
  "registries": {
    "@team": {
      "url": "https://team.company.com/{name}.json",
      "params": {
        "team": "frontend",
        "version": "${REGISTRY_VERSION}"
      }
    }
  }
}
```

#### Registre avec style

```json
{
  "@themes": "https://registry.example.com/{style}/{name}.json"
}
```

Le placeholder `{style}` est remplacé par le style actuel (ex: `new-york`).

### Installation depuis un registre

```bash
# Registre public
npx shadcn@latest add @v0/dashboard

# Registre privé
npx shadcn@latest add @private/button

# Plusieurs registres
npx shadcn@latest add @acme/header @internal/auth-utils

# URL directe
npx shadcn@latest add https://registry.example.com/button.json

# Fichier local
npx shadcn@latest add ./local-registry/button.json
```

## Authentification

### Token Bearer

```json
{
  "registries": {
    "@private": {
      "url": "https://registry.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

### Clé API

```json
{
  "registries": {
    "@company": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "X-API-Key": "${API_KEY}",
        "X-Workspace-Id": "${WORKSPACE_ID}"
      }
    }
  }
}
```

### Paramètres de requête

```json
{
  "registries": {
    "@internal": {
      "url": "https://registry.company.com/{name}.json",
      "params": {
        "token": "${ACCESS_TOKEN}"
      }
    }
  }
}
```

### Configuration multiple

```json
{
  "registries": {
    "@public": "https://public.company.com/{name}.json",
    "@internal": {
      "url": "https://internal.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${INTERNAL_TOKEN}"
      }
    },
    "@premium": {
      "url": "https://premium.company.com/{name}.json",
      "headers": {
        "X-License-Key": "${LICENSE_KEY}"
      }
    }
  }
}
```

## Héberger un registre

### Serveur statique

```bash
# Servir le registre localement
npx serve -p 3000

# Installer depuis le serveur local
npx shadcn@latest add http://localhost:3000/r/hello-world.json
```

### API Next.js

```typescript
// app/r/[name]/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const component = await getComponent(params.name)
  return NextResponse.json(component)
}
```

### Avec authentification

```typescript
async function GET(request: NextRequest) {
  const token = request.headers.get("Authorization")
  
  if (!token || !isValidToken(token)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  const component = await getComponent(params.name)
  return NextResponse.json(component)
}
```

### Composants personnalisés par utilisateur

```typescript
async function GET(request: NextRequest) {
  const user = await authenticateUser(request)
  const preferences = await getUserPreferences(user.id)
  const component = await getPersonalizedComponent(params.name, preferences)
  
  return NextResponse.json(component)
}
```

## Exemples avancés

### Bloc complexe

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    {
      "path": "registry/new-york/hello-world/page.tsx",
      "type": "registry:page",
      "target": "app/hello/page.tsx"
    },
    {
      "path": "registry/new-york/hello-world/components/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/components/formatted-message.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/hooks/use-hello.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/new-york/hello-world/lib/format-date.ts",
      "type": "registry:utils"
    },
    {
      "path": "registry/new-york/hello-world/hello.config.ts",
      "type": "registry:file",
      "target": "~/hello.config.ts"
    }
  ]
}
```

### Override de primitives

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

### Configuration ESLint universelle

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-eslint-config",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-eslint.json",
      "type": "registry:file",
      "target": "~/.eslintrc.json",
      "content": "..."
    }
  ]
}
```

## Définir un composant avec TypeScript

```typescript
import { z } from "zod"
import { registryItemSchema } from "shadcn/schema"

const myComponent: z.infer<typeof registryItemSchema> = {
  name: "my-button",
  type: "registry:ui",
  description: "A customized button component",
  dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
  registryDependencies: ["utils"],
  files: [
    {
      path: "my-button.tsx",
      type: "registry:ui",
      content: `
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
`,
    }
  ],
  tailwind: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: "hsl(var(--primary))",
            "primary-foreground": "hsl(var(--primary-foreground))",
          },
        },
      },
    },
  },
  cssVars: {
    light: {
      primary: "222.2 47.4% 11.2%",
      "primary-foreground": "210 40% 98%",
    },
    dark: {
      primary: "210 40% 98%",
      "primary-foreground": "222.2 47.4% 11.2%",
    },
  },
}

// Valider contre le schéma
registryItemSchema.parse(myComponent)
```

## Bonnes pratiques

### 1. Versionnement

Utilisez des versions sémantiques pour vos dépendances :

```json
{
  "dependencies": ["is-even@3.0.0"]
}
```

### 2. Documentation

Incluez des descriptions claires :

```json
{
  "name": "login-01",
  "title": "Login Form",
  "description": "A simple login form with email and password fields"
}
```

### 3. Dépendances explicites

Listez toutes les dépendances requises :

```json
{
  "dependencies": ["@radix-ui/react-dialog"],
  "registryDependencies": ["button", "input"]
}
```

### 4. Variables d'environnement

Utilisez des variables pour les secrets :

```bash
# .env
REGISTRY_TOKEN=your-token-here
API_KEY=your-key-here
```

### 5. Tests

Testez vos composants avant de les publier :

```bash
# Installer localement
npx shadcn@latest add ./local-registry/button.json

# Vérifier l'installation
npm run dev
```

## Ressources supplémentaires

- Consultez [04-cli.md](./04-cli.md) pour les commandes CLI
- Voir [01-installation.md](./01-installation.md) pour l'installation de base
- Référez-vous à [02-components.md](./02-components.md) pour les composants disponibles


