import React from "react";
import Image1 from "../assets/news1.jpg";
import Image2 from "../assets/news2.jpg";
import Button from "./Button";

const News = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-[16px] xl:px-0 pt-[50px]">
      <div data-aos="fade-up" className="flex justify-between items-center md:mb-[30px]">
        <h2 className="section-title">Новости</h2>
        <div className="hidden sm:block">
        <Button name="Посмотреть все" link="/" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[40px]">
        <div data-aos="fade-up" data-aos-delay="0" className="relative w-full md:w-[620px] h-auto lg:h-[400px] rounded-[20px] overflow-hidden group">
          <img src={Image1} alt="image1" className="w-full object-cover transition-all duration-500 group-hover:scale-110" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000056] z-10"></div>
          <h3 className="absolute top-0 left-0 text-[25px]/[30px] lg:text-[40px]/[48px] text-white p-[20px] z-20 font-inter font-[900]">Состоялось первенство России по сноуборду в дисциплине Big-Air</h3>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="relative w-full md:w-[620px] h-auto lg:h-[400px] rounded-[20px] overflow-hidden group">
          <img src={Image2} alt="image2" className="w-full object-cover transition-all duration-500 group-hover:scale-110" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000056] z-10"></div>
          <h3 className="absolute top-0 left-0 text-[25px]/[30px] lg:text-[40px]/[48px] text-white p-[20px] z-20 font-inter font-[900]">Состоялось первенство России по сноуборду в дисциплине Big-Air</h3>
        </div>
      </div>
    </div>
  );
};

export default News;
