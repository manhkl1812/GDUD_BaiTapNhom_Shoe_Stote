/**
 * Format price to Vietnamese currency format
 * Example: 1200000 -> "1.200.000"
 */
export function formatPrice(price) {
  const num = Number(price);
  if (!Number.isFinite(num)) return "0";
  return num.toLocaleString("vi-VN");
}
