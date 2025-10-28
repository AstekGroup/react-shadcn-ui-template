# Shadcn UI - Guide de la CLI

## Vue d'ensemble

La CLI shadcn/ui est un outil puissant pour gérer les composants dans votre projet. Elle permet d'initialiser, ajouter, visualiser et mettre à jour les composants facilement.

## Installation

La CLI s'utilise directement via `npx`, aucune installation globale n'est requise :

```bash
npx shadcn@latest [commande]
```

## Commandes principales

### init - Initialiser un projet

Initialise shadcn/ui dans votre projet en créant le fichier `components.json` et en configurant les dépendances.

```bash
npx shadcn@latest init
```

#### Options

```bash
Usage: shadcn init [options] [components...]

initialize your project and install dependencies

Arguments:
  components         the components to add or a url to the component.

Options:
  -y, --yes           skip confirmation prompt. (default: true)
  -d, --defaults      use default configuration. (default: false)
  -f, --force         force overwrite of existing configuration. (default: false)
  -c, --cwd <cwd>     the working directory. defaults to the current directory.
  -s, --silent        mute output. (default: false)
  --src-dir           use the src directory when creating a new project. (default: false)
  --no-src-dir        do not use the src directory when creating a new project.
  --css-variables     use css variables for theming. (default: true)
  --no-css-variables  do not use css variables for theming.
  -h, --help          display help for command
```

#### Exemples

```bash
# Initialisation avec valeurs par défaut
npx shadcn@latest init --defaults

# Initialisation avec configuration spécifique
npx shadcn@latest init --base-color slate --no-css-variables --template next

# Initialisation avec composants
npx shadcn@latest init button card dialog
```

### add - Ajouter des composants

Ajoute un ou plusieurs composants à votre projet.

```bash
npx shadcn@latest add [component]
```

#### Options

```bash
Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components         the components to add or a url to the component.

Options:
  -y, --yes           skip confirmation prompt. (default: false)
  -o, --overwrite     overwrite existing files. (default: false)
  -c, --cwd <cwd>     the working directory. defaults to the current directory.
  -a, --all           add all available components (default: false)
  -p, --path <path>   the path to add the component to.
  -s, --silent        mute output. (default: false)
  --src-dir           use the src directory when creating a new project. (default: false)
  --no-src-dir        do not use the src directory when creating a new project.
  --css-variables     use css variables for theming. (default: true)
  --no-css-variables  do not use css variables for theming.
  -h, --help          display help for command
```

#### Exemples

```bash
# Ajouter un composant
npx shadcn@latest add button

# Ajouter plusieurs composants
npx shadcn@latest add button card dialog

# Ajouter tous les composants
npx shadcn@latest add --all

# Ajouter depuis une URL
npx shadcn@latest add https://example.com/r/button.json

# Ajouter depuis un fichier local
npx shadcn@latest add ./local-registry/button.json

# Écraser les fichiers existants
npx shadcn@latest add button --overwrite
```

### view - Visualiser un composant

Affiche les informations détaillées sur un composant avant de l'installer.

```bash
npx shadcn view [component]
```

#### Exemple de sortie

```bash
npx shadcn view button

# Affiche :
# - Nom et description du composant
# - Dépendances npm requises
# - Dépendances du registre
# - Fichiers qui seront installés
# - Configuration Tailwind CSS nécessaire
```

#### Exemples

```bash
# Visualiser un composant du registre
npx shadcn@latest view button

# Visualiser plusieurs composants
npx shadcn@latest view @acme/button @lib/utils

# Visualiser depuis une URL
npx shadcn@latest view https://registry.example.com/button.json
```

### diff - Vérifier les mises à jour

Vérifie si vos composants ont des mises à jour disponibles.

```bash
npx shadcn diff
```

#### Exemples

```bash
# Vérifier tous les composants
npx shadcn diff

# Vérifier un composant spécifique
npx shadcn diff button
```

La commande affichera :
- Les composants avec des mises à jour disponibles
- Les fichiers modifiés
- Un diff détaillé des changements

## Installation depuis des registres

### Registre par défaut (shadcn/ui)

```bash
npx shadcn@latest add button
```

### Registres nommés

Vous pouvez installer depuis des registres personnalisés configurés dans `components.json` :

```bash
# Depuis un registre public
npx shadcn@latest add @v0/dashboard

# Depuis un registre privé
npx shadcn@latest add @private/button

# Depuis plusieurs registres
npx shadcn@latest add @acme/header @internal/auth-utils
```

### URLs directes

```bash
# Depuis une URL complète
npx shadcn@latest add https://registry.example.com/button.json

# Depuis un fichier local
npx shadcn@latest add ./local-registry/button.json
```

## Utilisation programmatique

### Initialiser un projet

```typescript
import { runInit } from "shadcn"

const config = await runInit({
  cwd: "/path/to/project",
  yes: true,
  defaults: false,
  force: false,
  silent: false,
  isNewProject: true,
  srcDir: true,
  cssVariables: true,
  baseStyle: true,
  baseColor: "slate",
  components: ["button", "card"],
})

console.log("Project initialized with config:")
console.log(config.style) // "new-york"
console.log(config.resolvedPaths.components) // "/path/to/project/src/components"
```

### Ajouter des composants

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

// Les composants sont maintenant installés avec :
// - Fichiers de composants dans components/ui/
// - Dépendances ajoutées à package.json
// - Configuration Tailwind mise à jour
// - Variables CSS ajoutées
```

### Résoudre les dépendances

```typescript
import { resolveRegistryItems } from "shadcn/registry"

// Résoudre toutes les dépendances pour un composant
const tree = await resolveRegistryItems(["dialog"], {
  config: {
    style: "new-york",
  },
})

// tree contient le composant dialog plus toutes ses dépendances
console.log(tree.files) // Tous les fichiers nécessaires
console.log(tree.dependencies) // ["@radix-ui/react-dialog", "@radix-ui/react-slot"]
console.log(tree.registryDependencies) // ["button"]
```

### Obtenir des informations sur le registre

```typescript
import {
  getShadcnRegistryIndex,
  getRegistryStyles,
  getRegistryBaseColors,
  getRegistryIcons,
} from "shadcn/registry"

// Obtenir tous les composants disponibles
const index = await getShadcnRegistryIndex()
index.forEach((item) => {
  console.log(`${item.name} - ${item.description}`)
})

// Obtenir les styles disponibles
const styles = await getRegistryStyles()
// Returns: [{ name: "default", label: "Default" }, { name: "new-york", label: "New York" }]

// Obtenir les couleurs de base disponibles
const colors = await getRegistryBaseColors()
// Returns: [{ name: "slate", label: "Slate" }, { name: "gray", label: "Gray" }, ...]

// Obtenir les bibliothèques d'icônes disponibles
const icons = await getRegistryIcons()
// Returns icon library configurations for lucide-react, radix-icons, etc.
```

## Configuration des registres personnalisés

Dans `components.json`, vous pouvez configurer des registres personnalisés :

### Registres de base

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/{name}.json",
    "@internal": "https://internal.company.com/{name}.json"
  }
}
```

Le placeholder `{name}` est automatiquement remplacé par le nom du composant.

### Registres avec authentification

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

### Registres avec paramètres

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

### Registres multiples

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

## Bonnes pratiques

### 1. Utiliser des versions spécifiques

Lors de l'installation de dépendances :

```json
{
  "dependencies": ["is-even@3.0.0", "motion"]
}
```

### 2. Vérifier avant d'écraser

Utilisez `--overwrite` avec précaution :

```bash
# Vérifier d'abord
npx shadcn diff button

# Puis écraser si nécessaire
npx shadcn@latest add button --overwrite
```

### 3. Utiliser --silent pour les scripts

Dans les scripts automatisés :

```bash
npx shadcn@latest add button --silent --yes
```

### 4. Prévisualiser avec view

Avant d'installer, visualisez le composant :

```bash
npx shadcn view button
npx shadcn@latest add button
```

## Dépannage

### Erreur : components.json introuvable

```bash
# Réinitialisez la configuration
npx shadcn@latest init
```

### Erreur : Composant déjà existant

```bash
# Utilisez --overwrite pour écraser
npx shadcn@latest add button --overwrite

# Ou supprimez manuellement le composant
rm -rf src/components/ui/button.tsx
npx shadcn@latest add button
```

### Erreur : Dépendances manquantes

```bash
# Réinstallez les dépendances
npm install

# Puis réessayez
npx shadcn@latest add button
```

### Erreur : Variables d'environnement manquantes

Les variables dans `${VARIABLE}` doivent être définies :

```bash
# Linux/Mac
export REGISTRY_TOKEN="your-token"

# Windows
set REGISTRY_TOKEN=your-token

# Ou dans .env
REGISTRY_TOKEN=your-token
```

## Ressources supplémentaires

- Consultez [06-registry.md](./06-registry.md) pour créer vos propres registres
- Voir [01-installation.md](./01-installation.md) pour l'installation initiale
- Référez-vous à [02-components.md](./02-components.md) pour la liste des composants


