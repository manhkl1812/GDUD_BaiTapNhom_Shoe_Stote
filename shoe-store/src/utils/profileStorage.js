import currentUsers from "../data/users";
import { getCurrentAccount } from "./authStorage";

const PROFILE_KEY = "shoe_store_profile";
const ORDER_HISTORY_PREFIX = "shoe_store_order_history_";

function safeParse(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function getOrderHistoryKey(username) {
  return `${ORDER_HISTORY_PREFIX}${username || "guest"}`;
}

export function getProfile() {
  if (typeof window === "undefined") return currentUsers[0];

  const stored = safeParse(window.localStorage.getItem(PROFILE_KEY), null);
  const account = getCurrentAccount();

  if (account) {
    const normalizedUsername = String(account.username ?? "")
      .trim()
      .toLowerCase();
    const normalizedEmail = String(account.email ?? "")
      .trim()
      .toLowerCase();

    const matchedUser = currentUsers.find((user) => {
      const sameUsername =
        normalizedUsername &&
        String(user.username ?? "")
          .trim()
          .toLowerCase() === normalizedUsername;
      const sameEmail =
        normalizedEmail &&
        String(user.email ?? "")
          .trim()
          .toLowerCase() === normalizedEmail;
      return sameUsername || sameEmail;
    });

    if (matchedUser) {
      return {
        ...matchedUser,
        ...account,
        ...(stored ?? {}),
      };
    }

    return {
      id: currentUsers[0].id,
      name: account.name ?? account.username ?? "",
      username: account.username ?? "",
      phone: "",
      email: account.email ?? "",
      address: "",
      avatar: currentUsers[0].avatar,
      role: currentUsers[0].role,
      ...(stored ?? {}),
    };
  }

  return {
    id: "",
    name: stored?.name || "",
    username: "",
    phone: stored?.phone || "",
    email: stored?.email || "",
    address: stored?.address || "",
    avatar: currentUsers[0].avatar,
    role: "guest",
    ...(stored ?? {}),
  };
}

export function saveProfile(profile) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function getOrderHistory() {
  if (typeof window === "undefined") return [];
  const account = getCurrentAccount();
  const key = getOrderHistoryKey(account?.username);
  return safeParse(window.localStorage.getItem(key), []);
}

export function addOrderHistory(order) {
  if (typeof window === "undefined") return;

  const account = getCurrentAccount();
  const key = getOrderHistoryKey(account?.username);

  const current = getOrderHistory();
  const next = [{ ...order }, ...current].slice(0, 20);
  window.localStorage.setItem(key, JSON.stringify(next));
}
