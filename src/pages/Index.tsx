import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-craft-900 text-white">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality Art & Craft Supplies by The Highon's</h1>
            <p className="text-xl mb-8 text-white/80">
              Discover premium art supplies, stationery, and unique collectibles at affordable prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-craft-500 hover:bg-craft-600 text-white" 
                size="lg"
              >
                Shop Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/40 text-white hover:bg-white/10" 
                size="lg"
              >
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-craft-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-craft-600">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <circle cx="12" cy="20" r="1" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders above ₹499</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-craft-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-craft-600">
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                  <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                  <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Quality Products</h3>
              <p className="text-muted-foreground">Artist grade materials</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-craft-100 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-craft-600">
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Categories */}
      <CategorySection />

      {/* Newsletter */}
      <section className="py-16 bg-craft-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Be the first to know about new products, exclusive offers, and creative inspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-craft-300"
              />
              <Button className="bg-craft-500 hover:bg-craft-600 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
