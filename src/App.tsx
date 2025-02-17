import React from 'react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'

function App() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced features and responsive design.",
      developers: [
        { initials: "JD", name: "John Doe", role: "Frontend" },
        { initials: "JS", name: "Jane Smith", role: "Backend" },
        { initials: "MJ", name: "Mike Johnson", role: "UI/UX" }
      ]
    },
    {
      id: 2,
      title: "CRM System",
      description: "Customer relationship management system with analytics and reporting.",
      developers: [
        { initials: "SW", name: "Sarah Wilson", role: "Full Stack" },
        { initials: "TB", name: "Tom Brown", role: "Backend" }
      ]
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application for fitness tracking and health monitoring.",
      developers: [
        { initials: "AC", name: "Alice Cooper", role: "Mobile Dev" },
        { initials: "LW", name: "Lisa Wong", role: "Backend" },
        { initials: "DK", name: "David Kim", role: "UI/UX" }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App