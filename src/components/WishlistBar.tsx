import { useNavigate } from "react-router-dom";

const WishlistBar = () => {
  const navigate = useNavigate();
  return (
    <div className="wishlist-bar">
      <button className="wishlist-btn" onClick={() => navigate("/wishlist")}>
        Wishlist <span className="wishlist-heart">♥</span>
      </button>
    </div>
  );
};

export default WishlistBar;
