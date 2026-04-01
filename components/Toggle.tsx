"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-6 left-2 z-50">
      <button
        onClick={toggleTheme}
        className="
  fixed bottom-[15px] left-[15px] z-[1000] 
  bg-black text-white border-white
  text-[15px] font-extrabold hover:border-black
py-2  px-2
  border-2
  overflow-hidden
  transition-all duration-500
  cursor-pointer
  group
  "
      >
        <span
          className="
    absolute left-1/2 top-1/2 
    w-[150%] h-0
    bg-white
    -translate-x-1/2 -translate-y-1/2
    rotate-[-25deg]
    transition-all duration-300
    group-hover:h-[400%]
    -z-10
    "
        ></span>

        <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300 ">
          Light / Dark
        </span>
      </button>
    </div>
  );
}
