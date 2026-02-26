import type { ComponentType, ReactNode } from 'react'

export interface NavItem {
  title: string
  url: string
  icon?: ComponentType<{ className?: string }>
  badge?: string
  children?: NavItem[]
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

export interface LayoutConfig {
  id: string
  label: string
  description: string
  component: ComponentType<LayoutProps>
}

export interface LayoutProps {
  children: ReactNode
  nav?: NavGroup[]
  title?: string
}
