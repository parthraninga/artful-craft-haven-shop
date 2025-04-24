import { useRef } from "react";
import { Button } from "@/components/ui/button";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import { ChevronRight, Truck } from "lucide-react";

const featuredRef = useRef(null);
const categoryRef = useRef(null);

const scrollToFeatured = () => {
  featuredRef.current?.scrollIntoView({ behavior: "smooth" });
};

const scrollToCategories = () => {
  categoryRef.current?.scrollIntoView({ behavior: "smooth" });
};

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
                onClick={scrollToFeatured}
              >
                Shop Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                className="bg-craft-500 hover:bg-craft-600 text-white" 
                size="lg"
                onClick={scrollToCategories}
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
<svg xmlns="http://www.w3.org/2000/svg" 
     width="24" 
     height="24" 
     viewBox="0 0 24 24" 
     fill="none" 
     stroke="currentColor" 
     strokeWidth="2" 
     strokeLinecap="round" 
     strokeLinejoin="round" 
     className="text-craft-600">
  <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
  <path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-1"></path>
  <circle cx="5.5" cy="18.5" r="2.5"></circle>
  <circle cx="18.5" cy="18.5" r="2.5"></circle>
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
      <div ref={featuredRef}>
      <FeaturedProducts />
      </div>

      {/* Categories */}
      <div ref={categoryRef}>
      <CategorySection />
      </div>

      {/* Navsari Shipping Section */}
      <section className="py-16 bg-craft-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <Truck className="h-12 w-12 text-craft-500" />
              </div>
              <h2 className="text-3xl font-bold text-craft-800 mb-4">
                Exclusive Shipping in Navsari
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                We provide free same-day delivery for all orders within Navsari city limits. 
                Get your art supplies and craft materials delivered right to your doorstep!
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-craft-500 hover:bg-craft-600 text-white" 
                  size="lg"
                >
                  Check Delivery Availability <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
