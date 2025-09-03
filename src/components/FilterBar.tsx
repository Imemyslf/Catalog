import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Ham from "/temp/hamburg.webp";
import { categories, type FilterBarProps } from "../Modal/Catalog.Modal";
import "../style/component/FilterBar.css";

const FilterBar: React.FC<FilterBarProps> = ({
  search,
  category,
  onSearchChange,
  onCategoryChange,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (cat: string) => {
    onCategoryChange(cat);
    if (location.pathname !== "/catalog") {
      navigate("/catalog");
    }
  };

  return (
    <div className="filter-bar">
      <div className="filter-bar-top">
        <div className="ham">
          <img src={Ham} alt="HamburgerIIcon" />
        </div>
        <div className="search-bar">
          <span className="search-icon" aria-label="search">
            {/* Simple magnifier SVG */}
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#1976d2" strokeWidth="2" />
              <line
                x1="16"
                y1="16"
                x2="21"
                y2="21"
                stroke="#1976d2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      <div className="category-tabs">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`tab ${category === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
