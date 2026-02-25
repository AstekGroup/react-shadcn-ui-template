import type { KitManifest } from '@/kits/_types'
import {
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Store,
  User,
} from 'lucide-react'

export const manifest: KitManifest = {
  id: 'ecommerce',
  label: 'E-commerce',
  description: 'Online store with products, cart, and orders',
  icon: Store,
  defaultLayout: 'topbar',
  basePath: '/kit/ecommerce',
  nav: [
    {
      label: 'Store',
      items: [
        { title: 'Catalog', url: '/kit/ecommerce', icon: ShoppingBag },
        { title: 'Cart', url: '/kit/ecommerce/cart', icon: ShoppingCart },
        { title: 'Orders', url: '/kit/ecommerce/orders', icon: Package },
      ],
    },
    {
      label: 'Account',
      items: [
        { title: 'Profile', url: '/kit/ecommerce/profile', icon: User },
        { title: 'Settings', url: '/kit/ecommerce/settings', icon: Settings },
      ],
    },
  ],
  routes: [],
}
