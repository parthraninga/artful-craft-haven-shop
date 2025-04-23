
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Palette, 
  PencilRuler, 
  Tags, 
  Search, 
  ShoppingCart, 
  Menu, 
  X 
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setIsCartOpen, getCartItemsCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = getCartItemsCount();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          
          <Link to="/" className="flex items-center gap-2 no-underline">
            <Palette className="h-6 w-6 text-craft-500" />
            <span className="text-xl font-bold text-craft-800">ArtfulCraft</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/category/art" className="px-4 py-2 text-sm font-medium text-craft-700 hover:text-craft-500 flex items-center gap-1.5 no-underline transition-colors">
            <Palette className="w-4 h-4" />
            Art & Craft
          </Link>
          <Link to="/category/stationery" className="px-4 py-2 text-sm font-medium text-craft-700 hover:text-craft-500 flex items-center gap-1.5 no-underline transition-colors">
            <PencilRuler className="w-4 h-4" />
            Stationery
          </Link>
          <Link to="/category/keychains" className="px-4 py-2 text-sm font-medium text-craft-700 hover:text-craft-500 flex items-center gap-1.5 no-underline transition-colors">
            <Tags className="w-4 h-4" />
            Keychains
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Search */}
          <form onSubmit={handleSearch} className="hidden md:flex relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] pl-8 focus-visible:ring-craft-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          </form>

          {/* Mobile search */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[95vw]" align="end">
              <form onSubmit={handleSearch} className="p-2">
                <div className="flex gap-2">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="flex-1"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit">Search</Button>
                </div>
              </form>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Cart button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-craft-500 text-[10px] font-medium text-white">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="flex flex-col">
            <Link 
              to="/category/art" 
              className="px-5 py-4 border-b border-border text-craft-700 hover:bg-muted flex items-center gap-2 no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Palette className="w-5 h-5" />
              Art & Craft Supplies
            </Link>
            <Link 
              to="/category/stationery" 
              className="px-5 py-4 border-b border-border text-craft-700 hover:bg-muted flex items-center gap-2 no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PencilRuler className="w-5 h-5" />
              Stationery & Writing
            </Link>
            <Link 
              to="/category/keychains" 
              className="px-5 py-4 text-craft-700 hover:bg-muted flex items-center gap-2 no-underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Tags className="w-5 h-5" />
              Keychains & Accessories
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
