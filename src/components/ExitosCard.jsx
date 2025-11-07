export default function ExitosCard ({ card }) {
  return (
    <div className='card bg-black text-white border p-3'>
      <div key={card.id} className='card-body'>
        <h5 className='card-title'>{card.title}</h5>
        <h6 className='card-subtitle my-3'>{card.subtitle}</h6>
        <div>
          <p className='card-text fw-bold'>Reto y soluciones</p>
          <p className='card-text fs-6 fw-light'>{card.reto}</p>
        </div>
        <div>
          <p className='card-text fw-bold mt-3'>Resultado</p>
          <p className='card-text fs-6 fw-light'>{card.resultado}</p>
        </div>
      </div>
    </div>
  )
}
