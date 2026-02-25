import type { ComponentType } from 'react'
import type { NavGroup } from '@/layouts/types'

export interface KitManifest {
  id: string
  label: string
  description: string
  icon: ComponentType<{ className?: string }>
  defaultLayout: 'sidebar' | 'topbar' | 'minimal' | 'landing'
  basePath: string
  nav: NavGroup[]
  routes: KitRoute[]
}

export interface KitRoute {
  path: string
  label: string
  component: ComponentType
}
