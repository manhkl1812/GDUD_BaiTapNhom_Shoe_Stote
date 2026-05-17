import { useState } from "react";

const ProductQuantityDetail = ({ min = 1, max = 99, onChange }) => {
  const [quantity, setQuantity] = useState(min);

  const decrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange && onChange(newValue);
    }
  };

  const increase = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange && onChange(newValue);
    }
  };

  return (
    <div style={{marginRight: "520px"}}>
      <div style={{ marginBottom: "10px",marginRight: "50px", fontWeight: 400 }}>
        Số lượng:
      </div>

      <div
        style={{
          display: "inline-flex",
          border: "1px solid #999",
        }}
      >
        <button
          onClick={decrease}
          style={{
            width: "30px",
            height: "40px",
            border: "1px solid",
            borderRight: "1px solid #999",
            backgroundColor: "white",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          −
        </button>

        <div
          style={{
            width: "60px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 500,
            backgroundColor: "white",
            border: "1px solid"
          }}
        >
          {quantity}
        </div>

        <button
          onClick={increase}
          style={{
            width: "30px",
            height: "40px",
            border: "1px solid",
            borderLeft: "1px solid #999",
            backgroundColor: "white",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantityDetail;
