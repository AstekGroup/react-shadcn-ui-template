import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

import { cn } from '@/lib/utils'

interface MagneticEffectProps {
  children: React.ReactNode
  className?: string
  strength?: number
  springConfig?: { stiffness?: number; damping?: number }
}

export const MagneticEffect = ({
  children,
  className,
  strength = 0.35,
  springConfig = { stiffness: 250, damping: 18 },
}: MagneticEffectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    rawY.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn('inline-block', className)}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
