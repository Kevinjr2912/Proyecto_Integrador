import NavBar from '../Componentes/NavBar/NavBar.jsx';
import imagen_home from '../Imagenes/imagen_home.jpg';
import Servicios from '../Componentes/Servicios/Servicios.jsx';
import '../Estilos/Home.css';

export default function Home(){
    return(
        <>
            <NavBar />
            <img className='img_home' src={imagen_home} alt="Imagen carro" />
            <Servicios />
        </>
    );
}