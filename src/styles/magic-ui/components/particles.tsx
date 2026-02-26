import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils'

interface MousePosition {
  x: number
  y: number
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
}

interface Circle {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace('#', '')
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((c) => c + c)
      .join('')
  }
  const bigint = parseInt(hex, 16)
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255]
}

export function Particles({
  className,
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = '#ffffff',
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mousePosition = useMousePosition()
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const rafId = useRef<number | null>(null)
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

  const rgb = hexToRgb(color)
  const rgbRef = useRef(rgb)
  const paramsRef = useRef({ staticity, ease, vx, vy, size, quantity })

  useEffect(() => {
    rgbRef.current = rgb
  }, [rgb])

  useEffect(() => {
    paramsRef.current = { staticity, ease, vx, vy, size, quantity }
  }, [staticity, ease, vx, vy, size, quantity])

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d')
    }

    const circleParams = (): Circle => {
      const x = Math.floor(Math.random() * canvasSize.current.w)
      const y = Math.floor(Math.random() * canvasSize.current.h)
      const pSize = Math.floor(Math.random() * 2) + paramsRef.current.size
      const alpha = 0
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
      const dx = (Math.random() - 0.5) * 0.1
      const dy = (Math.random() - 0.5) * 0.1
      const magnetism = 0.1 + Math.random() * 4
      return {
        x,
        y,
        translateX: 0,
        translateY: 0,
        size: pSize,
        alpha,
        targetAlpha,
        dx,
        dy,
        magnetism,
      }
    }

    const drawCircle = (circle: Circle, update = false) => {
      if (context.current) {
        const { x, y, translateX, translateY, size: s, alpha } = circle
        context.current.translate(translateX, translateY)
        context.current.beginPath()
        context.current.arc(x, y, s, 0, 2 * Math.PI)
        context.current.fillStyle = `rgba(${rgbRef.current.join(', ')}, ${alpha})`
        context.current.fill()
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0)
        if (!update) {
          circles.current.push(circle)
        }
      }
    }

    const resizeCanvas = () => {
      if (canvasContainerRef.current && canvasRef.current && context.current) {
        circles.current.length = 0
        canvasSize.current.w = canvasContainerRef.current.offsetWidth
        canvasSize.current.h = canvasContainerRef.current.offsetHeight
        canvasRef.current.width = canvasSize.current.w * dpr
        canvasRef.current.height = canvasSize.current.h * dpr
        canvasRef.current.style.width = `${canvasSize.current.w}px`
        canvasRef.current.style.height = `${canvasSize.current.h}px`
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
    }

    const drawParticles = () => {
      circles.current.length = 0
      for (let i = 0; i < paramsRef.current.quantity; i++) {
        const circle = circleParams()
        drawCircle(circle)
      }
    }

    const remapValue = (
      value: number,
      start1: number,
      end1: number,
      start2: number,
      end2: number
    ): number => {
      const remapped =
        ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
      return remapped > 0 ? remapped : 0
    }

    const animate = () => {
      if (context.current) {
        context.current.clearRect(
          0,
          0,
          canvasSize.current.w,
          canvasSize.current.h
        )
        const params = paramsRef.current
        circles.current.forEach((circle, i) => {
          const edge = [
            circle.x + circle.translateX - circle.size,
            canvasSize.current.w - circle.x - circle.translateX - circle.size,
            circle.y + circle.translateY - circle.size,
            canvasSize.current.h - circle.y - circle.translateY - circle.size,
          ]
          const closestEdge = edge.reduce((a, b) => Math.min(a, b))
          const remapClosestEdge = parseFloat(
            remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
          )
          if (remapClosestEdge > 1) {
            circle.alpha += 0.02
            if (circle.alpha > circle.targetAlpha) {
              circle.alpha = circle.targetAlpha
            }
          } else {
            circle.alpha = circle.targetAlpha * remapClosestEdge
          }
          circle.x += circle.dx + params.vx
          circle.y += circle.dy + params.vy
          circle.translateX +=
            (mouse.current.x / (params.staticity / circle.magnetism) -
              circle.translateX) /
            params.ease
          circle.translateY +=
            (mouse.current.y / (params.staticity / circle.magnetism) -
              circle.translateY) /
            params.ease

          drawCircle(circle, true)

          if (
            circle.x < -circle.size ||
            circle.x > canvasSize.current.w + circle.size ||
            circle.y < -circle.size ||
            circle.y > canvasSize.current.h + circle.size
          ) {
            circles.current.splice(i, 1)
            const newCircle = circleParams()
            drawCircle(newCircle)
          }
        })
      }
      rafId.current = window.requestAnimationFrame(animate)
    }

    resizeCanvas()
    drawParticles()
    rafId.current = window.requestAnimationFrame(animate)

    const handleResize = () => {
      resizeCanvas()
      drawParticles()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [dpr, color, refresh])

  useEffect(() => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = mousePosition.x - rect.left - w / 2
      const y = mousePosition.y - rect.top - h / 2
      const inside =
        mousePosition.x >= rect.left &&
        mousePosition.x <= rect.right &&
        mousePosition.y >= rect.top &&
        mousePosition.y <= rect.bottom
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }
  }, [mousePosition])

  return (
    <div
      className={cn('pointer-events-none', className)}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}
