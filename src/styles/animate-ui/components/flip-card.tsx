import { useState } from 'react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface FlipCardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  flipDirection?: 'horizontal' | 'vertical'
  triggerOnHover?: boolean
}

export const FlipCard = ({
  front,
  back,
  className,
  flipDirection = 'horizontal',
  triggerOnHover = false,
}: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false)
  const axis = flipDirection === 'horizontal' ? 'rotateY' : 'rotateX'

  return (
    <div
      className={cn('relative cursor-pointer', className)}
      style={{ perspective: '1000px' }}
      onClick={triggerOnHover ? undefined : () => setFlipped((p) => !p)}
      onMouseEnter={triggerOnHover ? () => setFlipped(true) : undefined}
      onMouseLeave={triggerOnHover ? () => setFlipped(false) : undefined}
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ [axis]: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        {/* Back */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            transform: `${axis}(180deg)`,
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  )
}
