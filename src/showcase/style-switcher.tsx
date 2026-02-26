import { Button } from '@/components/ui/button'
import { useStyle } from '@/styles/style-provider'
import type { StyleId } from '@/styles/types'
import { cn } from '@/lib/utils'

const styles: { id: StyleId; label: string; description: string }[] = [
  { id: 'default', label: 'Shadcn', description: 'Clean and minimal' },
  { id: 'react-bits', label: 'React Bits', description: 'Animated components' },
  { id: 'magic-ui', label: 'Magic UI', description: 'Magical effects' },
  { id: 'aceternity', label: 'Aceternity', description: 'Modern animations' },
  { id: 'animate-ui', label: 'Animate UI', description: 'Smooth transitions' },
]

export function StyleSwitcher() {
  const { styleId, setStyleId } = useStyle()

  return (
    <div className="flex flex-wrap gap-2">
      {styles.map((style) => (
        <Button
          key={style.id}
          variant="outline"
          size="sm"
          onClick={() => setStyleId(style.id)}
          className={cn(
            'transition-all',
            styleId === style.id && 'border-primary bg-primary/10'
          )}
        >
          {style.label}
        </Button>
      ))}
    </div>
  )
}
