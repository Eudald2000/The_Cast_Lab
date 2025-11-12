import '../css/ContactSection.css'

export default function ContactSection () {
  return (
    <section className='bg-black text-white py-4 py-md-5'>
      <div className='container'>
        <div className='row justify-content-between align-items-stretch min-height-lg'> {/* ← Cambiado a align-items-stretch y añadido min-height-lg */}

          {/* Columna de texto */}
          <div className='col-12 col-lg-6 mb-4 mb-lg-0 d-flex align-items-center'> {/* ← Añadido d-flex align-items-center */}
            <div className='contact-text'>
              <h3 className='contact-title mb-3'>
                Trabajamos con líderes, marcas y creadores que entienden que la excelencia es una inversión.
              </h3>
              <h3 className='contact-title'>
                Si crees que tu proyecto merece una ejecución al más alto nivel, hablemos.
              </h3>
            </div>
          </div>

          {/* Columna del formulario */}
          <div className='col-12 col-lg-5 d-flex align-items-center'> {/* ← Añadido d-flex align-items-center */}
            <form className='contact-form w-100' method='POST'>
              <div className='mb-3'>
                <input
                  id='nombre'
                  name='nombre'
                  type='text'
                  placeholder='Nombre y Apellido'
                  className='contact-input rounded-pill p-2 ps-3 text-white w-100 w-lg-75'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  id='empresa'
                  name='empresa'
                  type='text'
                  placeholder='Empresa'
                  className='contact-input rounded-pill p-2 ps-3 text-white w-100 w-lg-75'
                  required
                />
              </div>
              <div className='mb-3'>
                <input
                  autoComplete='email'
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Email'
                  className='contact-input rounded-pill p-2 ps-3 text-white w-100 w-lg-75'
                  required
                />
              </div>
              <div className='mb-4'>
                <input
                  id='telefono'
                  name='telefono'
                  type='tel'
                  placeholder='Teléfono'
                  className='contact-input rounded-pill p-2 ps-3 text-white w-100 w-lg-75'
                  required
                />
              </div>
              <div className='text-end '> {/* ← Alineación responsive del botón */}
                <button type='submit' className='submit-button p-2 px-4 rounded-pill'>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
