import type { ComponentType } from 'react'

export type StyleId =
  | 'default'
  | 'react-bits'
  | 'magic-ui'
  | 'aceternity'
  | 'animate-ui'

export interface StyleVariant {
  id: StyleId
  label: string
  description: string
  components: Record<string, ComponentType<Record<string, unknown>>>
}
