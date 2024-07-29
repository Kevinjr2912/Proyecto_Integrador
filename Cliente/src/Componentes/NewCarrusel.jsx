import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const NewCarrusel = ({ children, slidesPerView = 4, spaceBetween = 20 }) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: slidesPerView,
          spaceBetween: spaceBetween,
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewCarrusel;