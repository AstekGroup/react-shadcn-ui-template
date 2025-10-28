# Shadcn UI - Implémentation du Mode Sombre

## Vue d'ensemble

shadcn/ui offre un support natif du mode sombre via les variables CSS. Ce guide vous montre comment implémenter le dark mode dans différents frameworks.

## Next.js

### 1. Installer next-themes

```bash
npm install next-themes
```

### 2. Créer le ThemeProvider

Créez `components/theme-provider.tsx` :

```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### 3. Intégrer dans le layout

Dans `app/layout.tsx` :

```tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Note :** L'attribut `suppressHydrationWarning` sur `<html>` est important pour éviter les avertissements d'hydratation.

### 4. Créer le bouton de bascule

Créez `components/mode-toggle.tsx` :

```tsx
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Vite (React)

### 1. Créer le ThemeProvider

Créez `components/theme-provider.tsx` :

```tsx
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
```

### 2. Intégrer dans l'application

Dans `App.tsx` :

```tsx
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
```

### 3. Créer le bouton de bascule

```tsx
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Remix

### 1. Installer remix-themes

```bash
npm install remix-themes
```

### 2. Créer le session resolver

Créez `app/sessions.server.tsx` :

```tsx
import { createCookieSessionStorage } from "@remix-run/node"
import { createThemeSessionResolver } from "remix-themes"

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    secure: process.env.NODE_ENV === "production",
  },
})

export const themeSessionResolver = createThemeSessionResolver(sessionStorage)
```

### 3. Intégrer dans le root layout

Dans `app/root.tsx` :

```tsx
import clsx from "clsx"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"

import { themeSessionResolver } from "./sessions.server"

// Retourner le thème depuis le session storage
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  return {
    theme: getTheme(),
  }
}

// Wrapper l'app avec ThemeProvider
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  )
}

export function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()
  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
```

### 4. Créer le bouton de bascule

```tsx
import { Moon, Sun } from "lucide-react"
import { Theme, useTheme } from "remix-themes"

import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export function ModeToggle() {
  const [, setTheme] = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## Astro

### 1. Créer le composant ModeToggle

Créez `src/components/ModeToggle.tsx` :

```tsx
import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light")

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### 2. Utiliser dans une page Astro

```astro
--- 
import '../styles/globals.css'
import { ModeToggle } from '@/components/ModeToggle';
---

<html lang="en">
  <body>
    <h1>Astro</h1>
    <ModeToggle client:load />
  </body>
</html>
```

## Configuration des variables CSS

Assurez-vous que vos variables CSS sont correctement définies dans `globals.css` :

```css
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
```

## Personnalisation avancée

### Thème personnalisé

```tsx
export function CustomThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md p-2 hover:bg-accent"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  )
}
```

### Détecter le thème actuel

```tsx
import { useTheme } from "next-themes"

export function ThemedComponent() {
  const { theme, systemTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div>
      Current theme: {currentTheme}
    </div>
  )
}
```

### Forcer un thème sur un composant

```tsx
export function AlwaysDarkComponent() {
  return (
    <div className="dark">
      <div className="bg-background text-foreground">
        This is always dark
      </div>
    </div>
  )
}
```

### Transitions de thème

```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange={false} // Active les transitions
>
  {children}
</ThemeProvider>
```

Ajoutez dans votre CSS :

```css
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## Bonnes pratiques

### 1. Utiliser suppressHydrationWarning

Pour Next.js, ajoutez toujours `suppressHydrationWarning` sur `<html>` :

```tsx
<html lang="en" suppressHydrationWarning>
```

### 2. Stocker la préférence utilisateur

Le thème est automatiquement stocké dans `localStorage` avec next-themes.

### 3. Respecter la préférence système

Activez `enableSystem` pour respecter les préférences du système :

```tsx
<ThemeProvider enableSystem>
```

### 4. Prévenir le flash

Pour Remix, utilisez `PreventFlashOnWrongTheme` :

```tsx
<PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
```

### 5. Tester les deux thèmes

Testez toujours vos composants dans les deux modes pour assurer la lisibilité.

## Dépannage

### Flash de contenu non stylé

**Problème :** Un flash de thème clair apparaît avant le chargement du thème sombre.

**Solution :** Utilisez `PreventFlashOnWrongTheme` (Remix) ou assurez-vous que le ThemeProvider est au bon niveau.

### Variables CSS non appliquées

**Problème :** Les couleurs ne changent pas en mode sombre.

**Solution :** Vérifiez que :
- Les variables CSS sont définies pour `.dark`
- `cssVariables: true` dans `components.json`
- Le fichier `globals.css` est importé

### Hydration mismatch

**Problème :** Erreur d'hydratation React.

**Solution :** Ajoutez `suppressHydrationWarning` sur `<html>`.

## Ressources supplémentaires

- Consultez [03-theming.md](./03-theming.md) pour personnaliser les couleurs
- Voir [02-components.md](./02-components.md) pour les composants compatibles
- Référez-vous à [01-installation.md](./01-installation.md) pour la configuration initiale


