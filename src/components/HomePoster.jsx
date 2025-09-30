import React from "react";
import Button from "./Button";
import Image1 from "../assets/poster_1.png";
import Image2 from "../assets/poster_2.png";

const Poster = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-[16px] xl:px-0 pt-[50px]">
      <div data-aos="fade-up" className="flex justify-between items-center md:mb-[30px]">
        <h2 className="section-title">Афиша</h2>
        <div className="hidden sm:block">
        <Button name="Посмотреть все" link="/" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[40px]">
        <div data-aos="fade-up" data-aos-delay="0" className="w-full md:w-[620px] h-auto lg:h-[380px] rounded-[20px] overflow-hidden">
          <img src={Image1} alt="image1" className="w-full object-cover" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="w-full md:w-[620px] h-auto lg:h-[380px] rounded-[20px] overflow-hidden">
          <img src={Image2} alt="image2" className="w-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Poster;
