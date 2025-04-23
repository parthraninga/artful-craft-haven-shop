
export type Product = {
  id: string;
  name: string;
  price: number;
  category: "art" | "stationery" | "keychains";
  image: string;
  description: string;
  featured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: "art",
    name: "Art & Craft Supplies",
    description: "Professional art supplies for your creative projects",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "stationery",
    name: "Stationery & Writing Supplies",
    description: "Premium stationery for your writing needs",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "keychains",
    name: "Keychains & Accessories",
    description: "Unique and collectible accessories",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const products: Product[] = [
  // Art & Craft Supplies
  {
    id: "flair-acrylic-marker",
    name: "FLAIR Acrylic Marker",
    price: 359,
    category: "art",
    image: "/placeholder.svg",
    description: "High-quality acrylic markers perfect for multiple surfaces and lasting projects.",
    featured: true,
  },
  {
    id: "levin-acrylic-markers",
    name: "Levin Acrylic Markers",
    price: 409,
    category: "art",
    image: "/placeholder.svg",
    description: "Premium acrylic markers with vibrant colors and precision tips.",
  },
  {
    id: "marker-set-48",
    name: "Marker Set of 48",
    price: 299,
    category: "art",
    image: "/placeholder.svg",
    description: "Comprehensive set of 48 markers in a spectrum of colors for all your art projects.",
  },
  {
    id: "marker-set-24",
    name: "Markers Set of 24",
    price: 179,
    category: "art",
    image: "/placeholder.svg",
    description: "Essential color palette with 24 versatile markers for artists and designers.",
  },
  {
    id: "sketch-kit",
    name: "Sketch Kit",
    price: 619,
    category: "art",
    image: "/placeholder.svg",
    description: "Complete sketching kit with pencils, charcoal, and tools for artists at any level.",
    featured: true,
  },
  {
    id: "paint-brush-12",
    name: "Paint Brush (12 sizes)",
    price: 89,
    category: "art",
    image: "/placeholder.svg",
    description: "Set of 12 paint brushes in various sizes for watercolor, acrylic, and oil painting.",
  },
  {
    id: "sponge-dabbing-brush",
    name: "Sponge Dabbing Brush (5 Piece Set)",
    price: 90,
    category: "art",
    image: "/placeholder.svg",
    description: "Versatile sponge brushes perfect for painting, stenciling, and special effects.",
  },
  {
    id: "hot-melt-glue-gun",
    name: "Hot Melt Glue Gun",
    price: 220,
    category: "art",
    image: "/placeholder.svg",
    description: "Reliable glue gun for crafting, DIY projects, and quick repairs.",
  },

  // Stationery & Writing Supplies
  {
    id: "correction-tape",
    name: "Correction Tape",
    price: 70,
    category: "stationery",
    image: "/placeholder.svg",
    description: "Clean and precise correction tape for neat document corrections.",
  },
  {
    id: "luxury-pen",
    name: "Luxury Pen",
    price: 199,
    category: "stationery",
    image: "/placeholder.svg",
    description: "Elegant writing instrument with smooth ink flow and comfortable grip.",
    featured: true,
  },
  {
    id: "sketch-book-a5",
    name: "Sketch Book A5 (100 pages)",
    price: 119,
    category: "stationery",
    image: "/placeholder.svg",
    description: "Premium quality A5 sketch book with 100 pages perfect for drawing and note-taking.",
  },
  {
    id: "diary",
    name: "Diary",
    price: 249,
    category: "stationery",
    image: "/placeholder.svg",
    description: "Classic diary with dated pages, perfect for daily journaling and planning.",
  },
  {
    id: "diary-premium",
    name: "Diary Premium",
    price: 319,
    category: "stationery",
    image: "/placeholder.svg",
    description: "Luxurious diary with leather cover, ribbon bookmark and premium quality pages.",
    featured: true,
  },
  {
    id: "diary-mini",
    name: "Diary Mini",
    price: 219,
    category: "stationery",
    image: "/placeholder.svg",
    description: "Compact diary that fits in your pocket, perfect for on-the-go note-taking.",
  },

  // Keychains & Accessories
  {
    id: "thor-loki-keychain",
    name: "Thor Loki Keychain",
    price: 99,
    category: "keychains",
    image: "/placeholder.svg",
    description: "Collectible Thor and Loki themed keychain for Marvel fans.",
    featured: true,
  },
  {
    id: "thor-hammer-keychain",
    name: "Thor Hammer Keychain",
    price: 89,
    category: "keychains",
    image: "/placeholder.svg",
    description: "Miniature Mjolnir keychain replica, perfect for Thor enthusiasts.",
  },
  {
    id: "pikachu-keychain",
    name: "Pikachu Keychain",
    price: 109,
    category: "keychains",
    image: "/placeholder.svg",
    description: "Adorable Pikachu keychain for Pokémon fans of all ages.",
  },
];

// Helper functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
