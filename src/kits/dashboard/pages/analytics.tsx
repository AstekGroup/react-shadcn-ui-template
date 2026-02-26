import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { AnalyticsChart } from '../components/analytics-chart'
import { RecentActivity } from '../components/recent-activity'

export function Analytics() {
  return (
    <PageShell>
      <PageHeader
        title="Analytics"
        description="Detailed analytics and performance metrics."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <AnalyticsChart />
        <AnalyticsChart />
      </div>

      <RecentActivity />
    </PageShell>
  )
}
