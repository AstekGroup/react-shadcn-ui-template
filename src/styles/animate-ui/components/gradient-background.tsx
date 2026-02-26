import { cn } from '@/lib/utils'

interface GradientBackgroundProps {
  children?: React.ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  angle?: number
}

export const GradientBackground = ({
  children,
  className,
  colors = ['#4158d0', '#c850c0', '#ffcc70', '#4158d0'],
  animationSpeed = 10,
  angle = 45,
}: GradientBackgroundProps) => {
  return (
    <div
      className={cn('relative h-full w-full overflow-hidden', className)}
      style={{
        backgroundImage: `linear-gradient(${angle}deg, ${colors.join(', ')})`,
        backgroundSize: '300% 300%',
        animation: `gradient ${animationSpeed}s ease infinite`,
      }}
    >
      {children}
    </div>
  )
}
