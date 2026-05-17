import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import HeaderLine from "../../components/common/HeaderLine";

const ReturnPolicy = () => {
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
          <HeaderLine title="Chính Sách Đổi Trả" />

          <div className="content" style={{ lineHeight: "1.8", color: "#333" }}>
            <h5 className="fw-bold mt-4 text-uppercase">
              1. Đổi trả hàng khi sản phẩm lỗi
            </h5>
            <p>
              Kiểm tra điều kiện hoàn trả hàng bên dưới. Đóng gói sản phẩm và
              tất cả phụ kiện kèm theo về trung tâm giao hàng{" "}
              <strong>Shoe Store</strong> như hướng dẫn. Nhận sản phẩm mới.
            </p>

            <p className="fw-bold mb-1">Điều kiện:</p>
            <ul className="ps-4">
              <li>
                Khi Shoe Store giao nhầm màu, nhầm kích cỡ, nhầm sản phẩm hoặc
                sản phẩm bị hư hỏng do nhà sản xuất. Khách hàng gửi các hình ảnh
                sản phẩm nhận được kèm mã đơn hàng đến email:{" "}
                <strong>chamsockhachhang@shoestore.com.vn</strong> để được hỗ
                trợ.
              </li>
              <li>
                Sản phẩm cần đổi còn mới 100% chưa qua sử dụng hoặc giặt tẩy,
                nguyên phiếu bảo hành, tem nhãn, không bị dơ bẩn, trầy xước, đầy
                đủ bao bì, túi hộp.
              </li>
              <li>
                Khách hàng phải có hoá đơn giao hàng (phiếu giao hàng hoặc email
                xác nhận).
              </li>
              <li>
                Trong vòng <strong>7 ngày</strong> kể từ ngày nhận hàng.
              </li>
            </ul>

            <p className="fw-bold mb-1">Lưu ý:</p>
            <ul className="ps-4 italic">
              <li>
                Trường hợp sản phẩm lỗi cần đổi nhưng bị hết hàng, khách hàng có
                thể đổi sang sản phẩm khác có giá trị lớn hơn hoặc bằng (bù tiền
                chênh lệch nếu cao hơn và không hoàn tiền nếu thấp hơn).
              </li>
            </ul>

            <h5 className="fw-bold mt-4 text-uppercase">
              2. Chi phí vận chuyển đổi trả
            </h5>
            <ul className="ps-4">
              <li>
                <strong>Lỗi từ Shoe Store:</strong> Giao sai thông tin, hư hỏng
                do vận chuyển hoặc NSX: Khách hàng được{" "}
                <strong>miễn phí hoàn toàn</strong> chi phí vận chuyển.
              </li>
              <li>
                <strong>Lỗi từ khách hàng:</strong> Đặt sai đơn hàng, muốn đổi
                size/mẫu khi Shoe Store đã giao đúng: Chi phí vận chuyển hai
                chiều sẽ do khách hàng thanh toán.
              </li>
            </ul>

            <h5 className="fw-bold mt-4 text-uppercase">
              3. Hình thức và thời gian xử lý
            </h5>
            <p>
              Sản phẩm chỉ được đổi <strong>một lần duy nhất</strong>. Sau khi
              nhận được sản phẩm gửi về, hệ thống sẽ kiểm tra và thực hiện đổi
              trả trong vòng <strong>7 ngày làm việc</strong>.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default ReturnPolicy;
