import { createContext, useState, useEffect } from "react";
import api from "../api/axios.config";
import { getUserProfile } from "../api/user.api";
import { refreshToken } from "../api/auth.api";

interface AuthContextType {
  user: any | null;
  setUser: (user: any) => void;
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
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const initializeAuth = async () => {
    try {
      // 1️⃣ Rafraîchir accessToken via refresh token cookie
      const newAccessToken = await refreshToken();
      api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

      // 2️⃣ Récupérer les infos utilisateur
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

  const logout = () => {
    setUser(null);
    api.defaults.headers.common["Authorization"] = "";
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
