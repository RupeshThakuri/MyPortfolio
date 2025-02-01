import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* logo */}
          <div className="logo">
            <Image
              src="/Images/Logo/whitelogo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Copyright Text */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rupesh Thakuri. All rights reserved.
          </p>

          {/* Social Icons and Download CV Button */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-600 hover:text-[#212529] dark:text-gray-400 dark:hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#212529] dark:text-gray-400 dark:hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-[#212529] dark:text-gray-400 dark:hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>

            {/* Download CV Button */}
            <button className="bg-[#24CDD5] text-white px-4 py-2 rounded-md hover:bg-[#3BB78F] transition-colors w-30 md:w-40 lg:w-44">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}