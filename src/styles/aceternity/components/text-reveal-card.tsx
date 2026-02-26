import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface TextRevealCardProps {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
}

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: TextRevealCardProps) => {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [left, setLeft] = useState(0)
  const [localWidth, setLocalWidth] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } =
        cardRef.current.getBoundingClientRect()
      setLeft(left)
      setLocalWidth(localWidth)
    }
  }, [])

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault()
    const { clientX } = event
    if (cardRef.current) {
      const relativeX = clientX - left
      setWidthPercentage((relativeX / localWidth) * 100)
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false)
    setWidthPercentage(0)
  }

  function mouseEnterHandler() {
    setIsMouseOver(true)
  }

  const rotateDeg = (widthPercentage - 50) * 0.1

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn(
        'relative w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#1d1c20] p-8',
        className
      )}
    >
      {children}
      <div className="relative flex h-40 items-center overflow-hidden">
        <motion.div
          style={{ width: '100%' }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: 'inset(0 100% 0 0)',
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 bg-[#1d1c20] will-change-transform"
        >
          <p
            style={{ textShadow: '4px 4px 15px rgba(0,0,0,0.5)' }}
            className="bg-linear-to-b from-white to-neutral-300 bg-clip-text py-10 text-base font-bold text-transparent sm:text-[3rem]"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-50 h-40 w-[8px] bg-linear-to-b from-transparent via-neutral-200 to-transparent"
        />
        <div className="overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p
            className="bg-clip-text py-10 text-base font-bold text-transparent sm:text-[3rem]"
            style={{ backgroundImage: 'linear-gradient(#999, #888)' }}
          >
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  )
}

interface TextRevealCardTitleProps {
  children: React.ReactNode
  className?: string
}

export const TextRevealCardTitle = ({
  children,
  className,
}: TextRevealCardTitleProps) => {
  return (
    <h2 className={cn('mb-2 text-lg font-bold text-white', className)}>
      {children}
    </h2>
  )
}

interface TextRevealCardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const TextRevealCardDescription = ({
  children,
  className,
}: TextRevealCardDescriptionProps) => {
  return <p className={cn('text-sm text-[#a9a9a9]', className)}>{children}</p>
}

function generateStarData() {
  return [...Array(80)].map((_, i) => ({
    id: i,
    animateTop: `calc(${Math.random() * 100}% + ${Math.random() * 4 - 2}px)`,
    animateLeft: `calc(${Math.random() * 100}% + ${Math.random() * 4 - 2}px)`,
    opacity: Math.random(),
    duration: Math.random() * 10 + 20,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }))
}

const starData = generateStarData()

const MemoizedStars = () => {
  return (
    <div className="absolute inset-0">
      {starData.map((star) => (
        <motion.span
          key={`star-${star.id}`}
          animate={{
            top: star.animateTop,
            left: star.animateLeft,
            opacity: star.opacity,
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: '2px',
            height: '2px',
            backgroundColor: 'white',
            borderRadius: '50%',
            zIndex: 1,
          }}
          className="inline-block"
        />
      ))}
    </div>
  )
}
