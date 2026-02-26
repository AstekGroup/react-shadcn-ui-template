import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { UsageMeter } from '@/kits/saas/components/usage-meter'
import { featureUsage } from '@/kits/saas/data/mock-data'
import { BarChart3 } from 'lucide-react'

export function FeatureUsageChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <BarChart3 className="text-muted-foreground size-5" />
          <CardTitle>Feature Usage</CardTitle>
        </div>
        <CardDescription>
          Monitor your resource consumption across all features
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2">
          {featureUsage.map((feature) => (
            <Card key={feature.name} className="py-4">
              <CardContent className="px-4">
                <UsageMeter
                  name={feature.name}
                  used={feature.used}
                  limit={feature.limit}
                  unit={feature.unit}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
