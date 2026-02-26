import type { KitManifest } from '@/kits/_types'
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  Settings,
  User,
} from 'lucide-react'

export const manifest: KitManifest = {
  id: 'dashboard',
  label: 'Dashboard',
  description: 'Admin dashboard with analytics and data tables',
  icon: LayoutDashboard,
  defaultLayout: 'sidebar',
  basePath: '/kit/dashboard',
  nav: [
    {
      label: 'Dashboard',
      items: [
        { title: 'Overview', url: '/kit/dashboard', icon: LayoutDashboard },
        { title: 'Analytics', url: '/kit/dashboard/analytics', icon: BarChart3 },
        { title: 'Reports', url: '/kit/dashboard/reports', icon: FileText },
      ],
    },
    {
      label: 'Account',
      items: [
        { title: 'Profile', url: '/kit/dashboard/profile', icon: User },
        { title: 'Settings', url: '/kit/dashboard/settings', icon: Settings },
      ],
    },
  ],
  routes: [],
}
