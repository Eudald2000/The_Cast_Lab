import placeHolder from '../assets/placeHolder.webp'

export default function HeroSection () {
  return (
    <section
      className='hero d-flex align-items-center w-100'
      style={{ backgroundImage: `url(${placeHolder})` }}
      aria-label='Hero background'
    >
      <div className='hero-overlay' />
      <div className='container hero-content text-white text-center w-100'>
        <h1 className='display-3'>Elegimos pocos proyectos.</h1>
        <h1 className='display-3'>Pero los hacemos memorables.</h1>
        <p className='lead'>Diseñamos, producimos y elevamos contenidos que marcan diferencia.</p>
        <button
          className='btn btn-outline-light rounded-pill px-4 py-2'
          onClick={() => { /* tu función aquí */ }}
        >
          Agenda una conversación privada
        </button>
      </div>
    </section>
  )
}
