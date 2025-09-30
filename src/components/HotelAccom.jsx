import React from "react";
import Button from "./Button";
import Image1 from "../assets/hotel_accom1.jpg";
import Image2 from "../assets/hotel_accom2.jpg";
import Image3 from "../assets/hotel_accom3.jpg";

const HotelAccom = () => {
  const hotelItems = [
    {
      img: Image1,
      desc: "10 МИНУТ НА АВТОБУСЕ ИЛИ АВТОМОБИЛЕ",
      name: 'КОРПУС "ГОРОД”',
      info: 'Гости размещаются по 2,3 и 4 человека в номере. В каждой комнате 2,3 кровати 1,5 спальные (в 4-х местном номере 2 двухъярусные кровати), большой шкаф, прихожая. В каждом номер - душ, раковина, санузел. Корпус "Город" расположен в 10 минутах от территории в городе Куса, ул. Декабристов, дом 9. Доставка осуществляется на 35-местном автобусе утром, днем и вечером.',
    },
    {
      img: Image2,
      desc: "600 МЕТРОВ ОТ ПОДЪЕМНИКА",
      name: 'КОРПУС "ГОРНЫЙ”',
      info: "В гостиничном комплексте (600 метров от подъемника и сервисного здания) мы можем предложить размещение в 54 двухместных, 12 одноместных и 12 спортивных номерах.",
    },
    {
      img: Image3,
      desc: "ГОСТЕВОЙ ДОМИК, 2 КИЛОМЕТРА ОТ ПОДЪЕМНИКА",
      name: 'КОРПУС "ЛЕСНОЙ',
      info: "Также для размещения предлагается гостевой домик (2 км от подъемника и сервисного здания) для компаний до 16 человек.",
    },
  ];
  return (
    <div data-aos="fade-up" className="max-w-[1260px] mx-auto px-[16px] xl:px-0 pt-[50px]">
      <h2 className="section-title md:mb-[30px]">Проживание в ЦАО "Евразия"</h2>
      <div className="font-inter">
        {hotelItems.map((itm, idx) => {
          return (
            <div key={idx} className="flex flex-col md:flex-row items-top justify-between gap-[20px] my-[40px]">
              <img src={itm.img} alt="img" className="w-full md:w-[369px] rounded-[20px]" />
              <div>
                <p className="lowercase text-[14px] text-primary-blue">{itm.desc}</p>
                <h4 className="text-[#101828] text-[20px] my-[10px]">{itm.name}</h4>
                <p className="text-[#667085]">{itm.info}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center pt-[30px] font-inter w-full md:w-[768px] mx-auto">
        <p className="text-primary-blue font-[600]">
          Заселение в гостиницу производится только при предъявлении паспорта.
        </p>
        <h3 className="text-[25px]/[30px] md:text-[36px]/[42px] font-[600] py-[10px]">
          Обращаем Ваше внимание на то, что для постояльцев гостиницы действуют
          специальные тарифы на ски-пасс.
        </h3>
        <p className="text-[#667085]">Бронирование осуществляется по предоплате.</p>
      </div>
    </div>
  );
};

export default HotelAccom;
