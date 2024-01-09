import Image from "next/image";
import React from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaRegCircleQuestion,
} from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { tableData } from "@/data/table";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <main className="p-3 sm:p-8 w-full gap-8 flex flex-col">
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h5 className="font-medium text-xl">Overview</h5>
          <button className="flex items-center gap-3 border rounded px-[14px] py-[6px] bg-white text-[#4D4D4D]">
            This Month <FaChevronDown />
          </button>
        </div>
        <div className="flex gap-5 flex-wrap">
          <div className="rounded-[8px] flex-grow hover:bg-[#0E4F82] bg-[#146EB4] text-white min-w-[300px]">
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
          <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
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
          <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
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
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-4 py-[6px] border border-[#D9D9D9] text-[#808080] rounded w-full max-w-[300px]">
              <IoSearch className="text-lg" />
              <input
                type="text"
                placeholder="Order ID or transactions ID"
                className="bg-transparent outline-none w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-[6px] px-3 py-[6px] border border-[#D9D9D9] text-[#4D4D4D] rounded min-w-[75px]">
                Sort{" "}
                <Image
                  src={"/updown.png"}
                  alt="updown icon"
                  width={14}
                  height={14}
                />
              </button>
              <button className="flex items-center p-2 border border-[#D9D9D9] text-[#4D4D4D] rounded">
                <FiDownload className="text-xl" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <colgroup>
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="text-[#4D4D4D]">
                <tr className="bg-[#F2F2F2] rounded-lg overflow-hidden">
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Order ID
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Status
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-3 py-[10px] text-left text-sm font-medium tracking-wider">
                    Refund Date
                  </th>
                  <th className="px-3 py-[10px] text-right text-sm font-medium tracking-wider">
                    Order Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white px-3 divide-y divide-[#E6E6E6]">
                {tableData.map((row, index) => (
                  <tr className="text-sm" key={index}>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                      {row.orderId}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap flex items-center gap-1 text-[#1A181E]">
                      <span
                        className={`${
                          row.status === "Successful"
                            ? "bg-green-500"
                            : "bg-[#999999]"
                        } w-2 h-2 rounded-full`}
                      ></span>
                      {row.status}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.transactionId}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#4D4D4D]">
                      {row.refundDate}
                    </td>
                    <td className="px-3 py-[10px] whitespace-nowrap text-[#1A181E] text-right">
                      {row.orderAmount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <h5 className="text-center text-gray-500">
        Made with ❤️ by{" "}
        <Link
          href={"https://twitter.com/meet_bigyan20"}
          className="underline font-bold"
          target="_blank"
        >
          Bigyan Patel
        </Link>
      </h5>
    </main>
  );
};

export default DashboardPage;
