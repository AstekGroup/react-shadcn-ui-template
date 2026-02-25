import { Outlet, useSearchParams } from 'react-router'
import { SidebarLayout } from './sidebar-layout'
import { TopbarLayout } from './topbar-layout'
import { LandingLayout } from './landing-layout'
import type { KitManifest } from '@/kits/_types'
import type { ComponentType } from 'react'
import type { LayoutProps } from './types'

// Kit manifests are lazy-loaded
import { manifest as dashboardManifest } from '@/kits/dashboard/manifest'
import { manifest as saasManifest } from '@/kits/saas/manifest'
import { manifest as ecommerceManifest } from '@/kits/ecommerce/manifest'
import { manifest as landingManifest } from '@/kits/landing/manifest'

const kitManifests: Record<string, KitManifest> = {
  dashboard: dashboardManifest,
  saas: saasManifest,
  ecommerce: ecommerceManifest,
  landing: landingManifest,
}

const layoutComponents: Record<string, ComponentType<LayoutProps>> = {
  sidebar: SidebarLayout,
  topbar: TopbarLayout,
  landing: LandingLayout,
}

interface KitLayoutResolverProps {
  kitId: string
}

export function KitLayoutResolver({ kitId }: KitLayoutResolverProps) {
  const [searchParams] = useSearchParams()
  const manifest = kitManifests[kitId]

  if (!manifest) {
    return <div>Kit not found: {kitId}</div>
  }

  const layoutParam = searchParams.get('layout')
  const layoutId =
    layoutParam && layoutParam in layoutComponents
      ? layoutParam
      : manifest.defaultLayout

  const LayoutComponent = layoutComponents[layoutId]

  if (!LayoutComponent) {
    return <div>Layout not found: {layoutId}</div>
  }

  return (
    <LayoutComponent nav={manifest.nav} title={manifest.label}>
      <Outlet />
    </LayoutComponent>
  )
}
