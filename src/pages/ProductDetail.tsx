
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, getProductsByCategory, Product } from "@/lib/data";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Heart, Minus, Plus, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!id) return;
    
    const productData = getProductById(id);
    if (!productData) {
      navigate("/not-found");
      return;
    }
    
    setProduct(productData);
    
    // Get related products from the same category
    const related = getProductsByCategory(productData.category)
      .filter((p) => p.id !== id)
      .slice(0, 4);
    
    setRelatedProducts(related);
  }, [id, navigate]);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-center">
            <div className="h-8 w-64 bg-muted rounded mb-4"></div>
            <div className="h-6 w-32 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-lg bg-muted flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-bold text-craft-800 mb-2">
            {product.name}
          </h1>
          
          <div className="text-2xl font-semibold text-craft-600 mb-4">
            ₹{product.price}
          </div>
          
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center border border-border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none rounded-l-md"
                onClick={handleDecrease}
              >
                <Minus className="h-4 w-4" />
              </Button>
              
              <div className="h-10 w-12 flex items-center justify-center border-x border-border">
                {quantity}
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-none rounded-r-md"
                onClick={handleIncrease}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              className="flex-1 bg-craft-500 hover:bg-craft-600"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Button variant="outline" className="flex-1">
              <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
            </Button>
          </div>
          
          <div className="border-t border-border pt-6">
            <h3 className="font-medium mb-2">Product Details:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
              <li>High quality materials</li>
              <li>Made for professional use</li>
              <li>Durable and long-lasting</li>
              <li>30-day money-back guarantee</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
