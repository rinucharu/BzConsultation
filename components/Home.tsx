"use client";
import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { RxDotFilled } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  img: string;
  title: string;
  subtitle: string;
  btn: string;
  href: string;
};

const Home = () => {
  const homeSlide: Slide[] = [
    {
      img: "/image1.jpeg",
      title: "Future Tech",
      subtitle:
        "AI-driven solutions tailored to innovate and transform digital landscapes.",
      btn: "Learn more about us",
      href: "/about",
    },
    {
      img: "/image2.jpeg",
      title: "Smart Minds",
      subtitle:
        "Crafting seamless UI experiences that elevate user interactions worldwide.",
      btn: "Work with us",
      href: "/contact",
    },
    {
      img: "/image3.jpeg",
      title: "Talk to us",
      subtitle:
        "Innovative code crafted to meet your business needs and goals.",
      btn: "Work with us",
      href: "/contact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === homeSlide.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {/* banner section */}
      <section className="">
        <div className="w-full min-h-screen relative">
          <div className=" absolute inset-0">
            <img
              src={homeSlide[currentIndex].img}
              alt="slide"
              className="object-cover w-full h-full"
            />
          </div>
          <div className=" max-w-7xl mx-auto flex justify-center gap-x-10 items-start">
            <div className="absolute left-0 md:left-50 inset-0 flex flex-col justify-center items-start gap-y-[1rem] px-4">
              <h6
                style={{ textShadow: "2px 2px 4px rgba(0 ,0 ,0 ,0.6)" }}
                className="text-[1.5rem] md:text-4xl font-bold text-white"
              >
                {homeSlide[currentIndex].title}
              </h6>

              <p className="mt-4 text-sm p-lead  sm:text-lg md:text-xl inline-block min-w-full text-white">
                {homeSlide[currentIndex].subtitle}
              </p>

              <Link
                href={homeSlide[currentIndex].href}
                className="relative inline-flex items-center justify-center 
             px-6 sm:px-8 lg:px-10 py-3 sm:py-4
             bg-primary hover:border-black hover:border-2
             overflow-hidden group cursor-pointer"
              >
                {/* Animated background */}
                <span
                  className="absolute top-1/2 left-1/2 
               w-[300%] h-[300%] sm:w-[400%] sm:h-[400%]
               bg-white 
               -translate-x-1/2 -translate-y-1/2 rotate-[-25deg]
               scale-0 group-hover:scale-100
               transition-transform duration-500 ease-out"
                ></span>

                {/* Text */}
                <span
                  className="relative z-10 
               text-white group-hover:text-primary
               transition-colors duration-300 
               font-bold sm:font-extrabold
               text-sm sm:text-base lg:text-[17px]"
                >
                  {homeSlide[currentIndex].btn}
                </span>
              </Link>
            </div>

            <div className="absolute bottom-2/5 lg:right-40 right-5 flex flex-col gap-3">
              {homeSlide.map((eachSlide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`lg:text-3xl text-lg cursor-pointer  w-7 h-7 rounded-full border-4 hover:text-white hover:bg-white ${
                    currentIndex === slideIndex
                      ? "text-white bg-white border-white"
                      : "border-white/40"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* infinite caraousal */}
      <section className="">
        <div className="bg-[#101010] p-5 w-full overflow-hidden   font-semibold text-white text-xl ">
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            <span className="mr-10 tracking-wider">
              UNLOCKING YOUR FULL POTENTIAL
            </span>
            <span className="mr-10 tracking-wider">
              TURNING CONCEPTS INTO REALITY
            </span>
            <span className="mr-10 tracking-wider">CULTIVATING CREATIVITY</span>
            <span className="mr-10 tracking-wider">
              EXPERTISE IN DESIGN AND DEVELOPMENT
            </span>
            <span className="mr-10 tracking-wider">
              REALIZING YOUR HIDDEN POTENTIAL
            </span>
            <span className="mr-10 tracking-wider">
              TRANSFORMING VISIONS INTO REALITY
            </span>
            <span className="mr-10 tracking-wider">
              FOSTERING CREATIVE INSPIRATION
            </span>
            <span className="mr-10 tracking-wider">
              CRAFTING IN DESIGN AND DEVELOPMENT
            </span>
            <span className="mr-10 tracking-wider">
              UNLEASHING YOUR MAXIMUM POTENTIAL
            </span>
            <span className="mr-10 tracking-wider">
              LET'S START WORKING TOGETHER
            </span>
          </Marquee>
        </div>
      </section>

      {/* text-contents */}
      <section className="w-full px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-15">
          <div className="flex flex-col gap-y-2 md:gap-y-2  md:text-left">
            <RxDotFilled size={24} className="text-primary" />

            <p className="text-gray-500  uppercase text-base">
              fueling success in
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px]  font-extrabold leading-tight">
              Diverse Industries We Serve
            </h2>
          </div>

          <div className="mt-6 md:mt-20">
            <ul className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10">
              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                BzAnalytics specializes in delivering cutting-edge technologies
                that not only propel businesses forward but also uniquely
                position them within their respective sectors.
              </li>

              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                Our foremost commitment is to drive industry growth by
                leveraging innovative technologies that propel businesses to the
                forefront of their sectors.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
