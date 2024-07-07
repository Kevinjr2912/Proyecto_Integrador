import LogoF1 from '../Imagenes/LogoF1.png';
import '../Estilos/EncabezadoPagina.css';

export default function EncabezadoPagina({esSeccionCliente, titulo}){
    if(esSeccionCliente){
        return <img className="logo_img" src={LogoF1} alt="Logo" />
    }

    return <h2>{titulo}</h2>
} 