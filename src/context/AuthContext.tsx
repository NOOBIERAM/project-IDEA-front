import { createContext, useState, useEffect } from "react";
import api from "../api/axios.config";
import { getUserProfile } from "../api/user.api";
import { refreshToken, signout } from "../api/auth.api";
import type { User } from "../types/User";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
  loading: true,
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  const initializeAuth = async () => {
    try {
      const newAccessToken = await refreshToken();
      api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

      const profile = await getUserProfile();
      setUser(profile);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initializeAuth();
    
  }, []);

  const logout = async () => {
    await signout();
    api.defaults.headers.common["Authorization"] = "";
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
