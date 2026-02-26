import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'react-router'
import type { LayoutProps } from './types'

export function LandingLayout({ children, nav, title }: LayoutProps) {
  const location = useLocation()
  const allItems = nav?.flatMap((g) => g.items) ?? []

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center gap-6 px-6">
          {title && (
            <Link to={location.pathname.split('/').slice(0, 3).join('/')}>
              <span className="text-xl font-bold">{title}</span>
            </Link>
          )}
          <nav className="hidden items-center gap-1 md:flex">
            {allItems.map((item) => (
              <Button key={item.url} variant="ghost" size="sm" asChild>
                <a href={item.url}>{item.title}</a>
              </Button>
            ))}
          </nav>
          <div className="flex-1" />
          <ModeToggle />
          <Button size="sm" asChild>
            <Link to="/auth/login">Sign in</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-8 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>&copy; 2024 {title ?? 'Company'}. All rights reserved.</p>
          <div className="flex-1" />
          <nav className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
