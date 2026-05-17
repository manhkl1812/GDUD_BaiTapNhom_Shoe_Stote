import { useEffect, useMemo, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import HeaderLine from "../../components/common/HeaderLine";
import Dropdown from "../../components/common/Dropdown";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import Pagination from "../../components/common/Pagination";
import products from "../../data/products";
import { useFavorites } from "../../hooks/useFavorites";
import "./FavoritesPage.css";

const SORT_OPTIONS = [
  { value: "default", label: "Mặc định" },
  { value: "price_asc", label: "Giá: Thấp → Cao" },
  { value: "price_desc", label: "Giá: Cao → Thấp" },
  { value: "name_asc", label: "Tên: A → Z" },
  { value: "discount", label: "Khuyến mãi nhiều nhất" },
];

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const favoriteProducts = useMemo(
    () => products.filter((product) => favorites.includes(product.id)),
    [favorites],
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [favorites]);

  const sortedFavoriteProducts = useMemo(() => {
    const list = [...favoriteProducts];

    switch (sortValue) {
      case "price_asc":
        return list.sort((a, b) => a.price - b.price);
      case "price_desc":
        return list.sort((a, b) => b.price - a.price);
      case "name_asc":
        return list.sort((a, b) => a.name.localeCompare(b.name, "vi"));
      case "discount":
        return list.sort((a, b) => b.discountPercent - a.discountPercent);
      default:
        return list;
    }
  }, [favoriteProducts, sortValue]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortValue]);

  const totalPages = Math.ceil(sortedFavoriteProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedFavoriteProducts.slice(start, start + itemsPerPage);
  }, [sortedFavoriteProducts, currentPage]);

  return (
    <MainLayout
      props={
        <div>
          <HeaderLine title="Sản phẩm yêu thích" />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 16px 16px",
            }}
          >
            <p className="favorites-count" style={{ margin: 0 }}>
              {favoriteProducts.length} sản phẩm
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 14, color: "#333", fontWeight: 500 }}>
                Sắp xếp theo:
              </span>
              <Dropdown
                options={SORT_OPTIONS}
                value={sortValue}
                onChange={setSortValue}
                placeholder="Chọn tiêu chí"
              />
            </div>
          </div>

          {favoriteProducts.length > 0 ? (
            <div
              style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}
            >
              <ProductGrid list={paginatedProducts} quantity={itemsPerPage} />
              <Pagination
                page={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                showSinglePage
              />
            </div>
          ) : (
            <div
              className="favorites-empty"
              style={{ maxWidth: 1200, margin: "0 auto" }}
            >
              <p>Bạn chưa có sản phẩm yêu thích nào</p>
              <a href="/cua-hang" className="favorites-back-link">
                ← Quay lại cửa hàng
              </a>
            </div>
          )}
        </div>
      }
    />
  );
}
