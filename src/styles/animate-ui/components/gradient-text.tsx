import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
}

export const GradientText = ({
  children,
  className,
  colors = ['#a855f7', '#3b82f6', '#10b981', '#f59e0b', '#a855f7'],
  animationSpeed = 8,
}: GradientTextProps) => {
  const gradient = colors.join(', ')

  return (
    <span
      className={cn(
        'animate-gradient bg-clip-text text-transparent [background-size:200%_auto]',
        className
      )}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradient})`,
        animationDuration: `${animationSpeed}s`,
      }}
    >
      {children}
    </span>
  )
}
