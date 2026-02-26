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
import { plans } from '@/kits/saas/data/mock-data'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const currentPlanId = 'pro'

export function PlanSelector() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => {
        const isCurrent = plan.id === currentPlanId
        return (
          <Card
            key={plan.id}
            className={cn(
              'relative',
              plan.popular && 'border-primary shadow-md',
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge>Popular</Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-foreground text-3xl font-bold">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground"> / month</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="text-primary size-4 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {isCurrent ? (
                <Button variant="outline" className="w-full" disabled>
                  Current Plan
                </Button>
              ) : (
                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  className="w-full"
                >
                  {plan.price > plans.find((p) => p.id === currentPlanId)!.price
                    ? 'Upgrade'
                    : 'Downgrade'}
                </Button>
              )}
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
