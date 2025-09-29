import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState();
  const handleClickc = () => setNav(!nav);

  const navItems = [
    { name: "Тюбинг", link: "/tubing" },
    { name: "Проживание", link: "/" },
    { name: "Услуги и тарифы", link: "/" },
    { name: "Афиша", link: "/" },
    { name: "Для бизнеса", link: "/" },
    { name: "Купить онлайн", link: "/" },
  ];
  return (
    <>
    <div className="fixed w-full bg-white z-999">
      <div className="max-w-[1260px] mx-auto px-[16px] xl:px-0 font-inter ">
        <div className="hidden sm:flex items-center justify-end text-[#B0B0B0] text-[14px] pt-[6px] gap-[12px]">
          <p>Схема проезда</p>
          <Link to="tel: +79227288288" className="flex items-center gap-[5px]">
            <FaPhone />
            +79227288288
          </Link>
          <Link to="tel: +73513790979" className="flex items-center gap-[5px]">
            <FaPhone />
            +73513790979
          </Link>
        </div>
        <div className="flex items-center justify-between mt-[15px] sm:mt-[-10px] pb-[10px]">
          <Link to="/">
            <img src={Logo} alt="logo" className="w-[160px] sm:w-[220px]" />
          </Link>
          <nav className="hidden lg:flex items-center gap-[30px]">
            {navItems.map((itm, idx) => {
              return (
                <Link key={idx} to={itm.link}>
                  {itm.name}
                </Link>
              );
            })}
          </nav>
          <div
            onClick={handleClickc}
            className={`block lg:hidden text-[25px] shadow-lg  rounded-[50px] p-[10px] z-20 transition-all duration-500 ${
              nav
                ? "bg-white text-primary-blue shadow-none"
                : "bg-primary-blue shadow-primary-blue text-white"
            }`}
          >
            {nav ? <IoClose /> : <IoMenu />}
          </div>
          <div
            className={`absolute top-0 bg-primary-blue text-white w-full h-screen p-[20px] text-[18px] transition-all duration-500 ${
              nav ? "left-0" : "left-[-100%]"
            }`}
          >
            <img src={Logo} alt="logo" className="w-[160px]" />
            <nav className="flex flex-col gap-[20px] pb-[20px] pt-[30px]">
              {navItems.map((itm, idx) => {
                return (
                  <Link key={idx} to={itm.link} onClick={handleClickc}>
                    {itm.name}
                  </Link>
                );
              })}
            </nav>
            <div className="flex sm:hidden flex-col items-start justify-end text-[14px] pt-[6px] gap-[12px]">
              <p>Схема проезда</p>
              <Link
                to="tel: +79227288288"
                className="flex items-center gap-[5px]"
              >
                <FaPhone />
                +79227288288
              </Link>
              <Link
                to="tel: +73513790979"
                className="flex items-center gap-[5px]"
              >
                <FaPhone />
                +73513790979
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default Navbar;
