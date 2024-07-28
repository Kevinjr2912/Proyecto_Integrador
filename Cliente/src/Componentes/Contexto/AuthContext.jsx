import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState({ isLoggedIn: false, userType: null });

  const login = (userType) => {
    setAuthState({ isLoggedIn: true, userType });
  };

  const logout = () => {
    setAuthState({ isLoggedIn: false, userType: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
