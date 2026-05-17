const CART_STORAGE_KEY = "shoe_store_cart";
const BUY_NOW_STORAGE_KEY = "shoe_store_buy_now";

function normalizeCartItem(item) {
  return {
    cid: String(item?.cid ?? ""),
    pid: String(item?.pid ?? ""),
    size: String(item?.size ?? ""),
    color: String(item?.color ?? ""),
    qty: Math.max(1, Number(item?.qty) || 1),
    checked: Boolean(item?.checked),
  };
}

function readCartFromStorage() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map(normalizeCartItem)
      .filter((item) => item.cid && item.pid && item.qty > 0);
  } catch {
    return [];
  }
}

function notifyCartChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("cart:updated"));
}

export function getCartItems() {
  return readCartFromStorage();
}

export function saveCartItems(items) {
  if (typeof window === "undefined") return;

  const normalized = Array.isArray(items)
    ? items
        .map(normalizeCartItem)
        .filter((item) => item.cid && item.pid && item.qty > 0)
    : [];

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(normalized));
  notifyCartChanged();
}

export function addCartItem({ pid, size = "", color = "", qty = 1 }) {
  const safePid = String(pid ?? "").trim();
  if (!safePid) return getCartItems();

  const safeSize = String(size ?? "").trim();
  const safeColor = String(color ?? "").trim();
  const safeQty = Math.max(1, Number(qty) || 1);
  const current = getCartItems();

  const existedIndex = current.findIndex(
    (item) =>
      item.pid === safePid &&
      item.size === safeSize &&
      item.color === safeColor,
  );

  if (existedIndex >= 0) {
    current[existedIndex] = {
      ...current[existedIndex],
      qty: current[existedIndex].qty + safeQty,
    };
  } else {
    current.push({
      cid: `${safePid}_${safeSize || "nosize"}_${safeColor || "nocolor"}_${Date.now()}`,
      pid: safePid,
      size: safeSize,
      color: safeColor,
      qty: safeQty,
      checked: false,
    });
  }

  saveCartItems(current);
  return current;
}

export function setBuyNowItem({ pid, size = "", color = "", qty = 1 }) {
  if (typeof window === "undefined") return;

  const safePid = String(pid ?? "").trim();
  if (!safePid) return;

  const item = normalizeCartItem({
    cid: `${safePid}_${Date.now()}`,
    pid: safePid,
    size,
    color,
    qty,
    checked: true,
  });

  window.localStorage.setItem(BUY_NOW_STORAGE_KEY, JSON.stringify(item));
}

export function getBuyNowItem() {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(BUY_NOW_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const item = normalizeCartItem(parsed);
    if (!item.cid || !item.pid || item.qty <= 0) return null;
    return item;
  } catch {
    return null;
  }
}

export function clearBuyNowItem() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(BUY_NOW_STORAGE_KEY);
}
