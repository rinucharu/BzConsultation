import BreadcrumbWrapper from '@/components/BreadcrumbWrapper'
import ContactFormPage from '@/components/ContactFormPage'
import React from 'react'

const  page= () => {
  return (
    <div><section className="page-header relative consultant min-h-[50vh] sm:min-h-[40vh] md:min-h-[60vh] flex items-center">
        <div className="absolute h-full bg-img inset-0 bg-gray-200 dark:bg-gray-900" />
        <div className="absolute overlay hidden dark:block" />

        <BreadcrumbWrapper />
      </section>
      <section><ContactFormPage /></section>
      
      
      </div>
  )
}

export default page