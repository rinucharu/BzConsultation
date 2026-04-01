'use client';

import Image from "next/image";
import {useState } from 'react';
import BreadcrumbWrapper from '@/components/BreadcrumbWrapper';

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

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

     <>
          
                <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>


         <section className="w-full bg-white dark:bg-black py-10 md:py-20 lg:py-[100px] transition-colors duration-300">
      <div className="max-w-[1220px] mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`group relative mb-7 bg-gray-100 dark:bg-[#1E1E1E] rounded-[10px] overflow-hidden 
                           w-full max-w-[400px] md:max-w-full min-h-[400px] md:min-h-[450px] flex flex-col 
                           transition-all duration-300 shadow-lg hover:shadow-2xl shadow-black/10
                           ${isActive ? 'bg-white dark:bg-[#252525]' : 'hover:bg-white dark:hover:bg-[#252525]'}`}
              >
                
                {/* Image Section */}
                <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-400 ease-out translate-y-0 
                               ${isActive ? '-translate-y-10' : 'group-hover:-translate-y-10'}`} 
                  />
                </div>

                {/* Content Section */}
                <div className={`p-6 sm:p-8 flex flex-col flex-1 transition-transform duration-500 ease-out bg-inherit
                                ${isActive ? '-translate-y-6' : 'group-hover:-translate-y-6'}`}>
                  
                  <div className="flex-1">
                    <h3 className="text-black dark:text-white text-lg sm:text-[27px] font-extrabold leading-tight mb-2 md:mb-3">
                      {card.title}
                    </h3>

                    <div className={`transition-all duration-500 transform 
                                    ${isActive 
                                      ? 'opacity-100 translate-y-0' 
                                      : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                      <p className="text-black/70 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {card.desc}
                      </p>
                    </div>
                  </div>

 
<div className="mt-4 md:mt-6">
  <button className="group/btn relative overflow-hidden border-2 border-black/10 dark:border-white bg-black text-white px-5 py-2.5 md:px-6 md:py-3 text-[10px] sm:text-xs font-extrabold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:text-orange-500">
    
    <span className="absolute left-1/2 top-1/2 w-[160%] h-0 bg-white -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] transition-all duration-500 ease-in-out group-hover/btn:h-[500%] z-0"></span>
    
    <span className="relative z-10">
      Know More &gt;&gt;
    </span>

  </button>
</div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-4 bg-inherit z-10" />
              </div>
            );
          })}
        </div>
      </div>

    </section>

     </>
    
  );
};

export default SuccessStories;