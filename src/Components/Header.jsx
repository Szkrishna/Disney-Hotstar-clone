/* eslint-disable react/jsx-key */
import logo from "../assets/images/logo.webp";
import avatar from "../assets/images/avatar.avif";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { TbPremiumRights } from "react-icons/tb";
import HeaderItems from "./HeaderItems";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      title: "Home",
      link: "/home",
      icon: HiHome,
    },
    {
      title: "TV Shows",
      link: "/tv-shows",
      icon: HiMagnifyingGlass,
    },
    {
      title: "Movies",
      link: "/movies",
      icon: HiStar,
    },
    {
      title: "Kids",
      link: "/kids",
      icon: HiPlayCircle,
    },
    {
      title: "Sports",
      link: "/sports",
      icon: HiTv,
    },
    {
      title: "Premium",
      link: "/premium",
      icon: TbPremiumRights,
    },
  ];

  return (
    <div className="px-10 py-3 flex items-center justify-between">
      <div className="flex gap-6">
        <img
          src={logo}
          className="w-[50px] md:w-[50px] lg:w-[60px] xl:w-[60px] object-cover"
        />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItems title={item.title} Icon={item.icon} />
          ))}
        </div>

        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItems title={""} Icon={item.icon} />
          )}
        </div>

        <div className="relative flex md:hidden" onClick={() => setToggle(!toggle)}>
          <HeaderItems name={""} Icon={HiDotsVertical} />
          <div className={`absolute mt-10 ms-2 bg-[#121212] border-[1px] border-gray-700 p-3 rounded-sm ${toggle ? 'block' : 'hidden'}`}>
            {menu.map((item, index) => index >= 3 && (
              <HeaderItems key={index} title={item.title} Icon={item.icon} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <img
          src={avatar}
          className="w-[30px] md:w-[30px] lg:w-[40px] xl:w-[40px] rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
