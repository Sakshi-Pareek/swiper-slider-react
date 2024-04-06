import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

const Slides = () => {
  return (
    <>
      <div className="px-3 mx-auto min-h-screen max-w-[1320px]">
        <h1 className="text-black text-5xl text-center font-bold pt-5 pb-14">
          SWIPER SLIDER
        </h1>
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slides;
