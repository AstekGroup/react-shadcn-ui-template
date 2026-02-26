import { ModeToggle } from '@/components/mode-toggle'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router'
import type { LayoutProps } from './types'

export function TopbarLayout({ children, nav, title }: LayoutProps) {
  const location = useLocation()
  const isMobile = useIsMobile()
  const allItems = nav?.flatMap((g) => g.items) ?? []

  const navLinks = (
    <nav className="flex items-center gap-1">
      {allItems.map((item) => (
        <Button
          key={item.url}
          variant="ghost"
          size="sm"
          asChild
          className={cn(
            location.pathname === item.url &&
              'bg-accent text-accent-foreground'
          )}
        >
          <Link to={item.url}>
            {item.icon && <item.icon className="mr-1.5 h-4 w-4" />}
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )

  return (
    <div className="flex h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center gap-4 px-6">
          {title && (
            <h1 className="text-lg font-semibold shrink-0">{title}</h1>
          )}
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetTitle>Navigation</SheetTitle>
                <div className="mt-6 flex flex-col gap-2">
                  {allItems.map((item) => (
                    <Button
                      key={item.url}
                      variant="ghost"
                      className="justify-start"
                      asChild
                    >
                      <Link to={item.url}>
                        {item.icon && (
                          <item.icon className="mr-2 h-4 w-4" />
                        )}
                        {item.title}
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            navLinks
          )}
          <div className="flex-1" />
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  )
}
