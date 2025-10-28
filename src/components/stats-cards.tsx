import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { stats } from '@/lib/mock-data'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'

const iconMap = {
  DollarSign,
  Users,
  CreditCard,
  Activity,
}

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap]
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

