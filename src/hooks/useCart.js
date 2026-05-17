import { useCallback } from "react";
import { addCartItem } from "../utils/cartStorage";

export function useCart() {
  const addToCart = useCallback((product) => {
    addCartItem({
      pid: product.id,
      size: product.size || "",
      color: product.color || "",
      qty: product.quantity || 1,
    });
  }, []);

  return { addToCart };
}
