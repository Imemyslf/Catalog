import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "../style/component/ProductDetails.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div style={{ padding: 32 }}>Product not found.</div>;
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="product-detail-back-btn">
        ← Back
      </button>
      <div className="product-detail-flex">
        <img
          src={product.img}
          alt={product.name}
          className="product-detail-img"
        />
        <div className="product-detail-info">
          <h2 className="product-detail-title">{product.name}</h2>
          <div className="product-detail-price">₹{product.price}</div>
          <div className="product-detail-rating">
            <b>Rating:</b> {product.rating} ⭐
          </div>
          <div className="product-detail-variants">
            <b>Available Variants:</b>{" "}
            {product.variants && product.variants.length > 0
              ? product.variants.join(", ")
              : "N/A"}
          </div>
          <div className="product-detail-specs">
            <b>Specifications:</b>
            <ul>
              {product.specifications &&
                Object.entries(product.specifications).map(([key, value]) => (
                  <li key={key}>
                    <b>{key}:</b> {value}
                  </li>
                ))}
            </ul>
          </div>
          <div className="product-detail-about">
            <b>About This Product:</b>
            <ul>
              {product.about &&
                product.about.map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
            </ul>
          </div>
          <div className="product-detail-category">
            <b>Category:</b> {product.category}
          </div>
          <div className="product-detail-desc">
            <b>Description:</b> {product.desc}
          </div>
        </div>
      </div>
    </div>
  );
}
