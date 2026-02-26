import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

export function BackToShowcase() {
  return (
    <Link
      to="/"
      className="fixed bottom-5 left-5 z-50 flex items-center gap-1.5 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-accent hover:text-foreground"
    >
      <ArrowLeft className="h-3 w-3" />
      Showcase
    </Link>
  )
}
