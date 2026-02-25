import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { PlanSelector } from '@/kits/saas/components/plan-selector'
import { BillingHistory } from '@/kits/saas/components/billing-history'

export function BillingPage() {
  return (
    <PageShell>
      <PageHeader
        title="Billing"
        description="Manage your subscription plan and view payment history"
      />
      <PlanSelector />
      <BillingHistory />
    </PageShell>
  )
}
