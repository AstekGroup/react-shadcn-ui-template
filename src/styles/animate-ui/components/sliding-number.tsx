import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/lib/utils'

interface DigitSlotProps {
  digit: string
}

const DigitSlot = ({ digit }: DigitSlotProps) => {
  const isNumeric = digit >= '0' && digit <= '9'
  if (!isNumeric) return <span>{digit}</span>

  return (
    <span className="relative inline-block h-[1.2em] w-[0.62em] overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={digit}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

interface SlidingNumberProps {
  value: number
  decimalPlaces?: number
  decimalSeparator?: string
  thousandSeparator?: string
  className?: string
}

export const SlidingNumber = ({
  value,
  decimalPlaces = 0,
  decimalSeparator = '.',
  thousandSeparator = '',
  className,
}: SlidingNumberProps) => {
  const abs = Math.abs(value)
  const formatted =
    decimalPlaces > 0 ? abs.toFixed(decimalPlaces) : String(Math.round(abs))

  const [intPart, decPart] = formatted.split('.')

  const intWithSep = thousandSeparator
    ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator)
    : intPart

  return (
    <span className={cn('inline-flex items-center tabular-nums', className)}>
      {value < 0 && <span>-</span>}
      {intWithSep.split('').map((char, i) => (
        <DigitSlot key={`int-${i}`} digit={char} />
      ))}
      {decPart !== undefined && (
        <>
          <span>{decimalSeparator}</span>
          {decPart.split('').map((char, i) => (
            <DigitSlot key={`dec-${i}`} digit={char} />
          ))}
        </>
      )}
    </span>
  )
}
