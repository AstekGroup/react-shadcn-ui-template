import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

interface StarsDef {
  x: number
  y: number
  r: number
  alpha: number
  speed: number
}

function createStars(count: number, w: number, h: number): StarsDef[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.5 + 0.3,
    alpha: Math.random(),
    speed: (Math.random() * 0.015 + 0.004) * (Math.random() < 0.5 ? 1 : -1),
  }))
}

interface StarsBackgroundProps {
  className?: string
  starCount?: number
  starColor?: string
  backgroundColor?: string
}

export const StarsBackground = ({
  className,
  starCount = 120,
  starColor = '#ffffff',
  backgroundColor = 'transparent',
}: StarsBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<StarsDef[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      starsRef.current = createStars(starCount, canvas.width, canvas.height)
    }

    setSize()

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      starsRef.current.forEach((star) => {
        star.alpha += star.speed
        if (star.alpha >= 1) {
          star.alpha = 1
          star.speed *= -1
        }
        if (star.alpha <= 0) {
          star.alpha = 0
          star.speed *= -1
        }

        const hex = Math.floor(star.alpha * 255)
          .toString(16)
          .padStart(2, '0')
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `${starColor}${hex}`
        ctx.fill()
      })
      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    const ro = new ResizeObserver(setSize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [starCount, starColor])

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 h-full w-full', className)}
      style={{ backgroundColor }}
    />
  )
}
