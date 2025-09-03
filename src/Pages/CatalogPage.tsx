import FilterBar from "../components/FilterBar";
import Catalog from "../components/catalog";
import type { CatalogPageProps } from "../Modal/Catalog.Modal";

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
      <button className="btnStyle" onClick={() => setCategory("All")}>
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
