import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useSearchParams } from 'react-router'

const layouts = [
  { id: 'sidebar', label: 'Sidebar', description: 'Traditional sidebar navigation' },
  { id: 'topbar', label: 'Topbar', description: 'Horizontal top navigation' },
  { id: 'landing', label: 'Landing', description: 'Marketing page layout' },
  { id: 'minimal', label: 'Minimal', description: 'Centered, no navigation' },
]

export function LayoutSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentLayout = searchParams.get('layout') || ''

  const handleSelect = (id: string) => {
    const params = new URLSearchParams(searchParams)
    if (id === currentLayout) {
      params.delete('layout')
    } else {
      params.set('layout', id)
    }
    setSearchParams(params)
  }

  return (
    <div className="flex flex-wrap gap-2">
      {layouts.map((layout) => (
        <Button
          key={layout.id}
          variant="outline"
          size="sm"
          onClick={() => handleSelect(layout.id)}
          className={cn(
            'transition-all',
            currentLayout === layout.id && 'border-primary bg-primary/10'
          )}
        >
          {layout.label}
        </Button>
      ))}
    </div>
  )
}
