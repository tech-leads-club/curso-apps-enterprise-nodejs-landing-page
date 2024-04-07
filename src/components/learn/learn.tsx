import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import './carousel.css'
import ArchitecturePhoto from '../../assets/architecture.jpg'
import DecisionPhoto from '../../assets/decision_photo.jpg'
import NodePhoto from '../../assets/node_photo.jpg'
import PatternsPhoto from '../../assets/patterns.jpg'
import UnitTestPhoto from '../../assets/unit_test_photo.jpg'
import VersusPhoto from '../../assets/versus_photo.jpg'

const learnTexts = [
  {
    photo: NodePhoto,
    text: 'Node.js e NestJS em grande escala.',
  },
  {
    photo: DecisionPhoto,
    text: 'Tomar decisões técnicas efetivas e liderar.',
  },
  {
    photo: VersusPhoto,
    text: 'Monolito vs Microsserviço vs Arquitetura',
  },
  {
    photo: UnitTestPhoto,
    text: 'Testes de unidade, integração e ponta a ponta.',
  },
  {
    photo: ArchitecturePhoto,
    text: 'Arquitetura modular em grande escala',
  },
  {
    photo: PatternsPhoto,
    text: 'Padrões de arquitetura enterprise e quando adotar DDD, Hexagonal',
  },
]

const Learn = () => {
  return (
    <section className='relative mt-5  2xl:mt-10 flex flex-col items-center bg-grayBox'>
      <div className='bg-darkBox text-center text-15 sm:text-20 lg:text-25 2xl:text-40 py-2 px-4 sm:py-3 sm:px-5 lg:py-4 lg:px-8 border border-solid border-grayBorder border-1 -top-11 sm:-top-12 lg:-top-14 2xl:-top-16  text-white z-[2] flex flex-col items-center justify-center absolute'>
        <p>O QUE VOCÊ VAI APRENDER</p>
      </div>
      <div className='swiper-learn max-w-[1400px] w-full section-container shadow-md'>
        <Swiper
          className='pb-12 pl-5 pt-5 sm:pt-7 lg:px-8 lg:pt-12 lg:pb-20 2xl:pt-20 2xl:pb-28'
          navigation={true}
          modules={[Navigation]}
          slidesPerView={'auto'}
          spaceBetween={30}
          breakpoints={{
            862: {
              slidesPerView: 6
            }
          }}
        >
          {learnTexts.map((item, index) => (
            <SwiperSlide>
              <div
                key={index}
                className='flex flex-col items-center text-center gap-2 min-w-28 min-h-32'
              >
                <img
                  className='w-12 sm:w-12 lg:w-16 2xl:w-24'
                  src={item.photo}
                />
                <p className='text-12 text-phase md:text-14 lg:text-15'>
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Learn
