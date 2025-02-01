"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "About", "Experiences", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed w-full bg-[#212529] z-50 box_border">
      <div className="max-w-7xl mx-auto p-2 sm:p-4 lg:p-6">
        <div className="flex items-center justify-around h-16">
          {/* Mobile Menu Toggle Button */}
          <div className="flex-shrink-0 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Menu Items */}
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

          {/* Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-none">
            <Image src="/Images/Logo/whitelogo.png" alt="Logo" width={100} height={100} />
          </div>

          {/* Download CV Button (Visible on Medium and Larger Devices) */}
          <div className="hidden md:block">
            <button className="bg-[#24CDD5] text-white px-4 py-2 rounded-md hover:bg-[#3BB78F] transition-colors w-fit md:w-36 lg:w-40">
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-[#212529]"
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {/* Mobile Menu Items */}
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white hover:text-gray-300 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Download CV Button (Visible in Mobile Menu) */}
          <div className="px-3">
            <button className="bg-[#24CDD5] text-white px-4 py-2 rounded-md hover:bg-[#3BB78F] transition-colors w-full">
              Download CV
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;