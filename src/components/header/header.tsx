import TlcLogo from '../icons/logo-tlc/tlc-logo'
import GradientLine from './gradient-line'
import YoutubeVideo from './youtube-embed'

function Header() {
  return (
    <section className='bg-circle-pattern'>
      <div className='flex flex-col items-center'>
        <div className='w-full max-w-[1780px]  pl-5 pt-5 sm:pl-6 lg:pl-10 2xl:pl-14'>
          <div className='max-w-35 max-h-10 sm:w-40 sm:h-14 lg:w-48 lg:h-16' >
            <a href='https://comece.techleads.club/'>
              <TlcLogo />
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center px-5 text-center sm:px-6 lg:px-10 2xl:px-14'>
        <div className='max-w-[500px] md:max-w-700 lg:max-w-1000 2xl:max-w-1400'>
          <p className='mt-10 text-center text-15 sm:text-20 lg:text-25 2xl:text-35'>
            O <span className='bg-blueBox text-white'>ÚLTIMO CONTEÚDO</span> QUE
            VOCÊ VAI PRECISAR PARA APRENDER A{' '}
            <span className='bg-blueBox text-white'>
              ENTREGAR SOFTWARE DE QUALIDADE
            </span>{' '}
            QUE ESCALA.
          </p>
        </div>
        <GradientLine />

        <p className='mt-2.5 text-12 text-subtitle sm:text-14 lg:text-17 2xl:text-20'>
          Desenvolver software que escala não precisa ser complexo.
        </p>
      </div>

      <div className=' sm:px-6 lg:px-10 2xl:px-14'>
        <YoutubeVideo embedId='dHJCYiwLBFI?si=z3_I850H69iwGlSF' />
      </div>

      <div className='flex flex-col items-center px-5 pb-10 sm:px-6 sm:pb-16 lg:px-10 2xl:px-14'>
        <p className=' mt-5 max-w-[500px] text-center text-15 sm:mt-10 sm:max-w-[760px] sm:text-20 lg:mt-16 lg:max-w-[1100px] lg:text-25 2xl:mt-20 2xl:max-w-[1600px] 2xl:text-35'>
          Você estuda linguagens, Frameworks, DDD, Arquitetura Hexagonal,
          Arquitetura Limpa, Microsserviços e testes, mas{' '}
          <span className='bg-blueBox text-white'>
            sente que suas soluções não estão entregando valor
          </span>{' '}
          e estão cada vez mais complexas?
        </p>

        <p className='my-7 bg-purpleBox px-2 py-1 text-white sm:my-8 sm:px-3 sm:py-2 sm:text-20 lg:my-10 lg:px-4 lg:py-3 lg:text-25 2xl:px-6 2xl:py-5 2xl:text-40'>
          VOCÊ NÃO ESTÁ SOZINHO!
        </p>

        <p className=' 2xl:mb-18 mb-7 max-w-[500px] text-center text-15 sm:mb-10 sm:max-w-[760px] sm:text-20 lg:mb-14 lg:max-w-[1100px] lg:text-25 2xl:max-w-[1600px] 2xl:text-30'>
          O que não falta é curso falando da “maneira certa”, “arquitetura
          certa” e o “jeito certo”. Mas, a maioria deles, não trazem a bagagem e
          a experiência de quem desenvolve software de grande escala há muito
          tempo.
        </p>

        <p className=' max-w-[500px] text-center text-15 sm:max-w-[760px] sm:text-20 lg:max-w-[1100px] lg:text-25 2xl:max-w-[1600px] 2xl:text-30'>
          Entender profundamente sobre linguagens e padrões de arquitetura e
          desenvolvimento é crucial, mas saber quando{' '}
          <span className='bg-blueBox text-white'>aplicar é essencial.</span>
        </p>
      </div>
    </section>
  )
}

export default Header
