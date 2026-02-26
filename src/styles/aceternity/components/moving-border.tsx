import { useRef } from 'react'
import { useAnimationFrame } from 'motion/react'

import { cn } from '@/lib/utils'

interface MovingBorderProps {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
  className?: string
  containerClassName?: string
  borderClassName?: string
  as?: React.ElementType
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = '30%',
  ry = '30%',
  className,
  containerClassName,
  borderClassName,
  as: Component = 'button',
}: MovingBorderProps) => {
  const pathRef = useRef<SVGRectElement>(null)
  const progress = useRef(0)
  const circleRef = useRef<SVGCircleElement>(null)

  useAnimationFrame((time) => {
    const path = pathRef.current
    const circle = circleRef.current
    if (!path || !circle) return

    const length = path.getTotalLength()
    if (length) {
      progress.current = (time / duration) % 1
      const point = path.getPointAtLength(progress.current * length)
      circle.setAttribute('cx', String(point.x))
      circle.setAttribute('cy', String(point.y))
    }
  })

  return (
    <Component
      className={cn(
        'relative h-12 overflow-hidden bg-transparent p-[1px] text-sm',
        containerClassName
      )}
    >
      <div className="absolute inset-0" style={{ borderRadius: 'inherit' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx={rx}
            ry={ry}
            ref={pathRef}
          />
          <circle
            ref={circleRef}
            r="80"
            cx="0"
            cy="0"
            fill="url(#gradient)"
            className={cn('opacity-80', borderClassName)}
          />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="hsl(var(--primary))" offset="0%" />
              <stop stopColor="transparent" offset="100%" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div
        className={cn(
          'relative z-10 flex h-full w-full items-center justify-center rounded-[inherit] border border-border bg-card px-6 py-2 text-sm font-medium text-foreground antialiased backdrop-blur-xl',
          className
        )}
      >
        {children}
      </div>
    </Component>
  )
}
