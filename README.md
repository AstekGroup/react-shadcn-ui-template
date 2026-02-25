# React + Shadcn UI Template

A modern, production-ready React template built with Vite, TypeScript, and Shadcn UI. Features a complete dashboard with dark mode, responsive design, and comprehensive component library.

![React](https://img.shields.io/badge/React-19.2.4-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.1-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- ⚡️ **Lightning Fast** - Built with Vite 7 for instant HMR
- 🎨 **Beautiful UI** - Pre-configured Shadcn UI components
- 🌓 **Dark Mode** - Full dark mode support with theme persistence
- 📱 **Responsive** - Mobile-first responsive design
- 🎯 **TypeScript** - Strict mode enabled for type safety
- 🎭 **Accessible** - ARIA-compliant components from Radix UI
- 📊 **Dashboard** - Complete dashboard with charts, tables, and stats
- 🔧 **Customizable** - Easy to customize with CSS variables
- 📦 **Monorepo Ready** - Easy integration into monorepo projects
- 🤖 **AI Ready** - Includes AGENTS.md for AI coding assistants

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (or 20+ recommended)
- pnpm 8+ (recommended) or npm/yarn

### Installation

```bash
# Clone the template
git clone <repository-url> my-project
cd my-project

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at http://localhost:5173

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Shadcn UI components (auto-generated)
│   │   ├── dashboard-layout.tsx
│   │   ├── stats-cards.tsx
│   │   ├── recent-activity.tsx
│   │   ├── analytics-chart.tsx
│   │   ├── quick-actions.tsx
│   │   ├── recent-transactions.tsx
│   │   ├── mode-toggle.tsx
│   │   └── theme-provider.tsx
│   ├── lib/                # Utilities and helpers
│   │   ├── utils.ts
│   │   └── mock-data.ts
│   ├── hooks/              # Custom React hooks
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── resources/              # Shadcn UI documentation
│   ├── 01-installation.md
│   ├── 02-components.md
│   ├── 03-theming.md
│   └── ...
├── public/                 # Static assets
├── AGENTS.md              # AI agent instructions
├── components.json        # Shadcn UI config
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Available Scripts

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Lint code with ESLint
pnpm type-check       # Check TypeScript types
pnpm format           # Format code with Prettier
```

## 🎨 Dashboard Features

The template includes a comprehensive dashboard with:

### 📊 Statistics Cards
- Total Revenue
- Subscriptions
- Sales
- Active Users

### 📈 Analytics
- Interactive charts with Recharts
- Bar charts for desktop/mobile data
- Responsive data visualization

### 📋 Recent Activity
- Sales list with customer details
- Avatar components
- Transaction amounts

### 💳 Transactions Table
- Invoice tracking
- Status badges
- Payment methods
- Sortable columns

### ⚡ Quick Actions
- Create new project
- Add team members
- Generate reports
- Settings access

### 🎨 UI Components
- Sidebar navigation
- Breadcrumbs
- Tabs for content organization
- Dropdown menus
- Avatars and badges
- Progress indicators
- Tooltips and dialogs

## 🌓 Dark Mode

Full dark mode support with:
- System preference detection
- Manual theme toggle
- Theme persistence in localStorage
- Smooth transitions
- All components dark mode compatible

Toggle dark mode using the button in the header (top right).

## 📦 Adding Components

The template has Shadcn UI configured and ready to use.

### Add New Components

```bash
# Add a single component
pnpm dlx shadcn@latest add button

# Add multiple components
pnpm dlx shadcn@latest add card table dialog
```

### Available Components

Over 50+ components available including:
- Forms: Input, Select, Textarea, Checkbox, Radio
- Data Display: Table, Card, Badge, Avatar
- Navigation: Tabs, Breadcrumb, Sidebar, Menu
- Feedback: Dialog, Toast, Alert, Progress
- And many more...

See [components documentation](./resources/02-components.md) for the full list.

## 🎨 Customization

### Theme Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark theme variables */
}
```

### Component Styling

All components use Tailwind CSS. Customize by:
1. Modifying utility classes directly
2. Editing component variants
3. Overriding CSS variables

See [theming documentation](./resources/03-theming.md) for details.

## 🔧 Monorepo Integration

This template is designed for easy monorepo integration.

### Option 1: Clone into Monorepo

```bash
# From monorepo root
cp -r path/to/react-shadcn-ui apps/my-app
cd apps/my-app
pnpm install
```

### Option 2: As a Workspace Package

1. Copy to `apps/` or `packages/`
2. Update `package.json`:
   ```json
   {
     "name": "@workspace/my-app"
   }
   ```
3. Run `pnpm install` from monorepo root

See [monorepo documentation](./resources/06-monorepo.md) for detailed setup.

## 🤖 AI Agent Support

This template includes an `AGENTS.md` file following the [agents.md](https://agents.md/) standard, providing:

- Project overview and setup instructions
- Code style guidelines
- Testing procedures
- Common tasks and troubleshooting
- Environment configuration
- Security considerations

AI coding agents can use this file for context-aware assistance.

## 📚 Documentation

Comprehensive documentation is available in the `/resources` folder:

- [Installation Guide](./resources/01-installation.md) - Setup and configuration
- [Components Reference](./resources/02-components.md) - All available components
- [Theming Guide](./resources/03-theming.md) - Customize colors and styles
- [CLI Reference](./resources/04-cli.md) - Command-line tools
- [Dark Mode Setup](./resources/05-dark-mode.md) - Theme configuration
- [Monorepo Integration](./resources/06-monorepo.md) - Workspace setup
- [Custom Registry](./resources/07-registry.md) - Create component registries

## 🛠️ Tech Stack

- **React 19.2.4** - Latest React with concurrent features
- **Vite 7.3.1** - Next generation frontend tooling
- **TypeScript 5.9.3** - JavaScript with syntax for types
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **Shadcn UI** - Re-usable components built with Radix UI
- **Recharts** - Composable charting library
- **Lucide React** - Beautiful & consistent icon toolkit
- **next-themes** - Perfect dark mode in React apps

## 🔒 Security

- TypeScript strict mode enabled
- ESLint with security rules
- Environment variables for sensitive data
- XSS protection via React JSX
- Regular dependency updates recommended

## 🤝 Contributing

Contributions are welcome! This is a template project, so:

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this template for any project, commercial or personal.

## 🙏 Credits

Built with these amazing open source projects:

- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://react.dev/) - UI library

## 📞 Support

For issues and questions:

- **Shadcn UI**: [Documentation](https://ui.shadcn.com/)
- **Vite**: [Documentation](https://vitejs.dev/)
- **React**: [Documentation](https://react.dev/)
- **Tailwind CSS**: [Documentation](https://tailwindcss.com/)

## 🚀 What's Next?

After setup, you can:

1. **Customize the dashboard** - Modify components in `src/components/`
2. **Add new pages** - Create new components and routes
3. **Connect to API** - Replace mock data with real API calls
4. **Deploy** - Build and deploy to your favorite platform
5. **Extend** - Add more Shadcn UI components as needed

## 💡 Tips

- Use `pnpm dev` for fast development with HMR
- Add components with `pnpm dlx shadcn@latest add [component]`
- Customize themes in `src/index.css`
- Check `AGENTS.md` for AI assistant guidance
- Read the documentation in `/resources` for detailed guides

---

**Happy coding! 🎉**

If you find this template helpful, please give it a ⭐
