import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Outlet } from 'react-router'

export function ShowcaseLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center gap-4 px-6">
          <span className="text-lg font-bold">Template Showcase</span>
          <div className="flex-1" />
          <ModeToggle />
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </header>
      <main className="container mx-auto flex-1 px-6 py-8">
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
