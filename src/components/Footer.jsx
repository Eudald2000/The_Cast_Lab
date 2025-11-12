import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import logo from '/Logo.png'
import '../css/Footer.css'
export default function Footer () {
  return (
    <footer className='d-flex justify-content-between bg-black text-white'>
      <a href=''>
        <img src={logo} alt='' className='logo-blanco' />
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
  )
}
