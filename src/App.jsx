import './App.css'
import viteLogo from '/vite.svg'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import ServicesSection from './components/ServicesSection'
import CasosExito from './components/CasosExito'
import Ruta from './components/Ruta.jsx'
function App () {
  return (
    <div>
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <CasosExito />
      <Ruta />
      <section className='d-flex bg-black text-white p-5 justify-content-between noMargenInferior'>
        <div className='w-50'>
          <h3>Trabajamos con líderes, marcas y creadores que entienden que la excelencia es una inversión. </h3>
          <h3>Si crees que tu proyecto merece una ejecución al más alto nivel, hablemos.</h3>
        </div>
        <div className=''>
          <form action='' className='d-flex flex-column'>
            <input id='nombre' name='nombre' type='text' placeholder='Nombre y Apellido' required />
            <input id='empresa' name='empresa' type='text' placeholder='Empresa' required />
            <input autoComplete='email' id='email' name='email' type='email' placeholder='Email' required />
            <input id='telefono' name='telefono' type='tel' placeholder='Telefono' required />
            <input id='submit' name='submit' type='submit' value='Enviar' />
          </form>
        </div>
      </section>
      <footer className='d-flex justify-content-between bg-black text-white'>
        <a href=''>
          <img src={viteLogo} alt='' />
        </a>
        <nav className='d-flex'>
          <div className='m-1'><a className='text-white' href=''>FILOSOFIA</a></div>
          <div className='m-1'><a className='text-white' href=''>SERVICIOS</a></div>
          <div className='m-1'><a className='text-white' href=''>CASOS DE EXITO</a></div>
          <div className='m-1'><a className='text-white' href=''>CONTACTO</a></div>
        </nav>
        <div>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='Twitter'>
            <FaTwitter size={20} />
          </a>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='Instagram'>
            <FaInstagram size={20} />
          </a>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <FaFacebook size={20} />
          </a>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='YouTube'>
            <FaYoutube size={20} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
