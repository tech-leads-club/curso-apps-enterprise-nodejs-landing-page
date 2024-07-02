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
    text: 'Monolito vs Microsserviço vs Arquitetura Modular.',
  },
  {
    photo: UnitTestPhoto,
    text: 'Testes e qualidade.',
  },
  {
    photo: ArchitecturePhoto,
    text: 'Arquitetura Modular em grande escala',
  },
  {
    photo: PatternsPhoto,
    text: 'Padrões de arquitetura enterprise como DDD, Arquitetura Hexagonal e Arquitetura Limpa.',
  },
]

const Learn = () => {
  return (
    <section className='relative mt-5  flex flex-col items-center bg-grayBox 2xl:mt-10'>
      <div className='border-1 absolute -top-11 z-[2] flex flex-col items-center justify-center border border-solid border-grayBorder bg-darkBox px-4 py-2 text-center text-15 text-white sm:-top-12 sm:px-5 sm:py-3  sm:text-20 lg:-top-14 lg:px-8 lg:py-4 lg:text-25 2xl:-top-16 2xl:text-40'>
        <p>O QUE VOCÊ VAI APRENDER</p>
      </div>
      <div className='swiper-learn section-container w-full max-w-[1400px] shadow-md'>
        <Swiper
          className='pb-12 pl-5 pt-5 sm:pt-7 lg:px-8 lg:pb-20 lg:pt-12 2xl:pb-28 2xl:pt-20'
          navigation={true}
          modules={[Navigation]}
          slidesPerView={'auto'}
          spaceBetween={30}
          breakpoints={{
            862: {
              slidesPerView: 6,
            },
          }}
        >
          {learnTexts.map((item, index) => (
            <SwiperSlide>
              <div
                key={index}
                className='flex min-h-32 min-w-28 flex-col items-center gap-2 text-center'
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
