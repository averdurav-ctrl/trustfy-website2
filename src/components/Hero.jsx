import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Shield, CheckCircle, Users, Zap } from 'lucide-react'
import heroBg from '../assets/hero-bg.png'
import WaitlistModal from './WaitlistModal'

export default function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-teal-900/80"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 animate-float">
            <Shield className="w-8 h-8 text-blue-300 opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
            <CheckCircle className="w-6 h-6 text-green-300 opacity-60" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
            <Users className="w-7 h-7 text-blue-400 opacity-60" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
            <Zap className="w-5 h-5 text-green-400 opacity-60" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* TGE Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-sm font-medium">
                TGE (Token Generation Event) del token $TFY · previsto Q1 2026
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Trustfy: La red abierta que{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                protege la verdad
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Verifica y actúa ante amenazas en tiempo real. Por todos, para todos.
            </p>

            {/* Description */}
            <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
              Protege tu día a día frente a fraudes, bulos y deepfakes.
              Accede a la beta freemium y recibe novedades exclusivas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="hero-gradient text-white hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsWaitlistOpen(true)}
              >
                Únete a la waitlist
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                onClick={() => openExternalLink('https://docs.trustfy.com')}
              >
                Desarrolladores
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-300/50 text-green-300 hover:bg-green-300 hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                onClick={() => openExternalLink('mailto:investors@trustfy.com')}
              >
                Inversores
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-gray-300">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent mb-2">
                  1B
                </div>
                <div className="text-gray-300">Tokens $TFY</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent mb-2">
                  Q1 2026
                </div>
                <div className="text-gray-300">TGE Previsto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </>
  )
}

