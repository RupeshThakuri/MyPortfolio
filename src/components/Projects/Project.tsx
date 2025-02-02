"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "project-1",
    title: "Project 1",
    description: "A brief description of project 1",
    image: "/placeholder.svg",
    tags: ["React", "Next.js", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-2",
    title: "Project 2",
    description: "A brief description of project 2",
    image: "/placeholder.svg",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: "project-3",
    title: "Project 3",
    description: "A brief description of project 3",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="container py-16 px-10 box_border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="relative aspect-video">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="mb-2 text-2xl font-bold tracking-tight text-[#3bb78f]">
                  {project.title}
                </p>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{project.description}</p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#212529]/10 px-3 py-1 text-xs text-[#212529] dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg border border-[#212529] px-3 py-2 text-center text-sm font-medium text-[#212529] hover:bg-[#212529] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#212529]/50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg bg-[#212529] px-3 py-2 text-center text-sm font-medium text-white hover:bg-[#212529]/90 focus:outline-none focus:ring-4 focus:ring-[#212529]/50 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-[#212529] hover:underline dark:text-gray-400"
                  >
                    Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

