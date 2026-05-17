import React from "react";

const SuccessModalCheckout = ({ isOpen, customerName }) => {
    if (!isOpen) return null;

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 9999 }}
        >
            <div className="bg-white p-5 rounded-4 shadow-lg text-center animate__animated animate__zoomIn" style={{ maxWidth: "450px" }}>
                <div className="mb-4">
                    <div className="display-1 text-success">
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                </div>
                <h2 className="fw-bold mb-3 text-dark">ĐẶT HÀNG THÀNH CÔNG!</h2>
                <p className="text-secondary mb-4 px-3" style={{ fontSize: '1.1rem' }}>
                    Cảm ơn bạn <strong>{customerName}</strong>. <br />
                    Đơn hàng của bạn đang được xử lý và sẽ sớm được giao tới địa chỉ của bạn.
                </p>
                <button
                    className="btn btn-dark w-100 py-3 fw-bold shadow-sm"
                    style={{ borderRadius: "10px", fontSize: "1.1rem" }}
                    onClick={() => window.location.href = "/"}
                >
                    TIẾP TỤC MUA SẮM
                </button>
            </div>
        </div>
    );
};

export default SuccessModalCheckout;