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
      <button className="bg-[#18e4cd] text-black cursor-pointer rounded-[10px]
text-[18px] font-medium tracking-[0.5px]
px-[11px] py-[11px] h-[58.95px]
transition-all duration-300">
  All
</button>

    </div>
  );
};

export default Button;