import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { Pagination } from "swiper/modules";
import Image1 from '../assets/bbq_hero.jpg';
import Image2 from '../assets/bbq_swiper2.jpg';

export default function BBQSwpier() {
  return (
    <div data-aos="fade-up" className="mx-[30px] md:mx-[45px]">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-[40px]"
      >
        <SwiperSlide className="rounded-[20px] overflow-hidden">
          <img src={Image1} alt="img1" className="w-[240px] h-[190px]" />
        </SwiperSlide>
        <SwiperSlide className="rounded-[20px] overflow-hidden">
          <img src={Image2} alt="img2" className="w-[240px] h-[190px]" />
        </SwiperSlide>
        <SwiperSlide className="rounded-[20px] overflow-hidden">
          <img src={Image1} alt="img1" className="w-[240px] h-[190px]" />
        </SwiperSlide>
        <SwiperSlide className="rounded-[20px] overflow-hidden">
          <img src={Image2} alt="img2" className="w-[240px] h-[190px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
