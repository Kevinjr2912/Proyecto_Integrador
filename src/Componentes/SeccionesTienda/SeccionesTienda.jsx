import '../../Estilos/SeccionTienda.css';

export default function SeccionesTienda({ className }){
    return(
        <ul className="nav_rutas">
            <li><a href="#" className={className}>ABOUT US</a></li>
            <li><a href="#" className={className}>OVERALLS</a></li>
            <li><a href="#" className={className}>HELMETS</a></li>
            <li><a href="#" className={className}>OFFERS</a></li>
            <li><a href="#" className={className}>REVIEWS</a></li>
        </ul>
    );
}