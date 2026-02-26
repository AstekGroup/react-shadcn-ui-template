import { cn } from '@/lib/utils'

interface PriceDisplayProps {
  price: number
  originalPrice?: number
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
}

const originalSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export function PriceDisplay({
  price,
  originalPrice,
  size = 'md',
}: PriceDisplayProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null

  return (
    <div className="flex items-center gap-2">
      <span className={cn('font-bold', sizeClasses[size])}>
        ${price.toFixed(2)}
      </span>
      {originalPrice && (
        <>
          <span
            className={cn(
              'text-muted-foreground line-through',
              originalSizeClasses[size],
            )}
          >
            ${originalPrice.toFixed(2)}
          </span>
          {discount && (
            <span
              className={cn(
                'font-medium text-green-600 dark:text-green-400',
                originalSizeClasses[size],
              )}
            >
              -{discount}%
            </span>
          )}
        </>
      )}
    </div>
  )
}
