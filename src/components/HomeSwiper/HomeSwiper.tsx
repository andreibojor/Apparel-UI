import React from "react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import { HomeSwiperImage } from "./HomeSwiper.styled";

type Props = {
  gender: string;
};

const HomeSwiper = (props: Props) => {
  const { gender } = props;
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Thumbs]}
        autoHeight={false}
      >
        <SwiperSlide>
          <HomeSwiperImage
            src={`./images/homeslider/${gender}/homeslider-${gender}1.webp`}
            alt="asd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSwiperImage
            src={`./images/homeslider/${gender}/homeslider-${gender}2.webp`}
            alt="asd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSwiperImage
            src={`./images/homeslider/${gender}/homeslider-${gender}3.webp`}
            alt="asd"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HomeSwiperImage
            src={`./images/homeslider/${gender}/homeslider-${gender}4.webp`}
            alt="asd"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSwiper;
