import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Principal from "./Paginas/Principal";
import LoginAdministrador from "./Paginas/LoginAdminstrador"; 
import LoginUsuario from "./Paginas/LoginUsuario"; 
import HomeAdminP from "./Paginas/HomeAdminP";
import GestionarProductosP from './Paginas/GestionarProductosP';
import RegistroPagina from './Paginas/RegistroPagina';
import DetalleVentaP from './Paginas/DetalleVentaP';
import MetodoPagoP from './Paginas/MetodoPagoP';
import CarritoP from './Paginas/CarritoP';
import Faqs from './Paginas/Faqs';
import InformationProduct from './Paginas/InformacionProducto';
import CascosPagina from './Paginas/CascosPagina';
import OverolesPagina from "./Paginas/OverolesPagina";
import MetodoEnvioP from './Paginas/MetodoEnvioP';
import OrdenesP from './Paginas/OrdenesP';
import DatoEnvioP from './Paginas/DatoEnvioP';
import { AuthProvider } from './Componentes/Contexto/AuthContext';
import AboutUs from "./Componentes/AboutUs";
import PrivateRoute from "./Componentes/PrivateRoute";
import AdminRoute from "./Componentes/AdminRoute"; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    console.log("Cerrando sesión...");
    Navigate("/");
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/loginAdmin" element={<LoginAdministrador />} />
          <Route path="/loginUsuario" element={<LoginUsuario setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} handleLogout={handleLogout} />} />
          <Route path="/registroPagina" element={<RegistroPagina />} /> {/* Ruta de registro no protegida */}
          
          <Route
            path="/homeAdmin"
            element={

                <HomeAdminP />

            }
          />
          <Route
            path="/gestionarProductos"
            element={
       
                <GestionarProductosP />
          
            }
          />
          <Route
            path="/detalleVenta"
            element={
             
                <DetalleVentaP />
             
            }
          />
          
          <Route
            path="/carritoPago"
            element={
              <PrivateRoute>
                <CarritoP />
              </PrivateRoute>
            }
          />
          <Route
            path="/carritoPago/metodoEnvio"
            element={
              <PrivateRoute>
                <MetodoEnvioP />
              </PrivateRoute>
            }
          />
          <Route
            path="/carritoPago/metodoEnvio/metodoPago"
            element={
              <PrivateRoute>
                <MetodoPagoP />
              </PrivateRoute>
            }
          />
          <Route
            path="/ordenes"
            element={
              <PrivateRoute>
                <OrdenesP />
              </PrivateRoute>
            }
          />
          <Route
            path="/datosEnvio"
            element={
              <PrivateRoute>
                <DatoEnvioP />
              </PrivateRoute>
            }
          />
          
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/informacionProducto/:idProducto" element={<InformationProduct />} />
          <Route path="/cascos" element={<CascosPagina />} />
          <Route path="/overoles" element={<OverolesPagina />} />
          <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
