import { Network, Shield, Users, Zap, CheckCircle, Globe } from 'lucide-react'

export default function WhatIs() {
  return (
    <section id="que-es" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Qué es <span className="text-gradient">Trustfy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trustfy es una <strong>red global, descentralizada y abierta</strong> que combate 
            la desinformación, los fraudes digitales y las manipulaciones online.
          </p>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl font-semibold text-gray-800">
              En un mundo donde la mentira escala más rápido que la verdad, 
              <span className="text-gradient"> Trustfy nace para equilibrar la balanza.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Una red que protege la verdad
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 hero-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Verificación en tiempo real</h4>
                  <p className="text-gray-600">
                    Detecta y verifica contenido sospechoso instantáneamente usando IA y consenso comunitario
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 hero-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Red descentralizada</h4>
                  <p className="text-gray-600">
                    Sin puntos únicos de falla, gobernada por la comunidad y resistente a la censura
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 hero-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Acceso global</h4>
                  <p className="text-gray-600">
                    Disponible para todos, en cualquier lugar del mundo, sin restricciones geográficas
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 text-center card-hover">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Anti-Fraude</h4>
              <p className="text-sm text-gray-600">
                Protección contra estafas y fraudes digitales
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6 text-center card-hover">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Anti-Deepfake</h4>
              <p className="text-sm text-gray-600">
                Detección de contenido manipulado por IA
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-2xl p-6 text-center card-hover">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Anti-Bulos</h4>
              <p className="text-sm text-gray-600">
                Verificación colaborativa de información
              </p>
            </div>
            
            <div className="bg-orange-50 rounded-2xl p-6 text-center card-hover">
              <Network className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Open Source</h4>
              <p className="text-sm text-gray-600">
                Código abierto y transparente para todos
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            La revolución digital justa empieza contigo
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trustfy es más que una plataforma: es un movimiento global y descentralizado 
            para democratizar la ciberseguridad y proteger la verdad.
          </p>
        </div>
      </div>
    </section>
  )
}

