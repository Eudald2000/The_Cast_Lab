import { useState } from 'react'
import logo from '/Logo.png'
import { FaSearch } from 'react-icons/fa'
import '../css/Header.css'

export default function Header () {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const closeNav = () => setIsNavOpen(false)

  return (
    <header className='container d-flex align-items-center justify-content-between p-5 position-relative'>
      <div className='container-logo'>
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='TheCastLab_Logo' className='custom-logo' />
        </a>
      </div>
      <nav className='navbar navbar-expand-lg position-static'>
        <button
          className='navbar-toggler'
          type='button'
          onClick={toggleNav}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className={`collapse navbar-collapse custom-navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          <div className='navbar-nav'>
            <a className='nav-link' href='#' onClick={closeNav}>FILOSOFIA</a>
            <a className='nav-link' href='#' onClick={closeNav}>SERVICIOS</a>
            <a className='nav-link' href='#' onClick={closeNav}>CASOS DE EXITO</a>
            <a className='nav-link' href='#' onClick={closeNav}>CONTACTO</a>
          </div>
        </div>
      </nav>
      <div>
        <FaSearch size={20} />
      </div>
    </header>
  )
}
