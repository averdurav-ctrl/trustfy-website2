import { useState } from 'react'
import { Shield, Users, Zap, CheckCircle, ArrowRight, Play, Brain, Network } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 0,
      title: "Detección Automática",
      description: "La IA de Trustfy escanea contenido en tiempo real para identificar posibles amenazas, fraudes o desinformación.",
      icon: Brain,
      details: [
        "Análisis de patrones sospechosos",
        "Detección de deepfakes",
        "Identificación de contenido manipulado",
        "Verificación de fuentes"
      ]
    },
    {
      id: 1,
      title: "Verificación Comunitaria",
      description: "La comunidad de verificadores valida y confirma las detecciones automáticas mediante consenso descentralizado.",
      icon: Users,
      details: [
        "Red de verificadores expertos",
        "Sistema de reputación",
        "Consenso distribuido",
        "Incentivos por participación"
      ]
    },
    {
      id: 2,
      title: "Respuesta Inmediata",
      description: "Una vez verificada la amenaza, se activan las medidas de protección y se notifica a los usuarios afectados.",
      icon: Zap,
      details: [
        "Alertas en tiempo real",
        "Bloqueo automático de amenazas",
        "Notificaciones push",
        "Reportes detallados"
      ]
    },
    {
      id: 3,
      title: "Red Descentralizada",
      description: "Toda la información se almacena de forma descentralizada, garantizando transparencia y resistencia a la censura.",
      icon: Network,
      details: [
        "Blockchain inmutable",
        "Datos distribuidos",
        "Sin puntos únicos de falla",
        "Transparencia total"
      ]
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Protección 24/7",
      description: "Monitoreo continuo de amenazas digitales"
    },
    {
      icon: CheckCircle,
      title: "Verificación Instantánea",
      description: "Resultados en menos de 3 segundos"
    },
    {
      icon: Users,
      title: "Comunidad Global",
      description: "Miles de verificadores en todo el mundo"
    }
  ]

  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Cómo <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trustfy combina inteligencia artificial avanzada con el poder de la comunidad 
            para crear una red de protección digital sin precedentes.
          </p>
        </div>

        {/* Interactive Process Flow */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.id}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-white shadow-xl border-2 border-blue-200'
                        : 'bg-white/50 hover:bg-white hover:shadow-lg'
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        activeStep === index ? 'hero-gradient' : 'bg-gray-200'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          activeStep === index ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                        {activeStep === index && (
                          <div className="mt-4 space-y-2">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-colors ${
                        activeStep === index ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Visual Representation */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                  {React.createElement(steps[activeStep].icon, { 
                    className: "w-10 h-10 text-white" 
                  })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600">
                  {steps[activeStep].description}
                </p>
              </div>

              <div className="space-y-3">
                {steps[activeStep].details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6 hero-gradient text-white hover:opacity-90">
                <Play className="w-4 h-4 mr-2" />
                Ver Demo Interactiva
              </Button>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center card-hover">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Open Source Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">
            Construye la confianza con código abierto
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Trustfy será 100% open-source, pero hacerlo bien es tan importante como hacerlo pronto. 
            El código se abrirá de forma progresiva y consensuada con la comunidad, 
            garantizando máxima seguridad y transparencia.
          </p>
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 italic">
              "Documentación previa (API Spec / SDK Preview) estará disponible para pioneros 
              antes del repositorio público. Así construimos no solo tecnología, sino confianza colectiva."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="hero-gradient text-white hover:opacity-90">
              Acceder a la API Preview
            </Button>
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              Documentación Técnica
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

