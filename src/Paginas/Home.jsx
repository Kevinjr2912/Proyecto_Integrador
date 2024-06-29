import NavBar from '../Componentes/NavBar/NavBar.jsx';
import Servicios from '../Componentes/Servicios/Servicios.jsx';
import SeccionesTienda from '../Componentes/SeccionesTienda/SeccionesTienda.jsx';
import CarruselProducto from '../Componentes/CarruselProducto/CarruselProducto.jsx';
import imagen_home from '../Imagenes/imagen_home.jpg';
import '../Estilos/Home.css';

export default function Home(){
    return(
        <div className="home">
            <NavBar />
            <div className='contenedor_carro'>
                <img className='img_home' src={imagen_home} alt="Imagen carro" />
            </div>
            <Servicios />
            <div className="secciones">
                <SeccionesTienda className="Hello"/>
            </div>
            <CarruselProducto />
            <CarruselProducto />
        </div>
    );
}