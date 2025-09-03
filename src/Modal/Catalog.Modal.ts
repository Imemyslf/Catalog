export interface Product {
  id: number;
  name: string;
  price: string;
  desc: string;
  img: string;
}

export interface CatalogProps {
  products: Product[];
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}

export interface WishlistProps {
  products: Product[];
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}

export interface FilterBarProps {
  search: string;
  category: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export interface WishlistPageProps {
  products: Product[];
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}

export const categories = [
  "All",
  "Phone",
  "Electronic",
  "Beauty Products",
  "Footwear",
  "Eyewear",
  "Accessories",
  "Home & Kitchen",
  "Books & Stationary",
  "Toys",
  "Musical Instruments",
];
