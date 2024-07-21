import Buscador from "../Componentes/Buscador";
import Footer from "../Componentes/Footer";
import NavBar from "../Componentes/NavBar";
import '../Estilos/PageProduct.css';

export default function PageProduct(){
    const seccionesNav = [
        {
            id: 0,
            nombre: 'GESTIÓN PRODUCTO',
        },
        {
            id: 1,
            nombre: 'DETALLES DE VENTA',
        }
    ];

    return(
        <div className="box-product">
            <NavBar
                seccionesNav={seccionesNav}
                esSeccionCliente={false}
                titulo = "PRODUCTOS"
            />
            
            <div className="box-container-actions">
                <button className="btn-agregarP"><span className="styleS">+</span> AGREGAR PRODUCTO</button>
                <Buscador className="buscador-agregarProducto"/>
            </div>

            <div className="box-footer">
                <Footer/>
            </div>
        </div>
    );
}