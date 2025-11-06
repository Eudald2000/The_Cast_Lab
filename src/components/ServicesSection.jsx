import CardServices from './CardServices'
import CardsData from '../data/ServicesCardData.json'
import '../css/Service+Card.css'

export default function ServicesSection () {
  return (
    <section className='container'>
      <div className='row justify-content-center'>
        {CardsData.map((card) => (
          <div key={card.id} className='col-12 col-md-6 col-lg-4 mb-4'>
            <CardServices card={card} />
          </div>
        ))}
      </div>
    </section>
  )
}
