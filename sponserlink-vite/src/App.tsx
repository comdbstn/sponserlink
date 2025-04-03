import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProcessSection from './components/ProcessSection'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
        </main>
      </div>
    </Router>
  )
}

export default App 