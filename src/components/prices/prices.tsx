import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import './carousel.css'
import LineCircle from '../icons/LineCircle'

const slides = [
  {
    phase: 'FASE 1',
    title: 'FUNDAMENTOS DA CULTURA DE SOFTWARE',
    points: ['Início', 'BulletPoint 2', 'BulletPoint 3', 'BulletPoint 4'],
    isAvailable: true,
  },
  {
    phase: 'FASE 2',
    title: 'ARQUITETURA MODULAR EM ESCALA',
    points: ['Início', 'BulletPoint 2', 'BulletPoint 3', 'BulletPoint 4'],
    isAvailable: false,
  },
  {
    phase: 'FASE 3',
    title: 'MANTENDO SOFTWARE EM PRODUÇÃO',
    points: ['Início', 'BulletPoint 2', 'BulletPoint 3', 'BulletPoint 4'],
    isAvailable: false,
  },
]

const Prices = () => {
  return (
    <section className='flex flex-col items-center px-5'>
      <p className='bg-darkBox text-white text-center py-2 px-5 border border-solid border-grayBorder border-1 sm:text-20 sm:-top-6 lg:text-25 2xl:text-40 2xl:-top-8'>
        E QUANTO CUSTA?
      </p>
      <p className='mt-3 mb-6 text-15 text-center sm:text-20 sm:mt-4 sm:mb-7 lg:text-25 lg:mt-5 lg:mb-8 2xl:text-35 2xl:mt-7 2xl:mb-10'>
        Quanto antes você fizer parte dessa jornada,{' '}
        <span className='bg-blueBox text-white'>mais barato será!</span>
      </p>
      <Swiper
        className='max-w-[921px]'
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={1.2}
        breakpoints={{
          680: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`min-w-[220px] pt-7 rounded-lg overflow-hidden md:max-w-[297px] ${slide.isAvailable ? 'shadow-priceSlide' : 'bg-notAvailableBody'}`}
            >
              <p
                className={`mb-2.5 px-4 text-15 text-center lg:text-20 ${slide.isAvailable ? 'text-phase' : 'text-notAvailable'}`}
              >
                {slide.phase}
              </p>
              <p className='max-w-[90%] px-4 text-11 lg:text-15'>{slide.title}</p>
              <div className='mt-3 px-4 flex flex-col gap-1.5 text-11 lg:text-15 lg:mt-4 text-bullets'>
                {slide.points.map((point, index) => (
                  <p
                    key={index}
                    className={`pl-4 py-1 rounded-md shadow-slideBP lg:pl-6  ${slide.isAvailable ? '' : 'text-notAvailable'}`}
                  >
                    {point}
                  </p>
                ))}
              </div>
              <p
                className={`mt-14 py-4 text-10 text-center text-white lg:mt-16 ${slide.isAvailable ? 'bg-available' : 'bg-notAvailableFooter'}`}
              >
                {slide.isAvailable ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <LineCircle />
      </Swiper>
      <div className='flex flex-col gap-3 mt-4 items-center'>
        <p className='text-center text-12 sm:text-14 lg:text-17 2xl:text-20'>
          Compre o acesso anual a todas as fases por apenas R$000,00.
        </p>
        <p className='text-center text-12 sm:text-14 lg:text-17 2xl:text-20'>
          A cada nova fase o valor aumentará R$000,00;
        </p>
        <p className='text-center text-12 sm:text-14 lg:text-17 2xl:text-20'>
          Entre em contato para compras para times ou empresas.
        </p>
      </div>
      <div className='flex flex-col items-center text-center mt-8 gap-3'>
        <a
          className='text-white bg-buyNowBtn w-60 py-3 rounded-3xl shadow-buyBtn sm:text-14 sm:w-64 lg:w-72 lg:text-20 2xl:text-25 2xl:w-[340px]'
          href=''
        >
          COMPRAR AGORA
        </a>
        <a
          className='text-12 py-4 rounded-3xl w-60 shadow-buyBtn sm:w-64 lg:text-14 lg:w-72 2xl:text-15 2xl:w-[340px]'
          href=''
        >
          Ficou com dúvida? Fale com a gente
        </a>
      </div>
    </section>
  )
}

export default Prices
