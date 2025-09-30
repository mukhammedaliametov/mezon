import React from "react";
import Image from '../assets/reaction_img.jpg';

const Reaction = () => {
  return (
    <div data-aos="fade-up" className="max-w-[1260px] mx-[16px] xl:mx-auto mt-[60px] font-inter">
      <h2 className="section-title md:mb-[20px]">Центр активного отдыха "Евразия"</h2>
      <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden h-[366px] rounded-[30px] relative">
        <div className="w-[700px] h-[800px] bg-primary-blue absolute -left-[10%] sm:-left-[40%] md:-left-[35%] lg:-left-[10%] top-[120px] sm:top-auto -z-10 rotate-[80deg] md:rotate-[155deg]"></div>
        <p className="text-white px-[40px] w-[411px] md:w-[380px] lg:w-[511px] text-[16px]/[22px] md:text-[18px]/[24px] lg:text-[22px]/[27px] mt-[220px] sm:mt-0 tracking-[1.2px]">
          Мы рады приветствовать любителей активного отдыха в нашем
          экологическом парке — самом динамично развивающемся горнолыжном центре
          Южного Урала!
        </p>
        <img src={Image} alt="image" className="-z-20 absolute right-0" />
      </div>
    </div>
  );
};

export default Reaction;
