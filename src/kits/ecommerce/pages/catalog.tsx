import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { ProductGrid } from '../components/product-grid'

export function Catalog() {
  return (
    <PageShell>
      <PageHeader
        title="Catalog"
        description="Browse our collection of products."
      />
      <ProductGrid />
    </PageShell>
  )
}
