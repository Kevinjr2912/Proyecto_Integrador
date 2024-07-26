import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import '../Estilos/Buscador.css';

export default function Buscador({className}) {
  return (
    <div className={`${className}`}>
        <div className='search-bar'>
            <input type="text" placeholder='Ingrese el nombre del producto'/>
            <div className="actions">
                <FontAwesomeIcon className="search_button" icon={faMagnifyingGlass} />
            </div>
        </div>
    </div>
  );
}
