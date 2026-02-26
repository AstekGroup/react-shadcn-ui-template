import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { onboardingSteps } from '@/kits/saas/data/mock-data'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export function OnboardingWizard() {
  const completedCount = onboardingSteps.filter((s) => s.completed).length
  const totalCount = onboardingSteps.length
  const progressPercentage = Math.round((completedCount / totalCount) * 100)

  const currentStepIndex = onboardingSteps.findIndex((s) => !s.completed)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>
          Complete these steps to set up your workspace. {completedCount} of{' '}
          {totalCount} steps completed.
        </CardDescription>
        <div className="pt-2">
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {onboardingSteps.map((step, index) => {
            const isCurrent = index === currentStepIndex
            return (
              <div
                key={step.id}
                className={cn(
                  'flex items-start gap-4 rounded-lg border p-4 transition-colors',
                  isCurrent && 'border-primary bg-primary/5',
                  step.completed && 'bg-muted/50',
                )}
              >
                <div
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold',
                    step.completed
                      ? 'border-primary bg-primary text-primary-foreground'
                      : isCurrent
                        ? 'border-primary text-primary'
                        : 'border-muted-foreground/30 text-muted-foreground',
                  )}
                >
                  {step.completed ? (
                    <Check className="size-4" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="space-y-1">
                  <p
                    className={cn(
                      'text-sm font-medium leading-none',
                      step.completed && 'text-muted-foreground line-through',
                    )}
                  >
                    {step.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
