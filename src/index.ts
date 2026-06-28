/**
 * @astekgroup/react-shadcn-ui-template
 *
 * Root entry — the app-building surface. UI primitives, kits and shared pages
 * are available via subpath exports:
 *   '@astekgroup/react-shadcn-ui-template/ui/button'
 *   '@astekgroup/react-shadcn-ui-template/kits/dashboard'
 *   '@astekgroup/react-shadcn-ui-template/pages'
 *   '@astekgroup/react-shadcn-ui-template/styles.css'
 */

// Providers (theme, style, brand)
export * from './providers'

// Layouts + layout types
export * from './layouts'

// Router factory + cn util
export * from './lib'

// Hooks
export { useIsMobile } from './hooks/use-mobile'

// Kit manifest types
export type { KitManifest, KitRoute } from './kits/_types'
