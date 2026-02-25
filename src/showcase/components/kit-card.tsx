import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { KitManifest } from '@/kits/_types'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

interface KitCardProps {
  manifest: KitManifest
}

export function KitCard({ manifest }: KitCardProps) {
  const Icon = manifest.icon

  return (
    <Card className="group relative overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">{manifest.label}</CardTitle>
            <CardDescription>{manifest.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            Layout: {manifest.defaultLayout}
          </span>
          <span className="text-xs text-muted-foreground">
            &bull; {manifest.nav.flatMap((g) => g.items).length} pages
          </span>
        </div>
        <Button asChild className="mt-4 w-full" variant="outline">
          <Link to={manifest.basePath}>
            Explore
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
