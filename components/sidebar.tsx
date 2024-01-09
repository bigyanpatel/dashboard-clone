import Link from "next/link";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiWallet } from "react-icons/ci";

const menuLists = [
  {
    icon: <GoHome className="text-xl" />,
    name: "Home",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Orders",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Products",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Delivery",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Marketing",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Analytics",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Payouts",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Discounts",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Audience",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Appearence",
  },
  {
    icon: <GoHome className="text-xl" />,
    name: "Plugins",
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden sticky top-0 left-0 lg:flex lg:flex-col min-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between">
      <div className="w-full h-full flex flex-col gap-6 items-center">
        <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
          <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px]"></div>
          <div className="flex flex-col gap-1 w-[108px]">
            <h3 className="font-medium text-[15px]">Nishyan</h3>
            <Link
              href={"#"}
              className="underline font-sans text-[13px] font-light"
            >
              Visit Store
            </Link>
          </div>
          <FaChevronDown className="w-[20px] h-[20px]" />
        </div>
        <div className="w-full flex-col gap-4">
          {menuLists.map((item) => (
            <Link
              key={item.name}
              href={"#"}
              className="px-4 py-2 flex gap-3 text-white items-center rounded-[4px] hover:bg-slate-500"
            >
              {item.icon}
              <p className="text-[14px] font-medium">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded-[4px]">
        <div className="flex gap-3 items-center">
          <div className="w-[36px] h-[36px] bg-[#FFFFFF]/10 rounded-[4px] p-[6px]">
            <CiWallet className="w-full h-full text-white" />
          </div>
          <div className="flex flex-col text-white gap-[2px]">
            <h3 className="text-[13px]">Available Credits</h3>
            <h6 className="text-base font-medium">224.10</h6>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
