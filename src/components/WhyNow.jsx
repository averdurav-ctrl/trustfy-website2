import { TrendingUp, Shield, Globe, Zap } from 'lucide-react'

export default function WhyNow() {
  return (
    <section id="por-que-ahora" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Por qué <span className="text-gradient">ahora</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En un panorama digital en constante evolución, la necesidad de una red de confianza 
            se vuelve más urgente que nunca. La tecnología avanza, pero también lo hacen las amenazas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
            <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Amenazas Crecientes</h3>
            <p className="text-gray-600">
              Los fraudes digitales y deepfakes aumentan exponencialmente cada año
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
            <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Protección Necesaria</h3>
            <p className="text-gray-600">
              La sociedad necesita herramientas de verificación en tiempo real
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
            <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Red Global</h3>
            <p className="text-gray-600">
              Una solución descentralizada que funcione para todos, en todas partes
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-2xl shadow-lg card-hover">
            <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Momento Perfecto</h3>
            <p className="text-gray-600">
              La tecnología blockchain permite crear esta red de confianza ahora
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="flex items-center justify-center mb-6">
            <div className="text-4xl mr-4">👉</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Trustfy nace en el momento exacto
            </h3>
          </div>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
            Cuando la sociedad necesita una{' '}
            <span className="font-semibold text-gradient">
              capa abierta y descentralizada de confianza digital
            </span>
            {' '}para proteger la verdad.
          </p>
        </div>
      </div>
    </section>
  )
}

