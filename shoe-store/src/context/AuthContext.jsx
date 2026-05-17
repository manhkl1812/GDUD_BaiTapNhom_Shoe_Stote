import { createContext, useEffect, useMemo, useState } from "react";
import {
  clearCurrentAccount,
  getCurrentAccount,
  setCurrentAccount,
} from "../utils/authStorage";

const AuthContext = createContext({
  currentAccount: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [currentAccount, setCurrentAccountState] = useState(() =>
    getCurrentAccount(),
  );

  useEffect(() => {
    const handleAuthUpdate = () => setCurrentAccountState(getCurrentAccount());

    window.addEventListener("auth:updated", handleAuthUpdate);
    window.addEventListener("storage", handleAuthUpdate);

    return () => {
      window.removeEventListener("auth:updated", handleAuthUpdate);
      window.removeEventListener("storage", handleAuthUpdate);
    };
  }, []);

  const login = (account) => {
    setCurrentAccount(account);
    setCurrentAccountState(account);
  };

  const logout = () => {
    clearCurrentAccount();
    setCurrentAccountState(null);
  };

  const value = useMemo(
    () => ({
      currentAccount,
      isAuthenticated: Boolean(currentAccount),
      login,
      logout,
    }),
    [currentAccount],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
