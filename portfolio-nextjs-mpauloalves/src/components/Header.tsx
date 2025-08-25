import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Evita problemas de hidratação com SSR
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fecha o menu mobile quando a tela é redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { href: "#about", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Contato" }
  ]

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-dark-bg/70 border-b border-slate-200 dark:border-slate-800">
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl gradient-text">M.PauloAlves</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (
              theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )
            )}
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-dark-bg border-b border-slate-200 dark:border-slate-800"
          >
            <nav className="container-custom py-4 flex flex-col space-y-4">
              {navLinks.map(link => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="font-medium py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
