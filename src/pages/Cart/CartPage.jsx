import { useEffect, useState } from "react";
import "./CartPage.css";
import Header from "../../components/layout/Header.jsx";
import products from "../../data/products.js";
import Footer from "../../components/layout/Footer.jsx";
import EditAddressModal from "./EditAddressModal.jsx";
import { Link } from "react-router";
import { getCartItems, saveCartItems } from "../../utils/cartStorage";
import { getProfile, saveProfile } from "../../utils/profileStorage";
import { notify } from "../../utils/notify";

const PRODUCTS_MAP = Object.fromEntries(
  products.map((p) => [
    p.id,
    {
      id: p.id,
      name: p.name,
      brand: p.brand,
      price: p.price,
      originalPrice: p.originalPrice,
      discountPercent: p.discountPercent,
      thumbnail: p.thumbnail,
      sizes: p.variants[0]?.sizes.map((s) => s.size) ?? [],
      colors: p.variants?.map((v) => v.color[0]) ?? [],
    },
  ]),
);

function fmt(n) {
  return n.toLocaleString("vi-VN") + "đ";
}

const initCart = () => getCartItems();

export default function CartPage() {
  const [cart, setCart] = useState(initCart);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMsg, setCouponMsg] = useState(null);
  const [note, setNote] = useState("");

  const [customer, setCustomer] = useState(() => getProfile());
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    saveCartItems(cart);
  }, [cart]);

  const upd = (cid, patch) =>
    setCart((prev) =>
      prev.map((c) => (c.cid === cid ? { ...c, ...patch } : c)),
    );

  const allOn = cart.length > 0 && cart.every((c) => c.checked);
  const toggleAll = () =>
    setCart((p) => p.map((c) => ({ ...c, checked: !allOn })));
  const selectedN = cart.filter((c) => c.checked).length;

  const subtotal = cart.reduce((s, c) => {
    const product = PRODUCTS_MAP[c.pid];
    return product ? s + product.price * c.qty : s;
  }, 0);
  const total = Math.max(0, subtotal - discount);

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === "GIAM10") {
      setDiscount(Math.round(subtotal * 0.1));
      setCouponMsg({ ok: true, text: "✓ Giảm 10% áp dụng thành công!" });
    } else {
      setDiscount(0);
      setCouponMsg({ ok: false, text: "✗ Mã không hợp lệ" });
    }
  };

  return (
    <>
      <Header />
      <div className="cp-page">
        <div className="cp-wrap">
          {/* Header */}
          <div
            className="cp-card"
            style={{ padding: "10px 18px", marginBottom: 24 }}
          >
            <div className="cp-head">
              <h1 className="cp-title">Giỏ Hàng</h1>
              <span className="cp-count">{cart.length} sản phẩm</span>
            </div>
          </div>

          <div className="cp-layout">
            <div className="cp-left">
              {/* Toolbar */}
              <div className="cp-toolbar">
                <label className="cp-check-all">
                  <span
                    className={"cb" + (allOn ? " cb-on" : "")}
                    onClick={toggleAll}
                  >
                    {allOn && <Chk />}
                  </span>
                  <span>Chọn tất cả ({cart.length})</span>
                </label>
                {selectedN > 0 && (
                  <button
                    className="cp-del-sel"
                    onClick={() => setCart((p) => p.filter((c) => !c.checked))}
                  >
                    Xoá đã chọn ({selectedN})
                  </button>
                )}
              </div>

              {/* Card */}
              <div className="cp-card">
                {cart.length === 0 ? (
                  <div className="cp-empty">
                    <div style={{ fontSize: 54 }}>🛒</div>
                    <p>Giỏ hàng của bạn đang trống</p>
                  </div>
                ) : (
                  cart.map((c, i) => {
                    const p = PRODUCTS_MAP[c.pid];
                    if (!p) return null;
                    const hasDisc = p.discountPercent > 0;
                    return (
                      <div
                        key={c.cid}
                        className={
                          "cp-row" +
                          (c.checked ? " cp-row-on" : "") +
                          (i < cart.length - 1 ? " cp-row-sep" : "")
                        }
                      >
                        {/* checkbox */}
                        <span
                          className={"cb" + (c.checked ? " cb-on" : "")}
                          onClick={() => upd(c.cid, { checked: !c.checked })}
                        >
                          {c.checked && <Chk />}
                        </span>

                        {/* image */}
                        <div className="cp-img-wrap">
                          {hasDisc && (
                            <span className="cp-disc-badge">
                              -{p.discountPercent}%
                            </span>
                          )}
                          <img
                            src={p.thumbnail}
                            alt={p.name}
                            className="cp-img"
                            onError={(e) => {
                              e.target.src =
                                "https://placehold.co/88x88?text=Shoe";
                            }}
                          />
                        </div>

                        {/* info */}
                        <div className="cp-info">
                          <span className="cp-brand">{p.brand}</span>
                          <p className="cp-name">{p.name}</p>
                          <div className="cp-prices">
                            {hasDisc && (
                              <s className="cp-orig">{fmt(p.originalPrice)}</s>
                            )}
                            <span className="cp-price">{fmt(p.price)}</span>
                            {hasDisc && (
                              <span className="cp-save-tag">
                                Tiết kiệm {fmt(p.originalPrice - p.price)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* controls */}
                        <div className="cp-ctrls">
                          <div className="cp-ctrl-row">
                            <span className="cp-ctrl-lbl">Màu</span>
                            <select
                              className="cp-sel"
                              value={c.color || ""}
                              onChange={(e) =>
                                upd(c.cid, { color: e.target.value })
                              }
                            >
                              <option value="">--Chọn màu--</option>
                              {p.colors.map((color) => (
                                <option key={color}>{color}</option>
                              ))}
                            </select>
                          </div>
                          <div className="cp-ctrl-row">
                            <span className="cp-ctrl-lbl">Size</span>
                            <select
                              className="cp-sel"
                              value={c.size}
                              onChange={(e) =>
                                upd(c.cid, { size: e.target.value })
                              }
                            >
                              {p.sizes.map((sz) => (
                                <option key={sz}>{sz}</option>
                              ))}
                            </select>
                          </div>
                          <div className="cp-ctrl-row">
                            <span className="cp-ctrl-lbl">SL</span>
                            <div className="cp-qty">
                              <button
                                className="cp-qty-btn"
                                onClick={() =>
                                  upd(c.cid, { qty: Math.max(1, c.qty - 1) })
                                }
                              >
                                −
                              </button>
                              <span className="cp-qty-n">{c.qty}</span>
                              <button
                                className="cp-qty-btn"
                                onClick={() => upd(c.cid, { qty: c.qty + 1 })}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* right */}
                        <div className="cp-right-col">
                          <span className="cp-line-total">
                            {fmt(p.price * c.qty)}
                          </span>
                          <button
                            className="cp-del"
                            onClick={() =>
                              setCart((p2) => p2.filter((x) => x.cid !== c.cid))
                            }
                            title="Xoá"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            <div className="cp-sidebar">
              {/* Customer */}
              <div className="cp-card" style={{ padding: "16px 18px" }}>
                <div className="cp-s-head">
                  <span className="cp-s-title">Thông tin giao hàng</span>
                  <button
                    className="cp-edit-btn"
                    onClick={() => setShowModal(true)}
                  >
                    Sửa
                  </button>
                </div>
                {[
                  ["Khách hàng", customer.name],
                  ["SĐT", customer.phone],
                  ["Email", customer.email],
                  ["Địa chỉ", customer.address],
                ].map(([lbl, val]) => (
                  <div key={lbl} className="cp-info-row">
                    <span className="cp-info-lbl">{lbl}</span>
                    <span className="cp-info-val">{val}</span>
                  </div>
                ))}
              </div>

              {/* Coupon */}
              <div className="cp-card" style={{ padding: "16px 18px" }}>
                <p className="cp-s-title">Mã giảm giá</p>
                <div className="cp-coupon-row">
                  <input
                    className="cp-coupon-in"
                    placeholder="Nhập mã..."
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value);
                      setCouponMsg(null);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                  />
                  <button className="cp-apply-btn" onClick={applyCoupon}>
                    ÁP DỤNG
                  </button>
                </div>
                {couponMsg && (
                  <p
                    style={{
                      fontSize: 12,
                      marginTop: 8,
                      fontWeight: 600,
                      color: couponMsg.ok ? "#27ae60" : "#e53935",
                    }}
                  >
                    {couponMsg.text}
                  </p>
                )}
                <p style={{ fontSize: 11, color: "#bbb", marginTop: 6 }}>
                  Thử mã: <b>GIAM10</b>
                </p>
              </div>

              {/* Summary */}
              <div className="cp-card" style={{ padding: "16px 18px" }}>
                <p className="cp-s-title">Tóm tắt đơn hàng</p>
                <div className="cp-sum-rows">
                  <div className="cp-sum-row">
                    <span>Tạm tính ({cart.length} SP)</span>
                    <span>{fmt(subtotal)}</span>
                  </div>
                  <div className="cp-sum-row">
                    <span>Giảm giá</span>
                    <span style={{ color: "#27ae60" }}>
                      {discount > 0 ? `- ${fmt(discount)}` : "0đ"}
                    </span>
                  </div>
                  <div className="cp-sum-row">
                    <span>Vận chuyển</span>
                    <span style={{ color: "#27ae60", fontWeight: 700 }}>
                      Miễn phí
                    </span>
                  </div>
                </div>
                <div className="cp-total-row">
                  <span>Tổng cộng</span>
                  <span className="cp-total-val">{fmt(total)}</span>
                </div>
                <Link to="/thanh-toan" style={{ textDecoration: "none" }}>
                  <button className="cp-checkout-btn">THANH TOÁN NGAY →</button>
                </Link>

                <Link to="/cua-hang" style={{ textDecoration: "none" }}>
                  <button className="cp-continue-btn">
                    ← Tiếp tục mua sắm
                  </button>
                </Link>
              </div>

              {/* Note */}
              <div className="cp-card" style={{ padding: "16px 18px" }}>
                <p className="cp-s-title">Ghi chú</p>
                <textarea
                  className="cp-note"
                  placeholder="Mô tả thêm về đơn hàng..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showModal && (
        <EditAddressModal
          customer={customer}
          onSave={(updated) => {
            setCustomer(updated);
            saveProfile(updated);
            notify("Đã cập nhật thông tin giao hàng", "success");
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

function Chk() {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
      <path
        d="M1 4.5L4 7.5L10 1"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
