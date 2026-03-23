import React from "react";
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

const Navbar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Blogs", href: "/blogs" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
   <nav className="w-full border-b bg-[#101010] sticky top-0 z-50">
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
            <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium mr-[25px]">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={` text-white font-[14px] flex items-center gap-2 hover:text-primary transition `}
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
              <NavigationMenu className=" bg-black">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {" "}
                      <img
                        src="/En-lan.png"
                        width={20}
                        height={20}
                        alt=""
                        className="me-2"
                      />{" "}
                      EN
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className=" flex flex-col items-start justify-start gap-2 font-normal">
                        <Button
                          variant="ghost"
                          className="flex w-20 items-center font-bold dark:hover:bg-primary  hover:bg-primary cursor-pointer p-3"
                        >
                          <img src="/ind.png" width={20} height={20} alt="" />
                          <p className=" text-[16px] font-medium">HI</p>
                        </Button>

                        <Button
                          variant="ghost"
                          className="flex w-20 items-center hover:bg-primary dark:hover:bg-primary  font-bold cursor-pointer p-3 "
                        >
                          <img src="/uae.png" width={20} height={20} alt="" />
                          <p className=" text-[16px] font-medium">AR</p>
                        </Button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          {/* consultant btn */}
          <div className="hidden lg:block">
            <button className="px-10 py-[15px] border border-white bg-black text-white hover:bg-white hover:text-primary transition duration-300 text-[16px] font-bold">
              <Link href={"/consult"}> Schedule a Consultation</Link>
            </button>
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
                      <h5 className="text-white font-semibold ">
                        hello@bzanalytics.ai
                      </h5>
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
