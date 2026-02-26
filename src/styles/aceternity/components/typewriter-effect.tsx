import { motion, stagger, useAnimate, useInView } from 'motion/react'
import { useEffect } from 'react'

import { cn } from '@/lib/utils'

interface TypewriterEffectProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(''),
  }))

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: 'easeInOut',
        }
      )
    }
  }, [isInView, animate])

  return (
    <div
      className={cn(
        'text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl',
        className
      )}
    >
      <div className="inline" ref={scope}>
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={cn(
                  'hidden text-foreground opacity-0',
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block h-4 w-[4px] rounded-sm bg-primary md:h-6 lg:h-10',
          cursorClassName
        )}
      />
    </div>
  )
}
