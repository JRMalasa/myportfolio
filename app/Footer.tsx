import React from 'react';
import Link from 'next/link'
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 py-12 px-4 md:px-6 mt-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
      <div className="flex flex-col items-center md:items-start">
        <Link href="#">
        <Image
  className="h-10 w-10 rounded-full text-slate-400"
  src={'/jrmlogo.png'}
  alt={'logo'}
  width={24}
  height={24} />
          <span className="sr-only">Your Company Name</span>
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <p className="text-sm text-gray-500 dark:text-gray-400">San Francisco Binan, Laguna</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">+63 9925342414</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">bertangelo21@gmail.com</p>
      </div>
      <div className="flex flex-row justify-center md:justify-start space-x-4">
        <Link className="text-gray-500 dark:text-gray-400" href="https://www.facebook.com/johnrobertangelo21">
          <IoLogoFacebook  className="h-6 w-6" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="#">
          <FaThreads className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link className="text-gray-500 dark:text-gray-400" href="https://www.instagram.com/bertangelo14/">
          <FaInstagram className="h-6 w-6" />
          <span className="sr-only">Instagram</span>
        </Link>
      </div>
      <div className="flex flex-col items-center md:items-start space-y-2">
        <Link className="text-sm text-gray-500 dark:text-gray-400 hover:underline" href="#">
          Terms of Service
        </Link>
        <Link className="text-sm text-gray-500 dark:text-gray-400 hover:underline" href="#">
          Privacy Policy
        </Link>
        <Link className="text-sm text-gray-500 dark:text-gray-400 hover:underline" href="#">
          About Me
        </Link>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
      © 2024 My Portfolio. All Rights Reserved.
    </div>
  </footer>
  );
};

export default Footer;
