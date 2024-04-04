import 'swiper/css'
import 'swiper/css/pagination'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import DevLabCastPhoto from '../../assets/devlabcast.jpg'
import WaldemarPhoto from '../../assets/waldemar.jpg'
import WillianPhoto from '../../assets/willian.jpg'
import WillianWaldemarPhoto from '../../assets/willian_waldemar.jpg'
import YoutubePhoto from '../../assets/youtube.jpg'

const teachersData = [
  {
    name: 'Waldemar Neto',
    subtitle: 'Subtitulo, cargo, empresa etc...',
    description:
      'Waldemar Neto, enquanto na Atlassian, foi um dos líderes técnicos do desenvolvimento da plataforma de plugins Forge. Seu time foi o maior usuário de Lambda de toda a Ásia/Pacifico.',
    photo: WaldemarPhoto,
  },
  {
    name: 'William Calderipe',
    subtitle: 'Subtitulo, cargo, empresa etc...',
    description:
      'William Calderipe, enquanto na ThoughtWorks, foi um dos líderes técnicos na fusão de Lan e Tam que originou a Latam, um projeto de anos que envolveu a refatoração de diversos sistemas de grande escala.',
    photo: WillianPhoto,
  },
]

const Teachers = () => {
  return (
    <section className='px-5 pt-20 pb-10 bg-darkBlueBox relative flex flex-col items-center lg:pt-24 2xl:pt-36'>
      <div className='bg-darkBox text-white text-15 absolute -top-5 px-9 py-2 m-auto border border-solid border-grayBorder border-1 sm:text-20 sm:-top-6 lg:text-25 2xl:text-40 2xl:-top-9'>
        <p className='text-center'>COM QUEM VOCÊ VAI APRENDER</p>
      </div>
      <div className='flex flex-col gap-14 md:flex-row'>
        {teachersData.map((teacher) => (
          <div
            key={teacher.name}
            className='flex flex-col items-center w-80 text-center bg-white rounded-2xl relative lg:w-110 2xl:w-700'
          >
            <div className='bg-white rounded-full absolute m-auto w-28 -top-8 lg:w-40 lg:-top-12 2xl:w-60 2xl:-top-20'>
              <div className='flex flex-col items-center justify-center p-1.5'>
                <img
                  className='rounded-full'
                  src={`${teacher.photo}`}
                  alt={`Foto de ${teacher.name}`}
                />
              </div>
            </div>
            <div className='mt-20 px-8 lg:mt-28 lg:px-12 2xl:mt-36 2xl:px-20'>
              <p className='text-17 my-1 lg:text-25 2xl:text-40'>
                {teacher.name}
              </p>
              <p className='text-12 font-normal mb-2.5 lg:text-14 lg:mb-4 2xl:text-15 2xl:mb-6'>
                {teacher.subtitle}
              </p>
              <p className='text-15 text-description mb-12'>
                {teacher.description}
              </p>
            </div>
            <div className='bg-darkBlueBox w-3.5 h-3.5 rounded-full absolute bottom-1.5 right-1.5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8'></div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center text-center'>
        <p className='text-white text-15 mt-8 mb-3.5'>TEXTO SOBRE AS IMAGENS</p>
        <div className='w-[375px] md:hidden '>
          <Swiper
            spaceBetween={10}
            centeredSlides={true}
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img className='w-90 rounded-3xl' src={WillianWaldemarPhoto} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-90 rounded-3xl' src={DevLabCastPhoto} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className='w-90 rounded-3xl' src={YoutubePhoto} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='hidden md:flex gap-2 2xl:gap-4'>
          <img className='max-w-56 lg:max-w-[310px] 2xl:max-w-[475px] rounded-3xl' src={WillianWaldemarPhoto} alt='' />
          <img className='max-w-56 lg:max-w-[310px] 2xl:max-w-[475px] rounded-3xl' src={DevLabCastPhoto} alt='' />
          <img className='max-w-56 lg:max-w-[310px] 2xl:max-w-[475px] rounded-3xl' src={YoutubePhoto} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Teachers
