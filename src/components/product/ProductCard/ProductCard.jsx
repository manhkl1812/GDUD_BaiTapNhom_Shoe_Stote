import React, { useState } from "react";
import Promotion from "../../common/Promotion";
import "./ProductCard.css";
import likeIcon from "../../../assets/icon/heart-like.svg";
import unlikeIcon from "../../../assets/icon/heart-un-like.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../../../hooks/useFavorites";
import { useCart } from "../../../hooks/useCart";
import { notify } from "../../../utils/notify";
import { setBuyNowItem } from "../../../utils/cartStorage";
import { formatPrice } from "../../../utils/formatPrice";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { isFavorited, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const [isLikeHovered, setIsLikeHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState(null); // "buy" or "cart"
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const sizes = product?.variants?.[0]?.sizes ?? [];
  const colors = product?.variants?.map((v) => v.color[0]) ?? [];
  const favorited = isFavorited(product.id);

  function handleLike(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
    notify(
      favorited ? "Đã xóa khỏi yêu thích" : "Đã thêm vào yêu thích",
      "success",
    );
  }

  function handleBuyNow(e) {
    e.preventDefault();
    e.stopPropagation();
    setModalAction("buy");
    setShowModal(true);
  }

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    setModalAction("cart");
    setShowModal(true);
  }

  function handleConfirmModal() {
    if (!selectedSize) {
      notify("Vui lòng chọn size", "error");
      return;
    }

    if (modalAction === "buy") {
      setBuyNowItem({
        pid: product.id,
        size: selectedSize,
        color: selectedColor,
        qty: 1,
      });
      navigate("/thanh-toan");
    } else {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        thumbnail: product.thumbnail,
        slug: product.slug,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
      });
      notify("Đã thêm vào giỏ hàng", "success");
    }

    setShowModal(false);
    setSelectedSize(null);
    setSelectedColor(null);
  }

  return (
    <Link
      to={`/cua-hang/${product.slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
      className="product-card-link"
    >
      <div className={`product-card ${isLikeHovered ? "like-hovering" : ""}`}>
        <div className="product-image-wrapper">
          <img
            src={product.thumbnail}
            alt={product.slug}
            className="product-image"
          />

          <div className="product-hover-overlay">
            <button
              className="product-action-btn buy-now-btn"
              onClick={handleBuyNow}
              title="Mua ngay"
            >
              <svg viewBox="0 0 24 24" className="action-icon">
                <rect x="3" y="6" width="18" height="12" rx="2" />
                <path d="M3 10h18" />
                <circle cx="12" cy="14" r="2" />
              </svg>
            </button>
            <button
              className="product-action-btn add-cart-btn"
              onClick={handleAddToCart}
              title="Thêm vào giỏ hàng"
            >
              <svg viewBox="0 0 24 24" className="action-icon">
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
                <path d="M3 4h2l2 10h11l2-6H7" />
                <path d="M13 7v4m-2-2h4" />
              </svg>
            </button>
          </div>

          <button
            onClick={handleLike}
            onMouseEnter={() => setIsLikeHovered(true)}
            onMouseLeave={() => setIsLikeHovered(false)}
            className="product-like-btn"
            title={favorited ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}
          >
            <img
              src={favorited ? likeIcon : unlikeIcon}
              alt="Like"
              className="product-like-icon"
            />
          </button>
        </div>

        <div className="product-name-wrapper">
          <h5 className="product-name">{product.name}</h5>
        </div>

        <div className="product-price">
          {product.discountPercent > 0 && (
            <span className="product-original-price">
              {formatPrice(product.originalPrice)} đ
            </span>
          )}
          <span className="product-sale-price">
            {formatPrice(product.price)} đ
          </span>
          {product.discountPercent > 0 && (
            <Promotion title={`${product.discountPercent}`} />
          )}
        </div>
      </div>

      {/* Size & Color Selection Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "32px",
              maxWidth: "500px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <h3
              style={{
                marginBottom: "24px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Chọn Size & Màu
            </h3>

            {/* Size Selection */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Size <span style={{ color: "#dc3545" }}>*</span>
              </label>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {sizes.map(({ size }) => (
                  <button
                    key={size}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                    style={{
                      padding: "8px 14px",
                      fontSize: "13px",
                      border:
                        selectedSize === size
                          ? "2px solid #333"
                          : "1px solid #ddd",
                      backgroundColor:
                        selectedSize === size ? "#f0f0f0" : "#fff",
                      cursor: "pointer",
                      borderRadius: "4px",
                      fontWeight: selectedSize === size ? "600" : "normal",
                      transition: "all 0.2s",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            {colors.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  Màu
                </label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {colors.map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedColor(color);
                      }}
                      style={{
                        padding: "8px 14px",
                        fontSize: "13px",
                        border:
                          selectedColor === color
                            ? "2px solid #333"
                            : "1px solid #ddd",
                        backgroundColor:
                          selectedColor === color ? "#f0f0f0" : "#fff",
                        cursor: "pointer",
                        borderRadius: "4px",
                        fontWeight: selectedColor === color ? "600" : "normal",
                        transition: "all 0.2s",
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "32px" }}>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowModal(false);
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid #ddd",
                  backgroundColor: "#f5f5f5",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#efefef")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#f5f5f5")
                }
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleConfirmModal();
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "none",
                  backgroundColor: "#333",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
              >
                {modalAction === "buy" ? "Mua ngay" : "Thêm vào giỏ hàng"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}

export default ProductCard;
