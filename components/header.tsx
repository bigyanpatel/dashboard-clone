import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaRegCircleQuestion } from "react-icons/fa6";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="p-4
        flex
        justify-center
        items-center
        gap-4
        px-8
        py-3
        border-b
        border-[#D9D9D9]
        shadow
        sticky top-0
        bg-[#FFFFFF]
    "
    >
      <div className="flex gap-4 items-center flex-grow">
        <h5 className="text-[#1A181E] font-medium text-xl">Payouts</h5>
        <div className="flex items-center gap-[6px] text-[#4D4D4D] text-sm">
          <FaRegCircleQuestion />
          <p>How it works</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-4 py-[9px] bg-[#F2F2F2] text-[#808080] rounded flex-grow">
        <IoSearch className="text-lg" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="bg-transparent outline-none w-full"
        />
      </div>
      <div className="flex gap-2 justify-end flex-grow">
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full w-10 h-10 flex items-center justify-center">
          <Image
            src={"/speaker.png"}
            alt="speaker logo"
            width={20}
            height={20}
          />
        </button>
        <button className="text-[#4D4D4D] bg-[#E6E6E6] rounded-full w-10 h-10 flex items-center justify-center">
          <FaCaretDown className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default Header;
