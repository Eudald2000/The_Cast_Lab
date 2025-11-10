export default function RutaCard ({ card }) {
  return (
    <div className='hover-container'>
      <div className='hover-container-inner'>
        <div className='hover-front'>
          <h3>{card.title}</h3>
        </div>
        <div className='hover-back'>
          <span className='hover-text'>{card.description}</span>
        </div>
      </div>
    </div>
  )
}
