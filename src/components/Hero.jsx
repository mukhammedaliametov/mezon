import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import Icon1 from "../assets/hero_icon1.svg";
import Icon2 from "../assets/hero_icon2.svg";
import Icon3 from "../assets/hero_icon3.svg";
import Icon4 from "../assets/hero_icon4.svg";
import Icon5 from "../assets/hero_icon5.svg";
import HeroImg from "../assets/hero_img.png";

const Hero = () => {
  const heroItems = [
    { icon: Icon1, name: "Веб-камеры" },
    { icon: Icon2, name: "Канатные дороги" },
    { icon: Icon3, name: "Билеты" },
    { icon: Icon4, name: "Карта" },
  ];
  return (
    <div
      style={{ backgroundImage: `url(${HeroImg})` }}
      className="relative lg:overflow-hidden max-w-[1260px] min-h-[206px] lg:min-h-[406px] bg-cover bg-center bg-no-repeat mx-[16px] xl:mx-auto p-[16px] lg:p-[30px] font-inter mt-[40px] rounded-[20px] lg:rounded-[30px] flex items-top justify-between"
    >
      <div className="bg-[#00000042] w-full h-full absolute top-0 left-0 z-10 font-inter rounded-[20px] lg:rounded-[30px]"></div>
      <div className="z-20 w-[620px] text-white">
        <h1 className="text-[26px]/[32px] md:text-[40px]/[45px] font-bold">
          30 декабря в ЦАО "Евразия" состоится тестовое <br /> открытие 2
          склона.
        </h1>
        <p className="text-[18px]/[24px] md:text-[24px]/[30px] font-[300] mt-[30px]">
          К новогодним праздникам уже подготовлено 5 больших склонов и учебная
          трасса, а также тюбинговая горка.
        </p>
      </div>
      <div className="w-[62px] lg:w-[250px] h-[290px] lg:h-[350px] z-20 bg-white text-[#645252] rounded-[15px] mr-[-30px] lg:mr-0 shadow-lg">
        <p className="text-[14px] hidden lg:flex items-center gap-[2px] py-[10px] px-[16px]">
          <FaAngleRight />
          Свернуть
        </p>
        <div className=" flex flex-col gap-[20px] py-[10px] px-[16px]">
          {heroItems.map((itm, idx) => {
            return (
              <div>
                <p key={idx} className="hidden lg:flex items-center gap-[10px]">
                <img src={itm.icon} alt="icon" />
                {itm.name}
              </p>
              <img src={itm.icon} alt="icon" className="block lg:hidden" />
              </div>
            );
          })}
        </div>
        <p className="text-[10px] lg:text-[12px] py-[10px] px-[16px] ml-[-5px] lg:ml-0 flex items-center">Сегодня<span className="hidden lg:block">, sunday 15 января</span></p>
        <p className="lg:border-t-[2px] px-[16px] border-[#D9D9D9] lg:pt-[10px] pb-[-10px]">
          <img src={Icon5} alt="" /> <span className="text-[14px] ml-[4px]">-10</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
