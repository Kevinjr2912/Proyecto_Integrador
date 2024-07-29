import React from 'react';
import '../Estilos/ImagenSlide.css';

const ImagenSlide = ({ src, alt }) => {
  return (
    <div className="image-slide">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImagenSlide;