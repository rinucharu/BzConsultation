import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import Home from "@/components/Home";
import HomeReview from "@/components/about/HomeReview";
import "./about/about.css";

import React from "react";

const page = () => {
  return (
    <>
      <Home />
      <HomeReview />
    </>
  );
};

export default page;
