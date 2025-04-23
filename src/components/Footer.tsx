
import { Link } from "react-router-dom";
import { Palette } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-craft-50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <Palette className="h-6 w-6 text-craft-500" />
              <span className="text-xl font-bold text-craft-800">ArtfulCraft</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your one-stop shop for quality art supplies, stationery, and unique keychains.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/art" className="text-muted-foreground hover:text-craft-500 transition-colors text-sm no-underline">
                  Art & Craft Supplies
                </Link>
              </li>
              <li>
                <Link to="/category/stationery" className="text-muted-foreground hover:text-craft-500 transition-colors text-sm no-underline">
                  Stationery & Writing
                </Link>
              </li>
              <li>
                <Link to="/category/keychains" className="text-muted-foreground hover:text-craft-500 transition-colors text-sm no-underline">
                  Keychains & Accessories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-craft-500 transition-colors text-sm no-underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-craft-500 transition-colors text-sm no-underline">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-craft-500 transition-colors text-sm no-underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-muted-foreground text-sm space-y-2">
              <p>123 Creative Street</p>
              <p>Art District, Design City</p>
              <p>Email: info@artfulcraft.com</p>
              <p>Phone: +91 1234567890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ArtfulCraft. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-craft-500 no-underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-craft-500 no-underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
