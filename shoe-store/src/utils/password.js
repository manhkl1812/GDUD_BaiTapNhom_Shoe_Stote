const SALT = "shoe-store-v1";

// Lightweight deterministic hash for demo purposes (not production-grade security).
export function hashPassword(password) {
  const text = `${SALT}:${String(password ?? "")}`;
  let hash = 5381;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 33) ^ text.charCodeAt(i);
  }

  return (hash >>> 0).toString(16).padStart(8, "0");
}

export function verifyPassword(password, passwordHash) {
  return hashPassword(password) === String(passwordHash ?? "");
}
