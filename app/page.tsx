import HomeHero from "@/components/home-hero";
import Home from "@/components/Home";
import "./about/about.css";

const page = () => {
  return (
    <>
      <HomeHero />
      <Home showHero={false} />
    </>
  );
};

export default page;
