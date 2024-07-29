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



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    console.log("Cerrando sesión...");
    Navigate("/")
  };
  return (
<AuthProvider>
    <Router>
    


       {/*FALTA LA IMAGEN DEL NAV BAR, RUTAS NAVBAR,FOOTER Y RUTAS PROTEGIDAS */ }
        {/*FALTA ORDENES */ }
         {/*VISTAS LISTAS (YA CREADAS) */ }
      <Routes>
        <Route path="/" element={<Principal />} />   {/*Faltan estilos, los carruseles*/ }
        <Route path="/loginAdmin" element={<LoginAdministrador />} /> {/*LISTO*/ }
        <Route path="/loginUsuario" element={<LoginUsuario setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} handleLogout={handleLogout}  />} /> {/*LISTO*/ }
        <Route path="/homeAdmin" element={<HomeAdminP />} />  {/*LISTO*/ }
        <Route path="/gestionarProductos" element={<GestionarProductosP />} />  {/*LISTO*/ }
        <Route path="/registroPagina" element={<RegistroPagina />} />  {/*listo*/ }
        <Route path="/detalleVenta" element={<DetalleVentaP />} />   {/*FALTA BACK*/ }
        <Route path="/carritoPago" element={<CarritoP />} />   {/*LISTO*/ }
        <Route path="/carritoPago/metodoEnvio" element={<MetodoEnvioP />} />  {/*Falta BACK */ }
        <Route path="/carritoPago/metodoEnvio/metodoPago" element={<MetodoPagoP />} />  {/*FALTA BACK */ }
        <Route path="/faqs" element={<Faqs />} />  {/*LISTO*/ }
        <Route path="/informacionProducto/:idProducto" element={<InformationProduct />} />  {/*LISTO*/ }
        <Route path="/cascos" element={<CascosPagina />} /> {/*LISTO*/ }
        <Route path="/overoles" element={<OverolesPagina />} /> {/*LISTO*/ }
        <Route path="/ordenes" element={<OrdenesP />} />  {/*GOD falta BACK*/ }
        <Route path="/datosEnvio" element={<DatoEnvioP />} />  {/*LISTO*/ }
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;


