"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import Image from "next/image";
import orders from "@/assets/icons/orders.png";
import home from "@/assets/icons/home.png";
import products from "@/assets/icons/products.png";
import delivery from "@/assets/icons/delivery.png";
import marketing from "@/assets/icons/marketing.png";
import analytics from "@/assets/icons/analytics.png";
import payouts from "@/assets/icons/payouts.png";
import discounts from "@/assets/icons/discounts.png";
import audience from "@/assets/icons/audience.png";
import appearence from "@/assets/icons/appearence.png";
import plugins from "@/assets/icons/plugins.png";
import nishyan from "@/assets/icons/nishyan.png";
import { useRecoilState } from "recoil";
import { SideBarOpen } from "@/atoms/sidebarAtom";
import { IoIosCloseCircle } from "react-icons/io";

const menuLists = [
  {
    icon: home,
    name: "Home",
  },
  {
    icon: orders,
    name: "Orders",
  },
  {
    icon: products,
    name: "Products",
  },
  {
    icon: delivery,
    name: "Delivery",
  },
  {
    icon: marketing,
    name: "Marketing",
  },
  {
    icon: analytics,
    name: "Analytics",
  },
  {
    icon: payouts,
    name: "Payouts",
  },
  {
    icon: discounts,
    name: "Discounts",
  },
  {
    icon: audience,
    name: "Audience",
  },
  {
    icon: appearence,
    name: "Appearence",
  },
  {
    icon: plugins,
    name: "Plugins",
  },
];

const Sidebar = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useRecoilState(SideBarOpen);

  const handleToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <aside
        className={`fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] ${
          isOpen
            ? "pointer-events-all opacity-100"
            : "pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto"
        }`}
      >
        <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
        <button
          className={`${isOpen ? "fixed" : "hidden"} top-5 right-4 lg:hidden`}
          onClick={handleToggleModal}
        >
          <IoIosCloseCircle className="text-white text-3xl"/>
        </button>
        <div
          className={`relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between ${
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
          ref={modalRef}
        >
          <div className="w-full flex flex-col gap-6 items-center">
            <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
              <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
                <Image
                  src={nishyan}
                  alt="nishyanLogo"
                  fill
                  className="object-cover object-center"
                  sizes="50px"
                />
              </div>
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
                  className={`${
                    item.name === "Payouts" ? "bg-[#FFFFFF]/10" : ""
                  } px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10`}
                >
                  <div className="relative w-[18px] h-[18px]">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      className="object-contain object-center"
                    />
                  </div>
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
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
