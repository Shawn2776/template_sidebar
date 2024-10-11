"use client";

import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { SiAcademia } from "react-icons/si";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { MdSupervisedUserCircle } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { BsBuildingFillAdd } from "react-icons/bs";
import { FaRocket } from "react-icons/fa6";
import Link from "next/link";

const menuItems = [
  {
    title: "Dashboard",
    icon: FaHouse,
    href: "/dashboard",
  },
  {
    title: "Settings",
    icon: IoMdSettings,
    href: "/settings",
  },
  {
    title: "Ballot",
    icon: CiBoxList,
    href: "/dashboard",
  },
  {
    title: "Voters",
    icon: MdSupervisedUserCircle,
    href: "/dashboard",
  },
  {
    title: "Preview",
    icon: FaEye,
    href: "/dashboard",
  },
  {
    title: "Add-ons",
    icon: BsBuildingFillAdd,
    href: "/dashboard",
  },
  {
    title: "Launch",
    icon: FaRocket,
    href: "/dashboard",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`min-h-screen transition-all duration-700 ${
        isOpen ? "w-64" : "w-20"
      } flex p-4 bg-base-100 text-white relative`}
    >
      <div className="absolute p-2 text-white bg-black border rounded-md top-4">
        <SiAcademia className="text-md" />
      </div>
      <div className="transition-all duration-700">
        {isOpen ? (
          <MdArrowBackIosNew
            className="absolute z-50 p-1 text-2xl text-black bg-blue-500 rounded-full -right-3 top-5"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <MdOutlineArrowForwardIos
            className="absolute z-50 p-1 text-2xl text-black bg-blue-500 rounded-full -right-3 top-5"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>
      <div className="w-full text-2xl text-white pt-14">
        <hr className="border-2 border-black-400" />
        <div className="w-full mt-10 transition-all duration-700">
          {isOpen
            ? menuItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center w-full gap-3 pb-4 pl-2"
                >
                  <item.icon className="text-2xl" />{" "}
                  <Link href={item.href}>{item.title}</Link>
                </div>
              ))
            : menuItems.map((item, index) => (
                <div key={index} className="flex items-center w-full pb-4 pl-2">
                  <Link href={item.href}>
                    <item.icon className="text-2xl" />
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

{
  /* <MdOutlineArrowForwardIos
  
  className={`${isOpen ? "" : ""}`}
/>; */
}
