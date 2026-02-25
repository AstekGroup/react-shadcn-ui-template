import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { FeatureUsageChart } from '@/kits/saas/components/feature-usage-chart'

export function FeaturesPage() {
  return (
    <PageShell>
      <PageHeader
        title="Feature Usage"
        description="Track your resource consumption and plan limits"
      />
      <FeatureUsageChart />
    </PageShell>
  )
}
