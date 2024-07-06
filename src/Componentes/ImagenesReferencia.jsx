import React from "react";
import '../../Estilos/ImagenesReferencia.css'

export default function ImagenesReferencia( {img_principal, img1, img2, img3, img4} ){
    return(
        <div className="box-container-img">
            <div className="img-principal">
                <img src={img_principal} alt="" />
            </div>
            <div className="box-container-childs">
                <div className="son">
                    <img src={img1} alt="" />
                </div>
                <div className="son">
                    <img src={img2} alt="" />
                </div>
                <div className="son">
                    <img src={img3} alt="" />
                </div>
                <div className="son">
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
    );
}