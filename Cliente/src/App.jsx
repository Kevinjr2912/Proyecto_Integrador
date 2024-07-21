import React from 'react';
import './App.css'
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
import OverolesPagina from "./Paginas/OverolesPagina"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path='/loginAdmin' element={<LoginAdministrador/>}/>
        <Route path='/loginUsuario' element={<LoginUsuario/>}/>
        <Route path='/homeAdmin' element={<HomeAdminP/>}/>
        <Route path='/GestionarProductosP' element={<GestionarProductosP/>}/>
        <Route path='/RegistroPagina' element={<RegistroPagina/>}/>
        <Route path='/detalleVenta' element={<DetalleVentaP/>}/>
        <Route path='/metodoPago' element={<MetodoPagoP/>}/>
        <Route path='/carritoPago' element={<CarritoP/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/informacionProducto' element={<InformationProduct/>}/>
        <Route path='/cascos' element={<CascosPagina/>}/>
        <Route path='/overoles' element={<OverolesPagina/>}/>
      </Routes>
    </Router>

    </> 

  );
}

export default App;