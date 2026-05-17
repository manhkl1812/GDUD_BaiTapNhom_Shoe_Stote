import { useState } from "react";
import cartIcon from "../../assets/icon/shopping-cart.png";

const Popup = () => {
  const [count, setCount] = useState(1);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img src={cartIcon} width={40} alt="cart" />
      <br />
      <button onClick={() => setCount(count + 1)}>
        Thêm vào giỏ
      </button>

      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-10px",          
            left: "50%",          
            transform: "translateX(50%)",
            background: "red",
            color: "white",
            borderRadius: "50%",
            minWidth: "18px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: "bold",
            boxShadow: "0 0 0 2px white", 
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default Popup;
