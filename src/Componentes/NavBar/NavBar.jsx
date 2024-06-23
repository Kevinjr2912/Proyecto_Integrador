import React from "react";
import '../../Estilos/NavBar.css';
import LogoF1 from "../../Imagenes/LogoF1.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser,faCartShopping,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function NavBar(){
    return(
        <nav className="box-nav">
            <div className="box_img">
                <img className="logo_img" src={LogoF1} alt="Logo F1" />
            </div>
            <div className="actions_general">
                <ul className="nav_rutas">
                    <li><a href="#">ABOUT US</a></li>
                    <li><a href="#">OVERALLS</a></li>
                    <li><a href="#">HELMETS</a></li>
                    <li><a href="#">OFFERS</a></li>
                    <li><a href="#">REVIEWS</a></li>
                </ul>
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