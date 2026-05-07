"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

type BreadcrumbItemType = {
  label: string;
  href: string | undefined;
};

type Props = {
  items: BreadcrumbItemType[];
};

const BannerSection: React.FC<Props> = ({ items }) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const isBlogDetail =
    segments.length === 2 && segments[0] === "blogs";

  return (
    <div className="relative z-10 max-w-6xl mx-auto w-full space-y-4 px-[15px]">
      
      {/* ✅ Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink
                    asChild
                    className="text-black dark:text-white text-[16px] font-medium hover:text-primary transition"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-black dark:text-white text-sm md:text-lg font-medium">
                    {item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>

              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* ✅ Title */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-black dark:text-white">
        {isBlogDetail ? "Blog Details" : items[items.length - 1]?.label}
      </h1>
    </div>
  );
};

export default BannerSection;