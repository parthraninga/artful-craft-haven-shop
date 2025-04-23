
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
    <section className="py-16 bg-craft-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-craft-800 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Find everything you need for your creative journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categoriesData.map((category) => (
            <Link 
              to={`/category/${category.id}`} 
              key={category.id} 
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] no-underline transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-craft-900/90 via-craft-900/40 to-transparent" />
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-white/90 mb-4 text-sm line-clamp-2">
                    {category.description}
                  </p>
                  <Button 
                    className="bg-craft-500 hover:bg-craft-600 text-white w-full" 
                    size="lg"
                  >
                    Browse Categories <ChevronRight className="ml-2 h-4 w-4" />
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
