import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X } from 'lucide-react'
import trustfyLogo from '../assets/trustfy-logo.png'
import WaitlistModal from './WaitlistModal'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img src={trustfyLogo} alt="Trustfy" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Trustfy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('que-es')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Qué es Trustfy
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Cómo funciona
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Roadmap
              </button>
              <button 
                onClick={() => scrollToSection('tokenomics')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Tokenomics
              </button>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => openExternalLink('https://docs.trustfy.com')}
              >
                Desarrolladores
              </Button>
              <Button 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                onClick={() => openExternalLink('mailto:investors@trustfy.com')}
              >
                Inversores
              </Button>
              <Button 
                className="hero-gradient text-white hover:opacity-90"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Únete a la waitlist
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('que-es')}
                  className="text-gray-600 hover:text-primary transition-colors text-left"
                >
                  Qué es Trustfy
                </button>
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-gray-600 hover:text-primary transition-colors text-left"
                >
                  Cómo funciona
                </button>
                <button 
                  onClick={() => scrollToSection('roadmap')}
                  className="text-gray-600 hover:text-primary transition-colors text-left"
                >
                  Roadmap
                </button>
                <button 
                  onClick={() => scrollToSection('tokenomics')}
                  className="text-gray-600 hover:text-primary transition-colors text-left"
                >
                  Tokenomics
                </button>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => openExternalLink('https://docs.trustfy.com')}
                  >
                    Desarrolladores
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                    onClick={() => openExternalLink('mailto:investors@trustfy.com')}
                  >
                    Inversores
                  </Button>
                  <Button 
                    className="hero-gradient text-white hover:opacity-90"
                    onClick={() => setIsWaitlistOpen(true)}
                  >
                    Únete a la waitlist
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  )
}

