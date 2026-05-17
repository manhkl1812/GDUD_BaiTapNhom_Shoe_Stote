import { useState } from "react";

const ProductSizeCart = ({ value, onChange }) => {
  const sizes = ["40.5", "41", "42", "43", "44"];

  const [selected, setSelected] = useState(value || sizes[0]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelected(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginBottom: "15px",
      }}
    >
      <span style={{ fontWeight: 700, minWidth: "80px" }}>
        Size
      </span>

      <select
        value={selected}
        onChange={handleChange}
        style={{
          width: "80px",
          height: "40px",
          padding: "0 10px",
          border: "2px solid",
          backgroundColor: "white",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        {sizes.map((size, index) => (
          <option key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductSizeCart;
