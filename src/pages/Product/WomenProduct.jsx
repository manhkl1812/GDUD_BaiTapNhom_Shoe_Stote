import React, { useEffect, useMemo, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import HeaderLine from "../../components/common/HeaderLine";
import Dropdown from "../../components/common/Dropdown";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import Pagination from "../../components/common/Pagination";
import products from "../../data/products";

const SORT_OPTIONS = [
  { value: "default", label: "Mặc định" },
  { value: "price_asc", label: "Giá: Thấp → Cao" },
  { value: "price_desc", label: "Giá: Cao → Thấp" },
  { value: "name_asc", label: "Tên: A → Z" },
  { value: "discount", label: "Khuyến mãi nhiều nhất" },
];

export default function Product() {
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const femaleProducts = products.filter(
    (p) => p.specifications?.gender?.toLowerCase() !== "nam",
  );

  const sortedProducts = useMemo(() => {
    const list = [...femaleProducts];
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
  }, [sortValue]);

  useEffect(() => {
    setCurrentPage(1);
  }, [sortValue]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedProducts.slice(start, start + itemsPerPage);
  }, [sortedProducts, currentPage]);

  return (
    <MainLayout
      props={
        <div>
          <HeaderLine title="Sản phẩm nữ" />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 12,
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 16px 16px",
            }}
          >
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

          {/* Product grid */}
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
            <ProductGrid list={paginatedProducts} quantity={itemsPerPage} />
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      }
    />
  );
}
