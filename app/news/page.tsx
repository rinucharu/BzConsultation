import React from 'react'
import BreadcrumbWrapper from '@/components/BreadcrumbWrapper'
import Slide from '@/components/NewsLetter/Slide'
import Button from '@/components/NewsLetter/Button'
import Newscard from '@/components/NewsLetter/Card'

const page = () => {
  return (
    <>
      <section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>
      {/*  */}
      <div className="bg-white dark:bg-black py-12 sm:py-16 md:py-2 px-5 lg:px-20 xl:px-32 transition-colors duration-500">
  
  <h2
    className="
      text-center
      text-[32px]
      font-extrabold
      leading-[38.4px]
      tracking-[0.5px]
      text-black dark:text-white
      max-w-[760px]
      mx-auto
      mb-[9px]
    "
  >
    Welcome to Bz Analytics News
  </h2>

  <p
    className="
      text-center
      w-full lg:max-w-[1000px] lg:mx-auto
      text-[15px]
      font-medium
      leading-[28.125px]
      tracking-[0.5px]
      text-gray-600 dark:text-gray-300
      px-0
      py-[25px]
      mt-0 sm:mt-[20px] md:mt-[40px]
    "
  >
    Welcome to the BzAnalytics news page, your source for the latest updates, announcements, 
    <span className="hidden lg:inline">
      <br />
    </span>
    and events related to our company and industry. Stay informed about our newest product
    <br />
    features, company milestones, partnerships, and industry insights.
  </p>
        
        {/* slider */}
         <Slide/>

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
          <Button/>
          {/* card */}
          <Newscard/>
        </div>

</div>
    </>
  )
}

export default page
