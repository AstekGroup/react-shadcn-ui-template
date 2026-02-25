import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnalyticsChart } from '../components/analytics-chart'
import { QuickActions } from '../components/quick-actions'
import { RecentActivity } from '../components/recent-activity'
import { RecentTransactions } from '../components/recent-transactions'
import { StatsCards } from '../components/stats-cards'

export function DashboardHome() {
  return (
    <PageShell>
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's an overview of your application."
      />

      <StatsCards />

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4">
              <AnalyticsChart />
            </div>
            <div className="col-span-3">
              <RecentActivity />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4">
              <RecentTransactions />
            </div>
            <div className="col-span-3">
              <QuickActions />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <AnalyticsChart />
            <RecentActivity />
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <RecentTransactions />
        </TabsContent>
      </Tabs>
    </PageShell>
  )
}
