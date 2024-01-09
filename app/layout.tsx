'use client'

import "./globals.css";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { RecoilRoot } from "recoil";

const inter = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("bg-background flex relative", inter.className)}>
        <RecoilRoot>
          <Sidebar />
          <div className="w-full">
            <Header />
            {children}
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
