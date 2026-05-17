import seedUsers from "../data/users";
import { hashPassword, verifyPassword } from "../utils/password";

const USER_KEY = "users";

function normalizeUsers(users) {
  if (!Array.isArray(users)) return [];

  return users.map((user) => {
    if (user.passwordHash) return user;

    if (user.password) {
      const { password, ...rest } = user;
      return {
        ...rest,
        passwordHash: hashPassword(password),
      };
    }

    return {
      ...user,
      passwordHash: hashPassword(""),
    };
  });
}

export const getUsers = () => {
  const raw = localStorage.getItem(USER_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const normalized = normalizeUsers(parsed);
        localStorage.setItem(USER_KEY, JSON.stringify(normalized));
        return normalized;
      }
    } catch {
      // Ignore parse error and fall back to seed users.
    }
  }

  const normalizedSeed = normalizeUsers(seedUsers);
  localStorage.setItem(USER_KEY, JSON.stringify(normalizedSeed));
  return [...normalizedSeed];
};

const saveUsers = (users) => {
  localStorage.setItem(USER_KEY, JSON.stringify(users));
};

export const register = (newUser) => {
  const users = getUsers();

  const isExist = users.find((u) => u.username === newUser.username);
  if (isExist) {
    return {
      success: false,
      message: "Tên đăng nhập đã tồn tại",
    };
  }

  const newUserObj = {
    id: `user_${Date.now()}`,
    username: newUser.username,
    name: newUser.username,
    phone: "",
    email: newUser.email,
    address: "",
    avatar: "https://i.pravatar.cc/150?img=12",
    role: "customer",
    passwordHash: hashPassword(newUser.password),
  };
  users.push(newUserObj);
  saveUsers(users);

  return {
    success: true,
    message: "Đăng ký thành công",
    user: newUserObj,
  };
};

export const login = ({ username, password }) => {
  const users = getUsers();
  const user = users.find((u) => u.username === username);

  if (!user) {
    return {
      success: false,
      message: "Tài khoản không tồn tại",
    };
  }

  if (!verifyPassword(password, user.passwordHash)) {
    return {
      success: false,
      message: "Mật khẩu không đúng",
    };
  }

  return {
    success: true,
    message: "Đăng nhập thành công",
    user,
  };
};
