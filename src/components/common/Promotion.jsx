// const Promotion = ({
//   title = "Khuyến mãi",
//   description,
//   discount,
//   code,
//   onApply,
// }) => {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "16px",
//         maxWidth: "300px",
//       }}
//     >
//       <h3>{title}</h3>

//       {discount && (
//         <p style={{ color: "red", fontWeight: "bold" }}>Giảm {discount}%</p>
//       )}

//       {description && <p>{description}</p>}

//       {code && (
//         <p>
//           Mã: <strong>{code}</strong>
//         </p>
//       )}

//       {onApply && <button onClick={onApply}>Áp dụng</button>}
//     </div>
//   );
// };

function Promotion({title}) {
  return(
    <>
      <span className="badge bg-danger rounded-lg py-2">
      - {title} %
    </span>
    </>
  );
}

export default Promotion;
