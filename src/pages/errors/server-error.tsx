import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'

export function ServerErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-bold tracking-tighter text-destructive">
        500
      </h1>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight">
        Server error
      </h2>
      <p className="mt-2 max-w-md text-muted-foreground">
        Something went wrong on our end. Please try again later or contact
        support if the problem persists.
      </p>
      <Button onClick={() => navigate(0)} className="mt-8">
        Try again
      </Button>
    </div>
  )
}
