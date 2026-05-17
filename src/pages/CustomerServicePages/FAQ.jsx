import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import HeaderLine from "../../components/common/HeaderLine";

const FAQ = () => {
  const sections = [
    {
      title: "GIAO HÀNG & VẬN CHUYỂN",
      items: [
        {
          q: "Khi nào tôi nhận được hàng?",
          a: "Khu vực HCM: 1-2 ngày. Các tỉnh miền Nam/Tây: 2-4 ngày. Khu vực miền Trung/Bắc: 3-5 ngày. (Không tính Chủ nhật và ngày Lễ).",
        },
        {
          q: "Phí vận chuyển tính như thế nào?",
          a: "Phí vận chuyển sẽ được tính tự động dựa trên khu vực và khối lượng đơn hàng, hiển thị rõ ràng tại trang Thanh toán.",
        },
        {
          q: "Tôi có được chọn giờ giao hàng không?",
          a: "Hiện tại đối tác vận chuyển chưa hỗ trợ chọn giờ chính xác, tuy nhiên shipper sẽ liên hệ trước khi giao hàng.",
        },
      ],
    },
    {
      title: "ĐẶT HÀNG & THANH TOÁN",
      items: [
        {
          q: "Tôi có thể thanh toán bằng hình thức nào?",
          a: "Shoe Store hỗ trợ COD (thanh toán khi nhận hàng) và thanh toán trực tuyến qua thẻ ATM nội địa, Visa/MasterCard.",
        },
        {
          q: "Làm thế nào để kiểm tra đơn hàng?",
          a: "Quý khách vào mục 'Kiểm tra đơn hàng' trên website, nhập mã đơn hàng và số điện thoại để xem tình trạng hiện tại.",
        },
      ],
    },
  ];

  return (
    <MainLayout
      props={
        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 40px" }}
        >
          <HeaderLine title="Câu Hỏi Thường Gặp" />

          {sections.map((section, idx) => (
            <div key={idx} className="mt-5">
              <h5 className="fw-bold text-danger border-bottom pb-2">
                {section.title}
              </h5>
              {section.items.map((item, i) => (
                <div key={i} className="py-3 border-bottom border-light">
                  <p className="fw-bold mb-1" style={{ color: "#0056b3" }}>
                    Q: {item.q}
                  </p>
                  <p className="mb-0 text-muted">A: {item.a}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    />
  );
};

export default FAQ;
