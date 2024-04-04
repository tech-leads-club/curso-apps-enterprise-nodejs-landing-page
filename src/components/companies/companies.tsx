import AtlassianLogo from '../../assets/atlassian_logo.jpg'
import MeltwaterLogo from '../../assets/meltwater_logo.jpg'
import ThoughtworksLogo from '../../assets/thoughtworks_logo.jpg'

const Companies = () => {
  return (
    <section className='flex flex-col items-center mt-7 mb-9 px-5'>
      <p className='text-12 text-subtitle sm:text-20 lg:text-25 2xl:text-35'>
        ALGUMAS EMPRESAS QUE TRABALHARAM
      </p>
      <div className='mt-5 w-full flex justify-center gap-6 items-center sm:gap-10 lg:gap-14 2xl:gap-16'>
        <img
          className='w-24 h-3 sm:w-40 sm:h-5 lg:w-60 lg:h-7 2xl:w-90 2xl:h-11 '
          src={AtlassianLogo}
          alt='Logotipo da Atlassian'
        />
        <img
          className='w-24 h-3 sm:w-44 sm:h-5 lg:w-60 lg:h-7 2xl:w-90 2xl:h-11'
          src={MeltwaterLogo}
          alt='Logotipo da Meltwater'
        />
        <img
          className='w-24 h-3 sm:w-44 sm:h-5 lg:w-60 lg:h-7 2xl:w-90 2xl:h-11'
          src={ThoughtworksLogo}
          alt='Logotipo da thoughtworks'
        />
      </div>
      <div className='mt-8 text-center text-15 text-community sm:text-20 sm:mt-12 lg:mt-16 lg:text-25 2xl:mt-24 2xl:text-35'>
        <p className='max-w-[300px] sm:max-w-[540px] lg:max-w-[670px] 2xl:max-w-[930px]'>
          E <span className='bg-blueBox text-white'>UMA COMUNIDADE</span>{' '}
          INTEIRA COM PESSOAS QUE TEM A MISSÃO{' '}
          <span className='bg-blueBox text-white'>
            DE ENTREGAR VALOR COM QUALIDADE!
          </span>
        </p>
      </div>
    </section>
  )
}

export default Companies