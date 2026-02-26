import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  productName?: string
}

const thumbnails = [0, 1, 2, 3]

export function ProductGallery({ productName }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="space-y-4">
      <div className="bg-muted flex aspect-square items-center justify-center rounded-lg">
        <div className="flex flex-col items-center gap-2">
          <ImageIcon className="text-muted-foreground h-16 w-16" />
          {productName && (
            <span className="text-muted-foreground text-sm">
              {productName}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {thumbnails.map((index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={cn(
              'bg-muted flex aspect-square items-center justify-center rounded-md border-2 transition-colors',
              selected === index
                ? 'border-primary'
                : 'border-transparent hover:border-muted-foreground/30',
            )}
          >
            <ImageIcon className="text-muted-foreground h-6 w-6" />
          </button>
        ))}
      </div>
    </div>
  )
}
