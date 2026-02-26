import type { KitManifest } from '@/kits/_types'
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Rocket,
  BarChart3,
  Settings,
  User,
} from 'lucide-react'

export const manifest: KitManifest = {
  id: 'saas',
  label: 'SaaS',
  description: 'SaaS application with users, billing, and analytics',
  icon: Rocket,
  defaultLayout: 'sidebar',
  basePath: '/kit/saas',
  nav: [
    {
      label: 'SaaS',
      items: [
        { title: 'Overview', url: '/kit/saas', icon: LayoutDashboard },
        { title: 'Users', url: '/kit/saas/users', icon: Users },
        { title: 'Billing', url: '/kit/saas/billing', icon: CreditCard },
        { title: 'Onboarding', url: '/kit/saas/onboarding', icon: Rocket },
        { title: 'Features', url: '/kit/saas/features', icon: BarChart3 },
      ],
    },
    {
      label: 'Account',
      items: [
        { title: 'Profile', url: '/kit/saas/profile', icon: User },
        { title: 'Settings', url: '/kit/saas/settings', icon: Settings },
      ],
    },
  ],
  routes: [],
}
