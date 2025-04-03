import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
      </main>
    </div>
  )
}

export default App 