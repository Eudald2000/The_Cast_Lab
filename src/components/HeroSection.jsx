import placeHolder from '../assets/placeHolder.webp'
import '../css/HeroSection.css'

export default function HeroSection () {
  return (
    <section
      className='hero d-flex align-items-center w-100'
      style={{ backgroundImage: `url(${placeHolder})` }}
      aria-label='Hero background'
    >
      <div className='hero-overlay' />
      <div className='container hero-content text-white text-center w-100'>
        {/* Títulos con clases responsivas */}
        <h1 className='hero-title'>Elegimos pocos proyectos.</h1>
        <h1 className='hero-title'>Pero los hacemos memorables.</h1>

        {/* Párrafo con clases responsivas */}
        <p className='hero-subtitle'>Diseñamos, producimos y elevamos contenidos que marcan diferencia.</p>

        {/* Botón responsivo */}
        <button
          className='btn btn-outline-light rounded-pill'
          onClick={() => { /* tu función aquí */ }}
        >
          Agenda una conversación privada
        </button>
      </div>
    </section>
  )
}
