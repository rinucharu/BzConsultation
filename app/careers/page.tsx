import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import Contact from "@/components/Contact";
import React from "react";

const page = () => {
  return (
    <div className='bg-black'>
         <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>
      
      <div className="bg-black text-white px-6 py-16 sm:py-10 text-center sm:mt-0 md:-mt-10 md:mb-12">
 
        <div className="flex justify-center mt-10 sm:mt-16 ">
          <span className="w-2 h-2 -mt-5 bg-orange-400 rounded-full text-2xl"></span>
        </div>

        <p className="uppercase text-xs sm:text-sm md:text-sm mb-2">
          CONTACT WITH BZ
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[46px] font-extrabold leading-12 mb-[50px]">
          Join Bz Team!
        </h1>

        <button className="bg-orange-400 px-[42px] py-[15px] text-[14px] md:text-[15px] font-semibold relative overflow-hidden group transition">
          <span
            className="absolute top-1/2 left-1/2 w-[400%] h-[400%] bg-white 
            -translate-x-1/2 -translate-y-1/2 rotate-45 
            scale-0 group-hover:scale-100 
            transition-transform duration-500 ease-out"
          ></span>

          <span className="relative z-10 group-hover:text-orange-500 transition-colors duration-300">
            Apply Now!
          </span>
        </button>
      </div>

      <Contact />
    </div>
  );
};

export default page;
