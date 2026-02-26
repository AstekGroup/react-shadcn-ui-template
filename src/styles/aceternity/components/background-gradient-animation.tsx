import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string
  gradientBackgroundEnd?: string
  firstColor?: string
  secondColor?: string
  thirdColor?: string
  fourthColor?: string
  fifthColor?: string
  pointerColor?: string
  size?: string
  blendingValue?: string
  children?: React.ReactNode
  className?: string
  interactive?: boolean
  containerClassName?: string
}

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = 'rgb(108, 0, 162)',
  gradientBackgroundEnd = 'rgb(0, 17, 82)',
  firstColor = '18, 113, 255',
  secondColor = '221, 74, 255',
  thirdColor = '100, 220, 255',
  fourthColor = '200, 50, 50',
  fifthColor = '180, 180, 50',
  pointerColor = '140, 100, 255',
  size = '80%',
  blendingValue = 'hard-light',
  children,
  className,
  interactive = true,
  containerClassName,
}: BackgroundGradientAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const curX = useRef(0)
  const curY = useRef(0)
  const tgX = useRef(0)
  const tgY = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.style.setProperty('--gradient-background-start', gradientBackgroundStart)
    el.style.setProperty('--gradient-background-end', gradientBackgroundEnd)
    el.style.setProperty('--first-color', firstColor)
    el.style.setProperty('--second-color', secondColor)
    el.style.setProperty('--third-color', thirdColor)
    el.style.setProperty('--fourth-color', fourthColor)
    el.style.setProperty('--fifth-color', fifthColor)
    el.style.setProperty('--pointer-color', pointerColor)
    el.style.setProperty('--size', size)
    el.style.setProperty('--blending-value', blendingValue)
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ])

  useEffect(() => {
    if (!interactive) return
    let animationFrameId: number

    function move() {
      if (!interactiveRef.current) return
      curX.current += (tgX.current - curX.current) / 20
      curY.current += (tgY.current - curY.current) / 20
      interactiveRef.current.style.transform = `translate(${Math.round(curX.current)}px, ${Math.round(curY.current)}px)`
      animationFrameId = requestAnimationFrame(move)
    }

    animationFrameId = requestAnimationFrame(move)
    return () => cancelAnimationFrame(animationFrameId)
  }, [interactive])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.parentElement?.getBoundingClientRect()
      if (rect) {
        tgX.current = event.clientX - rect.left
        tgY.current = event.clientY - rect.top
      }
    }
  }

  const circleClasses =
    'absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] rounded-full opacity-100 [mix-blend-mode:var(--blending-value)]'

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative h-full w-full overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]',
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={cn('absolute inset-0', className)}
        style={{ filter: 'url(#blurMe) blur(40px)' }}
      >
        <div
          className={cn(
            circleClasses,
            'animate-aurora-first bg-[radial-gradient(circle_at_center,rgba(var(--first-color),0.8)_0,rgba(var(--first-color),0)_50%)_no-repeat]'
          )}
        />
        <div
          className={cn(
            circleClasses,
            'animate-aurora-second bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0,rgba(var(--second-color),0)_50%)_no-repeat]'
          )}
        />
        <div
          className={cn(
            circleClasses,
            'animate-aurora-third bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0,rgba(var(--third-color),0)_50%)_no-repeat]'
          )}
        />
        <div
          className={cn(
            circleClasses,
            'animate-aurora-fourth bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0,rgba(var(--fourth-color),0)_50%)_no-repeat]'
          )}
        />
        <div
          className={cn(
            circleClasses,
            'animate-aurora-fifth bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0,rgba(var(--fifth-color),0)_50%)_no-repeat]'
          )}
        />

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              circleClasses,
              'opacity-70 bg-[radial-gradient(circle_at_center,rgba(var(--pointer-color),0.8)_0,rgba(var(--pointer-color),0)_50%)_no-repeat]'
            )}
          />
        )}
      </div>
      {children && <div className="absolute inset-0 z-10">{children}</div>}
    </div>
  )
}
