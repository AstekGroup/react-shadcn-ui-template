import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { OrderTable } from '../components/order-table'

export function Orders() {
  return (
    <PageShell>
      <PageHeader
        title="Order History"
        description="View and track your past orders."
      />
      <OrderTable />
    </PageShell>
  )
}
