"use client";

import Image from "next/image";

const locations = [
  {
    id: 1,
    country: "India",
    flag: "/india.png",
    address: [
      "International Solution for Free and Open Source",
      "Software ICFOSS, Karyavattom,",
      "Thiruvananthapuram",
    ],
    email: "hello@bzanalytics.ai",
    phones: ["+91 999 5285 233", "+91 974 570 7677"],
  },
  {
    id: 2,
    country: "UAE",
    flag: "/uae.png",
    address: [
      "Office# 1703, 17th Floor, Musalla Towers,",
      "Near Burjuman Metro Station, Dubai,",
      "United Arab Emirates.",
    ],
    email: "hello@bzanalytics.ai",
    phones: ["+971 50 16 623 12", "+971 50 11 362 66"],
  },
];

export default function ContactLocations() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-[68rem] mx-auto px-4 sm:px-6">
        <div
          className="border border-black 
                        dark:bg-[#101010]/80
                        p-6 sm:p-8 md:p-12 
                        grid grid-cols-1 md:grid-cols-2 
                        gap-12 md:gap-20 
                       transition-colors duration-300"
        >
          {locations.map((location) => (
            <div
              key={location.id}
              className="flex flex-row sm:flex-row gap-4
                         text-start sm:text-left 
                         items-start sm:items-start"
            >
              {/* Flag */}
              <div
                className="w-21 h-21 rounded-full 
                              bg-black 
                              flex items-center justify-center shrink-0 transition-colors"
              >
                <Image
                  src={location.flag}
                  alt={location.country}
                  width={62}
                  height={62}
                  className="rounded-full"
                />
              </div>

              {/* Content */}
              <div className="font-normal  text-gray-800 dark:text-gray-200 transition-colors space-y-1">
                <h3
                  className="text-base font-bold sm:text-base  mb-3 
                               text-black dark:text-white"
                >
                  {location.country}
                </h3>

                {location.address.map((line, index) => (
                  <p className="text-sm font-semibold" key={index}>
                    {line}
                  </p>
                ))}

                <p className="mt-3 mb-1">{location.email}</p>

                {location.phones.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
