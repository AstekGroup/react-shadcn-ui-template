import { useEffect, useReducer, useState } from 'react'

import { cn } from '@/lib/utils'

interface GlowingStarsCardProps {
  className?: string
  children?: React.ReactNode
}

export const GlowingStarsCard = ({
  className,
  children,
}: GlowingStarsCardProps) => {
  const [mouseEnter, setMouseEnter] = useState(false)

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        'h-full max-h-[20rem] w-full max-w-md rounded-xl border border-[#eaeaea] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 dark:border-neutral-600',
        className
      )}
    >
      <div className="flex items-center justify-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-4">{children}</div>
    </div>
  )
}

interface GlowingStarsDescriptionProps {
  className?: string
  children?: React.ReactNode
}

export const GlowingStarsDescription = ({
  className,
  children,
}: GlowingStarsDescriptionProps) => {
  return <p className={cn('text-sm text-white/70', className)}>{children}</p>
}

interface GlowingStarsTitleProps {
  className?: string
  children?: React.ReactNode
}

export const GlowingStarsTitle = ({
  className,
  children,
}: GlowingStarsTitleProps) => {
  return (
    <h2 className={cn('text-base font-bold text-white', className)}>
      {children}
    </h2>
  )
}

function calculateGlowingStars(total: number): number[] {
  const newStars: number[] = []
  for (let i = 0; i < 5; i++) {
    newStars.push(Math.floor(Math.random() * total))
  }
  return newStars
}

const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 108
  const columns = 18

  const [glowingStars, refresh] = useReducer(
    () => calculateGlowingStars(stars),
    stars,
    calculateGlowingStars
  )

  useEffect(() => {
    const interval = setInterval(refresh, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="h-48 w-full p-1"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1px',
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx)
        const delay = (starIdx % 10) * 0.1

        return (
          <div
            key={`matrix-col-${starIdx}`}
            className="relative flex items-center justify-center"
          >
            <Star isGlowing={isGlowing} delay={delay} />
            {mouseEnter && isGlowing && <Glow delay={delay} />}
          </div>
        )
      })}
    </div>
  )
}

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <div
      className={cn(
        'relative z-20 h-[1px] w-[1px] rounded-full bg-[#666]',
        'transition-all duration-1000',
        isGlowing && 'z-20 h-[3px] w-[3px] bg-[#fff] shadow-[0_0_10px_#fff]'
      )}
      style={{
        transitionDelay: `${delay}s`,
      }}
    />
  )
}

const Glow = ({ delay }: { delay: number }) => {
  return (
    <div
      className="absolute left-1/2 z-10 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#fff] shadow-[0_0_15px_5px_rgba(185,210,255,0.5)] blur-[1px]"
      style={{
        animation: 'twinkle 2s ease-in-out infinite',
        animationDelay: `${delay}s`,
      }}
    />
  )
}
