# Documentation Shadcn UI

Bienvenue dans la documentation complète de shadcn/ui ! Cette ressource regroupe toutes les informations nécessaires pour utiliser efficacement shadcn/ui dans vos projets React.

## 📚 Table des matières

### [01 - Installation](./01-installation.md)
Guide complet pour installer et configurer shadcn/ui dans votre projet.

**Contenu :**
- Vue d'ensemble et caractéristiques
- Installation automatique vs manuelle
- Configuration par framework (Next.js, Vite, Remix, Astro)
- Ajouter des composants
- Configuration pour JavaScript
- Utilisation programmatique
- Dépannage

### [02 - Composants](./02-components.md)
Liste exhaustive de tous les composants disponibles avec leurs commandes d'installation.

**Contenu :**
- Composants de base (Accordion, Alert, Avatar, Badge, Button, etc.)
- Composants de formulaire (Calendar, Checkbox, Input, Select, etc.)
- Composants de navigation (Breadcrumb, Menubar, Navigation Menu, Tabs, etc.)
- Composants de feedback (Alert Dialog, Dialog, Drawer, Toast, etc.)
- Composants de données (Chart, Table, Data Table, etc.)
- Instructions d'installation CLI et manuelle
- Exemples d'utilisation

### [03 - Theming](./03-theming.md)
Guide complet pour personnaliser l'apparence de vos composants.

**Contenu :**
- Configuration du theming
- Variables CSS disponibles
- Convention de nommage
- Palettes de couleurs de base (Neutral, Slate, Gray, Zinc, Stone)
- Personnalisation avancée
- Configuration Tailwind CSS
- Thèmes Tailwind v4
- Styles disponibles (Default, New York)

### [04 - CLI](./04-cli.md)
Documentation détaillée sur l'utilisation de la ligne de commande shadcn.

**Contenu :**
- Commandes principales (init, add, view, diff)
- Options et paramètres
- Installation depuis des registres
- Utilisation programmatique
- Configuration des registres personnalisés
- Bonnes pratiques
- Dépannage

### [05 - Dark Mode](./05-dark-mode.md)
Guide pour implémenter le mode sombre dans différents frameworks.

**Contenu :**
- Implémentation pour Next.js
- Implémentation pour Vite (React)
- Implémentation pour Remix
- Implémentation pour Astro
- Configuration des variables CSS
- Personnalisation avancée
- Bonnes pratiques
- Dépannage

### [06 - Monorepo](./06-monorepo.md)
Configuration de shadcn/ui dans un monorepo.

**Contenu :**
- Structure recommandée
- Configuration initiale
- Configuration de components.json
- Configuration TypeScript
- Ajouter des composants
- Importer les composants
- Configuration Tailwind
- Scripts package.json
- Turbo Configuration
- Bonnes pratiques
- Dépannage

### [07 - Registry](./07-registry.md)
Créer et utiliser des registres de composants personnalisés.

**Contenu :**
- Qu'est-ce qu'un registre ?
- Structure d'un registre
- Créer un registre basique
- Types de ressources
- Dépendances
- Configuration Tailwind
- Créer un thème personnalisé
- Utiliser un registre personnalisé
- Authentification
- Héberger un registre
- Exemples avancés
- Bonnes pratiques

## 🚀 Démarrage rapide

### Installation rapide

```bash
npx shadcn@latest init
npx shadcn@latest add button card
```

### Premier composant

```tsx
import { Button } from "@/components/ui/button"

export default function MyComponent() {
  return <Button>Click me!</Button>
}
```

## 📖 À propos de shadcn/ui

**shadcn/ui** est une collection de composants UI magnifiquement conçus et accessibles que vous pouvez copier et coller dans vos applications.

### Caractéristiques principales

- ✨ **Trust Score : 10/10**
- 🎨 **1251 exemples de code**
- ♿ **Accessibilité native**
- 🎭 **Personnalisable à l'infini**
- 🔓 **Code open source**
- 🎯 **Compatible multi-frameworks**
- 🌓 **Support natif du dark mode**
- 📦 **Pas de dépendance externe lourde**

### Philosophie

shadcn/ui n'est pas une bibliothèque de composants traditionnelle. C'est une **plateforme de distribution de code** qui vous donne un contrôle total sur vos composants :

- Vous possédez le code
- Vous le personnalisez selon vos besoins
- Aucune dépendance cachée
- Intégration parfaite avec votre projet

## 🛠️ Technologies utilisées

- **React** - Bibliothèque UI
- **Tailwind CSS** - Styling
- **Radix UI** - Primitives accessibles
- **TypeScript** - Type safety
- **Lucide React** - Icônes
- **Class Variance Authority** - Gestion des variantes

## 📋 Frameworks supportés

- Next.js (App Router & Pages Router)
- Vite
- Remix
- Astro
- Gatsby
- Laravel (avec Inertia)
- React Router
- TanStack Router

## 🎯 Cas d'utilisation

### Projets personnels
Idéal pour créer rapidement des interfaces modernes et accessibles.

### Applications d'entreprise
Partagez des composants via des registres privés dans votre monorepo.

### Bibliothèques de composants
Créez et distribuez votre propre design system.

### Prototypage rapide
Utilisez les composants pré-construits pour valider rapidement vos idées.

## 🔗 Liens utiles

- [Site officiel](https://ui.shadcn.com)
- [GitHub](https://github.com/shadcn-ui/ui)
- [Twitter](https://twitter.com/shadcn)
- [Discord](https://discord.gg/shadcn)

## 🤝 Contribution

shadcn/ui est un projet open source. Les contributions sont les bienvenues !

## 📄 License

MIT License - Vous êtes libre d'utiliser, modifier et distribuer le code.

## 🆘 Support

### Questions fréquentes

**Q: shadcn/ui est-il une bibliothèque de composants ?**
R: Non, c'est une plateforme de distribution de code. Vous copiez le code dans votre projet.

**Q: Puis-je l'utiliser dans un projet commercial ?**
R: Oui, absolument ! La license MIT l'autorise.

**Q: Puis-je personnaliser les composants ?**
R: Oui, c'est même encouragé ! Vous possédez le code.

**Q: Est-ce compatible avec mon framework ?**
R: Si votre framework supporte React, oui !

**Q: Puis-je utiliser seulement certains composants ?**
R: Oui, installez uniquement ce dont vous avez besoin.

### Ressources supplémentaires

- Consultez les fichiers de documentation pour des guides détaillés
- Rejoignez la communauté Discord pour de l'aide
- Consultez le repository GitHub pour des exemples

## 🎓 Parcours d'apprentissage recommandé

1. **Débutant**
   - Lisez [01-installation.md](./01-installation.md)
   - Explorez [02-components.md](./02-components.md)
   - Essayez quelques composants de base

2. **Intermédiaire**
   - Personnalisez avec [03-theming.md](./03-theming.md)
   - Maîtrisez la [04-cli.md](./04-cli.md)
   - Implémentez le [05-dark-mode.md](./05-dark-mode.md)

3. **Avancé**
   - Configurez un [06-monorepo.md](./06-monorepo.md)
   - Créez vos [07-registry.md](./07-registry.md)
   - Contribuez à la communauté

## 📞 Contact

Pour toute question ou suggestion concernant cette documentation :
- Ouvrez une issue sur GitHub
- Contactez l'équipe shadcn/ui
- Rejoignez la communauté Discord

---

**Dernière mise à jour :** Octobre 2025
**Version de shadcn/ui :** Latest
**Auteur de la documentation :** Documentation générée via Context7

Bonne utilisation de shadcn/ui ! 🎉


