"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { IoIosArrowForward } from "react-icons/io";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FaChevronRight } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { menuItems } from "@/lib/menu";
import Image from "next/image";
import LanguageSelect from "./LanguageDrop";

const Navbar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Success Stories", href: "/portfolio" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const [openLang, setOpenLang] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <nav
  className={`w-full sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? "shadow-lg bg-black" : "bg-black"
  }`}
>
      <div className=" flex items-center justify-between px-4 py-4">
        <div className=" flex items-center justify-between w-full ">
          {/* mobile menu */}

          {/* logo */}
          <div className="flex items-center">
            <img
              src="https://bzanalytics.ai/assets/bz/bq.png"
              alt="BZ Analytics"
              className="w-[150px] lg:w-[140px] h-auto object-contain"
            />
          </div>

          {/* navigation menu */}
          <div className=" flex items-center justify-center">
            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium mr-[25px]">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={` text-white text-[14px] font-semibold flex items-center gap-1 hover:text-primary transition `}
                >
                  <div
                    className="relative
after:content-['']
after:absolute
after:left-[-14px]
after:top-0
after:bottom-0
after:my-auto
after:w-[5px]
after:h-[5px]
after:rounded-full
after:bg-current"
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </nav>

            <div className="md:ms-100 sm:ms-45  lg:m-0">
              <LanguageSelect />
            </div>
          </div>

          {/* consultant btn */}
          <div className="hidden lg:block">
            <Link
              href="/consult"
              className="hidden min-[1200px]:block bg-[#101010] relative overflow-hidden border border-white px-10 py-4 group cursor-pointer flex-shrink-0"
            >
              <span
                className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
            -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] 
            scale-0 group-hover:scale-110 
            transition-transform duration-500 ease-out"
              ></span>

              <span className="relative z-10 text-white  group-hover:text-orange-500 transition-colors duration-300 font-extrabold  text-[17px] tracking-normal">
                Schedule a consultation
              </span>
            </Link>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu size={25} className="text-white" />
              </SheetTrigger>

              <SheetContent className="bg-black" side="left">
                <SheetHeader>
                  <SheetTitle>
                    <img
                      src="https://bzanalytics.ai/assets/bz/bq.png"
                      alt="BZ Analytics"
                      className="w-[85px] h-auto object-contain"
                    />
                  </SheetTitle>

                  <div className="flex flex-col gap-4 mt-6">
                    {menuItems.map((item, i) => (
                      <Link
                        href={item.href}
                        key={i}
                        className="w-full py-1.5 text-white border-b border-gray-700 font-light text-[12px] flex justify-between items-center"
                      >
                        {item.label}

                        <button className="p-2 bg-primary">
                          <FaChevronRight />
                        </button>
                      </Link>
                    ))}
                  </div>

                  <div className="">
                    <button className=" bg-primary w-full text-[11px] text-white font-semibold py-3 px-10">
                      <Link href={"/consult"}> Schedule a consultation</Link>
                    </button>
                    <div className=" flex items-center justify-start gap-x-2 mt-3">
                      <button className="p-2 bg-primary rounded-full text-white">
                        <FaEnvelope />{" "}
                      </button>
                      <Link href={"mailto:hello@bzanalytics.ai"} className="text-white font-semibold ">
                        hello@bzanalytics.ai
                      </Link>
                    </div>
                  </div>

                  <div className=" flex items-center justify-start gap-2">
                    <button className="p-2 text-white">
                      <FaLinkedinIn />
                    </button>

                    <button className="p-2 text-white">
                      <FaXTwitter />
                    </button>

                    <button className="p-2 text-white">
                      <FaFacebook />
                    </button>

                    <button className="p-2 text-white">
                      <FaInstagram />
                    </button>

                    <button className="p-2 text-white">
                      <FaYoutube />
                    </button>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
