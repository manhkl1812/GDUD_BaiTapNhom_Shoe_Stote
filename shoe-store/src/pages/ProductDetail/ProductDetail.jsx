import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/common/Breadcrumb";
import Button from "../../components/common/Button";
import ProductGrid from "../../components/product/ProductGrid/ProductGrid";
import products from "../../data/products";
import MainLayout from "../../components/layout/MainLayout";
import { addCartItem, setBuyNowItem } from "../../utils/cartStorage";
import { notify } from "../../utils/notify";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.slug === slug);

  const SPEC_LABELS = {
    material: "Chất liệu:",
    sole: "Đế:",
    fit: "Form giày:",
    style: "Phong cách:",
    gender: "Giới tính:",
  };

  const relatedProducts = product
    ? products.filter(
        (p) =>
          p.slug !== product.slug &&
          p.categoryId?.some((cat) => product.categoryId?.includes(cat)),
      )
    : [];

  const sizes = product?.variants[0]?.sizes ?? [];
  const colors = product?.variants[0]?.color ?? [];
  const allImages = product?.images?.length
    ? product.images
    : [product?.thumbnail].filter(Boolean);

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    sizes.find(({ stock }) => stock > 0)?.size ?? null,
  );
  const [selectedColor, setSelectedColor] = useState(colors[0] ?? null);
  const [quantity, setQuantity] = useState(1);
  const [showDesc, setShowDesc] = useState(false);

  if (!product) {
    return (
      <MainLayout
        props={
          <div className="pd-not-found">
            <h2 className="pd-not-found__title">Không tìm thấy sản phẩm</h2>
            <p className="pd-not-found__text">
              Sản phẩm với slug <strong>{slug}</strong> không tồn tại.
            </p>
            <Link to="/cua-hang" className="pd-not-found__link">
              ← Quay lại danh sách
            </Link>
          </div>
        }
      />
    );
  }

  const breadcrumbItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Cửa hàng", href: "/cua-hang" },
    { label: product.name, active: true },
  ];

  const handlePrevImg = () =>
    setActiveImg((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  const handleNextImg = () =>
    setActiveImg((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    if (!selectedSize) {
      notify("Vui lòng chọn size trước khi thêm vào giỏ hàng.", "error");
      return false;
    }

    addCartItem({
      pid: product.id,
      size: selectedSize,
      color: selectedColor,
      qty: quantity,
    });

    notify(`Đã thêm ${quantity} sản phẩm vào giỏ hàng`, "success");
    return true;
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      notify("Vui lòng chọn size trước khi mua ngay.", "error");
      return;
    }

    setBuyNowItem({
      pid: product.id,
      size: selectedSize,
      color: selectedColor,
      qty: quantity,
    });

    navigate("/thanh-toan");
  };

  return (
    <MainLayout
      props={
        <div className="pd-page">
          {/* Breadcrumb */}
          <div className="container py-2 pd-breadcrumb">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* ── Top section: image + info ── */}
          <div className="container pb-4">
            <div className="row g-4">
              {/* LEFT: Image gallery */}
              <div className="col-lg-7">
                <div className="pd-main-img">
                  <img
                    src={allImages[activeImg]}
                    alt={product.name}
                    className="pd-main-img__photo"
                  />
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={handlePrevImg}
                        className="pd-arrow pd-arrow--left"
                        aria-label="Ảnh trước"
                      >
                        ‹
                      </button>
                      <button
                        onClick={handleNextImg}
                        className="pd-arrow pd-arrow--right"
                        aria-label="Ảnh sau"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="pd-thumbnails">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImg(idx)}
                      className={`pd-thumb ${idx === activeImg ? "pd-thumb--active" : ""}`}
                    >
                      <img src={img} alt="" className="pd-thumb__img" />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT: Product info */}
              <div className="col-lg-5">
                <h1 className="pd-name">{product.name}</h1>
                <p className="pd-sku">
                  Mã số: {product.id.replace("prod_", "")}
                </p>

                {/* Price */}
                <div className="pd-price">
                  <span className="pd-price__sale">
                    {product.price.toLocaleString("vi-VN")}đ
                  </span>
                  {product.discountPercent > 0 && (
                    <>
                      <span className="pd-price__original">
                        {product.originalPrice.toLocaleString("vi-VN")}đ
                      </span>
                      <span className="pd-price__badge">Sale</span>
                    </>
                  )}
                </div>

                {/* Size */}
                <div className="pd-sizes">
                  <div className="pd-label">Size</div>
                  <div className="pd-sizes__list">
                    {sizes.map(({ size, stock }) => {
                      const isSelected = selectedSize === size;
                      const outOfStock = stock === 0;
                      return (
                        <button
                          key={size}
                          disabled={outOfStock}
                          onClick={() => setSelectedSize(size)}
                          className={`pd-size-btn ${isSelected ? "pd-size-btn--selected" : ""} ${outOfStock ? "pd-size-btn--out" : ""}`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Color */}
                <div className="pd-colors">
                  <div className="pd-label">Màu sắc</div>
                  <div className="pd-colors__list">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`pd-color-btn ${selectedColor === color ? "pd-color-btn--selected" : ""}`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="pd-qty">
                  <div className="pd-label">Số lượng:</div>
                  <div className="pd-qty__control">
                    <button onClick={decrease} className="pd-qty__btn">
                      −
                    </button>
                    <div className="pd-qty__value">{quantity}</div>
                    <button onClick={increase} className="pd-qty__btn">
                      +
                    </button>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pd-actions">
                  <Button
                    title="Mua ngay"
                    variant="dark"
                    width="100%"
                    height={48}
                    onClick={handleBuyNow}
                  />
                  <Button
                    title="Thêm vào giỏ hàng"
                    variant="light"
                    width="100%"
                    height={48}
                    onClick={handleAddToCart}
                  />
                </div>

                {/* Mô tả toggle */}
                <div className="pd-desc-toggle">
                  <button
                    onClick={() => setShowDesc((v) => !v)}
                    className="pd-desc-toggle__btn"
                  >
                    <span className="pd-desc-toggle__title">Mô tả</span>
                    <span
                      className={`pd-desc-toggle__icon ${showDesc ? "pd-desc-toggle__icon--open" : ""}`}
                    >
                      +
                    </span>
                  </button>

                  {showDesc && (
                    <div className="pd-desc-toggle__body">
                      <p className="pd-desc-toggle__text">
                        {product.shortDescription}
                      </p>
                      <button className="pd-desc-toggle__more">Xem thêm</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ── Related products ── */}
          {relatedProducts.length > 0 && (
            <div className="container pb-4">
              <h2 className="pd-related__title">Sản phẩm liên quan</h2>
              <ProductGrid list={relatedProducts} quantity={4} />
            </div>
          )}

          {/* ── Full description ── */}
          <div className="container pb-2">
            <div
              className="pd-section"
              style={{ paddingTop: 24, marginBottom: 24 }}
            >
              <h2 className="pd-section__title">Mô tả sản phẩm</h2>
              <p className="pd-section__desc">{product.description}</p>
            </div>

            {/* Specifications */}
            <div className="pd-section">
              <h2 className="pd-section__title">Chi tiết sản phẩm</h2>
              <table className="pd-spec-table">
                <tbody>
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <tr key={key}>
                      <td className="pd-spec-table__key">
                        {SPEC_LABELS[key] ?? key}
                      </td>
                      <td className="pd-spec-table__val">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Rating */}
            <div className="pd-section pd-section--last">
              <h2 className="pd-section__title">Đánh giá</h2>
              <table className="pd-rating-table">
                <tbody>
                  {[
                    ["Lượt đánh giá:", product.rating],
                    ["Lượt bình luận:", product.reviewCount],
                    ["Lượt bán:", product.sold],
                    ["Lượt xem:", product.views],
                  ].map(([label, val]) => (
                    <tr key={label}>
                      <td className="pd-rating-table__label">{label}</td>
                      <td className="pd-rating-table__val">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="pd-review-btn">Thêm</button>
            </div>
          </div>
        </div>
      }
    />
  );
}
