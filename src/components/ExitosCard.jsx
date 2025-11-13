export default function ExitosCard ({ card }) {
  return (
    <div className='card bg-black text-white border p-3 h-100 d-flex flex-column'>
      <div key={card.id} className='card-body d-flex flex-column flex-grow-1'>
        <h5 className='card-title'>{card.title}</h5>
        <h6 className='card-subtitle my-3'>{card.subtitle}</h6>
        <div className='flex-grow-1'>
          <p className='card-text fw-bold'>Reto y soluciones</p>
          <p className='card-text fs-6 fw-light'>{card.reto}</p>
        </div>
        <div className='flex-grow-1'>
          <p className='card-text fw-bold mt-3'>Resultado</p>
          <p className='card-text fs-6 fw-light'>{card.resultado}</p>
        </div>
      </div>
    </div>
  )
}
