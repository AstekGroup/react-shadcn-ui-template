import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { cartItems } from '../data/mock-data'

export function CartSheet() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Cart ({cartItems.length} items)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-muted-foreground py-8 text-center">
            Your cart is empty.
          </p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex items-start gap-4">
                <div className="bg-muted flex h-16 w-16 shrink-0 items-center justify-center rounded-md">
                  <span className="text-muted-foreground text-xs">IMG</span>
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-medium leading-tight">
                    {item.product.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    ${item.product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon-xs">
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center text-sm">
                      {item.quantity}
                    </span>
                    <Button variant="outline" size="icon-xs">
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-sm font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  <Button variant="ghost" size="icon-xs">
                    <Trash2 className="h-3 w-3 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </CardContent>
      {cartItems.length > 0 && (
        <CardFooter className="flex-col space-y-4">
          <Separator />
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>
                {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full">Proceed to Checkout</Button>
        </CardFooter>
      )}
    </Card>
  )
}
