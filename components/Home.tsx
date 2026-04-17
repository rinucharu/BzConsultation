"use client";
import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { Button } from "./ui/button";
import { RxDotFilled } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { FiArrowDownRight } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { BiCodeBlock } from "react-icons/bi";
import "aos";
import Image from "next/image";
import HomeReview from "./about/HomeReview";

import { FaArrowRight } from "react-icons/fa6";

interface CardItem {
  title: string;
  img: string;
  desc: string;
}

const cards: CardItem[] = [
  { title: "Metaverse & Gaming", img: "/img1.jpg", desc: "Empowering Metaverse & Gaming with Innovative Solutions." },
  { title: "Energy & Manufacturing", img: "/img2.jpg", desc: "Optimizing Operations: Solutions for Energy & Manufacturing." },
  { title: "SDG", img: "/img3.jpg", desc: "Tech-Driven Sustainability: Achieving Goals with Innovation." },
  { title: "Healthcare", img: "/img4.jpg", desc: "Revolutionizing Healthcare: Better Patient Care through Innovation." },
  { title: "Textile", img: "/img5.jpg", desc: "Digital Transformation in Textile: Innovation-Led Progress." },
  { title: "Corporate", img: "/img6.jpg", desc: "Strategic Solutions for Corporate Success." },
  { title: "Advertising", img: "/img7.jpg", desc: "Elevating Brands: Creative Solutions for Advertising." },
  { title: "PSU", img: "/img8.jpg", desc: "Efficiency Redefined: Excellence in Public Sector Undertakings." },
  { title: "Finance", img: "/img9.jpg", desc: "Transforming Finance: Cutting-Edge Solutions." },
];

const CARD_WIDTH = 380;
const GAP = 24;
const VISIBLE_CARDS = 4;

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
  const [x, setX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === homeSlide.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  },[]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();

    let xPos = e.clientX - rect.left;

    setX(xPos);
  };

  type NewsItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  slug?: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "BzAnalytics and CloudQ Forge a Formidable Alliance to Redefine Business Solutions in 2023",
    category: "Alliance",
    date: "29 JULY",
    image: "/newsimage.jpg",
    slug: "bzanalytics-cloudq-alliance",
  },
  {
    id: 2,
    title: "BzAnalytics Achieves Outstanding Recognition: Among Top 5 Companies at Prestigious Entrepreneurship Expo",
    category: "Achieves",
    date: "30 NOV",
    image: "/newsimage2.jpg",
    slug: "bzanalytics-recognition",
  },
  {
    id: 3,
    title: "From Vision to Reality: BzAnalytics's Journey from 2020 to 2023",
    category: "Journey",
    date: "16 APR",
    image: "/newsimage3.jpg",
    slug: "bzanalytics-journey",
  },
];
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = cards.length - VISIBLE_CARDS;

  const nextSlide = () => {
    if (startIndex < maxIndex) setStartIndex(startIndex + 1);
  };

  const prevSlide = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <>
      {/* banner section */}
      <section className="">
        <div className="w-full min-h-[90vh] relative">
          <div
            style={{ backgroundImage: `url(${homeSlide[currentIndex].img})` }}
            className="w-full h-full object-scale-down duration-500 absolute inset-0 bg-center bg-no-repeat bg-cover top-0 left-0 right-0 bottom-0"
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

            <p className="dark:text-[#eaeaea] uppercase text-base">
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
      <section className="w-full bg-white dark:bg-black py-10 mt-40 overflow-hidden">
      <div className="relative px-5">

        {/* LEFT ARROW */}
{startIndex > 0 && (
  <button
    onClick={prevSlide}
    className="
    absolute left-2 top-1/2 -translate-y-1/2 z-40
    w-[28px] h-[60px]
    bg-black text-white
    border border-white border-2
    rounded-2xl
    overflow-hidden
    flex items-center justify-center
    group
    transition-all duration-500
    cursor-pointer
    "
  >
    {/* Sweep Animation */}
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
    />

    {/* Arrow */}
    <span className="relative z-10 text-white text-2xl font-bold group-hover:text-orange-500 transition-colors duration-300">
      ‹
    </span>
  </button>
)}

{/* RIGHT ARROW */}
{startIndex < maxIndex && (
  <button
    onClick={nextSlide}
    className="
    absolute right-2 top-1/2 -translate-y-1/2 z-40
   w-[28px] h-[60px]
    bg-black text-white
    border border-white border-2
    rounded-2xl
    overflow-hidden
    flex items-center justify-center
    group
    transition-all duration-500
    cursor-pointer
    "
  >
    {/* Sweep Animation */}
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
    />

    {/* Arrow */}
    <span className="relative z-10 text-white text-2xl font-bold  group-hover:text-orange-500 transition-colors duration-300">
      ›
    </span>
  </button>
)}

        {/* VIEWPORT */}
        <div className="overflow-hidden pr-[120px]">
          <div
            className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(-${startIndex * (CARD_WIDTH + GAP)}px)`
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="group/card relative w-[380px] h-[250px] flex-shrink-0 rounded-[10px] overflow-hidden cursor-pointer
           transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
           group-hover:translate-x-3 hover:!translate-x-0
           hover:scale-110 hover:z-20"
              >
                {/* Image */}
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover "
                />

                {/* Overlay */}
                <div className="absolute inset-0  transition-all duration-500" />

                {/* Content */}
                <div className="absolute bottom-10 w-fit p-4 bg-black opacity-60 mb-0">
                  <h3 className="text-white text-[20px]  font-semibold">
                    {card.title}
                  </h3>

                  
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
      {/* text-content section */}
      

      <section className="w-full px-4 sm:px-6   bg-white dark:bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-15 mx-auto max-w-7xl">
          <div className="flex flex-col gap-y-2 md:gap-y-2  md:text-left">
           <span className=" w-2 h-2 rounded-full bg-yellow-600" />

            <p className="dark:text-[#eaeaea] uppercase text-base">
             What we’re offering
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px]  font-extrabold leading-tight">
              What your business needs,
            </h2>
          </div>

          <div className="mt-6 md:mt-20">
            <ul className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10">
              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                BzAnalytics works with the world's leading Enterprises, SMEs & Startups – 
              to plan, develop, test and expand their digital initiatives.
              </li>

              <li
                className="text-sm sm:text-base md:text-lg font-medium flex items-start gap-2"
                style={{ letterSpacing: "1px" }}
              >
                <RxDotFilled className="min-w-[24px]" size={24} />
                We assure your business grows with innovative and sustainable technologies 
              built to brand your identity.
              </li>
            </ul>
          </div>
        </div>
      </section>
       <section className="w-full  bg-white dark:bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      {/* cards */}
      <div
        className="w-full theme-bg 
py-12 sm:py-14 md:py-16
px-4 sm:px-6 md:px-8
 lg:-mt-[20px]  
"
      >
       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_1.jpg"
              alt="UX Design"
              className="w-full h-[350px] object-cover"
            />

            {/* Orange Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">UX/UI</span>
                  <span className="block text-2xl sm:text-3xl">Design</span>
                </p>
              </div>
            </div>

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Enhancing user experiences through research, wireframes, and
                prototypes, creating visually appealing and user-friendly
                interfaces.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full max-w-sm  overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_2.jpg"
              alt="UX Design 2"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">On Demand</span>
                  <span className="block text-2xl sm:text-3xl">Product</span>
                  <span className="block text-2xl sm:text-3xl">Team</span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Flexible teams for custom software development, scaling, and
                extending your internal team's capabilities, led by dedicated
                developers and product owners.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_3.jpg"
              alt="UX Design 3"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">Mobile App</span>
                  <span className="block text-2xl sm:text-3xl">
                    Development
                  </span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Building iOS and Android apps, including cross-platform
                development using Flutter, tailored for both consumer and
                enterprise needs.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full max-w-sm overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="/ux_4.jpg"
              alt="UX Design 4"
              className="w-full h-[350px] object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 rounded-full bg-orange-400/80 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 p-4">
                <p className="text-white font-extrabold text-center leading-[1.1]">
                  <span className="block text-2xl sm:text-3xl">Web</span>
                  <span className="block text-2xl sm:text-3xl">
                    Development
                  </span>
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/60 -translate-y-full flex flex-col items-center justify-center text-center p-4 transition-transform duration-500 group-hover:translate-y-0">
              <p className="text-white mb-3 text-sm sm:text-base">
                Crafting websites, web applications, and custom software, along
                with creating web portals for specific business purposes.
              </p>
              <p className="flex items-center gap-2 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-orange-400 group">
                Read More
                <FaArrowRight className="transition-transform duration-300 text-white ease-in-out rotate-[45deg] group-hover:rotate-[0deg]" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* card section */}

      <section className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-8">
          {/* Left Content */}
          <div className="flex flex-col gap-y-2  md:text-left">
            <RxDotFilled size={24} className="text-primary " />

            <p className="dark:text-[#eaeaea] uppercase text-sm sm:text-base">
              our work showcase
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-extrabold leading-tight">
              Explore our best recently completed projects
            </h2>
          </div>

          {/* Button */}
          <div className="w-full flex justify-start lg:justify-end mt-6 md:mt-0">
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
            data-aos="fade-up"
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
                transform: `translateX(${x - 150}px) translateY(-50%) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5   pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100 group-hover:rotate-[5deg]"
            >
              <img
                className="w-full h-full object-cover relative transition-all duration-300 ease-in-out dark:mix-blend-normal mix-blend-luminosity"
                src="/dubai.jpg"
                alt="bzMart"
                loading="lazy"
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
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
                transform: `translateX(${x - 150}px) translateY(-50%) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5   pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100 group-hover:rotate-[5deg]"
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
            data-aos="fade-up"
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
                transform: `translateX(${x - 150}px) translateY(-50%) scale(1) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5   pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100 group-hover:rotate-[5deg]"
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
            data-aos="fade-up"
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
                transform: `translateX(${x - 150}px) translateY(-50%) scale(1) `,
              }}
              className="project-img absolute w-84.25 h-55.75 top-12.5   pointer-events-none overflow-hidden opacity-0 transform scale-[0.8] transition-all duration-500 ease-in-out z-0 group-hover:opacity-100 group-hover:-z-10 group-hover:scale-100 group-hover:rotate-[5deg]"
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

      {/* discover section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-x-25">
          {/* img section */}
          <div
            data-aos="fade-right"
            className=" hidden md:flex items-center justify-center gap-x-5 lg:-mt-66"
          >
            <div className=" flex flex-col gap-y-5">
              <div className="">
                <img
                  src="/why-choose-2-1.jpg"
                  alt=""
                  className="w-full object-cover"
                />
              </div>

              <div className="">
                <img src="/why-choose-2-2.jpg" alt="" />
              </div>
            </div>

            <div className="">
              <img
                src="/why-choose-2-3.jpg"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* content */}
          <div data-aos="fade-left" className=" ">
            <div className="flex flex-col gap-y-2 md:gap-y-5  md:text-left">
              <RxDotFilled size={24} className="text-primary" />

              <p className="dark:text-[#eaeaea] uppercase text-sm sm:text-base">
                Digitalization At Every Step
              </p>

              <h2
                style={{ letterSpacing: "1.5px" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px]  font-extrabold leading-tight max-w-[500px]"
              >
                Are you searching for a technology partner to speed up your
                digital transformation?
              </h2>

              <div className="">
                <h6 className="text-primary text-2xl lg:text-[28px] font-bold leading-tight">
                  Congratulations! You have arrived at the right spot.
                </h6>
              </div>
              <div
                className="text-[#eaeaea]text-base font-medium"
                style={{ lineHeight: "25px", letterSpacing: "1px" }}
              >
                <p>
                  We are globally renowned for our unwavering commitment to
                  designing and delivering top-notch IT services by leveraging
                  the power of innovative technologies
                </p>
              </div>

              <div className=" flex flex-wrap items-start justify-between gap-y-3">
                <div className=" flex justify-center items-center gap-x-3">
                  <div className="btn-icon  group   w-[81px] h-[81px] bg-[#101010] rounded-full flex items-center justify-center text-primary transition-all duration-500">
                    <IoSettings
                      size={25}
                      className="group-hover:scale-90 transition-all duration-1000 ease-in-out"
                    />
                  </div>
                  <h4 className=" text-[20px] max-w-[150px] font-extrabold">
                    Quality development
                  </h4>
                </div>

                <div className=" flex justify-center items-center gap-x-3">
                  <div className="btn-icon  group w-[81px] h-[81px] bg-[#101010] rounded-full flex items-center justify-center text-primary transition-all duration-500">
                    <BiCodeBlock
                      size={25}
                      className="group-hover:scale-90 transition-all duration-1000 ease-in-out"
                    />
                  </div>
                  <h4 className=" text-[20px] max-w-[150px] font-extrabold">
                    Powerful backend
                  </h4>
                </div>
              </div>

              <div className="my-5">
                <Link
                  href={"/"}
                  className="relative inline-flex items-center justify-center 
             px-8 sm:px-10 md:px-12.5 py-3 sm:py-4
             bg-primary hover:border-black hover:border-2
             overflow-hidden group cursor-pointer"
                >
                  {/* Animated background */}
                  <span
                    className="absolute top-1/2 left-1/2 
               w-[300%] h-[300%] sm:w-[600%] sm:h-[600%]
               bg-white 
               -translate-x-1/2 -translate-y-1/2 rotate-[-25deg]
               scale-0 group-hover:scale-100 transition-all
                duration-1000 ease-out"
                  ></span>

                  {/* Text */}
                  <span
                    className="relative z-10 
               text-white group-hover:text-primary
               transition-colors duration-300 
               font-bold sm:font-extrabold
               text-sm sm:text-base lg:text-[17px]"
                  >
                    Discover More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* achivemnts section */}
      <section
        className="w-full relative mx-auto max-w-7xl bg-[#eaeaea] dark:bg-[#101010]
  py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 min-h-screen overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 flex items-start justify-center">
          <Image
            alt="award"
            src="/award-bg.png"
            width={645}
            height={165}
            className="w-[80%] sm:w-[70%] md:w-[60%] object-contain"
          />
        </div>

        {/* tablet */}

        <div className="md:flex hidden md:block lg:hidden items-center justify-between gap-5 lg:hidden sm:hidden">
          <div className="flex flex-col gap-5 items-center md:w-1/2">
            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                100+APIs that can connect with your existing infrastructure and
                3rd party apps
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>

            {/* Card 2 */}
            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Deploy on any cloud/on-premise environment
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>

            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Improved customer and employee experience via mobile and web
                apps.
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>

            {/* Card 4 */}
            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Basic to advance machine learning models that fits into a
                different level of data maturity
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>
          </div>

          <div className="">
            <Image
              alt="award"
              src="/award.png"
              width={314}
              height={535}
              className="w-[200px] sm:w-[240px] md:w-[260px] object-contain"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex block md:hidden  flex-col sm:flex-row items-center sm:items-center justify-between gap-10 lg:hidden md:hidden">
          {/* Top Cards */}
          <div className="flex flex-col gap-6 w-full items-center md:items-start md:w-1/2">
            {/* Card 1 */}
            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                100+APIs that can connect with your existing infrastructure and
                3rd party apps
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>

            {/* Card 2 */}
            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Deploy on any cloud/on-premise environment
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>
          </div>

          {/* Center Image */}
          <Image
            alt="award"
            src="/award.png"
            width={314}
            height={535}
            className="w-[200px] sm:w-[240px] md:w-[260px] object-contain"
          />

          {/* Bottom Cards */}
          <div className="flex flex-col gap-6 w-full items-center md:items-start md:w-1/2 md:mt-0">
            {/* Card 3 */}
            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Improved customer and employee experience via mobile and web
                apps.
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>

            {/* Card 4 */}
            <div
              className="bg-black p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Basic to advance machine learning models that fits into a
                different level of data maturity
              </p>
              <img src="/award-icon.png" className="w-6 mt-2.5" />
            </div>
          </div>
        </div>

        {/* Desktop Layout (your original design preserved) */}
        <div
          className="hidden lg:flex absolute top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2 
    w-full max-w-7xl px-12 
    items-center justify-between  lg:block"
        >
          {/* LEFT */}
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="flex flex-col gap-y-10"
          >
            {/* same cards */}
            {/* Card 1 */}
            <div
              className="bg-black group p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                100+APIs that can connect with your existing infrastructure and
                3rd party apps
              </p>
              <img
                src="/award-icon.png"
                className="mt-2.5 group-hover:scale-90 transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Card 2 */}
            <div
              className="bg-black group p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Deploy on any cloud/on-premise environment
              </p>
              <img
                src="/award-icon.png"
                className=" mt-2.5 group-hover:scale-90 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>

          {/* CENTER IMAGE */}

          <div data-aos="fade-up" data-aos-duration="3000" className="award-trophy">
            <Image
              alt="award"
              src="/award.png"
              width={314}
              height={535}
              className="object-contain "
            />
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-up"
            data-aos-duration="4000"
            className="flex flex-col gap-y-10"
          >
            {/* same cards */}
            <div
              className="bg-black group p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Improved customer and employee experience via mobile and web
                apps.
              </p>
              <img
                src="/award-icon.png"
                className=" mt-2.5 group-hover:scale-90 transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Card 4 */}
            <div
              className="bg-black group p-5 max-w-xs flex justify-between items-start"
              style={{ padding: "28px 40px 26px" }}
            >
              <p className="award_title text-white font-bold text-xl sm:text-">
                Basic to advance machine learning models that fits into a
                different level of data maturity
              </p>
              <img
                src="/award-icon.png"
                className=" mt-2.5 group-hover:scale-90 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* clients tesinominal */}
      <HomeReview />

      {/* newsletter section */}
      <section className='bg-white dark:bg-black px-4 sm:px-6 md:px-8 font-plus-jakarta transition-colors duration-500'>
  <div className='flex flex-col items-center text-center max-w-4xl mx-auto'>
    <div className='w-2 h-2 bg-orange-400 rounded-full mb-3'></div>

    <h5 className='text-gray-600 dark:text-white/80 font-medium text-[12px] sm:text-[13px] md:text-[14px] leading-tight mt-1'>
      OUR RECENT NEWS
    </h5>

    <h2 className='text-black dark:text-white font-extrabold text-[28px] sm:text-[36px] md:text-[45px] leading-tight mt-1'>
      Our latest <br className='hidden sm:block' /> News articles
    </h2>
  </div>
</section>

<section  className="bg-white dark:bg-black text-black dark:text-white py-16 px-4 transition-colors duration-500">
  <div className="max-w-6xl mx-auto">
    
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{newsData.map((item,index) => (
  <Link data-aos="fade-right" data-aos-delay={index * 150}   // ✅ stagger effect
    data-aos-duration="500"
    data-aos-once="true"
 key={item.id} href={`/news/${item.slug}`} className="block">
    <div className="group cursor-pointer">

      {/* Image Section */}
      <div className="relative overflow-hidden group/img">
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 translate-y-[-20%] group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>

        {/* Plus Icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-8 h-8 opacity-0 -translate-y-[120%] group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-700 delay-100">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[2px] w-full bg-white"></div>
          </div>
        </div>

        {/* Date Badge */}
        <div className="absolute bottom-4 right-4 bg-white text-black text-xs px-4 py-2 font-medium z-10">
          {item.date}
        </div>
      </div>

      {/* Content */}
      <div className="mt-6">

        {/* Category */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[1px] bg-orange-400"></div>
          <p className="text-gray-600 dark:text-gray-300 hover:text-orange-400 font-medium text-[14px] transition-colors">
            {item.category}
          </p>
        </div>

        {/* Title */}
        <h3 className="text-[24px] font-extrabold leading-[1.4] text-black dark:text-white">
          <span className="inline bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0%_1px] bg-[position:0_100%] transition-all duration-500 group-hover:bg-[length:100%_1px] hover:text-orange-400 [box-decoration-break:clone] [-webkit-box-decoration-break:clone] pb-1 cursor-pointer">
            {item.title}
          </span>
        </h3>

        {/* Divider */}
        <div className="border-b border-gray-200 dark:border-gray-800 my-6"></div>

        {/* Read More */}
        <div className="group/readmore flex w-fit items-center gap-2 font-medium text-[14px] text-gray-600 dark:text-gray-300 cursor-pointer">
          <span className="group-hover/readmore:text-orange-400 transition-colors duration-300">
            Read More
          </span>
          <span className="text-[20px] transition-transform duration-300 group-hover/readmore:-rotate-45 group-hover/readmore:text-orange-400">
            <FiArrowDownRight />
          </span>
        </div>
      </div>

    </div>
  </Link>
))}    </div>

    {/* Button */}
    <div className="flex justify-end mt-12"> <Link href="/news" className="relative bg-[#F6931D] text-white font-bold py-4 px-10 text-[16px] overflow-hidden transition-all duration-500 cursor-pointer group hover:border-black hover:border-2" > <span className="absolute left-1/2 top-1/2 w-[160%] h-0 bg-white -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] transition-all duration-500 group-hover:h-[500%] z-0" ></span> {/* Button Text */} <span className="relative z-10 group-hover:text-orange-400 transition-colors duration-500 "> View All News </span> </Link> </div>

  </div>
</section>

      {/* above footer section */}

      <section
        className=" cta relative bg-[#e3e3e3] w-full h-[40vh] dark:bg-[#010101]"
        style={{ padding: "120px 0px" }}
      >
        <div
          className="cta-bg w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cta-bg-2.jpg')" }}
        ></div>

        <div
          className="flex flex-wrap items-center justify-evenly md:items-start
 w-full h-full"
        >
          {/* Heading */}
          <div className="" data-aos="fade-right">
            <h2
              style={{ letterSpacing: "1.5px" }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] 
      font-extrabold leading-tight max-w-full"
            >
              Looking for best web solutions?
            </h2>
          </div>

          {/* Button */}
          <div className="" data-aos="fade-left">
            <Link
              href={"/"}
              className="relative inline-flex items-center justify-center 
      px-8 sm:px-10 md:px-12.5 py-3 sm:py-4
      bg-primary hover:border-black hover:border
      overflow-hidden group cursor-pointer"
            >
              {/* Animated background */}
              <span
                className="absolute top-1/2 left-1/2 
        w-[300%] h-[300%] sm:w-[600%] sm:h-[600%]
        bg-white 
        -translate-x-1/2 -translate-y-1/2 rotate-[-25deg]
        scale-0 group-hover:scale-100 transition-all
        duration-1000 ease-out"
              ></span>

              {/* Text */}
              <span
                className="relative z-10 
        text-white group-hover:text-primary
        transition-colors duration-300 
        font-bold sm:font-extrabold
        text-sm sm:text-base md:text-[14px] lg:text-[17px]"
              >
                Discover More
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
