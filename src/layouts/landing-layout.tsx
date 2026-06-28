import { BrandMark } from '@/components/brand-mark'
import { useBrand } from '@/components/brand-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import type { LayoutProps } from './types'

export function LandingLayout({ children, nav }: LayoutProps) {
  const brand = useBrand()
  const allItems = nav?.flatMap((g) => g.items) ?? []

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center gap-6 px-6">
          <BrandMark className="text-xl" />
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
          <p>&copy; 2024 {brand.name}. All rights reserved.</p>
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
