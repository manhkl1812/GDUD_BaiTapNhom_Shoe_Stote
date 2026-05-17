import { useState } from "react";

const ProductQuantityCart = ({ min = 1, max = 99, value = 1, onChange }) => {
  const [quantity, setQuantity] = useState(value);

  const handleChange = (e) => {
    let newValue = parseInt(e.target.value);

    if (isNaN(newValue)) newValue = min;
    if (newValue < min) newValue = min;
    if (newValue > max) newValue = max;

    setQuantity(newValue);
    onChange && onChange(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <span style={{ fontWeight: 700, minWidth: "80px" }}>
        Số lượng
      </span>

      <input
        type="number"
        min={min}
        max={max}
        value={quantity}
        onChange={handleChange}
        style={{
          width: "80px",
          height: "40px",
          padding: "0 10px",
          border: "2px solid",
          backgroundColor: "white",
          fontWeight: 600,
        }}
      />
    </div>
  );
};

export default ProductQuantityCart;
