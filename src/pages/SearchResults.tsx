
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products, Product } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filteredProducts = products.filter((product) => {
      const searchStr = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      return searchStr.includes(query.toLowerCase());
    });

    setResults(filteredProducts);
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-craft-800">
            {results.length > 0
              ? `Search Results for "${query}"`
              : `No Results for "${query}"`}
          </h1>
          <p className="text-muted-foreground mt-1">
            {results.length} {results.length === 1 ? "product" : "products"} found
          </p>
        </div>
        
        <Button variant="outline" onClick={() => window.history.back()} className="self-start">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 bg-muted rounded-lg text-center">
          <p className="text-lg font-medium mb-2">No products found matching your search.</p>
          <p className="text-muted-foreground mb-6">Try different keywords or browse our categories.</p>
          <Button onClick={() => window.history.back()}>
            Back to Browse
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
