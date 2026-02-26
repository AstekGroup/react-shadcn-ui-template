import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  cursorClassName?: string
  loop?: boolean
  loopDelay?: number
}

export const TypingText = ({
  text,
  speed = 60,
  className,
  cursorClassName,
  loop = false,
  loopDelay = 1500,
}: TypingTextProps) => {
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'waiting' | 'deleting'>(
    'typing'
  )

  useEffect(() => {
    if (phase === 'typing') {
      if (displayed.length < text.length) {
        const t = setTimeout(
          () => setDisplayed(text.slice(0, displayed.length + 1)),
          speed
        )
        return () => clearTimeout(t)
      } else if (loop) {
        const t = setTimeout(() => setPhase('waiting'), loopDelay)
        return () => clearTimeout(t)
      }
    } else if (phase === 'waiting') {
      const t = setTimeout(() => setPhase('deleting'), 200)
      return () => clearTimeout(t)
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        const t = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          speed / 2
        )
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('typing'), 50)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, phase, text, speed, loop, loopDelay])

  return (
    <span className={cn('inline', className)}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
        className={cn(
          'ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[1px] rounded-sm bg-current align-middle',
          cursorClassName
        )}
      />
    </span>
  )
}
