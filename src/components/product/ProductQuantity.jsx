//Điều chỉnh số lượng có thể ở detail hoặc ở cart
import { useState } from "react";

const QuantitySelector = ({ initial = 1, onChange }) => {
  const [quantity, setQuantity] = useState(initial);

  const increase = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
    onChange && onChange(newValue);
  };

  const decrease = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange && onChange(newValue);
    }
  };

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", border: "1px solid", padding: "4px 4px"}}>
      <button onClick={decrease}>-</button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default QuantitySelector;
