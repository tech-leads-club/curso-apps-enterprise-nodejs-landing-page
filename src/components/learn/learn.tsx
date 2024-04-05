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
    <section className='pt-12 lg:pt-16 2xl:pt-24'>
      <div className='flex flex-col items-center bg-grayBox shadow-buyBtn'>
        <div className='bg-white max-w-[1400px] flex justify-center learn:-mt-5 shadow-buyBtn'>
          <div className='bg-darkBox text-center text-white text-15 max-w-[1400px]border border-solid border-grayBorder border-1 sm:text-20 lg:text-25 2xl:text-40 learn:-mt-4'>
            <p>O QUE VOCÊ VAI APRENDER</p>
          </div>
        </div>
        <Swiper
          className='bg-white pl-5 pb-8 lg:pl-0 learn:px-16 learn:pb-20 max-w-[1400px]'
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 'auto',
            },
            1024: {
              navigation: false
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
