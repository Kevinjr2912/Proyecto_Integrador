
import "../Estilos/HomeAdmin.css";

export default function HomeAdmin() {
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
            <h3>Gestión de productos</h3>
            <h3>Detalles de ventas</h3>
        </div>
      </div>
      </div>
    </>
  );
}
