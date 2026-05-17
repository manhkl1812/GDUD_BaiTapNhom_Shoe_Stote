import { useEffect, useRef } from "react";
import { Link } from "react-router";
function fmt(n) {
  return Number(n).toLocaleString("vi-VN") + "đ";
}

export default function CartModal({
  isOpen,
  onClose,
  cartItems = [],
  productsMap = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const total = cartItems.reduce((s, c) => {
    const p = productsMap[c.pid];
    return p ? s + p.price * c.qty : s;
  }, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div style={s.backdrop} onClick={onClose} />

      {/* Drawer */}
      <div ref={ref} style={s.drawer}>
        {/* Header */}
        <div style={s.header}>
          <div style={s.headerLeft}>
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#111" }}
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span style={s.headerTitle}>Giỏ hàng</span>
            <span style={s.badge}>{cartItems.length}</span>
          </div>
          <button style={s.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={s.itemList}>
          {cartItems.length === 0 ? (
            <div style={s.empty}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
              <p style={{ color: "#aaa", fontSize: 14 }}>Giỏ hàng trống</p>
            </div>
          ) : (
            cartItems.map((c) => {
              const p = productsMap[c.pid];
              if (!p) return null;
              return (
                <div key={c.cid} style={s.item}>
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    style={s.itemImg}
                    onError={(e) => {
                      e.target.src = "https://placehold.co/64x64?text=👟";
                    }}
                  />
                  <div style={s.itemInfo}>
                    <p style={s.itemBrand}>{p.brand}</p>
                    <p style={s.itemName}>{p.name}</p>
                    <p style={s.itemMeta}>
                      Size {c.size} · SL {c.qty}
                    </p>
                  </div>
                  <div style={s.itemPrice}>{fmt(p.price * c.qty)}</div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div style={s.footer}>
            {/* Total */}
            <div style={s.totalRow}>
              <span style={s.totalLabel}>Tổng cộng</span>
              <span style={s.totalVal}>{fmt(total)}</span>
            </div>

            {/* Buttons */}
            <Link
              to="/thanh-toan"
              style={{ textDecoration: "none" }}
              onClick={onClose}
            >
              <button style={s.checkoutBtn}>THANH TOÁN NGAY →</button>
            </Link>

            <Link
              to="/gio-hang"
              style={{ textDecoration: "none" }}
              onClick={onClose}
            >
              <button style={s.viewCartBtn}>Xem giỏ hàng đầy đủ</button>
            </Link>
          </div>
        )}

        {cartItems.length === 0 && (
          <div style={s.footer}>
            <Link
              to="/gio-hang"
              style={{ textDecoration: "none" }}
              onClick={onClose}
            >
              <button style={s.viewCartBtn}>Xem giỏ hàng</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
const s = {
  backdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    zIndex: 900,
    animation: "fadeIn .2s ease",
  },
  drawer: {
    position: "fixed",
    top: 0,
    right: 0,
    width: 380,
    height: "100vh",
    background: "#fff",
    zIndex: 901,
    display: "flex",
    flexDirection: "column",
    boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
    animation: "slideInRight .25s ease",
    fontFamily: "'Be Vietnam Pro', sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 22px",
    borderBottom: "1px solid #f0f0ee",
    flexShrink: 0,
  },
  headerLeft: { display: "flex", alignItems: "center", gap: 10 },
  headerTitle: { fontSize: 16, fontWeight: 800, color: "#111" },
  badge: {
    background: "#e53935",
    color: "#fff",
    fontSize: 11,
    fontWeight: 800,
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: 16,
    color: "#aaa",
    padding: "4px 8px",
    borderRadius: 6,
    transition: "color .15s",
  },
  itemList: {
    flex: 1,
    overflowY: "auto",
    padding: "12px 0",
  },
  empty: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingTop: 80,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    padding: "12px 22px",
    borderBottom: "1px solid #f5f5f3",
    transition: "background .15s",
  },
  itemImg: {
    width: 64,
    height: 64,
    objectFit: "cover",
    borderRadius: 8,
    border: "1px solid #eee",
    flexShrink: 0,
  },
  itemInfo: { flex: 1, minWidth: 0 },
  itemBrand: {
    fontSize: 10,
    fontWeight: 700,
    color: "#bbb",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 2,
  },
  itemName: {
    fontSize: 12,
    fontWeight: 500,
    color: "#222",
    lineHeight: 1.4,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  itemMeta: { fontSize: 11, color: "#aaa", marginTop: 4 },
  itemPrice: {
    fontSize: 13,
    fontWeight: 800,
    color: "#e53935",
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
  footer: {
    padding: "16px 22px",
    borderTop: "1px solid #f0f0ee",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    flexShrink: 0,
    background: "#fff",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  totalLabel: { fontSize: 14, fontWeight: 600, color: "#555" },
  totalVal: { fontSize: 20, fontWeight: 900, color: "#e53935" },
  checkoutBtn: {
    width: "100%",
    background: "#e53935",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "13px 0",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: 0.5,
    cursor: "pointer",
  },
  viewCartBtn: {
    width: "100%",
    background: "#fff",
    color: "#111",
    border: "1.5px solid #111",
    borderRadius: 12,
    padding: "11px 0",
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },
};
