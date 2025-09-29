import React from "react";
import Logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { SiYandexcloud } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <div className="max-w-[170px] mx-auto flex justify-between items-center gap-[10px] mt-[40px]">
      <a href="#" className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-primary-blue text-white text-[26px] cursor-pointer border-2 border-primary-blue hover:bg-transparent hover:text-primary-blue duration-300">
        <FaVk />
      </a>
      <a href="#" className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-primary-blue text-white text-[26px] cursor-pointer border-2 border-primary-blue hover:bg-transparent hover:text-primary-blue duration-300">
        <TfiYoutube />
      </a>
      <a href="#" className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-primary-blue text-white text-[26px] cursor-pointer border-2 border-primary-blue hover:bg-transparent hover:text-primary-blue duration-300">
        <SiYandexcloud />
      </a>
    </div>
    <div className="bg-[#D9D9D9] text-[#2D2D2D] mt-[20px]">
      <div className="max-w-[1260px] mx-auto px-[16px] xl:px-0 font-inter py-[20px]">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <img src={Logo} alt="logo" className="w-[160px] sm:w-[220px]" />
          <div className="flex flex-col lg:flex-row items-center justify-end pt-[6px] gap-[12px]">
            <p>Схема проезда</p>
            <a href="tel: +79227288288" className="flex items-center gap-[5px]">
              <FaPhone />
              +79227288288
            </a>
            <a href="tel: +73513790979" className="flex items-center gap-[5px]">
              <FaPhone />
              +73513790979
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[20px] items-start justify-between pt-[40px]">
          <div className="flex flex-col gap-[5px]">
            <a href="#">Услуги</a>
            <a href="#">Трассы</a>
            <a href="#">Кафе</a>
            <a href="#">Гостиница</a>
            <a href="#">О комплексе</a>
          </div>
          <div className="flex flex-col gap-[5px]">
            <a href="#">Новости</a>
            <a href="#">Тарифы</a>
            <a href="#">Прокат</a>
            <a href="#">Акции и туры</a>
            <a href="#">Цены на услуги</a>
            <a href="#">Схема проезда</a>
          </div>
          <div className="hidden md:flex flex-col gap-[5px]">
            <a href="#">Туры</a>
            <a href="#">Проживание</a>
            <a href="#">Забронировать номер</a>
            <a href="#">Детям</a>
            <a href="#">Акции</a>
            <a href="#">Веб-камеры</a>
          </div>
          <div className="flex flex-col lg:flex-row items-top justify-between gap-[20px] lg:gap-[60px]">
            <div className="flex flex-col gap-[8px]">
            <p >
              <b>Режим работы:</b>
            </p>
            <p>Пн-пт: 10.00-21.00</p>
            <p>Сб-вс 9.00-21.00</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p >
              <b>Контакты</b>
            </p>
            <p className="text-[14px] w-[207px]">
              Всесезонный центр спорта и отдыха - находится в рекреационной зоне
              на границе с заповедниками «Таганай» и «Зюраткуль» всего в 30
              минутах езды от Златоуста, и в 1,5 часах от Челябинска.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
