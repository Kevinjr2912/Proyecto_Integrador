import React, { useEffect, useState } from "react";
import "../Estilos/ImagenesReferencia.css";

export default function ImagenesReferencia({ img1, img2, img3, img4 }) {
  const [mainImage, setMainImage] = useState(
    `http://localhost:3000/uploads/${img1}`
  );

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="box-container-img">
      <div className="img-principal">
        <img src={mainImage} alt="Imagen Principal" />
      </div>
      <div className="box-container-childs">
        <div
          className="son"
          onClick={() =>
            handleImageClick(`http://localhost:3000/uploads/${img1}`)
          }
        >
          <img src={`http://localhost:3000/uploads/${img1}`} alt="Imagen 1" />
        </div>
        <div
          className="son"
          onClick={() =>
            handleImageClick(`http://localhost:3000/uploads/${img2}`)
          }
        >
          <img src={`http://localhost:3000/uploads/${img2}`} alt="Imagen 2" />
        </div>
        <div
          className="son"
          onClick={() =>
            handleImageClick(`http://localhost:3000/uploads/${img3}`)
          }
        >
          <img src={`http://localhost:3000/uploads/${img3}`} alt="Imagen 3" />
        </div>
        <div className="son" onClick={() => handleImageClick(img4)}>
          <img src={img4} alt="Imagen 4" />
        </div>
      </div>
    </div>
  );
}
