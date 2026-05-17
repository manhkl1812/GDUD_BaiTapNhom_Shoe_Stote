// // component chọn size linh hoạt trong detail và cả trong giỏ hàng
// import { useState } from "react";

// const SizeSelector = ({ sizes = ["39", "40", "41", "42"], onChange }) => {
//   const [selectedSize, setSelectedSize] = useState(null);

//   const handleSelect = (size) => {
//     setSelectedSize(size);
//     onChange && onChange(size);
//   };

//   return (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "15px",
//     }}
//   >
//     <h6 style={{ margin: 0 }}>Chọn size:</h6>

//     <div style={{ display: "flex", gap: "10px" }}>
//       {sizes.map((size) => (
//         <button
//           key={size}
//           onClick={() => handleSelect(size)}
//           style={{
//             padding: "6px 12px",
//             border:
//               selectedSize === size
//                 ? "2px solid black"
//                 : "1px solid #ccc",
//             background: selectedSize === size ? "#000" : "#fff",
//             color: selectedSize === size ? "#fff" : "#000",
//             cursor: "pointer",
//           }}
//         >
//           {size}
//         </button>
//       ))}
//     </div>
//   </div>
// );

// };

// export default SizeSelector;
