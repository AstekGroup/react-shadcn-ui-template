import { motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline'
}

export const LiquidButton = ({
  children,
  className,
  variant = 'outline',
  ...props
}: LiquidButtonProps) => {
  const isOutline = variant === 'outline'

  return (
    <motion.button
      className={cn(
        'group relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold',
        isOutline
          ? 'border-2 border-primary text-primary'
          : 'border-2 border-foreground text-foreground',
        className
      )}
      whileHover="hover"
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      <motion.span
        className={cn(
          'absolute inset-0 origin-bottom rounded-full',
          isOutline ? 'bg-primary' : 'bg-foreground'
        )}
        initial={{ scaleY: 0 }}
        variants={{
          hover: {
            scaleY: 1,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformOrigin: 'bottom' }}
      />
      <motion.span
        className="relative z-10"
        variants={{
          hover: {
            color: isOutline
              ? 'var(--color-primary-foreground)'
              : 'var(--color-background)',
            transition: { duration: 0.15, delay: 0.15 },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}
