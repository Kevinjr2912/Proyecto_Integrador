import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTruck,faCreditCard} from '@fortawesome/free-solid-svg-icons';
import '../../Estilos/Servicios.css';

export default function Servicios(){
    return(
        <div className="box_servicios">
            <div className="box_entrega">
                <FontAwesomeIcon icon={faTruck} />
                <p className='informacion_servicios'>ENVÍOS A TODA LA REPÚBLICA MEXICANA</p>
            </div>
            <div className="box_contacto">
                <FontAwesomeIcon icon={faTruck} />
                <p className='informacion_servicios'>SERVICIO AL CLIENTE</p>
            </div>
            <div className="box_tarjeta">
                <FontAwesomeIcon icon={faCreditCard} />
                <p className='informacion_servicios'>PAGOS SEGUROS</p>
            </div>
        </div> 
    );
}