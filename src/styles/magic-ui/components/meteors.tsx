import { useState } from 'react'

import { cn } from '@/lib/utils'

interface MeteorsProps {
  number?: number
  angle?: number
  className?: string
}

function generateMeteorStyles(number: number, angle: number) {
  return [...new Array(number)].map(() => ({
    '--angle': `${-angle}deg`,
    top: '-5%',
    left: `${Math.floor(Math.random() * 800)}px`,
    animationDelay: `${(Math.random() * 1 + 0.2).toFixed(2)}s`,
    animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
  }))
}

export function Meteors({ number = 20, angle = 215, className }: MeteorsProps) {
  const [meteorStyles] = useState(() => generateMeteorStyles(number, angle))

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style as React.CSSProperties}
          className={cn(
            'animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]',
            className
          )}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-linear-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  )
}
