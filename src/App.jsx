import './App.css'
import viteLogo from '/vite.svg'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
function App () {
  return (
    <div>
      <Header />
      <HeroSection />
      <section className='d-flex align-items-center '>
        <div className='container text-center py-5 w-50'>
          <h2>De la estrategia al impacto</h2>
          <p>En TheCastLab creemos que la calidad no se negocia. Cada proyecto es una colaboración estratégica, no una producción más.Diseñamos la excelencia en cada detalle, combinando visión creativa y precisión técnica.</p>
          <p>Porque el verdadero impacto se construye con propósito.</p>
        </div>
      </section>
      <section className='container d-flex justify-content-between'>
        <div className='card m-2' style={{ width: '25rem' }}>
          <div className='card-body'>
            <h5 className='card-title'>Consultoría estratégica</h5>
            <h6 className='card-subtitle mb-2 text-body-secondary'>Para entrar, consolidarse y
              crecer en el ecosistema podcast
            </h6>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
          </div>
        </div>
        <div className='card m-2' style={{ width: '25rem' }}>
          <div className='card-body'>
            <h5 className='card-title'>Consultoría estratégica</h5>
            <h6 className='card-subtitle mb-2 text-body-secondary'>Para entrar, consolidarse y
              crecer en el ecosistema podcast
            </h6>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
          </div>
        </div>
        <div className='card m-2' style={{ width: '25rem' }}>
          <div className='card-body'>
            <h5 className='card-title'>Consultoría estratégica</h5>
            <h6 className='card-subtitle mb-2 text-body-secondary'>Para entrar, consolidarse y
              crecer en el ecosistema podcast
            </h6>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
            <div>
              <p className='card-text fw-semibold'>Optimización y distribución</p>
              <p className='card-text'>Aseguramos máxima visibilidad en plataformas de podcast y redes sociales.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-black text-white'>
        <div className='container text-center w-50 py-5'>
          <h2 className=''>Casos que transforman reputación en resultados.</h2>
          <p>Tres ejemplos de marcas y creadores que han convertido su podcast
            en una herramienta de posicionamiento, alianzas y monetización estable
          </p>
        </div>
        <div className='d-flex justify-content-around pb-5'>
          <div className='card m-2 bg-black text-white border' style={{ width: '26rem' }}>
            <div className='card-body'>
              <h5 className='card-title'>ROCA PROJECT</h5>
              <h6 className='card-subtitle mb-2' style={{ color: '#feb272' }}>Un podcast audiovisual de conversaciones con propósito.</h6>
              <div>
                <p className='card-text fw-semibold'>Reto y soluciones</p>
                <p className='card-text fs-6 fw-light'>Transformar una iniciativa independiente en un formato audiovisual de referencia en el mundo hispano. Diseñamos la estrategia de contenido, desarrollamos una identidad visual sólida y establecimos un flujo de producción profesional y escalable para múltiples plataformas.</p>
              </div>
              <div>
                <p className='card-text fw-semibold'>Resultado</p>
                <p className='card-text fs-6 fw-light'> <strong className='fw-bold'> Más de 900.000 suscriptores y más de 125 millones de reproducciones mensuales</strong> en YouTube, Spotify, Podimo, Instagram, Facebook y TikTok.</p>
                <p className='card-text fs-6 fw-light'>Roca Project se ha consolidado como uno de los proyectos audiovisuales más influyentes de habla hispana, reconocido por su calidad, coherencia y alcance global.</p>
              </div>
            </div>
          </div>
          <div className='card m-2 bg-black text-white border' style={{ width: '26rem' }}>
            <div className='card-body'>
              <h5 className='card-title'>ROCA PROJECT</h5>
              <h6 className='card-subtitle mb-2' style={{ color: '#feb272' }}>Un podcast audiovisual de conversaciones con propósito.</h6>
              <div>
                <p className='card-text fw-semibold'>Reto y soluciones</p>
                <p className='card-text fs-6 fw-light'>Transformar una iniciativa independiente en un formato audiovisual de referencia en el mundo hispano. Diseñamos la estrategia de contenido, desarrollamos una identidad visual sólida y establecimos un flujo de producción profesional y escalable para múltiples plataformas.</p>
              </div>
              <div>
                <p className='card-text fw-semibold'>Resultado</p>
                <p className='card-text fs-6 fw-light'> <strong className='fw-bold'> Más de 900.000 suscriptores y más de 125 millones de reproducciones mensuales</strong> en YouTube, Spotify, Podimo, Instagram, Facebook y TikTok.</p>
                <p className='card-text fs-6 fw-light'>Roca Project se ha consolidado como uno de los proyectos audiovisuales más influyentes de habla hispana, reconocido por su calidad, coherencia y alcance global.</p>
              </div>
            </div>
          </div>
          <div className='card m-2 bg-black text-white border' style={{ width: '26rem' }}>
            <div className='card-body'>
              <h5 className='card-title'>ROCA PROJECT</h5>
              <h6 className='card-subtitle mb-2' style={{ color: '#feb272' }}>Un podcast audiovisual de conversaciones con propósito.</h6>
              <div>
                <p className='card-text fw-semibold'>Reto y soluciones</p>
                <p className='card-text fs-6 fw-light'>Transformar una iniciativa independiente en un formato audiovisual de referencia en el mundo hispano. Diseñamos la estrategia de contenido, desarrollamos una identidad visual sólida y establecimos un flujo de producción profesional y escalable para múltiples plataformas.</p>
              </div>
              <div>
                <p className='card-text fw-semibold'>Resultado</p>
                <p className='card-text fs-6 fw-light'> <strong className='fw-bold'> Más de 900.000 suscriptores y más de 125 millones de reproducciones mensuales</strong> en YouTube, Spotify, Podimo, Instagram, Facebook y TikTok.</p>
                <p className='card-text fs-6 fw-light'>Roca Project se ha consolidado como uno de los proyectos audiovisuales más influyentes de habla hispana, reconocido por su calidad, coherencia y alcance global.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container w-50 text-center'>
          <h2>De la idea al impacto</h2>
          <p>Cada proyecto sigue un recorrido diseñado para transformar visión en resultados.Un proceso donde la estrategia y la creatividad avanzan juntas.</p>
        </div>
        <div className='d-flex justify-content-around'>
          <div className='hover-container'>
            <div className='hover-container-inner'>
              <div className='hover-front'>
                <h3>Descubrir</h3>
              </div>
              <div className='hover-back'>
                <span className='hover-text'>Entendemos el objetivo, la audiencia y el contexto</span>
              </div>
            </div>
          </div>
          <div className='hover-container'>
            <div className='hover-container-inner'>
              <div className='hover-front'>
                <h3>Planificar</h3>
              </div>
              <div className='hover-back'>
                <span className='hover-text'>Ejecutamos con precision y claridad audiovisual.</span>
              </div>
            </div>
          </div>
          <div className='hover-container'>
            <div className='hover-container-inner'>
              <div className='hover-front'>
                <h3>Diseñar</h3>
              </div>
              <div className='hover-back'>
                <span className='hover-text'>Creamos el formato, la narrativa y la identidad visual.
                </span>
              </div>
            </div>
          </div>
          <div className='hover-container'>
            <div className='hover-container-inner'>
              <div className='hover-front'>
                <h3>Lanzar</h3>
              </div>
              <div className='hover-back'>
                <span className='hover-text'>Distribuimos estratégicamente en cada plataforma.</span>
              </div>
            </div>
          </div>
          <div className='hover-container'>
            <div className='hover-container-inner'>
              <div className='hover-front'>
                <h3>Creceer</h3>
              </div>
              <div className='hover-back'>
                <span className='hover-text'>Analizamos, optimizamos y escalamos el impacto.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='d-flex bg-black text-white p-5 justify-content-between noMargenInferior'>
        <div className='w-50'>
          <h3>Trabajamos con líderes, marcas y creadores que entienden que la excelencia es una inversión. </h3>
          <h3>Si crees que tu proyecto merece una ejecución al más alto nivel, hablemos.</h3>
        </div>
        <div className=''>
          <form action='' className='d-flex flex-column'>
            <input id='nombre' name='nombre' type='text' placeholder='Nombre y Apellido' required />
            <input id='empresa' name='empresa' type='text' placeholder='Empresa' required />
            <input autoComplete='email' id='email' name='email' type='email' placeholder='Email' required />
            <input id='telefono' name='telefono' type='tel' placeholder='Telefono' required />
            <input id='submit' name='submit' type='submit' value='Enviar' />
          </form>
        </div>
      </section>
      <footer className='d-flex justify-content-between bg-black text-white'>
        <a href=''>
          <img src={viteLogo} alt='' />
        </a>
        <nav className='d-flex'>
          <div className='m-1'><a className='text-white' href=''>FILOSOFIA</a></div>
          <div className='m-1'><a className='text-white' href=''>SERVICIOS</a></div>
          <div className='m-1'><a className='text-white' href=''>CASOS DE EXITO</a></div>
          <div className='m-1'><a className='text-white' href=''>CONTACTO</a></div>
        </nav>
        <div>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='Twitter'>
            <FaTwitter size={20} />
          </a>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='Instagram'>
            <FaInstagram size={20} />
          </a>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <FaFacebook size={20} />
          </a>
          <a className='social-icon text-white' href='' target='_blank' rel='noreferrer' aria-label='YouTube'>
            <FaYoutube size={20} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
