"use client"

import { motion } from "framer-motion"
import { Code, GraduationCap } from "lucide-react"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 sm:px-6 lg:px-8 py-10" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">About Me</h2>
        </motion.div>

        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-4xl mx-auto text-center"
          >
            Hey its me Rupesh Thakuri currently of 24 years young. With the growing world of technology I love playing
            with computers which makes me to study BScCSIT which is related to science and information technology. I m
            surely a lazy guy but until I do something that I like. I enjoy playing football, listening music, watching
            dance and playing other sports.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-semibold text-emerald-400">Professional Summary</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with experience in modern web technologies. My journey in tech
              started with an internship at eDIT Enterprises and continued at OM X Enterprise, where I honed my skills
              in both front-end and back-end development. I love creating efficient, scalable, and user-friendly
              applications.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-emerald-400" />
              <h3 className="text-2xl font-semibold text-emerald-400">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium">{`Bachelor's in Science Computer Science and Information Technology`}</h4>
                <p className="text-gray-400">Tribhuwan University</p>
                <p className="text-sm text-gray-500">2020 - 2024</p>
                <p className="text-gray-300 mt-2">Focused on software engineering and web development with sound knowledge of data structures and algorithms and OOP</p>
              </div>
              <div>
                <h4 className="text-xl font-medium">High School In Science</h4>
                <p className="text-gray-400">Himalayan International Model School</p>
                <p className="text-sm text-gray-500">2017 - 2019</p>
                <p className="text-gray-300 mt-2">{`Sound information of physics, chemistry and mathematics. What most intrest me was Computer and it's evolution in the future`}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

