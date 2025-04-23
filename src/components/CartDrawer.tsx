
import { useCart } from "@/contexts/CartContext";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { ShoppingBag, X } from "lucide-react";

const CartDrawer = () => {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    getCartTotal, 
    clearCart, 
    getCartItemsCount 
  } = useCart();

  const itemsCount = getCartItemsCount();
  const total = getCartTotal();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        <SheetHeader className="border-b border-border pb-4 space-y-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Your Cart</span>
              {itemsCount > 0 && (
                <span className="ml-1 rounded-full bg-craft-100 text-craft-600 text-xs px-2 py-0.5">
                  {itemsCount}
                </span>
              )}
            </SheetTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCartOpen(false)}
              className="rounded-full h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <p className="text-lg font-medium mb-1">Your cart is empty</p>
              <p className="text-muted-foreground text-sm">Start adding items to your cart!</p>
              <Button 
                onClick={() => setIsCartOpen(false)} 
                className="mt-4 bg-craft-500 hover:bg-craft-600"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-1">
              {items.map((item) => (
                <CartItem
                  key={item.product.id}
                  id={item.product.id}
                  name={item.product.name}
                  price={item.product.price}
                  quantity={item.quantity}
                  image={item.product.image}
                />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t border-border pt-4 mt-auto">
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹{total}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₹{total}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <Button className="w-full bg-craft-500 hover:bg-craft-600">
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
