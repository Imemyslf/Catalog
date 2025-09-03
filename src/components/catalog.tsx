import "../style/component/catalog.css";
import { Link } from "react-router-dom";
import type { CatalogProps } from "../Modal/Catalog.Modal";

export default function Catalog({
  products,
  wishlist,
  toggleWishlist,
}: CatalogProps) {
  return (
    <div className="catalog-container">
      <div
        className={`product-list${products.length === 1 ? " single-item" : ""}`}
      >
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {/* Heart icon at top-right */}
            <span
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product.id);
              }}
              className={`wishlist-heart-icon ${
                wishlist.includes(product.id) ? "active" : "inactive"
              }`}
              title={
                wishlist.includes(product.id)
                  ? "Remove from wishlist"
                  : "Add to wishlist"
              }
            >
              {wishlist.includes(product.id) ? "♥" : "♡"}
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
    </div>
  );
}
