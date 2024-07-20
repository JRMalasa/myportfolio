'use client';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link"
import Footer from './Footer';


const Page = () => {


  return (
    <main>
      <div className='flex flex-col min-h-screen'>
    <div className="w-full py-12 md:py-24 lg:py-32 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
            Boost your Productivity 
            </h1>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ">
           Hire me today!
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">Im a full-stack developer with a passion for building beautiful user interfaces.</p>
          </div>
          <div className="space-x-4">
          <Link
      href=""  // Adjust the path accordingly
      className='flex items-center justify-between rounded-md bg-slate-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-sm hover:bg-gray-900 focus-visible:outline-white lg:mb-0 mb-10'
    >
      DOWNLOAD CV <FaArrowRight />
    </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer />
    </main>
  )
}


  
export default Page
