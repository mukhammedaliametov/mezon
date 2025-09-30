import React from "react";
import { FaRegUser } from "react-icons/fa";

const TubingTrack = () => {
  return (
    <div data-aos="fade-up" className="max-w-[1260px] mx-auto px-[16px] xl:px-0 font-inter">
      <div className="text-left md:text-center w-[100%] md:w-[90%] mx-auto  mt-[50px]">
        <p className="text-primary-blue text-[18px]/[25px] font-[600]">
          Тюбинговая трасса, продолжительностью 150 метров, расположена возле
          административного здания ЦАО "Евразия". Трасса ориентирована на детей
          до 16 лет, но воспользоваться ей может любой взрослый. <br />{" "}
          Подъемник - отсутствует.
        </p>
        <h2 className="text-[26px] md:text-[36px] font-[600] pt-[15px] text-[#101828]">
          ТРАССА "ТЮБИНГ" ОТКРЫТА
        </h2>
      </div>
      <div className="my-[70px]">
        <p className="text-primary-blue font-[800] uppercase text-[20px]">
          Стоимость проката ватрушек (тюбинг).
        </p>
        <div className="overflow-x-scroll lg:overflow-x-visible">
        <table className="text-[#667085] mt-[20px] table-auto border-separate border-spacing-y-4 flex-shrink-0">
          <thead>
            <tr>
              <th className="w-[264px]">Наименование</th>
              <th className="w-[196px] text-left">Дни</th>
              <th className="w-[139px] text-left px-[20px]">Стоимость проката, рублей 1 час</th>
              <th className="w-[187px] text-left px-[10px]">Стоимость проката, рублей 2 часа</th>
              <th className="w-[186px] text-left px-[10px]">Стоимость проката, рублей 3 часа</th>
              <th className="w-[194px] text-left px-[10px]">Стоимость проката, рублей день</th>
            </tr>
          </thead>
          <tbody className="bg-[#F9FAFB]">
            <tr>
              <td></td>
              <td>Будни</td>
              <td className="px-[20px]">100</td>
              <td className="px-[10px]">150</td>
              <td className="px-[10px]">200</td>
              <td className="px-[10px]">300</td>
            </tr>
            <tr>
              <td className="flex items-center gap-[5px] justify-center">
                <FaRegUser />
                Ватрушка (тюбинг)
              </td>
              <td>Выходные</td>
              <td className="px-[20px]">150</td>
              <td className="px-[10px]">200</td>
              <td className="px-[10px]">300</td>
              <td className="px-[10px]">400</td>
            </tr>
            <tr>
              <td></td>
              <td>Праздничные</td>
              <td className="px-[20px]">200</td>
              <td className="px-[10px]">300</td>
              <td className="px-[10px]">400</td>
              <td className="px-[10px]">600</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default TubingTrack;
