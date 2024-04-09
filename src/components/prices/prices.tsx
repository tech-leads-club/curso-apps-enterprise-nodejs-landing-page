import { parse } from 'date-fns/parse'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import LineCircle from '../icons/LineCircle'
import './carousel.css'

const slides = [
  {
    phase: 'FASE 1',
    title: 'FUNDAMENTOS DA CULTURA DE SOFTWARE',
    points: ['Início', 'BulletPoint 2', 'BulletPoint 3', 'BulletPoint 4'],
    isAvailable: true,
    date: '01/01/24',
  },
  {
    phase: 'FASE 2',
    title: 'ARQUITETURA MODULAR EM ESCALA',
    points: ['Início', 'BulletPoint 2', 'BulletPoint 3', 'BulletPoint 4'],
    isAvailable: false,
    date: '08/05/24',
  },
  {
    phase: 'FASE 3',
    title: 'MANTENDO SOFTWARE EM PRODUÇÃO',
    points: ['Início', 'BulletPoint 2', 'BulletPoint 3', 'BulletPoint 4'],
    isAvailable: false,
    date: '23/06/24',
  },
]

const Prices = () => {
  return (
    <section className='flex flex-col items-center px-5'>
      <p className='border-1 border border-solid border-grayBorder bg-darkBox px-5 py-2 text-center text-white sm:-top-6 sm:text-20 lg:text-25 2xl:-top-8 2xl:text-40'>
        E QUANTO CUSTA?
      </p>
      <p className='mb-6 mt-3 text-center text-15 sm:mb-7 sm:mt-4 sm:text-20 lg:mb-8 lg:mt-5 lg:text-25 2xl:mb-10 2xl:mt-7 2xl:text-35'>
        Quanto antes você fizer parte dessa jornada,{' '}
        <span className='bg-blueBox text-white'>mais barato será!</span>
      </p>
      <Swiper
        className='max-w-[921px]'
        spaceBetween={15}
        centeredSlides={true}
        slidesPerView={1.3}
        breakpoints={{
          375: {
            slidesPerView: 1.4,
          },
          450: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 10,
            centeredSlides: false,
          },
        }}
      >
        {slides.map((slide, index) => {
          const slideDate = parse(slide.date, 'dd/MM/yy', new Date())
          const isAvailable = slideDate <= new Date()
          return (
            <SwiperSlide key={index}>
              <div
                className={`flex h-[308px] w-[220px] flex-col justify-between overflow-hidden rounded-lg pt-7 md:max-w-[297px] lg:h-[390px] lg:w-[297px] 2xl:h-[416px] ${isAvailable ? 'shadow-priceSlide' : 'bg-notAvailableBody'}`}
              >
                <div>
                  <p
                    className={`mb-2.5 px-4 text-center text-15 lg:text-20 ${isAvailable ? 'text-phase' : 'text-notAvailable'}`}
                  >
                    {slide.phase}
                  </p>
                  <p className='max-w-[90%] px-4 text-11 lg:text-15'>
                    {slide.title}
                  </p>
                  <div className='mt-3 flex flex-col gap-1.5 px-4 text-11 text-bullets lg:mt-4 lg:text-15'>
                    {slide.points.map((point, index) => (
                      <p
                        key={index}
                        className={`rounded-md py-1 pl-4 shadow-slideBP lg:pl-6  ${isAvailable ? '' : 'text-notAvailable'}`}
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
                {!isAvailable && (
                  <div className='text-8 self-center rounded-md px-2 py-1.5 text-date shadow-slideBP lg:px-3 lg:py-2.5 lg:text-11 2xl:text-12'>
                    DISPONÍVEL EM {slide.date}
                  </div>
                )}
                <p
                  className={`py-4 text-center text-10 text-white ${isAvailable ? 'bg-available' : 'bg-notAvailableFooter'}`}
                >
                  {isAvailable ? 'DISPONÍVEL' : 'INDISPONÍVEL'}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
        <LineCircle />
      </Swiper>
      <div className='mt-4 flex flex-col items-center gap-3'>
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
      <div className='mt-8 flex flex-col items-center gap-3 text-center'>
        <a
          className='w-60 rounded-3xl bg-buyNowBtn py-3 text-white shadow-buyBtn sm:w-64 sm:text-14 lg:w-72 lg:text-20 2xl:w-[340px] 2xl:text-25'
          href=''
        >
          COMPRAR AGORA
        </a>
        <a
          className='w-60 rounded-3xl py-4 text-12 shadow-buyBtn sm:w-64 lg:w-72 lg:text-14 2xl:w-[340px] 2xl:text-15'
          href=''
        >
          Ficou com dúvida? Fale com a gente
        </a>
      </div>
    </section>
  )
}

export default Prices
