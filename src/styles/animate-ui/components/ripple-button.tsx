import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface RippleData {
  id: number
  x: number
  y: number
  size: number
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  rippleColor?: string
  className?: string
}

export const RippleButton = ({
  children,
  rippleColor = 'rgba(255, 255, 255, 0.5)',
  className,
  onClick,
  ...props
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<RippleData[]>([])
  const nextId = useRef(0)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 2
      const id = nextId.current++
      setRipples((prev) => [
        ...prev,
        {
          id,
          x: e.clientX - rect.left - size / 2,
          y: e.clientY - rect.top - size / 2,
          size,
        },
      ])
      setTimeout(
        () => setRipples((prev) => prev.filter((r) => r.id !== id)),
        700
      )
      onClick?.(e)
    },
    [onClick]
  )

  return (
    <button
      onClick={handleClick}
      className={cn(
        'relative overflow-hidden rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground',
        className
      )}
      {...props}
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="pointer-events-none absolute rounded-full"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              backgroundColor: rippleColor,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
