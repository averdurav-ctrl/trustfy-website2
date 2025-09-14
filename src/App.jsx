import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyNow from './components/WhyNow'
import WhatIs from './components/WhatIs'
import HowItWorks from './components/HowItWorks'
import Roadmap from './components/Roadmap'
import Tokenomics from './components/Tokenomics'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyNow />
        <WhatIs />
        <HowItWorks />
        <Roadmap />
        <Tokenomics />
      </main>
      <Footer />
    </div>
  )
}

export default App
