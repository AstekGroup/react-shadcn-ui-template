import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface ShineEffectProps {
  children: React.ReactNode
  className?: string
  duration?: number
  shineOpacity?: number
}

export const ShineEffect = ({
  children,
  className,
  duration = 0.7,
  shineOpacity = 0.35,
}: ShineEffectProps) => {
  return (
    <motion.div
      className={cn('relative overflow-hidden', className)}
      whileHover="hover"
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 h-full w-2/5"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,${shineOpacity}), transparent)`,
          left: '-50%',
        }}
        variants={{
          hover: {
            left: '150%',
            transition: { duration, ease: 'easeInOut' },
          },
        }}
      />
    </motion.div>
  )
}
