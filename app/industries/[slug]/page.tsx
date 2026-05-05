"use client";

import React, { useState } from "react";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";
import { useTheme } from "next-themes";


const pageData = [
  { id: 1, slug: "metaverse-gaming", title: "Metaverse and Gaming", img: "/single1.jpg",
    projects: [
      { num: "01", title: "Digital Twin of Dubai", img: "/dubai.jpg" },
      { num: "02", title: "BzNFTMart", img: "/bzmart.jpg" },
      { num: "03", title: "Minecraft Game", img: "/minecraft.jpg" },
      { num: "04", title: "Treasure Hunt Game", img: "/hunt.jpg" },
      { num: "05", title: "Virtual Hub", img: "/virtual.jpg" },
      { num: "06", title: "Augmented Reality", img: "/aureality.jpg" },
    ] },
  { id: 2, slug: "energy", title: "Energy And Manufacturing", img: "/single2.jpg",
    projects: [
      { num: "01", title: "Inventory Analytics", img: "/inventory.jpg" },
      { num: "02", title: "Scraping Tool", img: "/scrapingtool.jpg" },
    ]
   },
  { id: 3, slug: "sdg", title: "SDG", img: "/single3.jpg",
    projects: [
      { num: "01", title: "Water Management", img: "/water.jpg" },
    ]
   },
  { id: 4, slug: "healthcare", title: "Healthcare", img: "/single4.jpg",
    projects: [
      { num: "01", title: "AI Medical Imaging", img: "/medical.jpg" },
      { num: "02", title: "Diagnostic Deep Learning", img: "/medi2.jpg" },
      { num: "03", title: "Medical Data Analytics", img: "/medi3.jpg" },
    ]
   },
  { id: 5, slug: "textile", title: "Textile", img: "/img5.jpg",
        projects: [
      { num: "01", title: "AI Stylist", img: "/aistyle.jpg" },
    ]
   },
  { id: 6, slug: "corporate", title: "Corporate", img: "/img6.jpg",
        projects: [
      { num: "01", title: "Store Analytics", img: "/store.jpg" },
      { num: "02", title: "BZ Tool", img: "/bztool.jpg" },
    ]
   },
  { id: 7, slug: "advertising", title: "Advertising", img: "/img7.jpg",
        projects: [
      { num: "01", title: "Synergy in Web Design", img: "/bztool.jpg" },
    ]
   },
  { id: 8, slug: "psu", title: "PSU", img: "/img8.jpg",
        projects: [
      { num: "01", title: "AI Cognitive Services", img: "/feedback.jpg" },
      { num: "02", title: "Tech Background Check", img: "/techbg.jpg" },
    ]
   },
  { id: 9, slug: "finance", title: "Finance", img: "/img9.jpg",
        projects: [
      { num: "01", title: "BZ Bot", img: "/bzbot.jpg" },
    ]
  },
];

export default function SucessPage() {
  const { slug } = useParams();
  const router = useRouter();

  const { theme } = useTheme();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX + 20);
    cursorY.set(e.clientY + 20);
  };

  const currentIndex = pageData.findIndex((b) => b.slug === slug);
  const story = pageData[currentIndex];

  if (!story) {
    return <div className="text-white text-center py-20">Works not found</div>;
  }

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % pageData.length;
    router.push(`/industries/${pageData[nextIndex].slug}`);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + pageData.length) % pageData.length;
    router.push(`/industries/${pageData[prevIndex].slug}`);
  };

  return (
    <>
      {/* Header Section */}
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />
        <BreadcrumbWrapper />
      </section>

      {/* Slider Section */}
      <section className="relative flex items-center justify-center py-20 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white min-h-[600px]">
        <button onClick={goToPrev} className="absolute left-4 md:left-30 z-20 cursor-pointer">
          <ChevronLeft size={64} strokeWidth={1.5} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={story.slug}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center w-full max-w-[1400px] mx-auto"
          >
            <div className="md:col-span-6 flex justify-center md:justify-end">
              <div className="overflow-hidden shadow-2xl">
                <img 
                  src={story.img} 
                  alt={story.title} 
                  className="w-[560px] h-[339px] object-cover "
                />
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <h2 className="text-6xl font-extrabold font-black leading-tight text-center max-w-[500px]">
                {story.title}
              </h2>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={goToNext} className="absolute right-4 md:right-30 z-20 cursor-pointer">
          <ChevronRight size={64} strokeWidth={1.5} />
        </button>
      </section>

      {/* Full Width Project Showcase Section */}
      <section className="w-full bg-white dark:bg-black mt-[-80]"> 
        <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl py-20 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-10">
            <div className="flex flex-col gap-y-2">
              <RxDotFilled size={24} className="text-primary" />
              <p className="uppercase text-sm font-semibold text-black/70 dark:text-white/90">
                {story.slug} Projects Showcase
              </p>
              <h2 className="text-3xl md:text-[45px] font-extrabold leading-tight min-w-[700px] text-black dark:text-white">
                Explore our {story.title.replace("-", " ")} projects
              </h2>
            </div>

            <div className="flex lg:justify-end">
    <div className="flex justify-end mt-12"> <Link href="/portfolio" className="relative bg-[#101010] text-white font-bold py-5 px-12 text-[16px] overflow-hidden transition-all duration-500 cursor-pointer group hover:border-black hover:border-2" > <span className="absolute left-1/2 top-1/2 w-[160%] h-0 bg-white -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] transition-all duration-500 group-hover:h-[500%] z-0" ></span> <span className="relative z-10 group-hover:text-orange-400 transition-colors duration-500 "> View All Work </span> </Link> </div>
            </div>
          </div>

          {/* Hover List Items */}
          <div className="flex flex-col hidden md:block">
  <div className="border-b border-black  dark:border-white/10"></div>
  {story.projects?.map((item, index) => {
              
              const projectSlug = item.title.toLowerCase().replace(/ /g, "-");
              const projectUrl = `/industries/${slug}/${projectSlug}`;

              return (
                <div
                  key={item.num}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => router.push(projectUrl)}
                  className="flex justify-between items-center py-8 border-b border-black  dark:border-white/10 group cursor-pointer relative"
                >
                  <div className="flex items-center gap-x-16 relative z-20 text-black dark:text-white">
                    <span 
  className="text-5xl md:text-7xl font-black transition-all duration-300"
  style={{
    color: hoveredIndex === index ? '#F5900D' : 'transparent',
    WebkitTextStroke: hoveredIndex === index
      ? '1.5px #F5900D'
      : `1.5px ${theme === 'dark' ? 'white' : 'black'}`,
  }}
>
  {item.num}
</span>
                    
                    <div className="relative">
                      <h3 className="text-2xl font-extrabold">{item.title}</h3>
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black dark:bg-white transition-all duration-200 group-hover:w-full" />
                    </div>
                  </div>
                  
                  <button className="relative z-20 p-4 rounded-full transition-transform duration-600 cursor-pointer group-hover:text-black group-hover:-rotate-45 dark:bg-white bg-white text-black  dark:text-black">
                    <FiArrowDownRight size={60} />
                  </button>

                  <motion.div
                    style={{
                      x: smoothX,
                      y: smoothY,
                      translateX: '-50%',
                      translateY: '-50%',
                      rotate: '5deg',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                    }}
                    className="project-img pointer-events-none w-80 h-52 overflow-hidden opacity-0 scale-75 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 z-10 shadow-2xl"
                  >
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </motion.div>
                </div>
              );
            })}
</div>
        </div>
      </section>
    </>
  );
}