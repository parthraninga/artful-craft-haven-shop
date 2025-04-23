
import { Product } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-border">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`} className="no-underline">
          <h3 className="font-semibold text-lg mb-1 text-craft-800 hover:text-craft-500 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-craft-600 font-medium mb-2">₹{product.price}</p>
        <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full bg-craft-500 hover:bg-craft-600 text-white transition-colors"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
