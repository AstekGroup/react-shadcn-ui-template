import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useStyle } from '@/styles/style-provider'
import type { StyleId } from '@/styles/types'
import { Home } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

const styles: { id: StyleId; label: string }[] = [
  { id: 'default', label: 'Shadcn Default' },
  { id: 'react-bits', label: 'React Bits' },
  { id: 'magic-ui', label: 'Magic UI' },
  { id: 'aceternity', label: 'Aceternity' },
  { id: 'animate-ui', label: 'Animate UI' },
]

const layouts = [
  { id: 'sidebar', label: 'Sidebar' },
  { id: 'topbar', label: 'Topbar' },
  { id: 'landing', label: 'Landing' },
]

export function Toolbar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { styleId, setStyleId } = useStyle()
  const currentLayout = searchParams.get('layout') || ''

  const handleStyleChange = (value: StyleId) => {
    setStyleId(value)
    const params = new URLSearchParams(searchParams)
    if (value === 'default') {
      params.delete('style')
    } else {
      params.set('style', value)
    }
    setSearchParams(params)
  }

  const handleLayoutChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'default') {
      params.delete('layout')
    } else {
      params.set('layout', value)
    }
    setSearchParams(params)
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border bg-background/80 px-4 py-2 shadow-lg backdrop-blur-sm">
      <Button variant="ghost" size="icon" asChild>
        <Link to="/">
          <Home className="h-4 w-4" />
        </Link>
      </Button>
      <div className="h-6 w-px bg-border" />
      <Select value={styleId} onValueChange={handleStyleChange}>
        <SelectTrigger className="h-8 w-[140px] border-0 bg-transparent">
          <SelectValue placeholder="Style" />
        </SelectTrigger>
        <SelectContent>
          {styles.map((s) => (
            <SelectItem key={s.id} value={s.id}>
              {s.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="h-6 w-px bg-border" />
      <Select
        value={currentLayout || 'default'}
        onValueChange={handleLayoutChange}
      >
        <SelectTrigger className="h-8 w-[120px] border-0 bg-transparent">
          <SelectValue placeholder="Layout" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default Layout</SelectItem>
          {layouts.map((l) => (
            <SelectItem key={l.id} value={l.id}>
              {l.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
