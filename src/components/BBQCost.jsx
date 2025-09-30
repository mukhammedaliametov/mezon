import React from "react";
import { FaRegClock } from "react-icons/fa6";

const BBQCost = () => {
  return (
    <div data-aos="fade-up" className="max-w-[1260px] mx-auto px-[16px] md:px-0 mt-[30px] font-inter">
      <h2 className="text-center text-[#101828] text-[25px] font-[600] capitalize">
        Стоимость АРЕНДЫ МАНГАЛЬНОЙ ЗОНЫ
      </h2>
      <div className="overflow-x-scroll lg:overflow-x-visible">
        <table className="text-[#667085] mt-[20px] table-auto border-separate border-spacing-y-4 flex-shrink-0">
          <thead>
            <tr>
              <th className="w-[559px] text-left">Время аренды*</th>
              <th className="w-[620px] text-left">Стоимость, рублей</th>
            </tr>
          </thead>
          <tbody className="bg-[#F9FAFB]">
            <tr>
              <td className="flex items-center gap-[8px]">
                <FaRegClock /> 2 часа
              </td>
              <td>600</td>
            </tr>
            <tr>
              <td className="flex items-center gap-[8px]">
                <FaRegClock /> 4 часа
              </td>
              <td>800</td>
            </tr>
            <tr>
              <td className="flex items-center gap-[8px]">
                <FaRegClock /> день
              </td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <span className="pt-[10px] text-[#667085]">
        * В стоимость аренды входит: аренда беседки, стол, мангал, средство для
        розжига, уголь.
      </span>
    </div>
  );
};

export default BBQCost;
