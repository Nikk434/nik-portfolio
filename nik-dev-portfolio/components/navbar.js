'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-white font-mono text-xl font-bold hover:text-gray-300 transition-colors">
            &lt;nik/&gt;
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isDark ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                )}
              </svg>
            </button>

            {/* Resume Button */}
            <a href="/resume.pdf" download className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium">
              Download CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            <Link href="/skills" className="block py-2 text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
              Skills
            </Link>
            <Link href="/experience" className="block py-2 text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
              Experience
            </Link>
            <Link href="/projects" className="block py-2 text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
              Projects
            </Link>
            <Link href="/contact" className="block py-2 text-gray-300 hover:text-white transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="flex items-center gap-4 pt-2">
              
              <a href="/resume.pdf" download className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-colors font-medium text-sm">
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}