import { lazy, type ReactElement } from 'react'
import { createBrowserRouter, Navigate, type RouteObject } from 'react-router'

// Layouts
const KitLayoutResolver = lazy(() =>
  import('@/layouts/kit-layout-resolver').then((m) => ({
    default: m.KitLayoutResolver,
  }))
)
const MinimalLayout = lazy(() =>
  import('@/layouts/minimal-layout').then((m) => ({ default: m.MinimalLayout }))
)

// Dashboard kit
const DashboardHome = lazy(() =>
  import('@/kits/dashboard/pages/dashboard-home').then((m) => ({
    default: m.DashboardHome,
  }))
)
const AnalyticsPage = lazy(() =>
  import('@/kits/dashboard/pages/analytics').then((m) => ({
    default: m.Analytics,
  }))
)
const ReportsPage = lazy(() =>
  import('@/kits/dashboard/pages/reports').then((m) => ({ default: m.Reports }))
)

// SaaS kit
const SaasHome = lazy(() =>
  import('@/kits/saas/pages/saas-home').then((m) => ({ default: m.SaasHome }))
)
const UsersPage = lazy(() =>
  import('@/kits/saas/pages/users').then((m) => ({ default: m.UsersPage }))
)
const BillingPage = lazy(() =>
  import('@/kits/saas/pages/billing').then((m) => ({ default: m.BillingPage }))
)
const OnboardingPage = lazy(() =>
  import('@/kits/saas/pages/onboarding').then((m) => ({
    default: m.OnboardingPage,
  }))
)
const FeaturesPage = lazy(() =>
  import('@/kits/saas/pages/features').then((m) => ({
    default: m.FeaturesPage,
  }))
)

// E-commerce kit
const CatalogPage = lazy(() =>
  import('@/kits/ecommerce/pages/catalog').then((m) => ({ default: m.Catalog }))
)
const ProductDetailPage = lazy(() =>
  import('@/kits/ecommerce/pages/product-detail').then((m) => ({
    default: m.ProductDetail,
  }))
)
const CartPage = lazy(() =>
  import('@/kits/ecommerce/pages/cart').then((m) => ({ default: m.Cart }))
)
const OrdersPage = lazy(() =>
  import('@/kits/ecommerce/pages/orders').then((m) => ({ default: m.Orders }))
)

// Landing kit
const LandingHome = lazy(() =>
  import('@/kits/landing/pages/landing-home').then((m) => ({
    default: m.LandingHome,
  }))
)

// Settings
const SettingsLayout = lazy(() =>
  import('@/pages/settings/settings-layout').then((m) => ({
    default: m.SettingsLayout,
  }))
)
const GeneralSettings = lazy(() =>
  import('@/pages/settings/general').then((m) => ({
    default: m.GeneralSettingsPage,
  }))
)
const ProfileSettings = lazy(() =>
  import('@/pages/settings/profile').then((m) => ({
    default: m.ProfileSettingsPage,
  }))
)
const NotificationsSettings = lazy(() =>
  import('@/pages/settings/notifications').then((m) => ({
    default: m.NotificationSettingsPage,
  }))
)

// Profile
const ProfilePage = lazy(() =>
  import('@/pages/profile/profile-page').then((m) => ({
    default: m.ProfilePage,
  }))
)

// Auth
const LoginPage = lazy(() =>
  import('@/pages/auth/login').then((m) => ({ default: m.LoginPage }))
)
const SignupPage = lazy(() =>
  import('@/pages/auth/signup').then((m) => ({ default: m.SignupPage }))
)
const ForgotPasswordPage = lazy(() =>
  import('@/pages/auth/forgot-password').then((m) => ({
    default: m.ForgotPasswordPage,
  }))
)

// Errors
const NotFoundPage = lazy(() =>
  import('@/pages/errors/not-found').then((m) => ({ default: m.NotFoundPage }))
)
const ServerErrorPage = lazy(() =>
  import('@/pages/errors/server-error').then((m) => ({
    default: m.ServerErrorPage,
  }))
)

// Shared settings sub-tree, reused by every kit
const settingsChildren: RouteObject[] = [
  { index: true, element: <GeneralSettings /> },
  { path: 'profile', element: <ProfileSettings /> },
  { path: 'notifications', element: <NotificationsSettings /> },
]

export interface AppRouterOptions {
  /** Router basename (e.g. when hosted under a sub-path). */
  basename?: string
  /**
   * Element rendered at '/'. Defaults to a redirect to '/kit/dashboard'.
   * Ignored when `includeHome` is false.
   */
  home?: ReactElement
  /** Set false to omit the '/' route (host app provides its own). Default true. */
  includeHome?: boolean
}

/**
 * Builds the shared route tree (kits, auth, settings, profile, errors, catch-all)
 * as plain RouteObject[], so a host app can compose it with its own routes.
 */
export function buildAppRoutes(options: AppRouterOptions = {}): RouteObject[] {
  const { home, includeHome = true } = options

  const routes: RouteObject[] = []

  if (includeHome) {
    routes.push({
      path: '/',
      element: home ?? <Navigate to="/kit/dashboard" replace />,
    })
  }

  routes.push(
    {
      path: '/kit/dashboard',
      element: <KitLayoutResolver kitId="dashboard" />,
      children: [
        { index: true, element: <DashboardHome /> },
        { path: 'analytics', element: <AnalyticsPage /> },
        { path: 'reports', element: <ReportsPage /> },
        {
          path: 'settings',
          element: <SettingsLayout />,
          children: settingsChildren,
        },
        { path: 'profile', element: <ProfilePage /> },
      ],
    },
    {
      path: '/kit/saas',
      element: <KitLayoutResolver kitId="saas" />,
      children: [
        { index: true, element: <SaasHome /> },
        { path: 'users', element: <UsersPage /> },
        { path: 'billing', element: <BillingPage /> },
        { path: 'onboarding', element: <OnboardingPage /> },
        { path: 'features', element: <FeaturesPage /> },
        {
          path: 'settings',
          element: <SettingsLayout />,
          children: settingsChildren,
        },
        { path: 'profile', element: <ProfilePage /> },
      ],
    },
    {
      path: '/kit/ecommerce',
      element: <KitLayoutResolver kitId="ecommerce" />,
      children: [
        { index: true, element: <CatalogPage /> },
        { path: 'product/:id', element: <ProductDetailPage /> },
        { path: 'cart', element: <CartPage /> },
        { path: 'orders', element: <OrdersPage /> },
        {
          path: 'settings',
          element: <SettingsLayout />,
          children: settingsChildren,
        },
        { path: 'profile', element: <ProfilePage /> },
      ],
    },
    {
      path: '/kit/landing',
      element: <KitLayoutResolver kitId="landing" />,
      children: [{ index: true, element: <LandingHome /> }],
    },
    {
      path: '/auth',
      element: <MinimalLayout />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'signup', element: <SignupPage /> },
        { path: 'forgot-password', element: <ForgotPasswordPage /> },
      ],
    },
    {
      path: '/error',
      element: <MinimalLayout />,
      children: [
        { path: '404', element: <NotFoundPage /> },
        { path: '500', element: <ServerErrorPage /> },
      ],
    },
    {
      path: '*',
      element: <MinimalLayout />,
      children: [{ path: '*', element: <NotFoundPage /> }],
    }
  )

  return routes
}

/**
 * Creates a ready-to-use browser router with the shared template routes.
 * Consumers can pass a custom home element, a basename, or omit the home route.
 */
export function createAppRouter(options: AppRouterOptions = {}) {
  return createBrowserRouter(buildAppRoutes(options), {
    basename: options.basename,
  })
}
