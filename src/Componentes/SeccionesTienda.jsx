import '../Estilos/SeccionTienda.css';

export default function SeccionesTienda({ seccionesNav,esSeccionCliente,className }){
    if(esSeccionCliente){
        const listaAccionesCliente = seccionesNav.map(seccion =>
            <li key={seccion.id}>
              <a className={className}>{seccion.nombre}</a>
            </li>
        );

        return <ul className='nav_rutas'>{listaAccionesCliente}</ul>
    }

    const listaAccionesAdministrador = seccionesNav.map(seccion => 
        <li key={seccion.id}>
              <a className={className}>{seccion.nombre}</a>
        </li>
    );

    return <ul className='nav_rutas'>{listaAccionesAdministrador}</ul>
}