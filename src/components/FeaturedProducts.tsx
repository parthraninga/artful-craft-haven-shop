
import { useState, useEffect } from "react";
import { getFeaturedProducts, Product } from "@/lib/data";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // In a real app, this might be an API call
    setProducts(getFeaturedProducts());
  }, []);

  return (
    <section className="py-12 bg-craft-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold text-craft-800 mb-2">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our most popular art supplies, stationery, and keychains - handpicked just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
