import '../css/IntroSection.css'

export default function IntroSection () {
  return (
    <section className='d-flex align-items-center intro-section'>
      <div className='intro-container text-center py-5'>
        <h2 className='intro-title mb-4'>
          De la estrategia al impacto
        </h2>
        <div className='intro-content'>
          <p className='intro-subtitle mb-3'>
            En TheCastLab creemos que la calidad no se negocia. Cada proyecto es una colaboración estratégica, no una producción más. Diseñamos la excelencia en cada detalle, combinando visión creativa y precisión técnica.
          </p>
          <p className='intro-subtitle mb-0'>
            Porque el verdadero impacto se construye con propósito.
          </p>
        </div>
      </div>
    </section>
  )
}
