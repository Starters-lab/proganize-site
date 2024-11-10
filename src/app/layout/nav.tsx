"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LogoDark from "../../../public/proganize-dark-side.svg";

export default function Heading() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`px-4 py-4 lg:px-6 justify-between flex flex-col items-center sticky top-0 bg-white z-10 transition-max-height duration-300 overflow-hidden ${
        isMenuOpen ? "max-h-96" : "max-h-16"
      }`}
    >
      <div className='flex w-full'>
        <div className='flex items-center justify-between w-full'>
          <Link className='flex items-center' href='#'>
            <Image src={LogoDark} alt='Proganize dark' />
          </Link>
          <button
            className='lg:hidden block text-primary'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
        <nav
          className={`hidden w-full lg:flex ml-auto flex-col lg:flex-row gap-4 sm:gap-6 transition-transform duration-300 ease-in-out`}
        >
          <Link
            className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
            href='#howitworks'
          >
            How it Works
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
            href='#pricing'
          >
            Pricing
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
            href='#faq'
          >
            FAQ
          </Link>
        </nav>
        <div className='hidden lg:block'>
          <Button
            className='bg-primary text-primary-foreground'
            variant='default'
          >
            Go to dashboard
          </Button>
        </div>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden flex ml-auto flex-col mt-10 mb-4 w-full gap-4 sm:gap-6 transition-transform duration-300 ease-in-out`}
      >
        <Link
          className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
          href='#howitworks'
        >
          How it Works
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
          href='#pricing'
        >
          Pricing
        </Link>
        <Link
          className='text-sm font-medium hover:underline underline-offset-4 transform hover:scale-105 transition-transform duration-200'
          href='#faq'
        >
          FAQ
        </Link>
      </nav>
    </header>
  );
}
