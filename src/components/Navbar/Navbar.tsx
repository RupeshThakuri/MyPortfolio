"use client"

import React, { useState } from 'react';
import { Menu, X, } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Experiences', 'Projects', 'Skills', 'Contact'];

  return (
    <nav className="fixed w-full bg-[#212529] z-50 box_border">
      <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-6 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white transition-colors links_border"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center flex-1 md:flex-none">
            <Image
                src="/Images/Logo/whitelogo.png"
                alt="Logo"
                width={100}
                height={100}
            />
          </div>

          <div>
            <button className="bg-[#24CDD5] text-white px-4 py-2 rounded-md hover:bg-[#3BB78F] transition-colors w-24 md:w-36 lg:w-40">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#212529]"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white hover:text-gray-300 px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;