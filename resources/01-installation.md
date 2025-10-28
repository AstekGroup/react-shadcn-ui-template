# Shadcn UI - Guide d'Installation

## Vue d'ensemble

shadcn/ui est une collection de composants UI magnifiquement conçus et accessibles que vous pouvez copier et coller dans vos applications. Ce n'est pas une bibliothèque de composants, mais une plateforme de distribution de code qui fonctionne avec vos frameworks préférés.

**Caractéristiques principales :**
- **Trust Score : 10/10**
- **1251 exemples de code disponibles**
- Composants accessibles et personnalisables
- Code open source pour personnalisation et composition
- Compatible avec différents frameworks

## Installation automatique (Recommandé)

### Initialiser un nouveau projet

```bash
npx shadcn@latest init
```

Cette commande va :
- Installer les dépendances nécessaires
- Ajouter l'utilitaire `cn`
- Configurer les variables CSS pour le theming
- Créer le fichier `components.json`

### Options de la commande init

```bash
# Utiliser les valeurs par défaut
npx shadcn@latest init --defaults

# Configuration spécifique
npx shadcn@latest init --base-color slate --no-css-variables --template next

# Initialiser avec des composants
npx shadcn@latest init button card dialog

# Options disponibles
npx shadcn@latest init [options] [components...]

Options:
  -y, --yes           skip confirmation prompt
  -d, --defaults      use default configuration
  -f, --force         force overwrite of existing configuration
  -c, --cwd <cwd>     the working directory
  -s, --silent        mute output
  --src-dir           use the src directory when creating a new project
  --css-variables     use css variables for theming (default: true)
```

## Installation manuelle

### 1. Installer les dépendances principales

```bash
npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css
```

Ces packages incluent :
- `class-variance-authority` : Gestion des variantes de composants
- `clsx` : Utilitaire de classes conditionnelles
- `tailwind-merge` : Fusion intelligente des classes Tailwind
- `lucide-react` : Bibliothèque d'icônes
- `tw-animate-css` : Utilitaires d'animation

### 2. Créer le fichier components.json

Créez `components.json` à la racine de votre projet :

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### 3. Configurer les variables CSS globales

Ajoutez à votre `src/styles/globals.css` :

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
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

### 4. Configurer les alias TypeScript

Dans votre `tsconfig.json` :

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## Installation par Framework

### Next.js

```bash
# Créer un nouveau projet Next.js
npx create-next-app@latest my-app

# Initialiser shadcn/ui
npx shadcn@latest init

# Ajouter un composant
npx shadcn@latest add button
```

### Vite

```bash
# Installer les types Node pour la configuration
npm install -D @types/node

# Initialiser shadcn/ui
npx shadcn@latest init

# Ajouter un composant
npx shadcn@latest add button
```

### Remix

```bash
# Installer Tailwind CSS
npm install -D tailwindcss@latest autoprefixer@latest

# Initialiser shadcn/ui
npx shadcn@latest init

# Ajouter un composant
npx shadcn@latest add button
```

### Astro

```bash
# Créer un projet Astro avec Tailwind et React
npx create-astro@latest astro-app --template with-tailwindcss --install --add react --git

# Initialiser shadcn/ui
npx shadcn@latest init

# Ajouter un composant
npx shadcn@latest add button
```

## Ajouter des composants

### Via la CLI

```bash
# Ajouter un composant spécifique
npx shadcn@latest add button

# Ajouter plusieurs composants
npx shadcn@latest add button card dialog

# Voir tous les composants disponibles
npx shadcn add

# Voir les informations d'un composant
npx shadcn view button
```

### Options de la commande add

```bash
Usage: shadcn add [options] [components...]

Options:
  -y, --yes           skip confirmation prompt
  -o, --overwrite     overwrite existing files
  -c, --cwd <cwd>     the working directory
  -a, --all           add all available components
  -p, --path <path>   the path to add the component to
  -s, --silent        mute output
  --css-variables     use css variables for theming (default: true)
```

## Configuration pour JavaScript

Si vous ne souhaitez pas utiliser TypeScript, configurez `tsx: false` dans `components.json` :

```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

## Vérification des mises à jour

```bash
# Vérifier les mises à jour pour tous les composants
npx shadcn diff

# Vérifier les mises à jour pour un composant spécifique
npx shadcn diff button
```

## Utilisation programmatique

```typescript
import { addComponents, getConfig } from "shadcn"

// Charger la configuration existante
const config = await getConfig(process.cwd())

// Ajouter des composants
await addComponents(["button", "card", "dialog"], config, {
  overwrite: false,
  silent: false,
  isNewProject: false
})
```

## Dépannage

### Problèmes courants

1. **Erreur d'importation des composants**
   - Vérifiez que les alias sont correctement configurés dans `tsconfig.json`
   - Assurez-vous que le chemin dans `components.json` correspond à votre structure

2. **Styles non appliqués**
   - Vérifiez que `globals.css` est importé dans votre application
   - Assurez-vous que Tailwind CSS est correctement configuré

3. **Composants non trouvés**
   - Exécutez `npx shadcn@latest init` pour réinitialiser la configuration
   - Vérifiez que les composants sont dans le bon répertoire

## Prochaines étapes

- Consultez [02-components.md](./02-components.md) pour la liste complète des composants
- Voir [03-theming.md](./03-theming.md) pour personnaliser l'apparence
- Référez-vous à [04-cli.md](./04-cli.md) pour les commandes avancées


