import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log("Menu state:", !isOpen); // Debugging line
  };

  return (
    <nav className="backdrop-blur-md  text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
        <div className="absolute left-5 top-5 text-xl text-white ">oneTake</div>   

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
        <li>
            <Link href="/gameList" className="text-white hover:text-yellow-800">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white hover:text-yellow-800">
              Games
            </Link>
          </li>
        <li>
          <Link href="/services" className='text-white hover:text-yellow-800'>
            Service
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-white hover:text-yellow-800">
            about
          </Link>
        </li>
      
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white transition duration-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white transition duration-500" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden text-center uppercase tracking-tight transition-all duration-500 ease-in-out ${
          isOpen ? 'h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className=" space-y-2  p-1">
          <li>
            <Link href="/" className="block p-5 text-gray-300">
              Games
            </Link>
          </li>
          <li>
            <Link href="/gameList" className="block p-5 text-gray-300">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/services" className="block p-5 text-gray-300">
              Services
            </Link>
          </li>
          <li>
          <Link href="/about">
          about
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
