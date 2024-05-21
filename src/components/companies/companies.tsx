import AtlassianLogo from '../../assets/atlassian_logo.jpg'
import MeltwaterLogo from '../../assets/meltwater_logo.jpg'
import ThoughtworksLogo from '../../assets/thoughtworks_logo.jpg'

type props = {
  renderLastPhrase?: boolean
}
const Companies = (props: props) => {
  return (
    <section className='mb-9 mt-7 flex flex-col items-center px-5'>
      <p className='text-12 text-subtitle sm:text-20 lg:text-25 2xl:text-35'>
        ALGUMAS EMPRESAS QUE TRABALHARAM
      </p>
      <div className='mt-5 flex w-full items-center justify-center gap-6 sm:gap-10 lg:gap-14 2xl:gap-16'>
        <img
          className='h-3 w-24 sm:h-5 sm:w-40 lg:h-7 lg:w-60 2xl:h-11 2xl:w-90 '
          src={AtlassianLogo}
          alt='Logotipo da Atlassian'
        />
        <img
          className='h-3 w-24 sm:h-5 sm:w-44 lg:h-7 lg:w-60 2xl:h-11 2xl:w-90'
          src={MeltwaterLogo}
          alt='Logotipo da Meltwater'
        />
        <img
          className='h-3 w-24 sm:h-5 sm:w-44 lg:h-7 lg:w-60 2xl:h-11 2xl:w-90'
          src={ThoughtworksLogo}
          alt='Logotipo da thoughtworks'
        />
      </div>
      {props.renderLastPhrase === false || (
        <div className='mt-8 text-center text-15 text-community sm:mt-12 sm:text-20 lg:mt-16 lg:text-25 2xl:mt-24 2xl:text-35'>
          <p className='max-w-[500px] sm:max-w-[540px] lg:max-w-[670px] 2xl:max-w-[930px]'>
            E <span className='bg-blueBox text-white'>UMA COMUNIDADE</span>{' '}
            INTEIRA COM PESSOAS QUE TEM A MISSÃO{' '}
            <span className='bg-blueBox text-white'>
              DE ENTREGAR VALOR COM QUALIDADE!
            </span>
          </p>
        </div>
      )}
    </section>
  )
}

export default Companies
