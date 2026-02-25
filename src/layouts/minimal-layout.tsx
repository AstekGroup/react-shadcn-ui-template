import { ModeToggle } from '@/components/mode-toggle'
import { Outlet } from 'react-router'

export function MinimalLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
      <Outlet />
    </div>
  )
}
