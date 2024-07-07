import SeccionesTienda from "../SeccionesTienda/SeccionesTienda";
import LogoF1 from "../../Imagenes/LogoF1.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser,faCartShopping,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../../Estilos/NavBar.css';

export default function NavBar(){
    return(
        <nav className="box-nav">
            <div className="box_img">
                <img className="logo_img" src={LogoF1} alt="Logo F1" />
            </div>
            <div className="actions_general">
                <SeccionesTienda />
                <div className="nav_iconos">
                    <div class="search-bar">
                        <input type="text" />
                        <div class="actions">
                            <FontAwesomeIcon className="search_button" icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <FontAwesomeIcon className="actions" icon={faUser} />
                    <FontAwesomeIcon className="actions" icon={faCartShopping} />
                </div>
            </div>  
        </nav>
    );
}