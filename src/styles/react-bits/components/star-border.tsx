import type { CSSProperties, ReactNode } from 'react'

interface StarBorderProps {
  className?: string
  children?: ReactNode
  color?: string
  speed?: CSSProperties['animationDuration']
  thickness?: number
}

export const StarBorder = ({
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
}: StarBorderProps) => {
  return (
    <div
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{ padding: `${thickness}px 0` }}
    >
      <div
        className="animate-star-movement-bottom absolute bottom-[-11px] right-[-250%] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="animate-star-movement-top absolute left-[-250%] top-[-10px] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="relative z-[1] rounded-[20px] border border-border bg-card px-[26px] py-[16px] text-center text-[16px] text-foreground">
        {children}
      </div>
    </div>
  )
}
