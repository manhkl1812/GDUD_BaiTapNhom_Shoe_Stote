import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.jsx";

function About() {
  const navigate = useNavigate();
  const sectionStyle = {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  };
  const flexStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    alignItems: "center",
  };
  const cardStyle = {
    padding: "30px",
    borderRadius: "15px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
    flex: "1",
    minWidth: "250px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  };

  return (
    <MainLayout props={

    
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          lineHeight: "1.6",
        }}
      >
        {/* Banner lớn */}
        <div
          style={{
            height: "450px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            backgroundColor: "#000",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              padding: "40px",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                margin: "0 0 10px 0",
                textTransform: "uppercase",
              }}
            >
              Nâng Tầm Bước Chân
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: "300",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Mang đến những đôi giày chất lượng nhất, đồng hành cùng phong cách
              cá nhân của bạn.
            </p>
          </div>
        </div>

        {/* Giới thiệu 2 cột */}
        <div style={sectionStyle}>
          <div style={flexStyle}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "20px",
                  color: "#000",
                }}
              >
                ABC Shoe Store – Chất Lượng Đến Từ Tâm
              </h2>
              <p>
                Khởi nguồn từ tình yêu với Sneaker, ABC Shoe Store được thành
                lập để cung cấp những sản phẩm chính hãng nhất đến tay người
                dùng Việt.
              </p>
              <p>
                Chúng tôi tin rằng mỗi đôi giày là một câu chuyện. Hãy để chúng
                tôi cùng bạn viết nên câu chuyện đó.
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <img
                src="https://res.cloudinary.com/shoe-store-ptgdud/image/upload/v1770641740/bitis-ez-lift-xanh-duong_opycff.jpg"
                alt="Shoe"
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Cam kết của shop */}
        <div style={{ backgroundColor: "#fff", padding: "80px 20px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "50px",
                fontSize: "2rem",
              }}
            >
              Tại sao chọn chúng tôi?
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <div style={cardStyle}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🏆</div>
                <h3 style={{ marginBottom: "10px" }}>100% Chính Hãng</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Tuyển chọn và kiểm định nghiêm ngặt từ các nguồn uy tín nhất.
                </p>
              </div>
              <div style={cardStyle}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🚚</div>
                <h3 style={{ marginBottom: "10px" }}>Giao Hàng Nhanh</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Xử lý đơn hàng trong ngày, giao hàng thần tốc toàn quốc.
                </p>
              </div>
              <div style={cardStyle}>
                <div style={{ fontSize: "40px", marginBottom: "15px" }}>🛡️</div>
                <h3 style={{ marginBottom: "10px" }}>Bảo Hành Tận Tâm</h3>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Hỗ trợ bảo hành và đổi trả linh hoạt lên đến 30 ngày.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nút mua hàng */}
        <div style={{ textAlign: "center", paddingBottom: "80px" }}>
          <button
            style={{
              backgroundColor: "#4e4848",
              color: "#fff",
              padding: "15px 40px",
              borderRadius: "50px",
              border: "none",
              fontSize: "1.1rem",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/cua-hang")}
          >
            MUA SẮM NGAY
          </button>
        </div>
      </div>
    }/>
  );
}

export default About;
