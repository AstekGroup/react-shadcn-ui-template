import { createContext, useContext, type ReactNode } from 'react'

export interface BrandConfig {
  /** Product / application name shown in headers, footers and titles. */
  name: string
  /** Full logo node (e.g. an <img> or inline SVG) for wide brand slots. */
  logo?: ReactNode
  /** Compact icon/mark for tight slots (collapsed sidebar, mobile header). */
  icon?: ReactNode
  /** Where the brand/logo links to. Defaults to '/'. */
  homeHref: string
}

const defaultBrand: BrandConfig = {
  name: 'Company',
  homeHref: '/',
}

const BrandContext = createContext<BrandConfig>(defaultBrand)

export function BrandProvider({
  brand,
  children,
}: {
  brand?: Partial<BrandConfig>
  children: ReactNode
}) {
  const value: BrandConfig = { ...defaultBrand, ...brand }
  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
}

/**
 * Read the active brand configuration. Falls back to a neutral default brand
 * when no <BrandProvider> is mounted, so layouts keep working standalone.
 */
export function useBrand(): BrandConfig {
  return useContext(BrandContext)
}
