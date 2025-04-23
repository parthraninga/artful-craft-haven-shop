
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartItem = ({ id, name, price, quantity, image }: CartItemProps) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center py-4 gap-4 border-b border-border last:border-0">
      <div className="h-16 w-16 overflow-hidden rounded bg-muted flex-shrink-0">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-sm text-foreground line-clamp-1">{name}</h4>
        <p className="text-muted-foreground text-sm">₹{price}</p>
      </div>
      
      <div className="flex items-center gap-1">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7" 
          onClick={() => decreaseQuantity(id)}
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="w-8 text-center text-sm">{quantity}</span>
        
        <Button 
          variant="outline" 
          size="icon" 
          className="h-7 w-7" 
          onClick={() => increaseQuantity(id)}
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="text-right min-w-[60px] text-sm font-medium">
        ₹{price * quantity}
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-7 w-7 text-muted-foreground hover:text-destructive ml-2"
        onClick={() => removeFromCart(id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
