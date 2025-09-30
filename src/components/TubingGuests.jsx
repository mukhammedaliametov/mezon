import React from "react";

const TubingGuests = () => {
  return (
    <div data-aos="fade-up" className="max-w-[1260px] mx-auto px-[16px] xl:px-0 font-inter">
      <div className="text-left md:text-center w-full md:w-[90%] mx-auto  mt-[50px]">
        <p className="text-primary-blue text-[18px]/[25px] font-[600]">
          Администрация ЦАО "Евразия" не несет ответственности за возможные
          травмы, полученные в результате катания по тюбинговой трассе на личном
          инвентаре.
        </p>
        <h2 className="text-[26px] md:text-[36px] font-[600] pt-[15px] text-[#101828] uppercase mb-[10px] md:mb-0">Уважаемые гости!</h2>
        <p className="text-[#667085]">
          Чтобы воспользоваться прокатом снаряжения, необходим залог (документ
          удостоверяющий личность: паспорт или водительское удостоверение).
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between border-1 border-[#EAECF0] rounded-[10px] p-[20px] mt-[30px]">
        <div className="mb-[20px] md:mb-0">
          <h4 className="text-[14px] text-[#344054] pb-[10px]">Правила катания на сноутюбинге (ватрушке) </h4>
          <p className="text-[12px] text-[#667085] w-auto md:w-[450px]">
            При оплате любой услуги ЦАО "Евразия" вы подтверждаете ознакомление
            и соглашаетесь с данными правилами. Администрация ЦАО "Евразия" не
            несет ответственности за полученные травмы или порчу имущества своих
            гостей при нарушении данных правил.
          </p>
        </div>
        <button className="border border-primary-blue py-[5px] px-[15px] rounded-[20px] text-[#535050] text-[14px]">Ознакомиться</button>
      </div>
    </div>
  );
};

export default TubingGuests;
