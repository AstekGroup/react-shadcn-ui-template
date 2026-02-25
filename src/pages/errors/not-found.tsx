import { Link } from 'react-router'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold tracking-tighter text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        Page not found
      </h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Go home</Link>
      </Button>
    </div>
  )
}
