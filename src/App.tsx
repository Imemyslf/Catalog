import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { products as allProducts } from "./data/products";
import HomePage from "./Pages/HomePage";
import CatalogPage from "./Pages/CatalogPage";
import WishlistPage from "./Pages/WishListPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import "./style/catalog.css";
import "./App.css";
import WishlistBar from "./components/WishlistBar";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });
  // const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-background">
      {location.pathname !== "/" && <WishlistBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/catalog"
          element={
            <CatalogPage
              search={search}
              category={category}
              setSearch={setSearch}
              setCategory={setCategory}
              filteredProducts={filteredProducts}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              products={allProducts}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          }
        />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
