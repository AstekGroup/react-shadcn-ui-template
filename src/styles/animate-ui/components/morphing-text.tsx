import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface MorphingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export const MorphingText = ({
  texts,
  className,
  interval = 2500,
}: MorphingTextProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, interval)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <span className={cn('relative inline-block', className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.94 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.06 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
