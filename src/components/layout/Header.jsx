import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../../pages/Cart/CartModal.jsx";
import products from "../../data/products.js";
import { getCartItems } from "../../utils/cartStorage";
import { notify } from "../../utils/notify";
import AuthContext from "../../context/AuthContext.jsx";
import logoImage from "../../assets/icon/logo.png";

const iconBtn = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "4px",
};

const PRODUCTS_MAP = Object.fromEntries(
  products.map((p) => [
    p.id,
    {
      id: p.id,
      name: p.name,
      brand: p.brand,
      price: Number(p.price),
      originalPrice: Number(p.originalPrice),
      discountPercent: p.discountPercent,
      thumbnail: p.thumbnail,
      sizes: p.variants?.[0]?.sizes?.map((s) => s.size) ?? [],
    },
  ]),
);

const Header = () => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [cartItems, setCartItems] = useState(() => getCartItems());
  const [searchValue, setSearchValue] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const { currentAccount, isAuthenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setShowProfileModal(false);
    notify("Đã đăng xuất", "success");
    navigate("/dang-nhap");
  };

  const searchSuggestions = useMemo(() => {
    const keyword = searchValue.trim().toLowerCase();
    if (!keyword) return [];

    return products
      .filter((product) => {
        const name = String(product.name ?? "").toLowerCase();
        const brand = String(product.brand ?? "").toLowerCase();
        return name.includes(keyword) || brand.includes(keyword);
      })
      .slice(0, 5);
  }, [searchValue]);

  useEffect(() => {
    const syncCart = () => setCartItems(getCartItems());

    window.addEventListener("storage", syncCart);
    window.addEventListener("cart:updated", syncCart);

    const handleClickOutside = (e) => {
      if (
        showProfileModal &&
        e.target.closest &&
        !e.target.closest("button[title='Tài khoản']")
      ) {
        setShowProfileModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("storage", syncCart);
      window.removeEventListener("cart:updated", syncCart);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showProfileModal]);

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchValue.trim();

    if (!keyword) {
      navigate("/cua-hang");
      return;
    }

    navigate(`/cua-hang?search=${encodeURIComponent(keyword)}`);
  };

  const openSearchResult = (keyword) => {
    const value = String(keyword ?? "").trim();
    if (!value) return;
    setSearchValue(value);
    setIsSearchFocused(false);
    navigate(`/cua-hang?search=${encodeURIComponent(value)}`);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid #ddd",
          padding: "12px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <Link to="/">
              <img
                src={logoImage}
                alt="Logo"
                style={{
                  width: 56,
                  height: 56,
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                }}
              />
            </Link>

            <nav style={{ display: "flex", gap: "32px" }}>
              <Link
                to="/cua-hang"
                style={{
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                Cửa hàng
              </Link>
              <Link
                to="/cua-hang-do-nam"
                style={{
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                NAM
              </Link>
              <Link
                to="/cua-hang-do-nu"
                style={{
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                NỮ
              </Link>
              <Link
                to="/yeu-thich"
                style={{
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                YÊU THÍCH
              </Link>
              <Link
                to="/ve-chung-toi"
                style={{
                  color: "#333",
                  fontSize: "14px",
                  fontWeight: "500",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                Về chúng tôi
              </Link>
            </nav>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0 16px",
              gap: "24px",
            }}
          >
            <div style={{ position: "relative" }}>
              <form
                onSubmit={handleSearch}
                style={{ display: "flex", alignItems: "center" }}
              >
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsSearchFocused(false), 150);
                  }}
                  placeholder="Tìm sản phẩm..."
                  style={{
                    width: "300px",
                    height: "40px",
                    padding: "0 12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px 0 0 4px",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />

                <button
                  type="submit"
                  style={{
                    background: "#111",
                    border: "1px solid #111",
                    cursor: "pointer",
                    width: "44px",
                    height: "40px",
                    padding: 0,
                    borderRadius: "0 4px 4px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxSizing: "border-box",
                  }}
                  aria-label="Tìm kiếm"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="white"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </button>
              </form>

              {isSearchFocused && searchSuggestions.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    width: "100%",
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: 8,
                    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.12)",
                    overflow: "hidden",
                    zIndex: 20,
                  }}
                >
                  {searchSuggestions.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => openSearchResult(product.name)}
                      style={{
                        width: "100%",
                        border: "none",
                        background: "#fff",
                        textAlign: "left",
                        padding: "10px 12px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        style={{
                          width: 34,
                          height: 34,
                          objectFit: "cover",
                          borderRadius: 6,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#222",
                          }}
                        >
                          {product.name}
                        </div>
                        <div style={{ fontSize: 12, color: "#777" }}>
                          {product.brand}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Icon */}
            {isAuthenticated ? (
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setShowProfileModal(!showProfileModal)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "6px",
                  }}
                  title="Tài khoản"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </button>

                {/* Profile Dropdown Modal */}
                {showProfileModal && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 12px)",
                      right: 0,
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)",
                      zIndex: 1000,
                      minWidth: "280px",
                      overflow: "hidden",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Profile Header */}
                    <div
                      style={{
                        padding: "16px",
                        borderBottom: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      {currentAccount?.avatar ? (
                        <img
                          src={currentAccount.avatar}
                          alt={currentAccount.name || currentAccount.username}
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            flexShrink: 0,
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "50%",
                            backgroundColor: "#e53935",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "20px",
                            flexShrink: 0,
                          }}
                        >
                          {currentAccount?.name?.[0]?.toUpperCase() ||
                            currentAccount?.username?.[0]?.toUpperCase() ||
                            "U"}
                        </div>
                      )}
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            margin: "0 0 4px 0",
                            fontWeight: "600",
                            fontSize: "14px",
                            color: "#333",
                          }}
                        >
                          {currentAccount?.name ||
                            currentAccount?.username ||
                            "Khách hàng"}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            color: "#666",
                          }}
                        >
                          {currentAccount?.email || ""}
                        </p>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div>
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setShowProfileModal(false);
                        }}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          border: "none",
                          background: "none",
                          textAlign: "left",
                          fontSize: "14px",
                          cursor: "pointer",
                          color: "#333",
                          borderBottom: "1px solid #eee",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#f5f5f5")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        Hồ sơ cá nhân
                      </button>

                      <button
                        onClick={handleLogout}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          border: "none",
                          background: "none",
                          textAlign: "left",
                          fontSize: "14px",
                          cursor: "pointer",
                          color: "#e53935",
                          fontWeight: "500",
                          transition: "background-color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#fff5f5")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "transparent")
                        }
                      >
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/dang-nhap">
                <button
                  style={{
                    background: "#111",
                    color: "#fff",
                    border: "none",
                    borderRadius: 4,
                    padding: "8px 12px",
                    cursor: "pointer",
                    fontSize: 13,
                  }}
                >
                  Đăng nhập
                </button>
              </Link>
            )}

            <button
              onClick={() => setCartOpen(true)}
              style={{ ...iconBtn, position: "relative" }}
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  background: "#e53935",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 800,
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {cartItems.length}
              </span>
            </button>
          </div>
        </div>
      </header>
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        productsMap={PRODUCTS_MAP}
      />
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideInRight { from { transform: translateX(100%) } to { transform: translateX(0) } }
      `}</style>
    </>
  );
};

export default Header;
