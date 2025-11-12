import '../css/CasosExito.css'
import ExitosCard from './ExitosCard'
import cardsData from '../data/ExitosData.json'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function CasosExito () {
  // Configuración del carrusel
  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false
        }
      },
      {
        breakpoint: 768, // Móvil
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  }

  return (
    <section className='bg-black text-white casos-exito-section'>
      <div className='intro-container text-center py-5'>
        <h2 className='intro-title mb-4'>Casos que transforman reputación en resultados.</h2>
        <p className='intro-subtitle mb-3'>
          Tres ejemplos de marcas y creadores que han convertido su podcast
          en una herramienta de posicionamiento, alianzas y monetización estable
        </p>
      </div>

      {/* móvil */}
      <div className='d-block d-md-none'>
        <div className='container'>
          <div className='row justify-content-center'>
            {cardsData.map((card) => (
              <div key={card.id} className='col-12 col-sm-10 col-md-8 mb-4'>
                <ExitosCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tablet/desktop */}
      <div className='d-none d-md-block'>
        <div className='container-fluid'>
          <Slider {...sliderSettings} className='casos-exito-carousel'>
            {cardsData.map((card) => (
              <div key={card.id} className='slide-item'>
                <ExitosCard card={card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
