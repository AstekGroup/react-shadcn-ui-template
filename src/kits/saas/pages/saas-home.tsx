import { PageHeader } from '@/pages/_shared/page-header'
import { PageShell } from '@/pages/_shared/page-shell'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SubscriptionCard } from '@/kits/saas/components/subscription-card'
import { FeatureUsageChart } from '@/kits/saas/components/feature-usage-chart'
import { Users, CreditCard, DollarSign, TrendingDown } from 'lucide-react'

const stats = [
  {
    title: 'Total Users',
    value: '2,842',
    change: '+12.5% from last month',
    icon: Users,
  },
  {
    title: 'Active Subscriptions',
    value: '1,429',
    change: '+8.2% from last month',
    icon: CreditCard,
  },
  {
    title: 'MRR',
    value: '$48,350',
    change: '+15.3% from last month',
    icon: DollarSign,
  },
  {
    title: 'Churn Rate',
    value: '2.4%',
    change: '-0.3% from last month',
    icon: TrendingDown,
  },
]

export function SaasHome() {
  return (
    <PageShell>
      <PageHeader
        title="Overview"
        description="Monitor your SaaS metrics and subscription health"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="text-muted-foreground size-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-muted-foreground text-xs">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <SubscriptionCard />
        <FeatureUsageChart />
      </div>
    </PageShell>
  )
}
