import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ list = [], quantity = list.length }) {
  const displayProduct = list.slice(0, Math.min(quantity, list.length));

  return (
    <div className="product-grid-wrapper">
      <div className="product-grid">
        {displayProduct.map((item, index) => (
          <ProductCard key={item.id || index} product={item} />
        ))}
      </div>
    </div>
  );
}
