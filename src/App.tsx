import { AnalyticsChart } from '@/components/analytics-chart'
import { DashboardLayout } from '@/components/dashboard-layout'
import { QuickActions } from '@/components/quick-actions'
import { RecentActivity } from '@/components/recent-activity'
import { RecentTransactions } from '@/components/recent-transactions'
import { StatsCards } from '@/components/stats-cards'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function App() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your application.
          </p>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Tabs Section */}
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
      </div>
    </DashboardLayout>
  )
}

export default App
