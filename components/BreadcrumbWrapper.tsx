"use client";

import { menuItems } from "@/lib/menu";
import { usePathname } from "next/navigation";
import React from "react";
import BannerSection from "./BannerSection";

const formatLabel = (str: string) =>
  str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const BreadcrumbWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const items = [
    { label: "Home", href: "/" },
    ...segments.map((_, index) => {
      const path = "/" + segments.slice(0, index + 1).join("/");

      const match = menuItems.find((item) => item.href === path);
      const label = match?.label || formatLabel(segments[index]);

      return {
        label,
        href: index === segments.length - 1 ? undefined : path,
      };
    }),
  ];

  return <BannerSection items={items} />;
};

export default BreadcrumbWrapper;
