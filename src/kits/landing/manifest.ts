import type { KitManifest } from '@/kits/_types'
import { Globe } from 'lucide-react'

export const manifest: KitManifest = {
  id: 'landing',
  label: 'Landing Page',
  description:
    'Marketing landing page with hero, features, pricing, and testimonials',
  icon: Globe,
  defaultLayout: 'landing',
  basePath: '/kit/landing',
  nav: [
    {
      label: 'Sections',
      items: [
        { title: 'Features', url: '#features' },
        { title: 'Pricing', url: '#pricing' },
        { title: 'Testimonials', url: '#testimonials' },
        { title: 'FAQ', url: '#faq' },
      ],
    },
  ],
  routes: [],
}
