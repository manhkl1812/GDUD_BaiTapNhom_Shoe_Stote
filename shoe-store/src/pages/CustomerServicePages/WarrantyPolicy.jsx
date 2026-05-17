import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import HeaderLine from "../../components/common/HeaderLine";

const WarrantyPolicy = () => {
  return (
    <MainLayout
      props={
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 16px 40px",
            textAlign: "justify",
          }}
        >
          <HeaderLine title="Chính Sách Bảo Hành" />

          <div className="content" style={{ lineHeight: "1.8", color: "#333" }}>
            <h5 className="fw-bold mt-4 text-uppercase">
              1. Điều kiện áp dụng và thời gian bảo hành
            </h5>
            <p className="fw-bold mb-1">Điều kiện miễn phí bảo hành:</p>
            <ul className="ps-4">
              <li>
                Hở keo, đứt chỉ, gãy móc khoá, bung hoạ tiết trang trí (nơ, nút,
                hoa…), lờn gai nỉ.
              </li>
              <li>
                Khách hàng cung cấp hóa đơn (phiếu xuất hàng) hoặc email xác
                nhận đơn hàng.
              </li>
            </ul>

            <p className="fw-bold mb-1">Thời gian bảo hành:</p>
            <ul className="ps-4">
              <li>
                <strong>Bảo hành trọn đời:</strong> Đối với lỗi bong keo, đứt
                chỉ (vật tư sản phẩm còn đủ điều kiện tái chế).
              </li>
              <li>
                <strong>Bảo hành 3 - 6 tháng:</strong> Đối với các lỗi kỹ thuật
                khác tùy dòng sản phẩm đặc thù.
              </li>
            </ul>

            <p className="fw-bold mb-1">Trường hợp tính phí:</p>
            <p>
              Mòn hay mất tẩy cao su, gãy khoen khóa, lờn gai nỉ sau thời hạn
              bảo hành. Khách hàng sẽ thanh toán phí sửa chữa + phí vận chuyển.
            </p>

            <h5 className="fw-bold mt-4 text-uppercase">
              2. Địa điểm tiếp nhận & Thời gian xử lý
            </h5>
            <p>
              Quý khách có thể mang sản phẩm đến{" "}
              <strong>tất cả các cửa hàng tiếp thị Shoe Store</strong> trên toàn
              quốc để được tiếp nhận bảo hành.
            </p>
            <p>
              Thời gian xử lý: Từ <strong>01 đến 15 ngày làm việc</strong> tùy
              mức độ hư hỏng của sản phẩm.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default WarrantyPolicy;
