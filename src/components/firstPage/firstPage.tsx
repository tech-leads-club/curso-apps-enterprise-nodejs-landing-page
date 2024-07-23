import LeftFirstPage from '../forms-sign-in'
import TlcLogo from '../icons/logo-tlc/tlc-logo'
import YoutubeVideo from './youtube-embed'

function FirstPage() {
  return (
    <section className='flex flex-col items-center justify-center bg-circle-pattern '>
      <div className='w-full max-w-[1780px]  pl-5 pt-5 sm:pl-6 lg:pl-10 2xl:pl-14'>
        <TlcLogo />
      </div>

      <div className='flex flex-col items-center px-5 text-center sm:px-6 lg:px-10 2xl:px-14'>
        <div className='max-w-[500px] md:max-w-700 lg:max-w-1000 2xl:max-w-1400'>
          <p className='mt-10 text-center text-15 sm:text-20 lg:text-25 2xl:text-35'>
            WORKSHOP ARQUITETURAS EVOLUTIVAS E MODULARES NA PRÁTICA.
          </p>
        </div>

        <p className='mt-2.5 text-12 text-subtitle sm:text-14 lg:text-17 2xl:text-20'>
          Aprenda os fundamentos para construir software de qualquer porte de
          forma eficiente.
        </p>
      </div>

      <div className='bg-red sm:flex-column   md:justify-center  lg:flex  lg:justify-between xl:justify-center 2xl:justify-center '>
        <div className='bg-blue mt-10 h-full'>
          <LeftFirstPage />
        </div>
        <div>
          <YoutubeVideo embedId='2IuOyw5BfCQ' />
        </div>
      </div>

      <div className='flex flex-col items-center px-5 pb-10 sm:px-6 sm:pb-16 lg:px-10 2xl:px-14'>
        <p className=' mt-5 max-w-[500px] text-center text-15 sm:mt-10 sm:max-w-[760px] sm:text-20 lg:mt-16 lg:max-w-[1100px] lg:text-25 2xl:mt-20 2xl:max-w-[1600px] 2xl:text-35'>
          Você estuda linguagens, Frameworks, DDD, Arquitetura Hexagonal,
          Arquitetura Limpa e Microsserviços, mas{' '}
          <span className='bg-blueBox text-white'>
            sente que suas soluções não estão entregando valor
          </span>{' '}
          e estão cada vez mais complexas?
        </p>

        <p className='my-7 bg-purpleBox px-2 py-1 text-white sm:my-8 sm:px-3 sm:py-2 sm:text-20 lg:my-10 lg:px-4 lg:py-3 lg:text-25 2xl:px-6 2xl:py-5 2xl:text-40'>
          VOCÊ NÃO ESTÁ SOZINHO!
        </p>

        <p className=' 2xl:mb-18 mb-7 max-w-[500px] text-center text-15 sm:mb-10 sm:max-w-[760px] sm:text-20 lg:mb-14 lg:max-w-[1100px] lg:text-25 2xl:max-w-[1600px] 2xl:text-30'>
          É claro que esses padrões são fundamentais mas isso não significa que
          existam balas de prata ou que existe a “maneira certa”, “arquitetura
          certa” ou o “jeito certo”. Tudo depende do contexto e o mais
          importante é o processo evolutivo e a tomada de decisão.
        </p>

        <p className=' max-w-[500px] text-center text-15 sm:max-w-[760px] sm:text-20 lg:max-w-[1100px] lg:text-25 2xl:max-w-[1600px] 2xl:text-30'>
          Nesse workshop você vai aprender como utilizar os conceitos de
          Arquitetura Evolutiva e Modular para desenvolver projetos de qualquer
          porte, tirando o melhor proveito de cada padrão no{' '}
          <span className='bg-blueBox text-white'>momento certo</span> e se
          tornar um líder técnico eficiente.
        </p>
      </div>
    </section>
  )
}

export default FirstPage
