"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Globe, Code, CheckCircle } from "lucide-react";
import { projects } from "@/components/Projects/Projects";
import { notFound } from "next/navigation";

export default function ProjectPage() {
  const pathname = usePathname();

  // Extract the project ID from the pathname
  const segments = pathname.split("/");
  const projectId = parseInt(segments[segments.length - 1], 10);

  // Find the project with the matching ID
  const project = projects.find((p) => p.id === projectId);

  // If the project is not found, show the 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl mb-12">
          <div className="relative h-64 md:h-96">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">{project.title}</h1>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-gray-600 dark:text-gray-300 mb-6">{project.fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Code className="w-4 h-4" />
                View Code
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Key Features</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshots Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Screenshots</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src={screenshot || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
