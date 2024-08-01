import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "./Paginas/Principal";
import LoginAdministrador from "./Paginas/LoginAdminstrador";
import LoginUsuario from "./Paginas/LoginUsuario";
import HomeAdminP from "./Paginas/HomeAdminP";
import GestionarProductosP from "./Paginas/GestionarProductosP";
import RegistroPagina from "./Paginas/RegistroPagina";
import DetalleVentaP from "./Paginas/DetalleVentaP";
import MetodoPagoP from "./Paginas/MetodoPagoP";
import CarritoP from "./Paginas/CarritoP";
import Faqs from "./Paginas/Faqs";
import InformationProduct from "./Paginas/InformacionProducto";
import CascosPagina from "./Paginas/CascosPagina";
import OverolesPagina from "./Paginas/OverolesPagina";
import MetodoEnvioP from "./Paginas/MetodoEnvioP";
import OrdenesP from "./Paginas/OrdenesP";
import DatoEnvioP from "./Paginas/DatoEnvioP";
import AboutUs from "./Componentes/AboutUs";
import PrivateRoute from "./Componentes/PrivateRoute";
import AdminRuta from "./Componentes/Ruta/AdminRuta";
import { AuthProvider } from "./Componentes/Contexto/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/loginAdmin" element={<LoginAdministrador />} />
          <Route path="/loginUsuario" element={<LoginUsuario />} />
          <Route path="/registroPagina" element={<RegistroPagina />} />
          
          <Route path="/homeAdmin"element={<AdminRuta><HomeAdminP /></AdminRuta>}/>
          <Route path="/gestionarProductos" element={<AdminRuta><GestionarProductosP /></AdminRuta>}/>
          <Route path="/detalleVenta" element={<AdminRuta> <DetalleVentaP /></AdminRuta>}/>
          
          <Route path="/carritoPago" element={  <PrivateRoute> <CarritoP /> </PrivateRoute>}/>
          <Route path="/carritoPago/metodoEnvio" element={  <PrivateRoute> <MetodoEnvioP /> </PrivateRoute>}/>
          <Route path="/carritoPago/metodoEnvio/metodoPago" element={  <PrivateRoute> <MetodoPagoP /> </PrivateRoute>}/>
          <Route path="/ordenes" element={  <PrivateRoute> <OrdenesP /> </PrivateRoute>}/>
          <Route path="/datosEnvio" element={  <PrivateRoute> <DatoEnvioP /> </PrivateRoute>}/>
          
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/informacionProducto/:idProducto" element={<InformationProduct />} />
          <Route path="/cascos" element={<CascosPagina />} />
          <Route path="/overoles" element={<OverolesPagina />} />
          <Route path="/nosotros" element={<AboutUs />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
