
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory, categories, Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!categoryId) return;
    
    setLoading(true);
    
    // Get category details
    const category = categories.find((c) => c.id === categoryId);
    setActiveCategory(category?.name);
    
    // Get products for this category
    const categoryProducts = getProductsByCategory(categoryId);
    setProducts(categoryProducts);
    
    setLoading(false);
  }, [categoryId]);

  if (loading) {
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
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold text-craft-800 mb-2">
          {activeCategory || "Products"}
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          {categoryId === "art" && "Quality art supplies for your creative projects"}
          {categoryId === "stationery" && "Premium stationery for your writing needs"}
          {categoryId === "keychains" && "Unique and collectible accessories"}
        </p>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg text-craft-600 mb-2">No products found.</p>
          <p className="text-muted-foreground">Check back soon for new arrivals!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
