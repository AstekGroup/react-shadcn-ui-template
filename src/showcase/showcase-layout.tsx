import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import {
  Github,
  Home,
  LayoutDashboard,
  Lock,
  Menu,
  Palette,
  PanelLeft,
  Play,
  Rocket,
  ServerCrash,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Link, Outlet, useLocation } from 'react-router'

const kits = [
  {
    label: 'Dashboard',
    description: 'Admin dashboard with analytics',
    url: '/kit/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'SaaS',
    description: 'SaaS app with users & billing',
    url: '/kit/saas',
    icon: Rocket,
  },
  {
    label: 'E-commerce',
    description: 'Store with products & cart',
    url: '/kit/ecommerce',
    icon: ShoppingBag,
  },
  {
    label: 'Landing',
    description: 'Marketing page with pricing',
    url: '/kit/landing',
    icon: Sparkles,
  },
]

const pages = [
  {
    group: 'Authentication',
    icon: Lock,
    items: [
      { label: 'Login', url: '/auth/login' },
      { label: 'Signup', url: '/auth/signup' },
      { label: 'Forgot Password', url: '/auth/forgot-password' },
    ],
  },
  {
    group: 'Error Pages',
    icon: ServerCrash,
    items: [
      { label: '404 Not Found', url: '/error/404' },
      { label: '500 Server Error', url: '/error/500' },
    ],
  },
]

const triggerClasses =
  'h-9 bg-transparent px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground data-[state=open]:bg-accent/50 data-[state=open]:text-foreground'

const linkClasses =
  'h-9 rounded-md bg-transparent px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground data-[active=true]:text-foreground'

function DesktopNav() {
  const location = useLocation()

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClasses}>
            Kits
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-1 p-2 md:grid-cols-2">
              {kits.map((kit) => (
                <li key={kit.url}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={kit.url}
                      className="flex select-none items-start gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <kit.icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">{kit.label}</div>
                        <p className="mt-1 text-xs leading-snug text-muted-foreground">
                          {kit.description}
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/showcase/layouts"
              className={cn(
                linkClasses,
                'inline-flex items-center justify-center'
              )}
              data-active={
                location.pathname.startsWith('/showcase/layouts') || undefined
              }
            >
              Layouts
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/showcase/styles"
              className={cn(
                linkClasses,
                'inline-flex items-center justify-center'
              )}
              data-active={
                location.pathname.startsWith('/showcase/styles') || undefined
              }
            >
              Styles
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/showcase/get-started"
              className={cn(
                linkClasses,
                'inline-flex items-center justify-center'
              )}
              data-active={
                location.pathname === '/showcase/get-started' || undefined
              }
            >
              Get Started
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClasses}>
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[260px] p-2">
              {pages.map((group, groupIdx) => (
                <div key={group.group}>
                  {groupIdx > 0 && <Separator className="my-1.5" />}
                  <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    <group.icon className="h-3.5 w-3.5" />
                    {group.group}
                  </div>
                  <ul className="grid gap-0.5">
                    {group.items.map((item) => (
                      <li key={item.url}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.url}
                            className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            {item.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Template Showcase</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          <SheetClose asChild>
            <Link
              to="/"
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent"
            >
              <Home className="h-4 w-4 text-muted-foreground" />
              Home
            </Link>
          </SheetClose>

          <Separator className="my-2" />

          <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
            Starter Kits
          </div>
          {kits.map((kit) => (
            <SheetClose key={kit.url} asChild>
              <Link
                to={kit.url}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-accent"
              >
                <kit.icon className="h-4 w-4 text-muted-foreground" />
                {kit.label}
              </Link>
            </SheetClose>
          ))}

          <Separator className="my-2" />

          <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground">
            Showcase
          </div>
          <SheetClose asChild>
            <Link
              to="/showcase/layouts"
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-accent"
            >
              <PanelLeft className="h-4 w-4 text-muted-foreground" />
              Layouts
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/showcase/styles"
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-accent"
            >
              <Palette className="h-4 w-4 text-muted-foreground" />
              Styles
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              to="/showcase/get-started"
              className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent"
            >
              <Play className="h-4 w-4 text-primary" />
              <span className="text-primary">Get Started</span>
            </Link>
          </SheetClose>

          <Separator className="my-2" />

          {pages.map((group) => (
            <div key={group.group}>
              <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <group.icon className="h-3.5 w-3.5" />
                {group.group}
              </div>
              {group.items.map((item) => (
                <SheetClose key={item.url} asChild>
                  <Link
                    to={item.url}
                    className="block rounded-md px-3 py-2.5 text-sm hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export function ShowcaseLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-14 items-center px-6">
          {/* Left — Mobile hamburger + Logo */}
          <div className="flex items-center gap-3">
            <MobileNav />
            <Link to="/" className="text-base font-semibold tracking-tight">
              Template Showcase
            </Link>
          </div>

          {/* Center — Desktop nav with left separator */}
          <Separator
            orientation="vertical"
            className="mx-4 hidden h-5 md:block"
          />
          <DesktopNav />

          {/* Right — Actions */}
          <div className="ml-auto flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 text-sm text-muted-foreground">
          <p>Built with React, Shadcn UI, and Tailwind CSS</p>
          <p>v2.0</p>
        </div>
      </footer>
    </div>
  )
}
