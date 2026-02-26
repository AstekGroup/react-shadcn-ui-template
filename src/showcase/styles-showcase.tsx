import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { styleVariants } from '@/styles/registry'
import type { StyleId } from '@/styles/types'
import {
  ArrowRight,
  Paintbrush,
  Play,
  Shapes,
  Sparkles,
  Wand2,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { Link } from 'react-router'

const styleIcons: Record<StyleId, ComponentType<{ className?: string }>> = {
  default: Paintbrush,
  'react-bits': Sparkles,
  'magic-ui': Wand2,
  aceternity: Shapes,
  'animate-ui': Play,
}

const styles = Object.values(styleVariants)

export function StylesShowcase() {
  return (
    <div className="container mx-auto space-y-8 px-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Visual Styles</h1>
        <p className="text-muted-foreground">
          5 visual style variants that change how components look and feel.
          Preview each style with a component sampler.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {styles.map((style) => {
          const Icon = styleIcons[style.id]

          return (
            <Card
              key={style.id}
              className="group relative overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{style.label}</CardTitle>
                    <CardDescription>{style.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full" variant="outline">
                  <Link to={`/showcase/styles/${style.id}`}>
                    Preview
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
