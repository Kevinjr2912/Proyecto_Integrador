import SeccionesTienda from "./SeccionesTienda";
import EncabezadoPagina from "./EncabezadoPagina";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser,faCartShopping} from '@fortawesome/free-solid-svg-icons';
import '../Estilos/NavBar.css';
import Buscador from "./Buscador";

export default function NavBar({seccionesNav,esSeccionCliente,titulo}){
    
    return(
        <nav className="box-nav">
            <div className="box_img">
               <EncabezadoPagina
                    esSeccionCliente = {esSeccionCliente}
                    titulo={titulo}
               />
            </div>
            
            <div className="actions_general">
                <SeccionesTienda
                    seccionesNav = {seccionesNav}
                    esSeccionCliente = {esSeccionCliente}
                />

                {esSeccionCliente && (
                <div className="nav_iconos">
                    <Buscador/>
                    <FontAwesomeIcon className="actions" icon={faUser} />
                    <FontAwesomeIcon className="actions" icon={faCartShopping} />
                </div>)}
            </div>  
       </nav>
    );
}