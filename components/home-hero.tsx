"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Slide = {
  img: string;
  title: string;
  subtitle: string;
  btn: string;
  href: string;
};

const homeSlides: Slide[] = [
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

export default function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === homeSlides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="">
      <div className="relative w-full h-[calc(110vh-80px)] min-h-[100vh] overflow-hidden">
        <div
          className="slide absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url(${homeSlides[currentIndex].img})`,
            backgroundPosition: "center top",
          }}
          aria-label={homeSlides[currentIndex].title}
        />

        <div className="absolute inset-0">
          <div className="relative mx-auto h-full max-w-7xl">
            <div className="absolute left-0 md:left-50 inset-0 flex flex-col justify-center items-start gap-3 px-4">
            <h6
              style={{ textShadow: "2px 2px 4px rgba(0 ,0 ,0 ,0.6)" }}
              className="text-[1.5rem] md:text-4xl font-bold text-white"
            >
              {homeSlides[currentIndex].title}
            </h6>

            <p className="mt-4 text-sm p-lead lead sm:text-lg md:text-xl inline-block md:min-w-full w-60 text-white">
              {homeSlides[currentIndex].subtitle}
            </p>

            <Link
              href={homeSlides[currentIndex].href}
              className="relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-primary hover:border-black hover:border-2 overflow-hidden group cursor-pointer"
            >
              <span className="absolute top-1/2 left-1/2 w-[300%] h-[300%] sm:w-[600%] sm:h-[600%] bg-white -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-white group-hover:text-primary transition-colors duration-300 font-bold sm:font-extrabold text-sm sm:text-base lg:text-[17px]">
                {homeSlides[currentIndex].btn}
              </span>
            </Link>
          </div>
          </div>

          <div className="absolute right-[70px] top-[40%] z-20 flex -translate-y-1/2 flex-col gap-3 p-0">
            {homeSlides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`lg:text-3xl text-lg cursor-pointer w-7 h-7 rounded-full border-4 hover:text-white hover:bg-white ${
                  currentIndex === slideIndex
                    ? "text-white bg-white border-white"
                    : "border-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
