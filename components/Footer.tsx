"use client";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { FaLinkedinIn,FaFacebook,FaInstagram ,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import "animate.css";
import "aos";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="theme-fixed-footer relative overflow-hidden bg-[#101010] pt-24 pb-40 font-sans text-white">
      {/* Background Diagonal Lines Pattern */}
      <div
        className=" absolute inset-0 z-0 
             bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/footer-bg-1.png')",
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-[120px]">
          {/* Left Column */}
          <div className="flex-1 lg:max-w-[750px]">
            <div className="mb-8">
              <p className="mb-2 text-[14px] md:text-[26px] font-normal text-white">
                Let&apos;s start working together
              </p>
              <Link href={"mailto:hello@bzanalytics.ai"} className="text-3xl font-bold tracking-tight md:text-[30px] lg:text-[54px] hover:text-[#f5900d] transition-all duration-500 cursor-pointer">
                hello@bzanalytics.ai
              </Link>
            </div>

            <div className="mb-12 h-[1px] w-full bg-white/10"></div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4">
              {/* Logo & Socials */}
              <div className="flex flex-col justify-between">
                {/* Logo Group */}
                <div
                  className="flex w-[280px] items-center "
                  data-aos="fade-up"
                >
                  <Image
                    src="/Logo.png"
                    alt="Bz Analytics Logo"
                    width={280}
                    height={70}
                    className="h-auto w-[180px] lg:w-full object-contain"
                  />
                </div>

                {/* Social Icons */}
                <div className="mt-22 ms-3 flex flex-wrap justify-start md:justify-start items-center  gap-4">
                  <Link
                    href="https://www.linkedin.com/company/bzanalytics/posts/?feedView=all"
                    className="flex h-10 w-10 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-black transition-all hover:bg-primary duration-400"
                  >
                    <FaLinkedinIn size={22} className=" fill-white text-white" />
                  </Link>
                  <Link
                    href="https://x.com/Bzanalytics_AI"
                    className="flex h-10 w-10 md:h-13 md:w-13 shrink-0 items-center justify-center rounded-full bg-black transition-all hover:bg-primary  duration-400"
                  >
                   <FaXTwitter size={22} className=" fill-white text-white" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/people/BzAnalytics-Private-Limited/100086903766563/#"
                    className="flex h-10 w-10 md:h-13 md:w-13 shrink-0 items-center justify-center rounded-full bg-black transition-all hover:bg-primary duration-400"
                  >
                    <FaFacebook size={22} className=" fill-white text-white" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/bzanalytics/"
                    className="flex h-10 w-10 md:h-13 md:w-13 shrink-0 items-center justify-center rounded-full bg-black transition-all hover:bg-primary duration-400"
                  >
                    <FaInstagram size={22} className="fill-white text-white" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@bzanalytics8849"
                    className="flex h-10 w-10 md:h-13 md:w-13 shrink-0 items-center justify-center rounded-full bg-black transition-all hover:bg-primary duration-400"
                  >
                    <FaYoutube size={22} className="fill-white text-white" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0.5 lg:ml-8">
                <div className="flex flex-col gap-0.5 pt-2">
                  <Link
                    href="/"
                    style={{ lineHeight: "36px" }}
                    className="text-[18px] font-medium tracking-wide text-gray-300 transition-colors hover:text-primary  duration-400"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    style={{ lineHeight: "36px" }}
                    className="text-[18px] font-medium tracking-wide text-gray-300 transition-colors hover:text-primary duration-400"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    style={{ lineHeight: "36px" }}
                    className="text-[18px] font-medium tracking-wide text-gray-300 transition-colors hover:text-primary"
                  >
                    Services
                  </Link>
                  <Link
                    href="/portfolio"
                    style={{ lineHeight: "36px" }}
                    className="text-[18px] font-medium tracking-wide text-gray-300 transition-colors hover:text-primary duration-400"
                  >
                    Success Stories
                  </Link>
                </div>
                <div className="flex flex-col gap-0.5 pt-2">
                  <Link
                    href="/blogs"
                    style={{ lineHeight: "36px" }}
                    className="text-[18px] font-medium tracking-wide text-gray-300 transition-colors hover:text-primary duration-400"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/careers"
                    style={{ lineHeight: "36px" }}
                    className="text-[18px] font-medium tracking-wide text-gray-300 transition-colors hover:text-primary"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact"
                    style={{ lineHeight: "36px" }}
                    className="text-[18px] font-medium tracking-wide text-gray-300 transition-colors hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 ml-auto w-full shrink-0  lg:mb-auto lg:w-[300px]">
            <div className="flex flex-col justify-center rounded-sm  bg-[#0000004D] p-6 shadow-2xl sm:p-8">
              <div className="mb-6 flex w-full justify-center">
                <Image
                  src="/logof.png"
                  alt="Subscribe Megaphone"
                  width={160}
                  height={112}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-1 text-xl font-medium text-white">
                Subscribe now
              </h3>
              <p className="mb-4 text-xs text-gray-400">Empower Every Mind</p>

              <div className="space-y-10">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full  border border-transparent bg-[#151515] px-4 py-2 text-sm text-white transition-colors placeholder:text-gray-500 focus:border-white/20 focus:outline-none"
                />
                <button className="w-full bg-primary py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
