import React from "react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import data from "../../eCommerce.json";
import { SwiperImage } from "./ProductSwiper.styled";

type Props = {};

const ProductSwiper = ({ slides }: Props) => {
  const productSlides = slides.map((item) => (
    <SwiperSlide key={item.type}>
      <SwiperImage src={`https://${item.url}`} alt={item.url} />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Thumbs]}
        autoHeight={true}
      >
        {productSlides}
      </Swiper>
    </>
  );
};

export default ProductSwiper;
