import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { useBrand } from './brand-provider'

/**
 * Renders the active brand (logo, or icon + name) as a link to the brand home.
 * Reads from <BrandProvider>; falls back to the neutral default brand.
 */
export function BrandMark({ className }: { className?: string }) {
  const brand = useBrand()

  return (
    <Link
      to={brand.homeHref}
      aria-label={brand.name}
      className={cn('inline-flex items-center gap-2', className)}
    >
      {brand.logo ?? (
        <>
          {brand.icon}
          <span className="text-lg font-bold tracking-tight">{brand.name}</span>
        </>
      )}
    </Link>
  )
}
