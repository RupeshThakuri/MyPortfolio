"use client"

import { motion } from "framer-motion"
import { Building2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      company: "eDIT Enterprises",
      role: "Full Stack Developer Intern",
      period: "Jan 2023 - Jun 2023",
      description: "Developed and maintained web applications using React and Node.js. Worked on database optimization and API development.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      company: "OM X Enterprise",
      role: "Web Development Intern",
      period: "Jul 2023 - Dec 2023",
      description: "Created responsive interfaces and implemented new features using TypeScript and Next.js. Collaborated with the backend team on API integration.",
      technologies: ["TypeScript", "Next.js", "PostgreSQL"]
    }
  ]

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Next.js", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: ".NET", level: "Intermediate" },
        { name: "Laravel", level: "Intermediate" },
        { name: "Node.js", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" },
      ]
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Basic" },
      ]
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-emerald-600";
      case "Intermediate":
        return "bg-yellow-600";
      case "Basic":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white px-4 sm:px-6 lg:px-8 py-16" id="experiences">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-semibold text-emerald-400">{exp.company}</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">{exp.role}</h4>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-zinc-700/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-zinc-800/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">{category.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full text-white ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}