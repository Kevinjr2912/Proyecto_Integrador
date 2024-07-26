import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    
    <Router>
       {/*FALTA LA IMAGEN DEL NAV BAR, RUTAS NAVBAR,FOOTER Y RUTAS PROTEGIDAS */ }
        {/*FALTA ORDENES */ }
         {/*VISTAS LISTAS (YA CREADAS) */ }
      <Routes>
        <Route path="/" element={<Principal />} />   {/*Faltan estilos, los carruseles*/ }
        <Route path="/loginAdmin" element={<LoginAdministrador />} /> {/*GOD*/ }
        <Route path="/loginUsuario" element={<LoginUsuario />} /> {/*GOD*/ }
        <Route path="/homeAdmin" element={<HomeAdminP />} />  {/*Faltan estilos*/ }
        <Route path="/gestionarProductos" element={<GestionarProductosP />} />  {/*FALTAN ESTILOOOOOOOOOOOOOOOOOOOS*/ }
        <Route path="/registroPagina" element={<RegistroPagina />} />  {/*GOD*/ }
        <Route path="/detalleVenta" element={<DetalleVentaP />} />   {/*ERROR MASIVOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO*/ }
        <Route path="/carritoPago" element={<CarritoP />} />   {/*FALTAN ESTILOS*/ }
        <Route path="/carritoPago/metodoEnvio" element={<MetodoEnvioP />} />  {/*Falta BACK */ }
        <Route path="/carritoPago/metodoEnvio/metodoPago" element={<MetodoPagoP />} />  {/*GOD */ }
        <Route path="/faqs" element={<Faqs />} />  {/*Faltan preguntas y respuestas*/ }
        <Route path="/informacionProducto/:idProducto" element={<InformationProduct />} />  {/*LO MANEJA KEV*/ }
        <Route path="/cascos" element={<CascosPagina />} /> {/*ESTILOS .KEV*/ }
        <Route path="/overoles" element={<OverolesPagina />} /> {/*SAME*/ }
        <Route path="/ordenes" element={<OrdenesP />} />  {/*GOD falta BACK*/ }
      </Routes>
    </Router>
  );
}

export default App;
  