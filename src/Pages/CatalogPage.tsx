import FilterBar from "../components/FilterBar";
import Catalog from "../components/catalog";
import type { Product } from "../Modal/Catalog.Modal";

interface CatalogPageProps {
  search: string;
  category: string;
  setSearch: (v: string) => void;
  setCategory: (v: string) => void;
  filteredProducts: Product[];
  wishlist: number[];
  toggleWishlist: (id: number) => void;
}

const CatalogPage = ({
  search,
  category,
  setSearch,
  setCategory,
  filteredProducts,
  wishlist,
  toggleWishlist,
}: CatalogPageProps) => (
  <>
    <FilterBar
      search={search}
      category={category}
      onSearchChange={setSearch}
      onCategoryChange={setCategory}
    />
    {category !== "All" && (
      <button
        style={{
          margin: "10px 0 0 0",
          padding: "8px 20px",
          background: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          fontWeight: 600,
          fontSize: 16,
          cursor: "pointer",
        }}
        onClick={() => setCategory("All")}
      >
        Back
      </button>
    )}
    <div className="catalog-container">
      <Catalog
        products={filteredProducts}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div>
  </>
);

export default CatalogPage;
