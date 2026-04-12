"use client";
import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { RxDotFilled } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";

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
  const [position, setPosition] = useState({ x: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === homeSlide.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;

    setPosition({ x });
  };

  return (
    <>
      {/* banner section */}
      <section className="">
        <div className="w-full min-h-[90vh] relative">
          <div
            style={{ backgroundImage: `url(${homeSlide[currentIndex].img})` }}
            className="w-full h-full object-scale-down duration-500 absolute inset-0"
          ></div>

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
               w-[300%] h-[300%] sm:w-[600%] sm:h-[600%]
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

            <div className="absolute bottom-2/5 lg:right-60 right-5 flex flex-col gap-3">
              {homeSlide.map((eachSlide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => setCurrentIndex(slideIndex)}
                  className={`lg:text-3xl text-lg cursor-pointer  w-7 h-7 rounded-full border-4 hover:text-white hover:bg-white ${
                    currentIndex === slideIndex
                      ? "text-white bg-white border-white"
                      : "border-white/60"
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

      {/* card section */}
      {/* text-content section */}
      {/* card section */}

      <section className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-y-2  md:text-left">
            <RxDotFilled size={24} className="text-primary " />

            <p className="text-gray-500 uppercase text-sm sm:text-base">
              our work showcase
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-extrabold leading-tight">
              Explore our best recently completed projects
            </h2>
          </div>

          {/* Button */}
          <div className="w-full flex  md:justify-end mt-6 md:mt-0">
            <Link
              href={"/portfolio"}
              className="relative inline-flex items-center justify-center 
        px-8 sm:px-10 md:px-12.5 py-3 sm:py-4
        transition-all duration-500
        bg-[#101010] hover:border-black hover:border-2
        overflow-hidden group cursor-pointer"
            >
              {/* Animated background */}
              <span
                className="absolute top-1/2 left-1/2 
          w-[300%] h-[300%] sm:w-[600%] sm:h-[600%]
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
                View All Work
              </span>
            </Link>
          </div>
        </div>

        {/* project section */}
        <div className=" flex flex-col mt-10 mb-5 hidden md:block">
          <div
            onMouseMove={handleMouseMove}
            className="flex justify-between items-center project  border-t border-b py-7.5 dark:border-white border-black group cursor-pointer relative"
          >
            <div className=" flex justify-center items-center gap-x-10">
              <span className=" text-2xl font-extrabold group-hover:text-primary">
                01
              </span>
              <h1 className=" text-2xl font-extrabold relative">
                Digital Twin of Dubai
              </h1>
            </div>
            <div className="">
              <button
                className=" p-5 rounded-full bg-white font-extrabold text-black 
      transition-transform duration-500 ease-in-out cursor-pointer
      group-hover:-rotate-45"
              >
                {" "}
                <FiArrowDownRight size={60} />
              </button>
            </div>

            {/* project-img */}
            <div
              style={{
                transform: `translate(${position.x}px,0) translate(-50%,-50%) rotate(5deg) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5 left-[185px] pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100"
            >
              <img
                className="w-full h-full object-cover relative transition-all duration-300 ease-in-out dark:mix-blend-normal mix-blend-luminosity"
                src="/dubai.jpg"
                alt="Dubai digital"
                loading="lazy"
              />
            </div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            className="flex justify-between items-center relative project border-b py-7.5 dark:border-white border-black group cursor-pointer"
          >
            <div className=" flex justify-center items-center gap-x-10">
              <span className=" text-2xl font-extrabold group-hover:text-primary">
                02
              </span>
              <h1 className=" text-2xl font-extrabold">BzNFTMart</h1>
            </div>
            <div className="">
              <button
                className=" p-5 rounded-full bg-white font-extrabold text-black 
      transition-transform duration-500 ease-in-out cursor-pointer
      group-hover:-rotate-45"
              >
                {" "}
                <FiArrowDownRight size={60} />
              </button>
            </div>

            {/* project-img */}
            <div
              style={{
                transform: `translate(${position.x}px,0) translate(-50%,-50%) rotate(5deg) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5 left-[185px] pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100"
            >
              <img
                className="w-full h-full object-cover relative transition-all duration-300 ease-in-out dark:mix-blend-normal mix-blend-luminosity"
                src="/bzmart.jpg"
                alt="bzMart"
                loading="lazy"
              />
            </div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            className="flex relative justify-between items-center group project border-b py-7.5 dark:border-white border-black cursor-pointer"
          >
            <div className=" flex justify-center items-center gap-x-10">
              <span className=" text-2xl font-extrabold group-hover:text-primary">
                03
              </span>
              <h1 className=" text-2xl font-extrabold">AI Medical Imaging</h1>
            </div>
            <div className="">
              <button
                className=" p-5 rounded-full bg-white font-extrabold text-black 
      transition-transform duration-500 ease-in-out cursor-pointer
      group-hover:-rotate-45"
              >
                {" "}
                <FiArrowDownRight size={60} />
              </button>
            </div>

            {/* project-img */}
            <div
              style={{
                transform: `translate(${position.x}px,0) translate(-50%,-50%) rotate(5deg) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5 left-[185px] pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100"
            >
              <img
                className="w-full h-full object-cover relative transition-all duration-300 ease-in-out dark:mix-blend-normal mix-blend-luminosity"
                src="/medical.jpg"
                alt="Medical AI"
                loading="lazy"
              />
            </div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            className="flex group relative justify-between items-center project border-b py-7.5 dark:border-white border-black cursor-pointer"
          >
            <div className=" flex justify-center items-center gap-x-10">
              <span className=" text-2xl font-extrabold group-hover:text-primary">
                04
              </span>
              <h1 className=" text-2xl font-extrabold">AI Sustainability</h1>
            </div>
            <div className="">
              <button
                className=" p-5 rounded-full bg-white font-extrabold text-black 
      transition-transform duration-500 ease-in-out cursor-pointer
      group-hover:-rotate-45"
              >
                {" "}
                <FiArrowDownRight size={60} />
              </button>
            </div>

            {/* project-img */}
            <div
              style={{
                transform: `translate(${position.x}px,0) translate(-50%,-50%) rotate(5deg) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5 left-[185px] pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100"
            >
              <img
                className="w-full h-full object-cover relative transition-all duration-300 ease-in-out dark:mix-blend-normal mix-blend-luminosity"
                src="/turf.jpg"
                alt="Turf"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
