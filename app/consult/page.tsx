import ConsultationForm from "@/components/ConsultationForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "animate.css";
import { GoDotFill } from "react-icons/go";
import BannerSection from "@/components/BannerSection";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import ContactLocations from "@/components/Contact";

const page = () => {
  return (
    <>
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>

      {/* INTRO SECTION */}

      <section className="mt-0 px-4 intro bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto text-center space-y-1">
          {/* Dot */}
          <div className="flex justify-center text-primary text-sm">
            <GoDotFill />
          </div>

          {/* Subtitle */}
          <h4 className="text-muted-foreground text-sm md:text-lg font-semibold tracking-wider">
            CONSULT WITH BZ
          </h4>

          {/* Title */}
          <h2 className=" font-bold dark:text-white">
            Find a time to chat with Bz team
          </h2>

          {/* Description */}
          <p style={{letterSpacing:"0.5px",lineHeight:"30px"}} className="text-[16px] p-2 md:text-base text-black dark:text-gray-300 font-medium px-2 md:px-0">
            We’re ready to become your personal guide through the software
            experience as we bring your app or website to life. Use the form
            below to pick a time that works best for you, and we'll jump on a
            15-minute Google Meet discovery chat.
          </p>
        </div>
      </section>

      {/* forms */}
      <ConsultationForm />
      <ContactLocations />
    </>
  );
};

export default page;
