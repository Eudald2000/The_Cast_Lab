import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import logo from '/Logo.png'
import '../css/Footer.css'

export default function Footer () {
  return (
    <footer className='bg-black text-white footer-section'>
      <div className='container'>
        {/* Versión Desktop */}
        <div className='d-none d-md-flex justify-content-between align-items-center py-4'>
          <a href='#' className='footer-logo-link'>
            <img src={logo} alt='TheCastLab Logo' className='logo-blanco' />
          </a>

          <nav className='footer-nav d-flex gap-4'>
            <a className='footer-nav-link' href='#filosofia'>FILOSOFIA</a>
            <a className='footer-nav-link' href='#servicios'>SERVICIOS</a>
            <a className='footer-nav-link' href='#casos-exito'>CASOS DE EXITO</a>
            <a className='footer-nav-link' href='#contacto'>CONTACTO</a>
          </nav>

          <div className='footer-social d-flex gap-3'>
            <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='Twitter'>
              <FaTwitter className='social-icon' />
            </a>
            <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='Instagram'>
              <FaInstagram className='social-icon' />
            </a>
            <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='Facebook'>
              <FaFacebook className='social-icon' />
            </a>
            <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='YouTube'>
              <FaYoutube className='social-icon' />
            </a>
          </div>
        </div>

        {/* Versión Móvil */}
        <div className='d-md-none py-4'>
          <div className='row text-center'>
            {/* Logo */}
            <div className='col-12 mb-4'>
              <a href='#' className='footer-logo-link'>
                <img src={logo} alt='TheCastLab Logo' className='logo-blanco-mobile' />
              </a>
            </div>

            {/* Navegación */}
            <div className='col-12 mb-4'>
              <nav className='footer-nav-mobile d-flex flex-wrap justify-content-center gap-3'>
                <a className='footer-nav-link-mobile' href='#filosofia'>FILOSOFIA</a>
                <a className='footer-nav-link-mobile' href='#servicios'>SERVICIOS</a>
                <a className='footer-nav-link-mobile' href='#casos-exito'>CASOS DE EXITO</a>
                <a className='footer-nav-link-mobile' href='#contacto'>CONTACTO</a>
              </nav>
            </div>

            {/* Iconos Sociales */}
            <div className='col-12'>
              <div className='footer-social-mobile d-flex justify-content-center gap-3'>
                <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='Twitter'>
                  <FaTwitter className='social-icon' />
                </a>
                <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='Instagram'>
                  <FaInstagram className='social-icon' />
                </a>
                <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='Facebook'>
                  <FaFacebook className='social-icon' />
                </a>
                <a className='social-icon-link' href='' target='_blank' rel='noreferrer' aria-label='YouTube'>
                  <FaYoutube className='social-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
