import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight, Globe, Minimize2, PanelLeft, PanelTop } from 'lucide-react'
import type { ComponentType } from 'react'
import { Link } from 'react-router'

interface LayoutInfo {
  id: string
  label: string
  description: string
  icon: ComponentType<{ className?: string }>
  features: string[]
}

const layouts: LayoutInfo[] = [
  {
    id: 'sidebar',
    label: 'Sidebar',
    description:
      'Collapsible sidebar with header, navigation groups, and user menu',
    icon: PanelLeft,
    features: ['Collapsible sidebar', 'Grouped navigation', 'User dropdown'],
  },
  {
    id: 'topbar',
    label: 'Top Navigation',
    description: 'Horizontal navigation bar with responsive mobile drawer',
    icon: PanelTop,
    features: ['Horizontal nav', 'Mobile drawer', 'Responsive design'],
  },
  {
    id: 'landing',
    label: 'Landing Page',
    description: 'Marketing layout with header, footer, and backdrop blur',
    icon: Globe,
    features: ['Marketing header', 'Footer section', 'Backdrop blur'],
  },
  {
    id: 'minimal',
    label: 'Minimal',
    description: 'Centered content layout for auth and error pages',
    icon: Minimize2,
    features: ['Centered layout', 'No navigation', 'Clean focus'],
  },
]

export function LayoutsShowcase() {
  return (
    <div className="container mx-auto space-y-8 px-6 py-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Layouts</h1>
        <p className="text-muted-foreground">
          4 interchangeable layouts that can be used with any starter kit.
          Preview each layout with demo content and navigation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {layouts.map((layout) => {
          const Icon = layout.icon

          return (
            <Card
              key={layout.id}
              className="group relative overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{layout.label}</CardTitle>
                    <CardDescription>{layout.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {layout.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full" variant="outline">
                  <Link to={`/showcase/layouts/${layout.id}`}>
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
