import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'
import { buildAppRoutes } from './create-router'

// Showcase shell (app-only — not part of the published library)
const ShowcaseHome = lazy(() =>
  import('@/showcase/showcase-home').then((m) => ({ default: m.ShowcaseHome }))
)
const ShowcaseLayout = lazy(() =>
  import('@/showcase/showcase-layout').then((m) => ({
    default: m.ShowcaseLayout,
  }))
)
const LayoutsShowcase = lazy(() =>
  import('@/showcase/layouts-showcase').then((m) => ({
    default: m.LayoutsShowcase,
  }))
)
const LayoutPreview = lazy(() =>
  import('@/showcase/layout-preview').then((m) => ({
    default: m.LayoutPreview,
  }))
)
const StylesShowcase = lazy(() =>
  import('@/showcase/styles-showcase').then((m) => ({
    default: m.StylesShowcase,
  }))
)
const StylePreview = lazy(() =>
  import('@/showcase/style-preview').then((m) => ({ default: m.StylePreview }))
)
const GetStarted = lazy(() =>
  import('@/showcase/get-started').then((m) => ({ default: m.GetStarted }))
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ShowcaseLayout />,
    children: [
      { index: true, element: <ShowcaseHome /> },
      { path: 'showcase/layouts', element: <LayoutsShowcase /> },
      { path: 'showcase/styles', element: <StylesShowcase /> },
      { path: 'showcase/get-started', element: <GetStarted /> },
    ],
  },
  // Layout previews (standalone, outside ShowcaseLayout)
  { path: '/showcase/layouts/:layoutId', element: <LayoutPreview /> },
  // Style previews (standalone, outside ShowcaseLayout)
  { path: '/showcase/styles/:styleId', element: <StylePreview /> },
  // Shared template routes (kits, auth, settings, profile, errors, catch-all).
  // Single source of truth — also published via the library's createAppRouter.
  ...buildAppRoutes({ includeHome: false }),
])
