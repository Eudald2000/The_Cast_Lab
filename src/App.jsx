import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import ServicesSection from './components/ServicesSection'
import CasosExito from './components/CasosExito'
import Ruta from './components/Ruta.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
function App () {
  return (
    <div>
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <CasosExito />
      <Ruta />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
