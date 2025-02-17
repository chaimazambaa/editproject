import React from 'react';

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/microchip.svg" alt="Logo" className="w-6 h-6" />
          <span className="font-semibold">SQOIN</span>
        </div>
        <nav className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <img src="/toolbox.svg" alt="Toolbox" className="w-5 h-5" />
            Toolbox
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <img src="/plus.svg" alt="Add" className="w-5 h-5" />
            Add Project
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <img src="/edit.svg" alt="Edit" className="w-5 h-5" />
            Edit
          </button>
        </nav>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        <img src="/user.svg" alt="User" className="w-5 h-5" />
        Sign In
      </button>
    </header>
  );
}