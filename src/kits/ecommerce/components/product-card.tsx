import { Link } from 'react-router'
import { ShoppingBag, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import type { Product } from '../data/mock-data'
import { PriceDisplay } from './price-display'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Link to={`/kit/ecommerce/product/${product.id}`}>
          <div className="bg-muted relative flex aspect-square items-center justify-center">
            <ShoppingBag className="text-muted-foreground h-12 w-12" />
            {product.badge && (
              <Badge className="absolute top-2 right-2">
                {product.badge}
              </Badge>
            )}
          </div>
        </Link>
      </CardHeader>
      <CardContent className="space-y-2">
        <Link
          to={`/kit/ecommerce/product/${product.id}`}
          className="hover:underline"
        >
          <h3 className="font-semibold leading-tight">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-muted-foreground text-sm">
            ({product.reviews.toLocaleString()})
          </span>
        </div>
        <PriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
          size="sm"
        />
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={!product.inStock}
          variant={product.inStock ? 'default' : 'secondary'}
        >
          <ShoppingBag className="mr-2 h-4 w-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  )
}
