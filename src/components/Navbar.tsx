import { useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left - Resume Button */}
        <a
          href="/YUVARAJAPATHI_V_Resume.pdf"
          download
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-white/18 rounded-lg font-medium transition-all duration-300 hover:scale-105 glass shake-animation"
        >
          <Download size={16} className="text-cyan-400" />
          <span className="text-cyan-400 font-semibold text-sm">Resume</span>
        </a>

        {/* Center - Logo */}
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:scale-110 transition-transform absolute left-1/2 transform -translate-x-1/2">
          YV
        </a>

        {/* Right - Navigation */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-400 after:to-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass hover:bg-cyan-500/20 border border-white/25 transition-all duration-300"
          >
            {isOpen ? <X size={24} className="text-cyan-400" /> : <Menu size={24} className="text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-strong animate-slideIn">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 font-medium px-4 rounded-lg hover:bg-cyan-500/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/YUVARAJAPATHI_V_Resume.pdf"
              download
              className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-white/18 rounded-lg font-medium transition-all w-fit glass shake-animation"
            >
              <Download size={16} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm">Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
