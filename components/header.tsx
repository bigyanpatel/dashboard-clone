'use client'

import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaRegCircleQuestion } from "react-icons/fa6";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSetRecoilState } from "recoil";
import { SideBarOpen } from "@/atoms/sidebarAtom";

const Header = () => {
  const setSideBarOpen = useSetRecoilState(SideBarOpen);

  return (
    <header
      className="
        flex
        justify-between
        items-center
        sm:gap-4 
        gap-2
        sm:px-8
        px-4
        py-3
        border-b
        border-[#D9D9D9]
        shadow
        sticky top-0
        bg-[#FFFFFF]
    "
    >
      <div className="flex gap-2 sm:gap-4 items-center sm:flex-grow">
        <button
          className="block lg:hidden"
          onClick={() => setSideBarOpen((prev) => !prev)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
        <h5 className="text-[#1A181E] font-medium text-xl">Payouts</h5>
        <div className="flex items-center gap-[6px] text-[#4D4D4D] text-sm">
          <FaRegCircleQuestion />
          <p className="hidden sm:block">How it works</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-[138px] bg-[#F2F2F2] text-[#808080] rounded sm:flex-grow">
        <IoSearch className="text-lg" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="flex gap-2 justify-end sm:flex-grow">
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-2 sm:flex w-8 sm:w-10 sm:h-10 items-center justify-center">
          <Image
            src={"/speaker.png"}
            alt="speaker logo"
            width={20}
            height={20}
          />
        </button>
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full p-1 sm:w-10 sm:h-10 flex items-center justify-center">
          <FaCaretDown className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
