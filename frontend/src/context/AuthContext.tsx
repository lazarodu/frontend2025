import { createContext, useContext, useState, type ReactNode } from "react";

interface User {
  email: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const login = (email: string, password: string) => {
    if (email === "admin@exemplo.com" && password === "password") {
      setUser({ email });
      return true;
    } else {
      return false;
    }
  };
  const logout = () => setUser(null);
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado com AuthProvider");
  }
  return context;
}
