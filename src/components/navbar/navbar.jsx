import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="bg-amber-300 shadow-lg">
        <nav className="flex items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <div className="logo text-3xl font-bold flex-shrink-0">
            <h2>LOGO</h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex">
            <ul className="flex space-x-8">
              <li><a href="#home" className="hover:text-gray-700 font-semibold transition">HOME</a></li>
              <li><a href="#about" className="hover:text-gray-700 font-semibold transition">ABOUT</a></li>
              <li><a href="#contact" className="hover:text-gray-700 font-semibold transition">CONTACT</a></li>
              <li><a href="#project" className="hover:text-gray-700 font-semibold transition">PROJECT</a></li>
            </ul>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-amber-200 px-4 pb-4">
            <ul className="flex flex-col space-y-3">
              <li><a href="#home" className="block hover:text-gray-700 font-semibold">HOME</a></li>
              <li><a href="#about" className="block hover:text-gray-700 font-semibold">ABOUT</a></li>
              <li><a href="#contact" className="block hover:text-gray-700 font-semibold">CONTACT</a></li>
              <li><a href="#project" className="block hover:text-gray-700 font-semibold">PROJECT</a></li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar