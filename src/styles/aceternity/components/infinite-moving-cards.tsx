import { useCallback, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

interface InfiniteMovingCardsProps {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const initialized = useRef(false)

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--animation-direction',
        direction === 'left' ? 'forwards' : 'reverse'
      )
    }
  }, [direction])

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const durations: Record<string, string> = {
        fast: '20s',
        normal: '40s',
        slow: '80s',
      }
      containerRef.current.style.setProperty(
        '--animation-duration',
        durations[speed] ?? '40s'
      )
    }
  }, [speed])

  useEffect(() => {
    if (initialized.current) return
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      initialized.current = true
      scrollerRef.current.classList.add('animate-scroll')
    }
  }, [getDirection, getSpeed])

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 gap-4 py-4',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#1a1a2e,#16162a)]"
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <span className="relative z-20 text-sm font-normal leading-[1.6] text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-normal leading-[1.6] text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm font-normal leading-[1.6] text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
