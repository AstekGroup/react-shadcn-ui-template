# Shadcn UI - Composants Disponibles

## Vue d'ensemble

shadcn/ui propose une collection complète de composants UI accessibles et personnalisables. Chaque composant peut être installé individuellement via la CLI.

## Installation générale

```bash
npx shadcn@latest add [nom-du-composant]
```

## Composants de base

### Accordion
Panneau extensible/réductible pour organiser le contenu.

**Installation :**
```bash
npx shadcn@latest add accordion
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-accordion
```

---

### Alert
Message d'information, d'avertissement ou d'erreur.

**Installation :**
```bash
npx shadcn@latest add alert
```

---

### Alert Dialog
Boîte de dialogue modale pour les confirmations importantes.

**Installation :**
```bash
npx shadcn@latest add alert-dialog
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-alert-dialog
```

---

### Aspect Ratio
Maintient un ratio d'aspect cohérent pour le contenu.

**Installation :**
```bash
npx shadcn@latest add aspect-ratio
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-aspect-ratio
```

---

### Avatar
Image de profil utilisateur avec fallback.

**Installation :**
```bash
npx shadcn@latest add avatar
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-avatar
```

---

### Badge
Petit élément pour afficher un statut ou une catégorie.

**Installation :**
```bash
npx shadcn@latest add badge
```

---

### Breadcrumb
Navigation fil d'Ariane.

**Installation :**
```bash
npx shadcn@latest add breadcrumb
```

---

### Button
Bouton interactif avec plusieurs variantes.

**Installation :**
```bash
npx shadcn@latest add button
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-slot
```

---

### Button Group
Groupe de boutons liés.

**Installation :**
```bash
npx shadcn@latest add button-group
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-slot
```

---

### Calendar
Sélecteur de date interactif.

**Installation :**
```bash
npx shadcn@latest add calendar
```

**Installation manuelle :**
```bash
npm install react-day-picker date-fns
```

**Mise à jour :**
Après mise à jour, installez les nouveaux blocs :
```bash
npx shadcn@latest add calendar-02
```

---

### Card
Conteneur avec en-tête, contenu et pied de page.

**Installation :**
```bash
npx shadcn@latest add card
```

---

### Carousel
Carrousel d'images ou de contenu.

**Installation :**
```bash
npx shadcn@latest add carousel
```

**Installation manuelle :**
```bash
npm install embla-carousel-react
```

---

### Chart
Composants de graphiques basés sur Recharts.

**Installation :**
```bash
npx shadcn@latest add chart
```

**Installation manuelle :**
```bash
npm install recharts
```

**CSS supplémentaire :**
Ajoutez à `app/globals.css` :
```css
@layer base {
  :root {
    --chart-1: oklch(0.646 0.222 41.116);
    --chart-2: oklch(0.6 0.118 184.704);
    --chart-3: oklch(0.398 0.07 227.392);
    --chart-4: oklch(0.828 0.189 84.429);
    --chart-5: oklch(0.769 0.188 70.08);
  }

  .dark {
    --chart-1: oklch(0.488 0.243 264.376);
    --chart-2: oklch(0.696 0.17 162.48);
    --chart-3: oklch(0.769 0.188 70.08);
    --chart-4: oklch(0.627 0.265 303.9);
    --chart-5: oklch(0.645 0.246 16.439);
  }
}
```

**Configuration :**
```tsx
import { type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig
```

---

### Checkbox
Case à cocher avec état indéterminé.

**Installation :**
```bash
npx shadcn@latest add checkbox
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-checkbox
```

---

### Collapsible
Contenu réductible/extensible.

**Installation :**
```bash
npx shadcn@latest add collapsible
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-collapsible
```

---

### Command
Palette de commandes recherchable.

**Installation :**
```bash
npx shadcn@latest add command
```

**Installation manuelle :**
```bash
npm install cmdk
```

---

### Context Menu
Menu contextuel au clic droit.

**Installation :**
```bash
npx shadcn@latest add context-menu
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-context-menu
```

---

### Dialog
Boîte de dialogue modale.

**Installation :**
```bash
npx shadcn@latest add dialog
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-dialog
```

---

### Drawer
Panneau coulissant depuis le bord de l'écran.

**Installation :**
```bash
npx shadcn@latest add drawer
```

**Installation manuelle :**
```bash
npm install vaul
```

---

### Dropdown Menu
Menu déroulant contextuel.

**Installation :**
```bash
npx shadcn@latest add dropdown-menu
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-dropdown-menu
```

---

### Empty
État vide avec illustration.

**Installation :**
```bash
npx shadcn@latest add empty
```

---

### Field
Champ de formulaire avec label et description.

**Installation :**
```bash
npx shadcn@latest add field
```

---

### Form
Formulaire avec validation (React Hook Form + Zod).

**Installation :**
```bash
npx shadcn@latest add form
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod
```

---

### Hover Card
Carte affichée au survol.

**Installation :**
```bash
npx shadcn@latest add hover-card
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-hover-card
```

---

### Input
Champ de saisie texte.

**Installation :**
```bash
npx shadcn@latest add input
```

---

### Input Group
Groupe de champs de saisie.

**Installation :**
```bash
npx shadcn@latest add input-group
```

---

### Input OTP
Champ de saisie pour codes OTP.

**Installation :**
```bash
npx shadcn@latest add input-otp
```

**Installation manuelle :**
```bash
npm install input-otp
```

**Configuration Tailwind :**
Ajoutez à `tailwind.config.js` :
```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
}
```

---

### Item
Élément de liste générique.

**Installation :**
```bash
npx shadcn@latest add item
```

---

### Kbd
Représentation visuelle de touches clavier.

**Installation :**
```bash
npx shadcn@latest add kbd
```

---

### Label
Label pour les champs de formulaire.

**Installation :**
```bash
npx shadcn@latest add label
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-label
```

---

### Menubar
Barre de menu horizontale.

**Installation :**
```bash
npx shadcn@latest add menubar
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-menubar
```

---

### Native Select
Sélecteur natif HTML.

**Installation :**
```bash
npx shadcn@latest add native-select
```

---

### Navigation Menu
Menu de navigation principal.

**Installation :**
```bash
npx shadcn@latest add navigation-menu
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-navigation-menu
```

---

### Pagination
Navigation paginée.

**Installation :**
```bash
npx shadcn@latest add pagination
```

---

### Popover
Fenêtre contextuelle positionnée.

**Installation :**
```bash
npx shadcn@latest add popover
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-popover
```

---

### Progress
Barre de progression.

**Installation :**
```bash
npx shadcn@latest add progress
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-progress
```

---

### Radio Group
Groupe de boutons radio.

**Installation :**
```bash
npx shadcn@latest add radio-group
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-radio-group
```

---

### Resizable
Panneaux redimensionnables.

**Installation :**
```bash
npx shadcn@latest add resizable
```

**Installation manuelle :**
```bash
npm install react-resizable-panels
```

---

### Scroll Area
Zone de défilement stylisée.

**Installation :**
```bash
npx shadcn@latest add scroll-area
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-scroll-area
```

---

### Select
Menu de sélection déroulant.

**Installation :**
```bash
npx shadcn@latest add select
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-select
```

---

### Separator
Ligne de séparation visuelle.

**Installation :**
```bash
npx shadcn@latest add separator
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-separator
```

---

### Sheet
Panneau latéral modal.

**Installation :**
```bash
npx shadcn@latest add sheet
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-dialog
```

---

### Sidebar
Barre latérale de navigation.

**Installation :**
```bash
npx shadcn@latest add sidebar
```

**CSS supplémentaire :**
Ajoutez à `app/globals.css` :
```css
@layer base {
  :root {
    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.145 0 0);
    --sidebar-primary: oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.97 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border: oklch(0.922 0 0);
    --sidebar-ring: oklch(0.708 0 0);
  }

  .dark {
    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: oklch(0.439 0 0);
  }
}
```

---

### Skeleton
Indicateur de chargement.

**Installation :**
```bash
npx shadcn@latest add skeleton
```

---

### Slider
Curseur de sélection numérique.

**Installation :**
```bash
npx shadcn@latest add slider
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-slider
```

---

### Sonner
Notifications toast élégantes.

**Installation :**
```bash
npx shadcn@latest add sonner
```

**Installation manuelle :**
```bash
npm install sonner next-themes
```

**Intégration :**
```tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

---

### Spinner
Indicateur de chargement rotatif.

**Installation :**
```bash
npx shadcn@latest add spinner
```

---

### Switch
Interrupteur on/off.

**Installation :**
```bash
npx shadcn@latest add switch
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-switch
```

---

### Table
Table de données.

**Installation :**
```bash
npx shadcn@latest add table
```

**Avec TanStack React Table :**
```bash
npx shadcn@latest add table
npm install @tanstack/react-table
```

---

### Tabs
Onglets de navigation.

**Installation :**
```bash
npx shadcn@latest add tabs
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-tabs
```

---

### Textarea
Zone de texte multiligne.

**Installation :**
```bash
npx shadcn@latest add textarea
```

---

### Toast
Notifications temporaires.

**Installation :**
```bash
npx shadcn@latest add toast
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-toast
```

**Intégration :**
```tsx
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
```

---

### Toggle
Bouton bascule.

**Installation :**
```bash
npx shadcn@latest add toggle
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-toggle
```

---

### Toggle Group
Groupe de boutons bascule.

**Installation :**
```bash
npx shadcn@latest add toggle-group
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-toggle-group
```

---

### Tooltip
Info-bulle au survol.

**Installation :**
```bash
npx shadcn@latest add tooltip
```

**Installation manuelle :**
```bash
npm install @radix-ui/react-tooltip
```

---

## Exemples d'utilisation

### Exemple Calendar

```tsx
const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
)
```

### Exemple Menubar

```tsx
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
```

## Ressources supplémentaires

- Consultez [03-theming.md](./03-theming.md) pour personnaliser l'apparence des composants
- Voir [04-cli.md](./04-cli.md) pour les commandes CLI avancées
- Référez-vous à [05-dark-mode.md](./05-dark-mode.md) pour implémenter le mode sombre


