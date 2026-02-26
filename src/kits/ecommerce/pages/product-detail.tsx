import { useParams, useNavigate } from 'react-router'
import { ArrowLeft, Minus, Plus, ShoppingBag, Star } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PageShell } from '@/pages/_shared/page-shell'
import { products } from '../data/mock-data'
import { PriceDisplay } from '../components/price-display'
import { ProductGallery } from '../components/product-gallery'

export function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <PageShell>
        <div className="py-12 text-center">
          <h2 className="text-2xl font-bold">Product not found</h2>
          <p className="text-muted-foreground mt-2">
            The product you are looking for does not exist.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => navigate('/kit/ecommerce')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Catalog
          </Button>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate('/kit/ecommerce')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Catalog
      </Button>

      <div className="grid gap-8 md:grid-cols-2">
        <ProductGallery productName={product.name} />

        <div className="space-y-6">
          <div className="space-y-2">
            {product.badge && <Badge>{product.badge}</Badge>}
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground text-sm">
                ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
            size="lg"
          />

          <p className="text-muted-foreground">{product.description}</p>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon-sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full"
              disabled={!product.inStock}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Category</p>
              <p className="text-sm font-medium">{product.category}</p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Availability</p>
              <p className="text-sm font-medium">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">Rating</p>
              <p className="text-sm font-medium">
                {product.rating} / 5 ({product.reviews.toLocaleString()}{' '}
                reviews)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-muted-foreground text-sm">SKU</p>
              <p className="text-sm font-medium">SKU-{product.id.padStart(6, '0')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageShell>
  )
}
