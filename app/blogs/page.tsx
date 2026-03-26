import Slide from "@/components/Blog/Slide";
import BreadcrumbWrapper from "@/components/BreadcrumbWrapper";
import Button from "@/components/Blog/Button";
import Card from "@/components/Blog/Card";

const page = () => {
  return (
    <>
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>
      {/*  */}
      <div className="py-12 sm:py-16 md:py-20 px-5 lg:px-20 xl:px-32">
        <h2
          className="
    text-center
    text-[32px]
    font-extrabold
    leading-[38.4px]
    tracking-[0.5px]
    
    max-w-[760px]
    mx-auto
    mb-[9px]
  "
        >
          Welcome to Bz Analytics Blogs
        </h2>

        <p
          className="
    text-center
    w-full lg:max-w-[1000px] lg:mx-auto
    text-[15px]
    font-medium
    leading-[28.125px]
    tracking-[0.5px]
    px-0
    py-[25px]
    mt-0 sm:mt-[20px] md:mt-[40px]
  "
        >
          Welcome to BzAnalytics blogs, where we share in-depth articles, case
          studies, and insights on
          <span className="hidden lg:inline">
            <br />
          </span>
          data analytics, business intelligence, and industry trends. Our blog
          is designed to help you stay
          <span className="hidden lg:inline">
            <br />
          </span>
          informed and enhance your knowledge with expert advice and analysis.
        </p>
        {/* slider */}
        <Slide />
        {/* categories */}
        <div className="">
          <h1
            className="
    text-[36px]
    font-semibold
    leading-[43.2px]
    tracking-[0.5px]
    
    mb-[8px]
    mt-[20px]
  "
          >
            Categories
          </h1>
          {/* 5 button */}
          <Button />
          {/* card */}
          <Card />
        </div>
      </div>
    </>
  );
};

export default page;
