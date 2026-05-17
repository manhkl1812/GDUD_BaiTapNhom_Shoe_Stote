import { useEffect, useRef, useState } from "react";

export default function PreviousValue() {
  const [value, setValue] = useState("");
  const prevRef = useRef("");

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <p>Current: {value}</p>
      <p>Previous: {prevRef.current}</p>
    </>
  );
}
