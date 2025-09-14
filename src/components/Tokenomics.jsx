import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Coins, TrendingUp, Shield, Users } from 'lucide-react'

const distributionData = [
  { name: 'Comunidad y recompensas', value: 40, color: '#0066CC' },
  { name: 'Equipo y advisors', value: 20, color: '#00CC66' },
  { name: 'Tesorería DAO', value: 20, color: '#66B3FF' },
  { name: 'Inversores seed/early', value: 15, color: '#99D6FF' },
  { name: 'Liquidez y mercados', value: 5, color: '#CCE7FF' }
]

const mechanicsData = [
  { name: 'Staking', value: 85, description: 'Recompensas por participación' },
  { name: 'Governance', value: 92, description: 'Votación en decisiones' },
  { name: 'Verificación', value: 78, description: 'Incentivos por verificar' },
  { name: 'Penalizaciones', value: 65, description: 'Desincentivos por mal comportamiento' }
]

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Token <span className="text-gradient">$TFY</span> y TGE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El token <strong>$TFY</strong> será el motor económico de la red, 
            impulsando sus funcionalidades y la participación.
          </p>
        </div>

        {/* TGE Info */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 md:p-12 text-white text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Coins className="w-16 h-16 mr-4" />
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">TGE Q1 2026</h3>
              <p className="text-xl opacity-90">Token Generation Event en DEX</p>
            </div>
          </div>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Este contenido es informativo y no constituye una oferta para adquirir $TFY. 
            La participación en el TGE depende de jurisdicción y elegibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Distribution Chart */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
              Distribución inicial del Token $TFY
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {distributionData.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Token Supply Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Suministro Total
              </h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-4">
                  1,000M
                </div>
                <p className="text-xl text-gray-600 mb-4">Tokens $TFY</p>
                <p className="text-gray-600">
                  Suministro fijo que garantiza un modelo deflacionario y escasez 
                  que impulsa su valor a largo plazo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-2xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Deflacionario</h4>
                <p className="text-sm text-gray-600">Modelo económico sostenible</p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Seguro</h4>
                <p className="text-sm text-gray-600">Auditado y transparente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Token Mechanics */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Mecánicas clave del Token $TFY
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <Coins className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Staking</h4>
              <p className="text-sm text-gray-600">
                Bloquea tokens para obtener recompensas y participar en la red
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Governance</h4>
              <p className="text-sm text-gray-600">
                Vota en propuestas y decisiones importantes de la red
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Verificación</h4>
              <p className="text-sm text-gray-600">
                Gana tokens por verificar contenido y detectar amenazas
              </p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Incentivos</h4>
              <p className="text-sm text-gray-600">
                Sistema de recompensas por contribuir a la seguridad
              </p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mechanicsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0066CC" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

