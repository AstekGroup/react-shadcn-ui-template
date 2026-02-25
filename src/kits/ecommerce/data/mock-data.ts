export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  inStock: boolean
  badge?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Order {
  id: string
  date: string
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: number
  total: string
}

export const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones Pro',
    description:
      'Premium noise-cancelling wireless headphones with 30-hour battery life',
    price: 299.99,
    originalPrice: 349.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    rating: 4.8,
    reviews: 1284,
    inStock: true,
    badge: 'Best Seller',
  },
  {
    id: '2',
    name: 'Smart Watch Ultra',
    description:
      'Advanced fitness tracking with GPS and heart rate monitoring',
    price: 449.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    rating: 4.6,
    reviews: 892,
    inStock: true,
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    description:
      'Soft organic cotton crew neck t-shirt in multiple colors',
    price: 39.99,
    image: '/placeholder.svg',
    category: 'Clothing',
    rating: 4.5,
    reviews: 2341,
    inStock: true,
  },
  {
    id: '4',
    name: 'Ergonomic Desk Chair',
    description:
      'Adjustable lumbar support with breathable mesh back',
    price: 599.99,
    originalPrice: 749.99,
    image: '/placeholder.svg',
    category: 'Home & Garden',
    rating: 4.7,
    reviews: 567,
    inStock: true,
    badge: 'Sale',
  },
  {
    id: '5',
    name: 'Running Shoes X1',
    description:
      'Lightweight performance running shoes with responsive cushioning',
    price: 129.99,
    image: '/placeholder.svg',
    category: 'Sports',
    rating: 4.4,
    reviews: 1456,
    inStock: true,
  },
  {
    id: '6',
    name: 'TypeScript Handbook',
    description:
      'Complete guide to TypeScript for professional developers',
    price: 49.99,
    image: '/placeholder.svg',
    category: 'Books',
    rating: 4.9,
    reviews: 234,
    inStock: true,
    badge: 'New',
  },
  {
    id: '7',
    name: 'Bluetooth Speaker',
    description:
      'Portable waterproof speaker with 360-degree sound',
    price: 79.99,
    image: '/placeholder.svg',
    category: 'Electronics',
    rating: 4.3,
    reviews: 678,
    inStock: false,
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    description:
      'Extra thick non-slip yoga mat with carrying strap',
    price: 59.99,
    image: '/placeholder.svg',
    category: 'Sports',
    rating: 4.6,
    reviews: 890,
    inStock: true,
  },
]

export const orders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    items: 3,
    total: '$459.97',
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipped',
    items: 1,
    total: '$299.99',
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'processing',
    items: 2,
    total: '$169.98',
  },
  {
    id: 'ORD-004',
    date: '2023-12-28',
    status: 'delivered',
    items: 4,
    total: '$789.96',
  },
  {
    id: 'ORD-005',
    date: '2023-12-20',
    status: 'cancelled',
    items: 1,
    total: '$49.99',
  },
]

// Cart state (simple static for demo)
export const cartItems: CartItem[] = [
  { product: products[0], quantity: 1 },
  { product: products[2], quantity: 2 },
  { product: products[5], quantity: 1 },
]
