"use client";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "500"],
  style: ["italic", "normal"],
});

const Button = () => {
  return (
<div
  className={`flex flex-wrap gap-4 mt-8 sm:mt-10 justify-start ${plusJakarta.className}`}
>
      <button className="bg-[#18e4cd] border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
text-[18px] font-medium tracking-[0.5px]
px-[11px] py-[11px] h-[58.95px]
transition-all duration-300">
  All
</button>

      <button className="bg-transparent  border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
      text-[18px] font-medium tracking-[0.5px]
      px-[11px] py-[11px] h-[58.95px]
      transition-all duration-300 hover:bg-[#18e4cd]">
        Editor's Pick
      </button>

      <button className="bg-transparent  border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
      text-[18px] font-medium tracking-[0.5px]
      px-[11px] py-[11px] h-[58.95px]
      transition-all duration-300 hover:bg-[#18e4cd]">
        Technology & Business
      </button>

      <button className="bg-transparent  border-[1.6px] border-[rgb(17,142,195)] rounded-[10px]
      text-[18px] font-medium tracking-[0.5px]
      px-[11px] py-[11px] h-[58.95px]
      transition-all duration-300 hover:bg-[#18e4cd]">
        Artificial Intelligence
      </button>
    </div>
  );
};

export default Button;