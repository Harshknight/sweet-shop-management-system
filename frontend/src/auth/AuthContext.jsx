import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const decoded = jwtDecode(token);
    return {
      token,
      role: decoded.role
    };
  });

  const login = (token) => {
    const decoded = jwtDecode(token);

    localStorage.setItem("token", token);

    setUser({
      token,
      role: decoded.role
    });

    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
