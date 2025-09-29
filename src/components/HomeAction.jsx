import React from "react";
import Image1 from "../assets/action_card1_2.png";
import Image3 from "../assets/action_card3.png";
import Image4 from "../assets/action_card4.png";
import Button from "./Button";

const Action = () => {
  return (
    <div className="max-w-[1260px] mx-auto px-[16px] xl:px-0 pt-[50px]">
      <div className="flex justify-between items-center md:mb-[30px]">
        <h2 className="section-title">Акции и спец предложения</h2>
        <div className="hidden sm:block">
        <Button name="Посмотреть все" link="/" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] font-inter">
        <div className="relative lg:h-[406px] overflow-hidden rounded-[20px] lg:rounded-[30px] group">
          <img
            src={Image1}
            alt="image1"
            className="w-full transition duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000054] z-10"></div>
          <div className="absolute top-0 lef-0 z-20 p-[10px] lg:p-[20px] text-white">
            <h4 className="text-[20px] lg:text-[35px]/[40px] font-[900]">
              30 декабря <br /> в ЦАО "Евразия" <br /> состоится тестовое <br />{" "}
              открытие 2 склона.
            </h4>
            <p className="text-[16px] lg:text-[24px] font-[300] pt-[10px]">
              К новогодним праздникам уже подготовлено 5 больших склонов и
              учебная трасса, а также тюбинговая горка.
            </p>
          </div>
        </div>
        <div className="relative lg:h-[406px] overflow-hidden rounded-[20px] lg:rounded-[30px] group">
          <img
            src={Image1}
            alt="image1"
            className="w-full transition duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000054] z-10"></div>
          <div className="absolute top-0 lef-0 z-20 p-[10px] lg:p-[20px] text-white">
            <h4 className="text-[20px] lg:text-[35px]/[40px] font-[900]">
              30 декабря <br /> в ЦАО "Евразия" <br /> состоится тестовое <br />{" "}
              открытие 2 склона.
            </h4>
            <p className="text-[16px] lg:text-[24px] font-[400] pt-[10px]">
              К новогодним праздникам уже подготовлено 5 больших склонов и
              учебная трасса, а также тюбинговая горка.
            </p>
          </div>
        </div>
        <div className="relative lg:h-[406px] overflow-hidden rounded-[20px] lg:rounded-[30px] group">
          <img
            src={Image3}
            alt=""
            className="w-full transition duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000028] z-10 transition duration-500 group-hover:opacity-0"></div>
        </div>
        <div className="relative lg:h-[406px] overflow-hidden rounded-[20px] lg:rounded-[30px] group">
          <img
            src={Image4}
            alt=""
            className="w-full transition duration-500 group-hover:scale-110"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000054] z-10"></div>
          <h4 className="absolute top-0 left-0 text-[24px] lg:text-[32px] font-inter text-white z-20 p-[10px] lg:p-[20px] font-bold">BBQ площадки</h4>
        </div>
      </div>
    </div>
  );
};

export default Action;
