import type { StyleId, StyleVariant } from './types'

export const styleVariants: Record<StyleId, StyleVariant> = {
  default: {
    id: 'default',
    label: 'Shadcn Default',
    description: 'Clean and minimal Shadcn UI components',
    components: {},
  },
  'react-bits': {
    id: 'react-bits',
    label: 'React Bits',
    description: 'Animated and interactive components',
    components: {},
  },
  'magic-ui': {
    id: 'magic-ui',
    label: 'Magic UI',
    description: 'Magical effects and animations',
    components: {},
  },
  aceternity: {
    id: 'aceternity',
    label: 'Aceternity',
    description: 'Modern UI animations and effects',
    components: {},
  },
  'animate-ui': {
    id: 'animate-ui',
    label: 'Animate UI',
    description: 'Smooth transitions and animations',
    components: {},
  },
}
