import { BackToShowcase } from '@/showcase/components/back-to-showcase'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LandingLayout } from '@/layouts/landing-layout'
import { MinimalLayout } from '@/layouts/minimal-layout'
import { SidebarLayout } from '@/layouts/sidebar-layout'
import { TopbarLayout } from '@/layouts/topbar-layout'
import type { LayoutProps, NavGroup } from '@/layouts/types'
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  LayoutDashboard,
  Rocket,
  Settings,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { Navigate, useParams } from 'react-router'

const appNav: NavGroup[] = [
  {
    label: 'Main',
    items: [
      { title: 'Dashboard', url: '#', icon: LayoutDashboard },
      { title: 'Analytics', url: '#', icon: BarChart3 },
      { title: 'Settings', url: '#', icon: Settings },
    ],
  },
  {
    label: 'Content',
    items: [
      { title: 'Pages', url: '#', icon: FileText },
      { title: 'Users', url: '#', icon: Users },
    ],
  },
]

const landingNav: NavGroup[] = [
  {
    label: 'Sections',
    items: [
      { title: 'Features', url: '#features' },
      { title: 'Pricing', url: '#pricing' },
      { title: 'Testimonials', url: '#testimonials' },
      { title: 'FAQ', url: '#faq' },
    ],
  },
]

const layoutMap: Record<
  string,
  {
    component: ComponentType<LayoutProps>
    title: string
    nav: NavGroup[]
    content: ComponentType
  }
> = {
  sidebar: {
    component: SidebarLayout,
    title: 'Sidebar Layout',
    nav: appNav,
    content: AppDemoContent,
  },
  topbar: {
    component: TopbarLayout,
    title: 'Top Navigation Layout',
    nav: appNav,
    content: AppDemoContent,
  },
  landing: {
    component: LandingLayout,
    title: 'Acme Inc',
    nav: landingNav,
    content: LandingDemoContent,
  },
  minimal: {
    component: MinimalLayout,
    title: 'Minimal Layout',
    nav: [],
    content: MinimalDemoContent,
  },
}

const stats = [
  { label: 'Total Users', value: '2,847', change: '+12.5%' },
  { label: 'Revenue', value: '$48,290', change: '+8.2%' },
  { label: 'Active Sessions', value: '1,423', change: '+3.1%' },
]

function AppDemoContent() {
  return (
    <div className="space-y-6 p-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          This is a preview with demo content to showcase the layout.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardDescription>{stat.label}</CardDescription>
              <CardTitle className="text-2xl">{stat.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-1 text-sm text-emerald-600">
                <TrendingUp className="h-4 w-4" />
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest events across your application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              'New user registered — john@example.com',
              'Payment received — $299.00',
              'Report generated — Monthly Analytics',
              'Settings updated — Notification preferences',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-md border p-3 text-sm"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Optimized for performance with lazy loading and code splitting.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built-in authentication flows and security best practices.',
  },
  {
    icon: Rocket,
    title: 'Ready to Ship',
    description: 'Production-ready templates you can deploy in minutes.',
  },
]

function LandingDemoContent() {
  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center md:py-32">
        <Badge variant="secondary" className="mb-4">
          Now in Beta
        </Badge>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Build faster with ready-made templates
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          A collection of beautifully designed, accessible components and
          layouts. Copy, paste, and ship your next project in record time.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Demo
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Features</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="mb-2 h-8 w-8 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            {[
              {
                name: 'Free',
                price: '$0',
                features: [
                  '1 project',
                  'Basic components',
                  'Community support',
                ],
              },
              {
                name: 'Pro',
                price: '$29',
                features: [
                  'Unlimited projects',
                  'All components',
                  'Priority support',
                ],
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: [
                  'Custom integrations',
                  'Dedicated support',
                  'SLA guarantee',
                ],
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={plan.name === 'Pro' ? 'border-primary' : ''}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold">{plan.price}</div>
                  <CardDescription>
                    {plan.name === 'Enterprise' ? 'Contact us' : 'per month'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {f}
                    </div>
                  ))}
                  <Button
                    className="mt-4 w-full"
                    variant={plan.name === 'Pro' ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t bg-muted/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Testimonials</h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {[
              {
                quote:
                  'Shipped our MVP in half the time. The templates are incredibly well-structured.',
                author: 'Sarah Chen',
                role: 'CTO at StartupX',
              },
              {
                quote:
                  'The best component library I have used. Clean code, great documentation.',
                author: 'Marcus Johnson',
                role: 'Lead Developer',
              },
            ].map((t) => (
              <Card key={t.author}>
                <CardContent className="pt-6">
                  <p className="mb-4 italic text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto max-w-2xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is this free to use?',
                a: 'Yes, the free tier includes all basic components and one project.',
              },
              {
                q: 'Can I use this in commercial projects?',
                a: 'Absolutely. All plans include a commercial license.',
              },
              {
                q: 'Do you offer custom development?',
                a: 'Yes, our Enterprise plan includes custom integration support.',
              },
            ].map((item) => (
              <div key={item.q} className="space-y-2">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function MinimalDemoContent() {
  return (
    <div className="w-full max-w-md space-y-6 text-center">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Minimal Layout</h1>
        <p className="text-sm text-muted-foreground">
          Centered content area used for authentication and error pages.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Sample Content</CardTitle>
          <CardDescription>
            This layout centers content without navigation elements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Ideal for login forms, signup flows, and error pages where you want
            the user focused on a single task.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export function LayoutPreview() {
  const { layoutId } = useParams<{ layoutId: string }>()

  if (!layoutId || !layoutMap[layoutId]) {
    return <Navigate to="/showcase/layouts" replace />
  }

  const {
    component: LayoutComponent,
    title,
    nav,
    content: Content,
  } = layoutMap[layoutId]

  const isMinimal = layoutId === 'minimal'

  return (
    <>
      {isMinimal ? (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
          <Content />
        </div>
      ) : (
        <LayoutComponent nav={nav} title={title}>
          <Content />
        </LayoutComponent>
      )}
      <BackToShowcase />
    </>
  )
}
