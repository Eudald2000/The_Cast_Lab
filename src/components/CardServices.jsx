export default function CardServices ({ card }) {
  return (
    <div className='card h-100 service-card py-5 px-3'>
      <div className='card-body d-flex flex-column'>
        <div>
          <h4 className='card-title'>{card.title}</h4>
          <h5 className='mb-5 text-body-secondary card-subtitle'>{card.subtitle}</h5>

          {card.items.map((item, index) => (
            <div key={index} className='mb-3'>
              <p className='service-title'>{item.title}</p>
              <p className='service-description small'>{item.description}</p>
            </div>
          ))}
        </div>

        <div className='mt-auto text-center'>
          <button className='btn-services rounded-pill'>
            Ver más servicios
          </button>
        </div>
      </div>
    </div>
  )
}
