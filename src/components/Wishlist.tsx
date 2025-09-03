import { Link, useNavigate } from "react-router-dom";
import "../style/component/Wishlist.css";
import { type WishlistProps } from "../Modal/Catalog.Modal";

export default function Wishlist({
  products,
  wishlist,
  toggleWishlist,
}: WishlistProps) {
  const likedProducts = products.filter((p) => wishlist.includes(p.id));
  const navigate = useNavigate();

  return (
    <div className="catalog-container">
      {/* Back button at the top */}
      <button onClick={() => navigate(-1)} className="wishlist-back-btn">
        Back
      </button>
      <h2 className="wishlist-title">My Wishlist</h2>
      {likedProducts.length === 0 ? (
        <p>No items in your wishlist.</p>
      ) : (
        <div className="product-list">
          {likedProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <span
                onClick={() => toggleWishlist(product.id)}
                className="wishlist-remove"
                title="Remove from wishlist"
              >
                ♥
              </span>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <span>₹{product.price}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
