"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";

interface ContentItem {
  type: "text" | "image";
  heading?: string;
  subheading?: string;
  text?: string;
  img?: string;
  imgdesc?: string; 
  width?: string;
  height?: string;
}

const pageData = [
  {
    slug: "metaverse-gaming",
    title: "Metaverse and Gaming",
    projects: [
      { 
        num: "01", 
        title: "Digital Twin of Dubai", 
        img: "/dubai2.jpg",
        content: [
          { type: "text", heading: "Digital Twin of Dubai: The Next Phase of the AI Revolution", text: "BzAnalytics has accomplished an incredible feat in digital technology by creating a virtual replica of Dubai, known as the Digital Twin of Dubai. BzAnalytics has transformed how users explore and learn about the iconic city by leveraging cutting-edge technology and innovative ideas. Let's delve deeper into the project and see how BzAnalytics turned data into immersive experiences." },
          { type: "text", subheading: "Objective: Replicating the Real-World Dubai", text: "The Dubai Government desired a virtual environment to simulate real-world Dubai for immersive exploration and interaction. BzAnalytics accepted the challenge and created the Digital Twin of Dubai to provide users with an authentic and visually stunning experience." },
          { type: "text", subheading: "Realistic Representation of Dubai", text: "BzAnalytics has meticulously recreated Dubai's iconic landmarks, infrastructure, and cityscape in virtual reality. Users can explore the city in detail and learn about Dubai's rich culture and heritage. The realistic representation was achieved through advanced technologies, which made the virtual environment nearly identical to the real-world city." },
          { type: "text", subheading: "Interactive Elements with the Monoverse and Decentraland", text: "BzAnalytics used the capabilities of Monoverse and Decentraland to incorporate interactive elements into Dubai's Digital Twin. Users can learn about the city by taking virtual tours, accessing historical information, and integrating real-time data. The interactive elements provide users a complete experience while making the virtual environment more engaging and informative." },
          { type: "text", subheading: "Community Engagement", text: "BzAnalytics has created a thriving virtual community within the Digital Twin of Dubai. Users can interact, socialize, and collaborate to improve their knowledge of the city. The platform enables virtual events, conferences, and exhibitions, increasing user engagement and knowledge sharing." },
          { type: "image", img: "/dubai3.jpg" }, 
          { type: "text", imgdesc: "Discover BzAnalytics' groundbreaking achievement with the Digital Twin of Dubai. Immerse yourself in an unparalleled digital experience in which data is brought to life most realistically. With interactive elements and community engagement, the project has already established a new standard for virtual environments. This innovative project has created limitless possibilities for technological advancement and paved the way for future digital transformation. Join us on this incredible journey to discover the limitless potential of data and technology!" },
        ]
      },
      { 
        num: "02", 
        title: "BzNFTMart", 
        img: "/bzmart.jpg",
        content: [
          { type: "text", heading: "Promoting Decentralization: BzNFTMart's Peer-to-Peer Marketplace for NFTs", text: "The introduction of blockchain technology has dramatically impacted the gaming industry. BzNFTMart is a new decentralized marketplace that intends to capitalize on this trend by providing a secure and user-friendly platform for gamers, developers, and collectors to exchange non-fungible tokens (NFTs) associated with their favourite games. Here, we look into the technical architecture of BzNFTMart, highlighting its essential features and benefits." },
          { type: "text", subheading: "1.BzNFTMart Architecture", text: "BzNFTMart is built with Next.js, Solidity, and Node.js, three powerful technologies that work together to create a reliable, scalable, and secure platform. Let's take a closer look at each of these technologies." },
          
        ]
      }
    ]
  },
  {
    slug: "energy",
    title: "Energy And Manufacturing",
    projects: [
      { 
        num: "01", 
        title: "Inventory Analytics", 
        img: "/inventory.jpg",
        content: [
          { type: "text", heading: "Optimizing Supply Chains", text: "Our analytics tool provides real-time data..." }
        ]
      }
    ]
  }
];

export default function ProjectDetailPage() {
  const { slug, projectslug } = useParams();
  const router = useRouter();

  const industry = pageData.find((ind) => ind.slug === slug);
  const project = industry?.projects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === projectslug);

  if (!project) return <div className="bg-black h-screen text-white flex items-center justify-center">Project Not Found</div>;

  return (
    <>
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />
        <BreadcrumbWrapper />
      </section>

      <main className="bg-white dark:bg-black">
      <section className="relative w-full min-h-full flex flex-col items-center justify-center overflow-hidden pt-20  bg-white dark:bg-black">
        <div className="mt-8">
           <img src={project.img} className="w-full h-full min-w-[1150px] max-h-[850px]" alt="" />
       </div>
      </section>



      <section className="max-w-6xl mx-auto px-2 py-8">
        {project.content?.map((item, index) => {
          
          if (item.type === "text") {
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={index} 
                className="mb-8"
              >

                {item.subheading && (
                  <span className="text-black dark:text-white text-[30px] font-extrabold leading-relaxed  mb-8 block">
                    {item.subheading}
                  </span>
                )}

                  <span className="text-black/50 dark:text-white/90 font-medium md:text-[16px] max-w-7xl leading-relaxed">
                    {item.imgdesc}
                  </span>


                <h2 className="text-3xl md:text-[40px] font-extrabold mb-3 text-black dark:text-white">{item.heading}</h2>
                <p className="text-black/50 dark:text-white/90 font-medium md:text-[16px] max-w-7xl leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          }

          if (item.type === "image") {
            return (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                key={index}
                className="w-full mb-1 overflow-hidden shadow-2xl"
              >
                <img src={item.img} alt="Project section" className="w-[950px] h-[703px] object-cover" />
              </motion.div>
            );
          }

          return null;
        })}
      </section>

      <section className="max-w-7xl mx-auto px-17 pb-32 mt-10">
        <div className="flex justify-between items-center border-t border-black dark:border-white/10 py-8  mb-20 border-b">
          <button onClick={() => router.back()} className="flex items-center gap-4 group text-lg font-bold cursor-pointer">
            <div className="p-4 rounded-full bg-[#101010] group-hover:bg-[#F5900D] group-hover:border-[#F5900D] transition-all">
              <ChevronLeft />
            </div>
            <span>Previous</span>
          </button>
          
          <button className="flex items-center gap-4 group text-lg font-bold">
            <span>Next</span>
            <div className="p-4 rounded-full bg-[#101010]  group-hover:bg-[#F5900D] group-hover:border-[#F5900D] transition-all">
              <ChevronRight />
            </div>
          </button>
        </div>

        <div className="text-center mb-2">
          <div className="w-2 h-2 bg-[#F5900D] rounded-full mx-auto mb-4" />
          <p className="uppercase text-[14px] text-black/50 dark:text-[#EAEAEA] mb-2 font-medium">Our Work Showcase</p>
          <h2 className="text-4xl md:text-[45px] font-extrabold">Explore similar portfolio<br/>you might like it</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 p-12">
          {[
            { name: "AI Sustainability", img: "/turf.jpg" },
            { name: "Minecraft Game", img: "/minecraft.jpg" },
            { name: "AI Medical Imaging", img: "/medical.jpg" }
          ].map((item, i) => (
            <motion.div whileHover={{ y: -10 }} key={i} className="group cursor-pointer">
              <div className=" w-full h-[350px] overflow-hidden">
                <img src={item.img} className="w-full h-full  object-cover" alt={item.name} />
              </div>
              <h4 className="text-3xl text-white font-black">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>
      </main>
    </>
  );
}