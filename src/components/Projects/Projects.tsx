import React from 'react';
import ProjectDetail from './ProjectDetail';


export const projects = [
  {
    id: 1,
    title: "AI-Powered Task Management",
    description: "An intelligent task management system that uses AI to prioritize and optimize your workflow.",
    image: "/Images/Profile/profile.jpg",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TensorFlow.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
    ],
    codeUrl: "#",
    demoUrl: "#",
    fullDescription: `
      Our AI-Powered Task Management system revolutionizes the way you handle daily tasks and projects. 
      By leveraging cutting-edge artificial intelligence algorithms, this application analyzes your work patterns, deadlines, 
      and task dependencies to create an optimized schedule that maximizes your productivity.

      Key features include smart task prioritization, automated time allocation, and insightful progress analytics. 
      The system adapts to your working style over time, providing increasingly accurate predictions and suggestions 
      to help you make the most of your day.
    `,
    features: [
      "AI-driven task prioritization",
      "Automated schedule optimization",
      "Real-time collaboration",
      "Customizable workflow templates",
      "Detailed analytics and insights",
      "Cross-platform synchronization",
    ],
    screenshots: [
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
    ],
  },
  {
    id: 2,
    title: "Eco-Smart Home System",
    description: "A comprehensive smart home solution focused on energy efficiency and sustainability.",
    image: "/Images/Profile/profile.jpg",
    technologies: [
      { name: "IoT" },
      { name: "React Native" },
      { name: "Node.js" },
      { name: "MQTT" },
      { name: "InfluxDB" },
    ],
    codeUrl: "#",
    demoUrl: "#",
    fullDescription: `
      The Eco-Smart Home System is designed to transform your living space into an energy-efficient, 
      sustainable smart home. This innovative system integrates various IoT devices and employs 
      advanced algorithms to optimize energy consumption while maintaining comfort.

      From adaptive lighting and climate control to water management and solar integration, 
      our system provides a holistic approach to home automation with a focus on reducing 
      your carbon footprint and energy bills.
    `,
    features: [
      "Energy consumption optimization",
      "Adaptive climate control",
      "Smart lighting management",
      "Water usage monitoring and optimization",
      "Solar panel integration and management",
      "Real-time energy usage insights",
    ],
    screenshots: [
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
    ],
  },
  {
    id: 3,
    title: "AR Language Learning App",
    description: "An augmented reality app that makes language learning immersive and interactive.",
    image: "/Images/Profile/profile.jpg",
    technologies: [{ name: "Unity" }, { name: "ARKit" }, { name: "ARCore" }, { name: "C#" }, { name: "Firebase" }],
    codeUrl: "#",
    demoUrl: "#",
    fullDescription: `
      Our AR Language Learning App revolutionizes the way people learn new languages. By leveraging 
      augmented reality technology, we create an immersive and interactive learning experience that 
      makes vocabulary acquisition and grammar practice feel like a game.

      Users can point their device at objects in their environment to see translations, hear pronunciations, 
      and engage with 3D models that bring language concepts to life. The app adapts to each user's 
      learning pace and style, providing a personalized curriculum that ensures efficient and effective learning.
    `,
    features: [
      "Real-time object recognition and translation",
      "Interactive 3D grammar visualizations",
      "Gamified learning challenges",
      "Personalized learning paths",
      "Progress tracking and insights",
      "Offline mode for learning anywhere",
    ],
    screenshots: [
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
    ],
  },
  {
    id: 4,
    title: "Blockchain Supply Chain",
    description: "A blockchain-based solution for transparent and efficient supply chain management.",
    image: "/Images/Profile/profile.jpg",
    technologies: [
      { name: "Ethereum" },
      { name: "Solidity" },
      { name: "React" },
      { name: "Node.js" },
      { name: "GraphQL" },
    ],
    codeUrl: "#",
    demoUrl: "#",
    fullDescription: `
      Our Blockchain Supply Chain solution brings unprecedented transparency and efficiency to 
      supply chain management. By leveraging blockchain technology, we create an immutable and 
      transparent record of every transaction and movement within the supply chain.

      This system enables real-time tracking of products from manufacture to delivery, reduces fraud, 
      enhances quality control, and streamlines logistics. With smart contracts automating many processes, 
      we significantly reduce paperwork and human error, leading to a more efficient and cost-effective 
      supply chain.
    `,
    features: [
      "Real-time product tracking",
      "Smart contract automation",
      "Immutable transaction records",
      "Supplier verification and rating system",
      "Integration with IoT devices for automated data input",
      "Analytics dashboard for supply chain insights",
    ],
    screenshots: [
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
      "/Images/Profile/profile.jpg",
    ],
  },
]

function Projects() {
  return (
    <>
      <section className="py-20" id='projects'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectDetail key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
