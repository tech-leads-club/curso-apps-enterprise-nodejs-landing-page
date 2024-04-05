import tlclogo from '../../assets/tlc_logo.jpg'
import GradientLine from './gradient-line'
import YoutubeVideo from './youtube-embed'

function Header() {
  return (
    <section className='bg-circle-pattern'>
      <div className='pl-5 pt-5 sm:pl-6 lg:pl-10 2xl:pl-14'>
        <img
          className='w-35 h-10 sm:w-40 sm:h-14 lg:w-48 lg:h-16'
          src={tlclogo}
          alt='Logotipo da Tech Leads Club'
        />
      </div>

      <div className='flex flex-col items-center px-5 text-center sm:px-6 lg:px-10 2xl:px-14'>
        <div className='max-w-64 sm:max-w-600 md:max-w-700 lg:max-w-1000 2xl:max-w-1400'>
          <p className='text-15 text-center mt-10 sm:text-20 lg:text-25 2xl:text-35'>
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

      <div className='sm:px-6 lg:px-10 2xl:px-14'>
        <YoutubeVideo embedId='FIG3xjgnicg?si=w9HkgomD07M4olZS' />
      </div>

      <div className='flex flex-col items-center px-5 pb-10 sm:px-6 sm:pb-16 lg:px-10 2xl:px-14'>
        <p className=' text-15 text-center mt-5 max-w-[320px] sm:text-20 sm:mt-10 sm:max-w-[760px] lg:text-25 lg:mt-16 lg:max-w-[1100px] 2xl:text-35 2xl:mt-20 2xl:max-w-[1600px]'>
          Você estuda linguagens, Frameworks, DDD, Arquitetura Hexagonal,
          Arquitetura Limpa, Microsserviços e testes, mas{' '}
          <span className='bg-blueBox text-white'>
            sente que suas soluções não estão entregando valor
          </span>{' '}
          e estão cada vez mais complexas?
        </p>

        <p className='bg-purpleBox text-white py-1 px-2 my-7 sm:text-20 sm:my-8 sm:py-2 sm:px-3 lg:py-3 lg:px-4 lg:text-25 lg:my-10 2xl:py-5 2xl:px-6 2xl:text-40'>
          VOCÊ NÃO ESTÁ SOZINHO!
        </p>

        <p className=' text-15 text-center mb-7 max-w-[345px] sm:text-20 sm:mb-10 sm:max-w-[760px] lg:text-25 lg:mb-14 lg:max-w-[1100px] 2xl:text-30 2xl:mb-18 2xl:max-w-[1600px]'>
          O que não falta é curso falando da “maneira certa”, “arquitetura
          certa” e o “jeito certo”. Mas, a maioria deles, não trazem a bagagem e
          a experiência de quem desenvolve software de grande escala há muito
          tempo.
        </p>

        <p className=' text-15 text-center max-w-[345px] sm:text-20 sm:max-w-[760px] lg:text-25 lg:max-w-[1100px] 2xl:text-30 2xl:max-w-[1600px]'>
          Entender profundamente sobre linguagens e padrões de arquitetura e
          desenvolvimento é crucial, mas saber quando{' '}
          <span className='bg-blueBox text-white'>aplicar é essencial.</span>
        </p>
      </div>
    </section>
  )
}

export default Header
