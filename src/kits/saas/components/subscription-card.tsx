import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { UsageMeter } from '@/kits/saas/components/usage-meter'
import { featureUsage } from '@/kits/saas/data/mock-data'
import { CreditCard } from 'lucide-react'

export function SubscriptionCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <CreditCard className="text-muted-foreground size-5" />
          <CardTitle>Current Subscription</CardTitle>
        </div>
        <CardDescription>
          Manage your plan and billing information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-baseline justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Pro</span>
              <Badge>Active</Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              $29.00 / month
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Next billing date</p>
            <p className="text-muted-foreground text-sm">February 1, 2024</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-medium">Usage Summary</h4>
          {featureUsage.slice(0, 3).map((feature) => (
            <UsageMeter
              key={feature.name}
              name={feature.name}
              used={feature.used}
              limit={feature.limit}
              unit={feature.unit}
            />
          ))}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button>Change Plan</Button>
        <Button variant="outline">Cancel Subscription</Button>
      </CardFooter>
    </Card>
  )
}
