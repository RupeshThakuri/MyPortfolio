'use client'

import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';
import { TypeAnimation } from "react-type-animation"
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white relative overflow-hidden pt-4 sm:pt-6 lg:pt-8">
      <div className="max-w-7xl mx-auto pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 md:pt-16 lg:pt-20 ">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-emerald-400 text-black font-medium">
                Hello
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              Rupesh Thakuri
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl sm:text-3xl text-emerald-400"
            >
              <div className="h-[60px] text-xl text-emerald-400 sm:text-2xl md:text-3xl">
                I am a {""}
                <TypeAnimation
                  sequence={[
                    "Front End Developer",
                    2000,
                    "Backend Developer",
                    2000,
                    "SEO Specialist",
                    2000,
                    "Programmer",
                    2000,
                    "DSA Expert",
                    2000,
                    "Network Engineer",
                    2000,
                  ]}
                  repeat={Number.POSITIVE_INFINITY}
                  cursor={true}
                />
              </div>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <Link href="mailto:rupeshthakri16@gmail.com" className="hover:text-emerald-400 transition-colors">
                  rupeshthakri16@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <Link href="tel:+977 9818631886" className="hover:text-emerald-400 transition-colors">
                  +977 9818631886
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-white hover:text-emerald-400 transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden max-w-[350px] mx-auto">
              <Image
                src="/Images/Profile/profile.jpg"
                alt="Profile"
                width={350}
                height={350}
                className="object-cover w-full h-full img_border rounded-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
