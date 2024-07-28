import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    userType: null, // admin o cliente
  });

  const login = (userType) => {
    setAuthState({
      isLoggedIn: true,
      userType,
    });
  };

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      userType: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
