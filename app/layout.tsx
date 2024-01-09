import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Clone | by Bigyan",
  description: "100% pixel perfect clone doesn't exit!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("bg-background flex relative", inter.className)}>
        <Sidebar />
        <div className="w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
