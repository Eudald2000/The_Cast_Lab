import CardServices from './CardServices'
import CardsData from '../data/ServicesCardData.json'
import '../css/Service+Card.css'

export default function ServicesSection () {
  return (
    <section className='services-section py-4 py-md-5' id='services'>
      <div className='container'>
        <div className='row justify-content-center'>
          {CardsData.map((card) => (
            <div key={card.id} className='col-12 col-sm-10 col-md-6 col-lg-4 col-xl-4 mb-4 d-flex justify-content-center'>
              <CardServices card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
