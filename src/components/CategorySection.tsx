
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { categories, Category } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CategorySection = () => {
  const [categoriesData, setCategoriesData] = useState<Category[]>([]);

  useEffect(() => {
    // In a real app, this might be an API call
    setCategoriesData(categories);
  }, []);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold text-craft-800 mb-2">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore our wide range of creative supplies, stationery, and accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id} 
              className="no-underline group"
            >
              <div className="relative h-80 overflow-hidden rounded-lg bg-craft-900">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-craft-900/80 to-craft-900/20 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-4 text-sm">{category.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
                  >
                    Shop Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
