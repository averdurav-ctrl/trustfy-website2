import { useState } from 'react'
import { Calendar, CheckCircle, Clock, Rocket, Users, Code, Coins, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(0)

  const roadmapPhases = [
    {
      id: 0,
      quarter: "Q4 2024",
      title: "Fundación y Desarrollo",
      status: "completed",
      icon: Code,
      color: "bg-green-500",
      milestones: [
        { task: "Concepto y whitepaper inicial", completed: true },
        { task: "Equipo fundador y advisors", completed: true },
        { task: "Investigación y desarrollo base", completed: true },
        { task: "Arquitectura técnica", completed: true }
      ]
    },
    {
      id: 1,
      quarter: "Q1 2025",
      title: "Prototipo y Validación",
      status: "in-progress",
      icon: Rocket,
      color: "bg-blue-500",
      milestones: [
        { task: "MVP de detección de amenazas", completed: true },
        { task: "Pruebas de concepto con IA", completed: true },
        { task: "Beta cerrada con early adopters", completed: false },
        { task: "Feedback y iteraciones", completed: false }
      ]
    },
    {
      id: 2,
      quarter: "Q2 2025",
      title: "Beta Pública y Comunidad",
      status: "upcoming",
      icon: Users,
      color: "bg-purple-500",
      milestones: [
        { task: "Lanzamiento beta freemium", completed: false },
        { task: "Programa de verificadores", completed: false },
        { task: "API pública y SDK", completed: false },
        { task: "Partnerships estratégicos", completed: false }
      ]
    },
    {
      id: 3,
      quarter: "Q3 2025",
      title: "Escalabilidad y Optimización",
      status: "upcoming",
      icon: Globe,
      color: "bg-orange-500",
      milestones: [
        { task: "Infraestructura descentralizada", completed: false },
        { task: "Optimización de rendimiento", completed: false },
        { task: "Expansión geográfica", completed: false },
        { task: "Integraciones empresariales", completed: false }
      ]
    },
    {
      id: 4,
      quarter: "Q4 2025",
      title: "Preparación TGE",
      status: "upcoming",
      icon: Coins,
      color: "bg-yellow-500",
      milestones: [
        { task: "Auditorías de seguridad", completed: false },
        { task: "Tokenomics finalizados", completed: false },
        { task: "Documentación legal", completed: false },
        { task: "Marketing pre-TGE", completed: false }
      ]
    },
    {
      id: 5,
      quarter: "Q1 2026",
      title: "TGE y Lanzamiento",
      status: "upcoming",
      icon: Rocket,
      color: "bg-green-600",
      milestones: [
        { task: "Token Generation Event", completed: false },
        { task: "Listado en DEX", completed: false },
        { task: "Lanzamiento mainnet", completed: false },
        { task: "Gobernanza descentralizada", completed: false }
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100'
      case 'in-progress': return 'text-blue-600 bg-blue-100'
      case 'upcoming': return 'text-gray-600 bg-gray-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completado'
      case 'in-progress': return 'En Progreso'
      case 'upcoming': return 'Próximamente'
      default: return 'Planificado'
    }
  }

  return (
    <section id="roadmap" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Roadmap <span className="text-gradient">pre-TGE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro camino hacia el TGE (Q1 2026) está cuidadosamente planificado 
            para construir una red sólida y confiable paso a paso.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {roadmapPhases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhase(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-white shadow-xl border-2 border-blue-200'
                      : 'bg-white/50 hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${phase.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{phase.quarter}</div>
                    <div className="text-sm text-gray-600">{phase.title}</div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-2 hero-gradient rounded-full transform -translate-y-1/2 transition-all duration-500"
              style={{ width: `${((activePhase + 1) / roadmapPhases.length) * 100}%` }}
            ></div>
            <div className="relative flex justify-between">
              {roadmapPhases.map((phase, index) => (
                <div
                  key={phase.id}
                  className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                    index <= activePhase ? phase.color : 'bg-gray-300'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Phase Info */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${roadmapPhases[activePhase].color}`}>
                {React.createElement(roadmapPhases[activePhase].icon, { 
                  className: "w-8 h-8 text-white" 
                })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {roadmapPhases[activePhase].title}
                </h3>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{roadmapPhases[activePhase].quarter}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(roadmapPhases[activePhase].status)}`}>
                    {getStatusText(roadmapPhases[activePhase].status)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Milestones clave:</h4>
              {roadmapPhases[activePhase].milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  {milestone.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                  <span className={`${milestone.completed ? 'text-gray-900' : 'text-gray-600'}`}>
                    {milestone.task}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Progreso de la fase:</span>
                <span className="text-sm font-semibold text-gray-900">
                  {Math.round((roadmapPhases[activePhase].milestones.filter(m => m.completed).length / roadmapPhases[activePhase].milestones.length) * 100)}%
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="hero-gradient h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${(roadmapPhases[activePhase].milestones.filter(m => m.completed).length / roadmapPhases[activePhase].milestones.length) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Timeline Overview */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Vista general del timeline</h4>
            {roadmapPhases.map((phase, index) => {
              const Icon = phase.icon
              return (
                <div
                  key={phase.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                    activePhase === index
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                  onClick={() => setActivePhase(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${phase.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold text-gray-900">{phase.quarter}</h5>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status)}`}>
                          {getStatusText(phase.status)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{phase.title}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Únete al viaje hacia el TGE
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Sé parte de la construcción de la red de confianza digital más importante del mundo. 
            Cada fase nos acerca más a un internet más seguro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              Únete a la Waitlist
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Seguir Actualizaciones
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

