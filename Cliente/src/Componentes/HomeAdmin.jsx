import { useNavigate } from 'react-router-dom';
import "../Estilos/HomeAdmin.css";

export default function HomeAdmin() {
  const navigate = useNavigate();
  return (
    <>
    <div className="main-container">
      <div className="container">
        <div className="container-topDiv">
          <h2>Admin</h2>
          <h2>Admin@gmail.com</h2>
          <button className="sign-off">Cerrar sesión</button>
        </div>
        <div className="container-detalles" >
            <button className="detalles-button" onClick={() => { navigate('/GestionarProductosP'); onClose(); }} >Gestión de productos</button>
            <button className="detalles-button" onClick={() => { navigate(''); onClose(); }} >Detalles de ventas</button>

        </div>
      </div>
      </div>
    </>
  );
}
