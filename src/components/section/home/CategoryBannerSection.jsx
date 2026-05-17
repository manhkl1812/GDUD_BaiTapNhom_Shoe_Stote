// CategoryBannerSection.jsx
import React from "react";

const CategoryItem = ({ title, items, image }) => {
  return (
    <div
      className="position-relative text-white overflow-hidden"
      style={{ height: "280px" }}
    >
      {/* Hình nền */}
      <img
        src={image}
        className="w-100 h-100"
        alt={title}
        style={{ objectFit: "cover", filter: "brightness(0.75)" }}
      />

      {/* Nội dung đè lên */}
      <div
        // 1. Thay 'justify-content-center' thành 'justify-content-start'
        // 2. Thêm 'pt-5' (padding-top) để đẩy chữ xuống một khoảng cố định
        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-start align-items-center pt-5"
      >
        {/* Tiêu đề */}
        {/* Thêm style marginTop nếu muốn chỉnh ly ti cho vừa mắt hơn */}
        <h3
          className="fw-bold text-uppercase mb-2 fs-4"
          style={{ marginTop: "20px" }}
        >
          {title}
        </h3>

        {/* Danh sách link */}
        <ul className="list-unstyled text-center mb-0">
          {items.map((item, index) => (
            <li key={index} className="mb-1">
              <a
                href="#"
                className="text-white text-decoration-none opacity-75 hover-opacity-100"
                style={{ fontSize: "0.9rem", fontWeight: "500" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const CategoryBannerSection = () => {
  const data = [
    {
      title: "Giày Nam",
      items: ["New Arrivals", "Best Seller", "Sale-off"],
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Giày Nữ",
      items: ["New Arrivals", "Best Seller", "Sale-off"],
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Dòng Sản Phẩm",
      items: ["Basas", "Vintas", "Urbas", "Pattas"],
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="container-fluid py-4">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px", // Giữ khoảng cách 2px
          width: "100%",
        }}
      >
        {data.map((cat, index) => (
          <CategoryItem key={index} {...cat} />
        ))}
      </div>
    </section>
  );
};

export default CategoryBannerSection;
