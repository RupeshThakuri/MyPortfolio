"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Globe } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or API
const projects = [
  {
    id: "project-1",
    title: "Project 1",
    description: "A comprehensive description of Project 1.",
    image: "/placeholder.svg",
    tags: ["React", "Next.js", "Tailwind"],
    github: "#",
    demo: "#",
    details: [
      "Implemented responsive design using Tailwind CSS",
      "Utilized Next.js for server-side rendering and improved SEO",
      "Integrated with a RESTful API for dynamic data fetching",
      "Implemented user authentication and authorization",
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "project-2",
    title: "Project 2",
    description: "A comprehensive description of Project 2.",
    image: "/placeholder.svg",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "#",
    demo: "#",
    details: [
      "Developed a RESTful API using Node.js and Express",
      "Implemented database operations with MongoDB and Mongoose",
      "Created user authentication system with JWT",
      "Deployed the application on Heroku",
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "project-3",
    title: "Project 3",
    description: "A comprehensive description of Project 3.",
    image: "/placeholder.svg",
    tags: ["React", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
    details: [
      "Built a real-time application using React and Firebase",
      "Implemented user authentication with Firebase Auth",
      "Utilized Firestore for real-time database operations",
      "Designed responsive UI with Tailwind CSS",
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
]

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return <div className="container py-24">Project not found</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container py-24"
    >
      <Link href="/#projects" className="text-[#212529] hover:underline mb-4 inline-block">
        &larr; Back to Projects
      </Link>
      <div className="space-y-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#212529]">{project.title}</h1>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#212529]/10 px-3 py-1 text-sm text-[#212529] dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#212529]">Project Details</h2>
          <ul className="list-inside list-disc space-y-2">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#212529]">Screenshots</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={screenshot || "/placeholder.svg"}
                  alt={`Screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#212529] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#212529]/90 focus:outline-none focus:ring-4 focus:ring-[#212529]/50 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <Globe className="mr-2 h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-[#212529] px-5 py-2.5 text-center text-sm font-medium text-[#212529] hover:bg-[#212529] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#212529]/50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
          >
            <Github className="mr-2 h-4 w-4" />
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}

