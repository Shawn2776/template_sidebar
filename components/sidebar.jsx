"use client";

import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { SiAcademia } from "react-icons/si";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

const menuItems = [
  {
    section: "Pages",
    items: [
      {
        title: "Dashboard",
        icon: FaHouse,
        href: "/dashboard",
      },
    ],
  },
  {
    section: "Settings",
    items: [
      {
        title: "Profile",
        icon: FaHouse,
        href: "/profile",
      },
    ],
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20 justify-center"
      } items-center flex border p-4 bg-white relative`}
    >
      <div className="p-2 text-white bg-black border rounded-md">
        <SiAcademia className="text-md" />
      </div>
      <div>
        {isOpen ? (
          <MdArrowBackIosNew
            className="absolute z-50 p-1 text-2xl text-black transition-all duration-500 ease-in-out bg-blue-500 rounded-full -right-3 top-5"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <MdOutlineArrowForwardIos
            className="absolute z-50 p-1 text-2xl text-black transition-all duration-500 ease-in-out bg-blue-500 rounded-full -right-3 top-5"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
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
