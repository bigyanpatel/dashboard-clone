import Image from "next/image";
import React from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const DashboardPage = () => {
  return (
    <main className="p-8 w-full gap-8 flex flex-col h-full bg-[#FAFAFA]">
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h5 className="font-medium text-xl">Overview</h5>
          <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
            This Month <FaChevronDown />
          </button>
        </div>
        <div className="flex gap-5">
          <div className="rounded-[8px] flex-grow hover:bg-[#0E4F82] bg-[#146EB4] text-white">
            <div className="p-5 flex flex-col gap-4">
              <h5 className="flex gap-3 items-center">
                Next Payout <FaRegCircleQuestion />
              </h5>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-medium">₹2,312.23</p>
                <p className="flex items-center font-medium text-base underline">
                  23 Orders <FaChevronRight className="text-lg" />
                </p>
              </div>
            </div>
            <div className="px-6 py-2 bg-[#0E4F82] flex justify-between text-[#F2F2F2] rounded-[8px]">
              <p>Next Payment Date:</p>
              <p>Today, 4:00PM</p>
            </div>
          </div>
          <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit">
            <h5 className="flex gap-3 items-center text-[#4D4D4D]">
              Amount Pending <FaRegCircleQuestion />
            </h5>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-medium">₹92,312.20</p>
              <p className="flex items-center font-medium text-base underline text-[#146EB4]">
                13 Orders <FaChevronRight className="text-lg" />
              </p>
            </div>
          </div>
          <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit">
            <h5 className="flex gap-3 items-center text-[#4D4D4D]">
              Amount Processed <FaRegCircleQuestion />
            </h5>
            <div className="flex justify-between items-center">
              <p className="text-3xl font-medium">₹23,92,312.19</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <h5 className="font-medium text-[#1A181E] text-xl">
            Transactions | This Month
          </h5>
          <div className="flex gap-3">
            <button className="px-4 py-[6px] bg-[#E6E6E6] text-[#808080] rounded-full">
              Payouts (22)
            </button>
            <button className="px-4 py-[6px] bg-[#146EB4] text-[#FFFFFF] rounded-full">
              Refunds (6)
            </button>
          </div>
        </div>
        <div className="flex flex-col px-3 pt-3 pb-2 gap-3 rounded-[8px] bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-4 py-[9px] border border-[#F2F2F2] text-[#808080] rounded w-full max-w-[300px]">
              <IoSearch className="text-lg" />
              <input
                type="text"
                placeholder="Order ID or transactions ID"
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded">
                Sort{" "}
                <Image
                  src={"/updown.png"}
                  alt="updown icon"
                  width={14}
                  height={14}
                />
              </button>
              <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                <FiDownload className="text-xl"/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
