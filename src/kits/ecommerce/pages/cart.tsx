import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { CartSheet } from '../components/cart-sheet'

export function Cart() {
  return (
    <PageShell>
      <PageHeader
        title="Shopping Cart"
        description="Review your items before checkout."
      />
      <CartSheet />
    </PageShell>
  )
}
