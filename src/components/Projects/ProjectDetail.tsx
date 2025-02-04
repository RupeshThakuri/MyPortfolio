"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Code, Globe } from "lucide-react"

interface Technology {
  name: string
}

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  technologies: Technology[]
  codeUrl: string
  demoUrl: string
}

function ProjectDetail({
  id,
  title,
  description,
  image,
  technologies,
  codeUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <Link href={`/projects/${id}`} className="block">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">{title}</h3>
          </div>

          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.open(codeUrl, "_blank")
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
              >
                <Code className="w-4 h-4" />
                Code
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  window.open(demoUrl, "_blank")
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Demo
              </button>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  )
}

export default ProjectDetail
