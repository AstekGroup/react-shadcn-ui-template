import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { RecentTransactions } from '../components/recent-transactions'

export function Reports() {
  return (
    <PageShell>
      <PageHeader
        title="Reports"
        description="View and manage your transaction reports."
      />

      <RecentTransactions />
    </PageShell>
  )
}
