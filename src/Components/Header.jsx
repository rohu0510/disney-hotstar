import React from "react";
import logo from "./../assets/Images/logo.png";
import admin from "./../assets/Images/admin.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center gap-8">
      <div className="flex">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover cursor-pointer"
          alt="Disney Logo"
        />
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img
        src={admin}
        alt="user"
        className="w-[40px] rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Header;
