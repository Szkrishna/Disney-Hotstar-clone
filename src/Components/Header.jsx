/* eslint-disable react/jsx-key */
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import HeaderItems from "./HeaderItems";

function Header() {
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
      icon: HiHome,
    },
  ];

  return (
    <div className="px-10 py-2 flex items-center justify-between bg-red-200">
      <div className="flex gap-8">
        <img
          src={logo}
          className="w-[50px] md:w-[50px] lg:w-[60px] xl:w-[60px] object-cover"
        />
        {menu.map((item) => (
          <HeaderItems title={item.title} Icon={item.icon} />
        ))}
      </div>

      <div>
        <img
          src={avatar}
          className="w-[40px] md:w-[40px] lg:w-[50px] xl:w-[50px] rounder-full cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Header;
