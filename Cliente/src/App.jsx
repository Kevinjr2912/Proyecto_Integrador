import './App.css'
<<<<<<< HEAD
//import AddProduct from './Componentes/AddProduct';
import GestionarProductosP from './Paginas/GestionarProductosP';
//import HomeAdminP from './Paginas/HomeAdminP';
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from "./Paginas/Principal";
import LoginAdministrador from "./Paginas/LoginAdminstrador"; 
import LoginUsuario from "./Paginas/LoginUsuario"; 
import HomeAdminP from "./Paginas/HomeAdminP";
import GestionarProductosP from './Paginas/GestionarProductosP';

>>>>>>> main


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
      </Routes>
    </Router>

    </> 
    
  );
}

export default App;