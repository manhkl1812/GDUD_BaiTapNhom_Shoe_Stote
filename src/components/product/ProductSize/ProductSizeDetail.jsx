import { useState } from "react";

const ProductSizeDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = ["40.5", "41", "42", "43", "44"];

  return (
    <div
      style={{
        padding: "16px 20px",
        borderRadius: "4px",
        width: "fit-content",
      }}
    >
      <div
        style={{
          marginRight: "300px",
          marginBottom: "10px",
          fontWeight: 400,
        }}
      >
        Size
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        {sizes.map((size) => {
          const isSelected = selectedSize === size;

          return (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                minWidth: "50px",
                padding: "6px 10px",
                borderRadius: "6px",
                border: isSelected
                  ? "2px solid #000"
                  : "1px solid #ccc",
                backgroundColor: "#fff",
                color: isSelected ? "#000" : "#888",
                cursor: "pointer",
                fontWeight: 500,
                transition: "0.2s",
              }}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSizeDetail;
