import '../css/Ruta.css'
import RutaCard from './RutaCard'
import RutaData from '../data/RutaData.json'

export default function Ruta () {
  return (
    <section className='ruta-section py-4 py-md-5'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-8 col-xl-6 text-center'>
            <h2 className='ruta-title mb-3'>De la idea al impacto</h2>
            <p className='ruta-subtitle'>
              Cada proyecto sigue un recorrido diseñado para transformar visión en resultados.
              Un proceso donde la estrategia y la creatividad avanzan juntas.
            </p>
          </div>
        </div>

        <div className='row justify-content-center g-3 g-md-4 g-lg-5 mt-3 mt-md-4'>
          {RutaData.map((card) => (
            <div key={card.id} className='col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center'>
              <RutaCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
