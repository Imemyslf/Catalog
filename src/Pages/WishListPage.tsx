import Wishlist from "../components/Wishlist";
import type { WishlistPageProps } from "../Modal/Catalog.Modal";

const WishlistPage = ({
  products,
  wishlist,
  toggleWishlist,
}: WishlistPageProps) => (
  <Wishlist
    products={products}
    wishlist={wishlist}
    toggleWishlist={toggleWishlist}
  />
);

export default WishlistPage;
