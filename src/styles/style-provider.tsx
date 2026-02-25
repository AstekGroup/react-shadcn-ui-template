import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useSearchParams } from 'react-router'
import type { StyleId } from './types'

interface StyleContextValue {
  styleId: StyleId
  setStyleId: (id: StyleId) => void
}

const StyleContext = createContext<StyleContextValue>({
  styleId: 'default',
  setStyleId: () => null,
})

export function StyleProvider({ children }: { children: ReactNode }) {
  const [styleId, setStyleIdState] = useState<StyleId>('default')

  const setStyleId = useCallback((id: StyleId) => {
    setStyleIdState(id)
  }, [])

  const value = useMemo(
    () => ({ styleId, setStyleId }),
    [styleId, setStyleId]
  )

  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  )
}

export function useStyle() {
  const context = useContext(StyleContext)
  if (!context) {
    throw new Error('useStyle must be used within a StyleProvider')
  }
  return context
}

export function useStyleFromParams(): StyleId {
  const [searchParams] = useSearchParams()
  const style = searchParams.get('style') as StyleId | null
  const validStyles: StyleId[] = [
    'default',
    'react-bits',
    'magic-ui',
    'aceternity',
    'animate-ui',
  ]
  return style && validStyles.includes(style) ? style : 'default'
}
