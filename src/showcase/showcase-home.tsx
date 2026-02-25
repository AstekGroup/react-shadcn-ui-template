import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { manifest as dashboardManifest } from '@/kits/dashboard/manifest'
import { manifest as ecommerceManifest } from '@/kits/ecommerce/manifest'
import { manifest as landingManifest } from '@/kits/landing/manifest'
import { manifest as saasManifest } from '@/kits/saas/manifest'
import { ArrowRight, Layers, Lock, Palette, ServerCrash } from 'lucide-react'
import { Link } from 'react-router'
import { KitCard } from './components/kit-card'

const kits = [dashboardManifest, saasManifest, ecommerceManifest, landingManifest]

const sharedPages = [
  {
    title: 'Authentication',
    description: 'Login, signup, and forgot password pages',
    icon: Lock,
    links: [
      { label: 'Login', url: '/auth/login' },
      { label: 'Signup', url: '/auth/signup' },
      { label: 'Forgot Password', url: '/auth/forgot-password' },
    ],
  },
  {
    title: 'Error Pages',
    description: 'Error handling pages for common HTTP errors',
    icon: ServerCrash,
    links: [
      { label: '404 Not Found', url: '/error/404' },
      { label: '500 Server Error', url: '/error/500' },
    ],
  },
]

export function ShowcaseHome() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-4 text-center">
        <Badge variant="secondary" className="mb-2">
          v2.0 Template System
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          React + Shadcn UI Templates
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          A collection of starter kits, layouts, and visual variations built with
          React, TypeScript, Tailwind CSS, and Shadcn UI.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: 'Starter Kits', value: '4' },
          { label: 'Layouts', value: '4' },
          { label: 'Visual Styles', value: '5' },
          { label: 'Pages', value: '20+' },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      {/* Starter Kits */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Layers className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Starter Kits</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {kits.map((kit) => (
            <KitCard key={kit.id} manifest={kit} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Shared Pages */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Palette className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Shared Pages</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {sharedPages.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <section.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {section.links.map((link) => (
                    <Button
                      key={link.url}
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <Link to={link.url}>
                        {link.label}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
