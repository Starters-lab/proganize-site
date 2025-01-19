"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import LogoDark from "../../../public/proganize-dark-side.svg";
import { ChevronDown } from "lucide-react";

export default function Heading() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isFeaturesCardVisible, setIsFeaturesCardVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 bg-gray-100 ${
        hasScrolled ? "border-b" : ""
      } z-50`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link className='flex items-center' href='/#'>
            <Image src={LogoDark} alt='Proganize' className='h-8 w-auto' />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8 relative'>
            <div
              onMouseLeave={() => setIsFeaturesCardVisible(false)}
              className={`absolute top-full w-full left-0 mt-2 bg-[#2A5F5E] rounded-md transition-all duration-300 ease-in-out transform ${
                isFeaturesCardVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <ul className='p-4'>
                <li className='p-2 transition-all duration-300 ease-in-out text-white hover:text-black hover:bg-gray-100 cursor-pointer'>
                  <Link href={"/pdf"}>Chat with PDF</Link>
                </li>
                <li className='p-2 transition-all duration-300 ease-in-out text-white  hover:text-black hover:bg-gray-100 cursor-pointer'>
                  <Link href={"/flashcard-generator"}>Flashcard Generator</Link>
                </li>
                <li className='p-2 transition-all duration-300 ease-in-out text-white  hover:text-black hover:bg-gray-100 cursor-pointer'>
                  <Link href={"/quiz-generator"}>Quiz Generator</Link>
                </li>
                <li className='p-2 transition-all duration-300 ease-in-out text-white hover:text-black hover:bg-gray-100 cursor-pointer'>
                  <Link href={"/ai-examiner"}>Ai Examiner</Link>
                </li>
              </ul>
            </div>
            <Link
              href='#'
              onMouseEnter={() => setIsFeaturesCardVisible(true)}
              className='text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2'
            >
              Features
              <ChevronDown size={14} />
            </Link>

            <Link
              href='/blog'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Blog
            </Link>
            <Link
              href='#pricing'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Pricing
            </Link>
            <Link href={`${process.env.APP_URL}`}>
              <Button className='bg-[#2A5F5E] text-white hover:bg-[#234c4b]'>
                Get Started
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden rounded-md p-2 text-gray-600 hover:text-gray-900'
          >
            <svg
              className='h-6 w-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed w-full bg-white transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 h-screen"
            : "opacity-0 -translate-y-2 pointer-events-none h-0"
        }`}
      >
        <div className='px-4 pt-6 pb-3 space-y-4'>
          <Link
            href='/features'
            className='block px-3 py-3 text-gray-600 hover:text-gray-900 text-lg'
          >
            Features
          </Link>
          <Link
            href='/blog'
            className='block px-3 py-3 text-gray-600 hover:text-gray-900 text-lg'
          >
            Blog
          </Link>
          <Link
            href='/pricing'
            className='block px-3 py-3 text-gray-600 hover:text-gray-900 text-lg'
          >
            Pricing
          </Link>
          <Link href={`${process.env.APP_URL}`} className='block px-3 py-3'>
            <Button className='w-full bg-[#2A5F5E] text-white hover:bg-[#234c4b] py-6'>
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
