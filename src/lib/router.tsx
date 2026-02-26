import { lazy } from 'react'
import { createBrowserRouter } from 'react-router'

const ShowcaseHome = lazy(() =>
  import('@/showcase/showcase-home').then((m) => ({
    default: m.ShowcaseHome,
  }))
)
const ShowcaseLayout = lazy(() =>
  import('@/showcase/showcase-layout').then((m) => ({
    default: m.ShowcaseLayout,
  }))
)

// Auth pages
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

// Error pages
const NotFoundPage = lazy(() =>
  import('@/pages/errors/not-found').then((m) => ({
    default: m.NotFoundPage,
  }))
)
const ServerErrorPage = lazy(() =>
  import('@/pages/errors/server-error').then((m) => ({
    default: m.ServerErrorPage,
  }))
)

// Kit layout resolver
const KitLayoutResolver = lazy(() =>
  import('@/layouts/kit-layout-resolver').then((m) => ({
    default: m.KitLayoutResolver,
  }))
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
  import('@/kits/dashboard/pages/reports').then((m) => ({
    default: m.Reports,
  }))
)

// SaaS kit
const SaasHome = lazy(() =>
  import('@/kits/saas/pages/saas-home').then((m) => ({
    default: m.SaasHome,
  }))
)
const UsersPage = lazy(() =>
  import('@/kits/saas/pages/users').then((m) => ({ default: m.UsersPage }))
)
const BillingPage = lazy(() =>
  import('@/kits/saas/pages/billing').then((m) => ({
    default: m.BillingPage,
  }))
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
  import('@/kits/ecommerce/pages/catalog').then((m) => ({
    default: m.Catalog,
  }))
)
const ProductDetailPage = lazy(() =>
  import('@/kits/ecommerce/pages/product-detail').then((m) => ({
    default: m.ProductDetail,
  }))
)
const CartPage = lazy(() =>
  import('@/kits/ecommerce/pages/cart').then((m) => ({
    default: m.Cart,
  }))
)
const OrdersPage = lazy(() =>
  import('@/kits/ecommerce/pages/orders').then((m) => ({
    default: m.Orders,
  }))
)

// Landing kit
const LandingHome = lazy(() =>
  import('@/kits/landing/pages/landing-home').then((m) => ({
    default: m.LandingHome,
  }))
)

// Settings pages
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

// Profile page
const ProfilePage = lazy(() =>
  import('@/pages/profile/profile-page').then((m) => ({
    default: m.ProfilePage,
  }))
)

// Showcase — Layouts
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

// Showcase — Styles
const StylesShowcase = lazy(() =>
  import('@/showcase/styles-showcase').then((m) => ({
    default: m.StylesShowcase,
  }))
)
const StylePreview = lazy(() =>
  import('@/showcase/style-preview').then((m) => ({
    default: m.StylePreview,
  }))
)

// Showcase — Get Started
const GetStarted = lazy(() =>
  import('@/showcase/get-started').then((m) => ({
    default: m.GetStarted,
  }))
)

// Minimal layout for auth/errors
const MinimalLayout = lazy(() =>
  import('@/layouts/minimal-layout').then((m) => ({
    default: m.MinimalLayout,
  }))
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
  {
    path: '/showcase/layouts/:layoutId',
    element: <LayoutPreview />,
  },
  // Style previews (standalone, outside ShowcaseLayout)
  {
    path: '/showcase/styles/:styleId',
    element: <StylePreview />,
  },
  // Dashboard kit
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
        children: [
          { index: true, element: <GeneralSettings /> },
          { path: 'profile', element: <ProfileSettings /> },
          { path: 'notifications', element: <NotificationsSettings /> },
        ],
      },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  // SaaS kit
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
        children: [
          { index: true, element: <GeneralSettings /> },
          { path: 'profile', element: <ProfileSettings /> },
          { path: 'notifications', element: <NotificationsSettings /> },
        ],
      },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  // E-commerce kit
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
        children: [
          { index: true, element: <GeneralSettings /> },
          { path: 'profile', element: <ProfileSettings /> },
          { path: 'notifications', element: <NotificationsSettings /> },
        ],
      },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  // Landing kit
  {
    path: '/kit/landing',
    element: <KitLayoutResolver kitId="landing" />,
    children: [{ index: true, element: <LandingHome /> }],
  },
  // Auth pages (minimal layout)
  {
    path: '/auth',
    element: <MinimalLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },
  // Error pages (minimal layout)
  {
    path: '/error',
    element: <MinimalLayout />,
    children: [
      { path: '404', element: <NotFoundPage /> },
      { path: '500', element: <ServerErrorPage /> },
    ],
  },
  // Catch-all 404
  {
    path: '*',
    element: <MinimalLayout />,
    children: [{ path: '*', element: <NotFoundPage /> }],
  },
])
