import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

interface UsageMeterProps {
  name: string
  used: number
  limit: number
  unit: string
}

export function UsageMeter({ name, used, limit, unit }: UsageMeterProps) {
  const isUnlimited = limit === -1
  const percentage = isUnlimited ? 0 : Math.round((used / limit) * 100)

  const getColor = () => {
    if (isUnlimited) return 'text-muted-foreground'
    if (percentage >= 80) return 'text-red-500'
    if (percentage >= 60) return 'text-yellow-500'
    return 'text-green-500'
  }

  const getProgressClass = () => {
    if (isUnlimited) return '[&>[data-slot=progress-indicator]]:bg-muted-foreground'
    if (percentage >= 80)
      return '[&>[data-slot=progress-indicator]]:bg-red-500'
    if (percentage >= 60)
      return '[&>[data-slot=progress-indicator]]:bg-yellow-500'
    return '[&>[data-slot=progress-indicator]]:bg-green-500'
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className={cn('tabular-nums', getColor())}>
          {isUnlimited ? (
            <>
              {used.toLocaleString()} {unit}{' '}
              <span className="text-muted-foreground">(Unlimited)</span>
            </>
          ) : (
            <>
              {used.toLocaleString()} / {limit.toLocaleString()} {unit}
            </>
          )}
        </span>
      </div>
      <Progress
        value={isUnlimited ? 100 : percentage}
        className={cn('h-2', getProgressClass())}
      />
    </div>
  )
}
