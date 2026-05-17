import { useState } from "react";
const Rating = ({ onChange }) => {
  const [score, setScore] = useState(0);

  const handleClick = (value) => {
    setScore(value);
    onChange && onChange(value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          style={{
            fontSize: 24,
            cursor: "pointer",
            color: star <= score ? "gold" : "gray"
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
