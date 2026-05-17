import React, { useState, useEffect } from "react";

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&h=600&fit=crop",
      title: "Bộ sưu tập mới",
      description: "Giày thể thao cao cấp",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1400&h=600&fit=crop",
      title: "Giảm giá 50%",
      description: "Săn sale ngay hôm nay",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1400&h=600&fit=crop",
      title: "Phong cách đường phố",
      description: "Xu hướng thời trang mới",
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "20px auto",
        padding: "0 20px",
      }}
    >
      {/* Banner Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {/* Slides */}
        <div
          style={{
            display: "flex",
            height: "100%",
            transition: "transform 0.7s ease-in-out",
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              style={{ minWidth: "100%", height: "100%", position: "relative" }}
            >
              <img
                src={banner.image}
                alt={banner.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {/* Overlay Text */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <h2
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                  }}
                >
                  {banner.title}
                </h2>
                <p style={{ fontSize: "20px" }}>{banner.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
            zIndex: 10,
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.7)")
          }
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Next Button*/}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255,255,255,0.7)",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s",
            zIndex: 10,
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.9)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.7)")
          }
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: index === currentSlide ? "32px" : "12px",
                height: "12px",
                borderRadius: "6px",
                backgroundColor:
                  index === currentSlide ? "white" : "rgba(255,255,255,0.5)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
