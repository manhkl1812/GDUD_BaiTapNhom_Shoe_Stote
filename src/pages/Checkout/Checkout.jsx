import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import icon1 from "../../assets/icon/image45.png";
import icon2 from "../../assets/icon/image46.png";
import icon3 from "../../assets/icon/image47.png";
import qrCode from "../../assets/img/qr-code.svg";
import SuccessModalCheckout from "./SuccessModalCheckout";
import products from "../../data/products";
import {
  clearBuyNowItem,
  getBuyNowItem,
  getCartItems,
  saveCartItems,
} from "../../utils/cartStorage";
import { addOrderHistory, getProfile } from "../../utils/profileStorage";
import EditAddressModal from "../Cart/EditAddressModal";
import { notify } from "../../utils/notify";

const PRODUCTS_MAP = Object.fromEntries(
  products.map((p) => [
    p.id,
    {
      id: p.id,
      name: p.name,
      brand: p.brand,
      price: Number(p.price),
      thumbnail: p.thumbnail,
    },
  ]),
);

function fmt(n) {
  return Number(n).toLocaleString("vi-VN") + "₫";
}

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [userBankInfo, setUserBankInfo] = useState("");
  const [showError, setShowError] = useState(false);
  const [bankInputError, setBankInputError] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [showShippingModal, setShowShippingModal] = useState(false);
  const [pendingOrder, setPendingOrder] = useState(false);
  const [buyNowItem] = useState(() => getBuyNowItem());
  const [cartItems, setCartItems] = useState(() => getCartItems());
  const [customer, setCustomer] = useState(() => getProfile());

  useEffect(() => {
    if (buyNowItem) {
      clearBuyNowItem();
    }
  }, [buyNowItem]);

  const sourceItems = buyNowItem ? [buyNowItem] : cartItems;

  const checkoutItems = sourceItems
    .map((item) => ({ ...item, product: PRODUCTS_MAP[item.pid] }))
    .filter((item) => item.product);

  const subtotal = checkoutItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0,
  );
  const shippingFee = checkoutItems.length > 0 ? 50000 : 0;
  const grandTotal = subtotal + shippingFee;

  const hasShippingInfo =
    customer.name?.trim() && customer.phone?.trim() && customer.address?.trim();

  const finalizeOrder = () => {
    addOrderHistory({
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      paymentMethod,
      shippingFee,
      total: grandTotal,
      customerName: customer.name || customer.username || "Khách hàng",
      items: checkoutItems.map((item) => ({
        cid: item.cid,
        pid: item.pid,
        name: item.product.name,
        price: item.product.price,
        size: item.size,
        color: item.color,
        qty: item.qty,
      })),
    });

    if (!buyNowItem) {
      saveCartItems([]);
      setCartItems([]);
    }

    setIsOrderSuccess(true);
    setPendingOrder(false);
  };

  const handleAddressSave = (nextCustomer) => {
    setCustomer(nextCustomer);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "shoe_store_profile",
        JSON.stringify(nextCustomer),
      );
    }

    notify("Đã cập nhật thông tin giao hàng", "success");
    setShowShippingModal(false);

    if (pendingOrder) {
      setPendingOrder(false);
      if (!paymentMethod) {
        notify("Hãy chọn phương thức thanh toán trước khi đặt hàng", "error");
        return;
      }
      finalizeOrder();
    }
  };

  const handleOrder = () => {
    let hasError = false;

    if (!hasShippingInfo) {
      notify(
        "Vui lòng thêm họ tên, số điện thoại và địa chỉ nhận hàng",
        "error",
      );
      setPendingOrder(true);
      setShowShippingModal(true);
      return;
    }

    if (!paymentMethod) {
      setShowError(true);
      hasError = true;
    } else {
      setShowError(false);
    }

    if (paymentMethod === "bank" && !userBankInfo.trim()) {
      setBankInputError(true);
      hasError = true;
    } else {
      setBankInputError(false);
    }

    if (hasError) return;

    finalizeOrder();
  };

  return (
    <>
      <Header />

      <div className="container my-4 position-relative">
        {/* Tiêu đề Thanh toán */}
        <div className="container my-4">
          <div className="d-flex align-items-center mb-4">
            <div className="flex-grow-1 border-top"></div>
            <h3 className="mx-3 fw-bold text-center">THANH TOÁN</h3>
            <div className="flex-grow-1 border-top"></div>
          </div>
        </div>

        {/* 1. Thông tin nhận hàng */}
        <div
          style={{ backgroundColor: "#f4f3f3", fontSize: "19px" }}
          className=" mb-4 p-3 shadow-sm"
        >
          <h6 style={{ fontSize: "15px" }} className="text-info fw-bold">
            {" "}
            <img src={icon1} alt="icon" /> Thông tin nhận hàng
          </h6>
          <div className="d-flex justify-content-between align-items-center px-2">
            <div className="d-flex gap-4 flex-wrap align-items-center">
              <strong>
                {customer.name || customer.username || "Chưa cập nhật"} -{" "}
                {customer.phone || "Chưa cập nhật"}
              </strong>
              <span style={{ fontSize: "19px" }}>
                {customer.address || "Vui lòng thêm địa chỉ giao hàng"}
              </span>
            </div>
            <button
              className="text-primary fw-bold"
              style={{ cursor: "pointer", background: "none", border: "none" }}
              onClick={() => setShowShippingModal(true)}
            >
              Thay đổi
            </button>
          </div>
        </div>

        {/* 2. Sản phẩm */}
        <div
          className="mb-3 p-3 shadow-sm"
          style={{ backgroundColor: "#f4f3f3" }}
        >
          <div className="card-body p-0">
            <h6 className="text-info mb-0 fw-bold d-flex align-items-center mb-3">
              <img
                src={icon2}
                alt="icon"
                className="me-2"
                style={{ width: "30px" }}
              />
              SẢN PHẨM
            </h6>

            <div
              className="row g-0 p-3 d-none d-md-flex text-secondary fw-bold"
              style={{ fontSize: "14px" }}
            >
              <div className="col-md-6"></div>
              <div className="col-md-2 text-center">Đơn giá</div>
              <div className="col-md-2 text-center">Số lượng</div>
              <div className="col-md-2 text-end">Thành tiền</div>
            </div>

            {checkoutItems.length === 0 ? (
              <div className="text-center py-4 text-muted fw-bold">
                Chưa có sản phẩm để thanh toán
              </div>
            ) : (
              checkoutItems.map((item) => (
                <div
                  key={item.cid}
                  className="row g-0 p-0 align-items-center mb-3 px-3"
                >
                  <div className="col-md-6 d-flex align-items-center">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.name}
                      className="border me-3 shadow-sm"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div>
                      <p
                        className="mb-0 fw-bold text-dark"
                        style={{ lineHeight: "1.2" }}
                      >
                        {item.product.name}
                      </p>
                      <small className="text-muted d-block">
                        {item.color && (
                          <span className="badge bg-secondary me-1">
                            Màu: {item.color}
                          </span>
                        )}
                        <span className="badge bg-info">
                          Size: {item.size || "-"}
                        </span>
                      </small>
                    </div>
                  </div>
                  <div className="col-md-2 text-center text-dark">
                    {fmt(item.product.price)}
                  </div>
                  <div className="col-md-2 text-center text-dark">
                    {item.qty}
                  </div>
                  <div className="col-md-2 text-end fw-bold text-danger">
                    {fmt(item.product.price * item.qty)}
                  </div>
                </div>
              ))
            )}

            <div className="row g-0 p-3">
              <hr />
              <div className="col-md-8 d-flex">
                <div style={{ minWidth: "180px", marginRight: "80px" }}>
                  <span className="text-dark fw-bold">
                    Phương thức vận chuyển:
                  </span>
                </div>
                <div className="ps-2">
                  <span className="text-dark fw-bold">
                    Vận chuyển tiêu chuẩn
                  </span>
                  <div
                    className="text-muted mt-1 small"
                    style={{ maxWidth: "300px" }}
                  >
                    Giao hàng từ 5 - 6 ngày cho đơn đặt trước 14:00, không tính
                    Chủ nhật & ngày lễ
                  </div>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <button className="btn btn-link p-0 text-decoration-none fw-bold">
                  Thay đổi
                </button>
              </div>
              <div className="col-md-2 text-end fw-bold text-dark">
                {fmt(shippingFee)}
              </div>
            </div>

            <div className="p-3 d-flex justify-content-end align-items-center border-top">
              <span
                style={{ fontSize: "19px" }}
                className="me-4 text-dark fw-bold"
              >
                Tổng số tiền:
              </span>
              <strong className="text-danger" style={{ fontSize: "24px" }}>
                {fmt(grandTotal)}
              </strong>
            </div>
          </div>
        </div>

        {/* 3. PHƯƠNG THỨC THANH TOÁN */}
        <div
          style={{
            backgroundColor: "#f4f3f3",
            minHeight: "280px",
            border: showError ? "2px solid #dc3545" : "none",
          }}
          className="mb-4 p-4 mt-4 shadow-sm"
        >
          <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
            <h6
              className="mb-0 d-flex align-items-center gap-2 fw-bold"
              style={{ color: "#00CCFF" }}
            >
              <img src={icon3} alt="icon" style={{ width: "24px" }} />
              PHƯƠNG THỨC THANH TOÁN
            </h6>

            <div className="d-flex gap-3">
              <button
                onClick={() => {
                  setPaymentMethod("cod");
                  setShowError(false);
                }}
                className={`btn px-4 py-2 transition-all fw-bold ${
                  paymentMethod === "cod"
                    ? "btn-dark border-4 fw-bold shadow"
                    : "btn-outline-dark fw-normal"
                }`}
              >
                Thanh toán khi nhận hàng
              </button>

              <button
                onClick={() => {
                  setPaymentMethod("bank");
                  setShowError(false);
                }}
                className={`btn px-4 py-2 transition-all fw-bold ${
                  paymentMethod === "bank"
                    ? "btn-danger border-4 fw-bold shadow"
                    : "btn-outline-danger fw-normal"
                }`}
              >
                Thanh toán bằng ngân hàng
              </button>
            </div>
          </div>

          {showError && (
            <div className="text-danger fw-bold mb-3 small animate__animated animate__shakeX">
              <i className="bi bi-exclamation-triangle-fill me-1"></i>
              Vui lòng chọn một phương thức thanh toán!
            </div>
          )}

          {paymentMethod === "cod" && (
            <div className="mt-3 p-4 border border-2 rounded bg-white shadow-sm animate__animated animate__fadeIn">
              <h6 className="fw-bold text-dark mb-2">
                XÁC NHẬN: THANH TOÁN KHI NHẬN HÀNG (COD)
              </h6>
              <p className="mb-0 fw-bold text-secondary">
                * Bạn sẽ thanh toán tiền mặt khi nhận hàng. Số tiền:{" "}
                <strong className="text-danger">{fmt(grandTotal)}</strong>
              </p>
            </div>
          )}

          {paymentMethod === "bank" && (
            <div className="mt-3 p-4 border border-2 rounded bg-white shadow-sm animate__animated animate__fadeIn text-dark">
              <h6 className="fw-bold text-dark mb-4">
                HƯỚNG DẪN CHUYỂN KHOẢN NGÂN HÀNG
              </h6>

              <div className="row g-4 mb-4">
                {/* QR Code Section */}
                <div className="col-md-6 text-center">
                  <h6 className="fw-bold text-secondary mb-3">
                    Quét mã QR của ABC Shoe Store
                  </h6>
                  <div
                    className="p-3 border border-secondary rounded"
                    style={{ backgroundColor: "#f9f9f9" }}
                  >
                    <img
                      src={qrCode}
                      alt="QR Code"
                      style={{
                        width: "100%",
                        maxWidth: "250px",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>

                {/* Bank Info Section */}
                <div className="col-md-6">
                  <div
                    className="p-3 border border-start-5 rounded"
                    style={{
                      backgroundColor: "#f0f8ff",
                      borderLeft: "4px solid #dc3545",
                    }}
                  >
                    <div className="mb-3">
                      <label className="form-label fw-bold text-secondary">
                        Ngân hàng:
                      </label>
                      <p className="fs-5 fw-bold text-dark mb-0">
                        Vietcombank (VCB)
                      </p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold text-secondary">
                        Số tài khoản:
                      </label>
                      <p className="fs-5 fw-bold text-dark mb-0 text-danger">
                        1023456789
                      </p>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-bold text-secondary">
                        Chủ tài khoản:
                      </label>
                      <p className="fs-5 fw-bold text-dark mb-0">
                        ABC SHOE STORE
                      </p>
                    </div>

                    <div
                      className="px-3 py-2 rounded"
                      style={{ backgroundColor: "#fff3cd" }}
                    >
                      <p className="mb-0 fw-bold text-danger">
                        Nội dung chuyển khoản: <br />
                        <span className="text-dark">
                          "ABC SHOE STORE - {fmt(grandTotal)}"
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-3 rounded"
                style={{
                  backgroundColor: "#e7f3ff",
                  borderLeft: "4px solid #0066cc",
                }}
              >
                <p className="mb-1 fw-bold text-dark">
                  <i className="bi bi-info-circle me-2"></i>
                  Sau khi chuyển khoản, vui lòng cung cấp bằng chứng chuyển
                  khoản để xác nhận.
                </p>
              </div>

              <div className="mt-3">
                <label className="form-label fw-bold">
                  Xác nhận tài khoản của bạn:
                </label>
                <input
                  type="text"
                  className={`form-control border-3 py-2 fw-bold ${bankInputError ? "border-danger bg-light" : ""}`}
                  placeholder="Ví dụ: Vietcombank - 1023456789 (Để xác nhận chuyển khoản)"
                  value={userBankInfo}
                  onChange={(e) => {
                    setUserBankInfo(e.target.value);
                    if (e.target.value.trim()) setBankInputError(false);
                  }}
                />
                {bankInputError && (
                  <div className="text-danger fw-bold mt-1 small">
                    Vui lòng nhập thông tin ngân hàng xác nhận!
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-5">
            <hr className="border-2" style={{ borderColor: "#adb5bd" }} />
            <div className="d-flex justify-content-between align-items-center flex-wrap pt-2 text-dark">
              <p className="mb-0 text-secondary" style={{ fontSize: "15px" }}>
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo các
                chính sách của ABC Shoe
              </p>
              <button
                onClick={handleOrder}
                className="btn btn-dark fw-bold px-5 py-3 shadow"
                style={{ borderRadius: "0", fontSize: "1.2rem" }}
              >
                ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>

        <SuccessModalCheckout
          isOpen={isOrderSuccess}
          customerName={customer.name || customer.username || "Khách hàng"}
        />
      </div>

      <Footer />

      {showShippingModal && (
        <EditAddressModal
          customer={customer}
          onSave={handleAddressSave}
          onClose={() => setShowShippingModal(false)}
        />
      )}
    </>
  );
};

export default Checkout;
