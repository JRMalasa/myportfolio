'use client';
import React from 'react';
import Footer from '@/app/Footer';
import { FaJava } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiPhp } from "react-icons/si";

import Image from 'next/image';

const page = () => {
 
  return (
    <main>
    <div className="flex flex-col min-h-screen">
    <div className="flex-1 mx-10">
    <section className="md:block sm:block lg:hidden xl:hidden w-full py-12 md:py-24 lg:py-32" id="about">
  <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 md:gap-8 md:px-6 lg:grid-cols-2 text-center xl:max-w-6xl xl:gap-10">
    <div className="space-y-4 md:space-y-6 ">
      
      <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" >
      About Me
    </h2>
        <div className="flex justify-center">
<Image 
src={'/malasa.jpg'} 
alt={'ProfilePicture'} 
className='rounded-full' 
height={'200'}
width={'200'} 
style={{
  aspectRatio:'200/200',
  objectFit:'cover'
 }} />
    </div>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          I am passionate in web development and creating innovative solutions.  I'm open to learning new skills and accepting any challenges programming-related.
I am capable of developing software and have experience of basic web programming.
        </p>
      </div>
    </div>
   
  </div>
</section>

<section className="hidden xl:block lg:block md:hidden sm:hidden w-full py-12 md:py-24 lg:py-32" id="about">
  <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 md:gap-8 md:px-6 lg:grid-cols-2 text-left xl:max-w-6xl xl:gap-10">
    <div className="space-y-4 md:space-y-6 ">
      <div className="space-y-3">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      About Me
    </h2>
        <p className="mx-auto max-w-[700px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        I am passionate in web development and creating innovative solutions. I'm open to learning new skills and accepting any challenges programming-related.
I am capable of developing software and have experience of basic web programming.
        </p>
      </div>
    </div>
    <div className="flex justify-center">
    <Image 
src={'/malasa.jpg'} 
alt={'ProfilePicture'} 
className='rounded-full' 
height={'200'}
width={'200'} 
style={{
  aspectRatio:'200/200',
  objectFit:'cover'
 }} />
    </div>
  </div>
</section>
<div className="bg-white py-16 rounded-lg">
      <div className="container mx-auto px-4 ">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Skills</h2>
       
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold">Java</h3>
            <p className="mt-4 text-7xl text-orange-600 "><FaJava /></p>
           
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
        
            <h3 className="text-xl font-semibold">Java Script</h3>
            <p className="mt-4 text-7xl text-yellow-400 "><BiLogoJavascript /> </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
      
            <h3 className="text-xl font-semibold">Firebase</h3>
            <p className="mt-4 text-7xl text-orange-400 "><IoLogoFirebase /></p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg">
         
            <h3 className="text-xl font-semibold">PHP</h3>
            <p className="mt-4 text-7xl text-slate-700 "><SiPhp /></p>
          </div>
        </div>
      </div>
    </div>
</div>
  </div>
   <Footer />
  </main>
  )
}


  



export default page