import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'

interface Developer {
  initials: string
  name: string
  role: string
}

interface ProjectCardProps {
  title: string
  description: string
  developers: Developer[]
}

export function ProjectCard({ title, description, developers: initialDevelopers }: ProjectCardProps) {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [developers, setDevelopers] = useState(initialDevelopers)
  const [newDeveloper, setNewDeveloper] = useState({
    name: '',
    role: ''
  })
  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(null)

  const handleAddDeveloper = () => {
    if (newDeveloper.name && newDeveloper.role) {
      const initials = newDeveloper.name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)

      setDevelopers([
        ...developers,
        {
          name: newDeveloper.name,
          role: newDeveloper.role,
          initials
        }
      ])

      setNewDeveloper({ name: '', role: '' })
      setIsAddOpen(false)
    }
  }

  const handleDeleteDeveloper = (developer: Developer) => {
    setSelectedDeveloper(developer)
    setIsDeleteOpen(true)
  }

  const confirmDelete = () => {
    if (selectedDeveloper) {
      setDevelopers(developers.filter(dev => dev.name !== selectedDeveloper.name))
      setIsDeleteOpen(false)
      setSelectedDeveloper(null)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-4">
        <h3 className="font-medium text-gray-700">Team Members</h3>
        <div className="flex flex-wrap gap-2">
          {developers.map((dev, index) => (
            <div 
              key={index}
              className="group flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2"
              title={`${dev.name} - ${dev.role}`}
            >
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm font-medium">
                {dev.initials}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{dev.name}</span>
                <span className="text-xs text-gray-500">{dev.role}</span>
              </div>
              <button
                onClick={() => handleDeleteDeveloper(dev)}
                className="ml-2 p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove developer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <button 
          onClick={() => setIsAddOpen(true)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50"
        >
          <img src="/plus.svg" alt="Add" className="w-5 h-5" style={{ filter: 'invert(47%) sepia(47%) saturate(3187%) hue-rotate(199deg) brightness(97%) contrast(98%)' }} />
          Add Developer
        </button>
      </div>

      {/* Add Developer Modal */}
      <Dialog 
        open={isAddOpen} 
        onClose={() => setIsAddOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-sm">
            <Dialog.Title className="text-lg font-medium mb-4">Add New Developer</Dialog.Title>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Developer Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={newDeveloper.name}
                  onChange={(e) => setNewDeveloper({ ...newDeveloper, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter developer name"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select
                  id="role"
                  value={newDeveloper.role}
                  onChange={(e) => setNewDeveloper({ ...newDeveloper, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a role</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Full Stack">Full Stack</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Mobile Dev">Mobile Dev</option>
                  <option value="DevOps">DevOps</option>
                </select>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleAddDeveloper}
                  className="flex-1 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Add Developer
                </button>
                <button
                  onClick={() => setIsAddOpen(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog 
        open={isDeleteOpen} 
        onClose={() => setIsDeleteOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-sm">
            <Dialog.Title className="text-lg font-medium mb-4">Remove Developer</Dialog.Title>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                Are you sure you want to remove <span className="font-medium">{selectedDeveloper?.name}</span> from this project?
              </p>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={confirmDelete}
                  className="flex-1 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                >
                  Remove
                </button>
                <button
                  onClick={() => setIsDeleteOpen(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}