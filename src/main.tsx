import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from './components/theme-provider'
import { StyleProvider } from './styles/style-provider'
import { router } from './lib/router'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <StyleProvider>
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center">
              <div className="animate-pulse text-muted-foreground">
                Loading...
              </div>
            </div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </StyleProvider>
    </ThemeProvider>
  </StrictMode>
)
