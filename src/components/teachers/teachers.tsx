import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import DevLabCastPhoto from '../../assets/devlabcast.jpg'
import WaldemarPhoto from '../../assets/waldemar.jpg'
import WillianPhoto from '../../assets/willian.jpg'
import WillianWaldemarPhoto from '../../assets/willian_waldemar.jpg'
import YoutubePhoto from '../../assets/youtube.jpg'

import linkedin from '../../assets/icons/linkedin.svg'
import instagram from '../../assets/icons/instagram.svg'
import youtube from '../../assets/icons/youtube.svg'
import github from '../../assets/icons/github.svg'

import './carousel.css'

const teachersData = [
  {
    name: 'Waldemar Neto',
    subtitle: 'Tech Advisor | Autor | Mentor',
    description:
      'Waldemar Neto, enquanto na Atlassian, foi um dos líderes técnicos do desenvolvimento da plataforma de plugins Forge. Seu time foi o maior usuário de Lambda de toda a Ásia/Pacifico.',
    photo: WaldemarPhoto,
    linkedin_url: 'https://www.linkedin.com/in/waldemarnt/',
    instagram_url: 'https://www.instagram.com/waldemar.devlab/',
    youtube_url: 'https://www.youtube.com/@WaldemarNetoDevLab',
    github_url: '',
  },
  {
    name: 'William Calderipe',
    subtitle: 'Staff Engineer | Tech Lead | Mentor',
    description:
      'William Calderipe, enquanto na ThoughtWorks, foi um dos líderes técnicos na fusão de Lan e Tam que originou a Latam, um projeto de anos que envolveu a refatoração de diversos sistemas de grande escala.',
    photo: WillianPhoto,
    linkedin_url: 'https://www.linkedin.com/in/wcalderipe/',
    github_url: '',
  },
]

const Teachers = () => {
  return (
    <section className='teachers relative flex flex-col items-center bg-darkBlueBox px-5 pt-20 sm:pb-10 lg:pt-24 2xl:pt-36'>
      <div className='border-1 absolute -top-5 m-auto border border-solid border-grayBorder bg-darkBox px-9 py-2 text-15 text-white sm:-top-6 sm:text-20 lg:text-25 2xl:-top-9 2xl:text-40'>
        <p className='text-center'>COM QUEM VOCÊ VAI APRENDER</p>
      </div>
      <div className='flex flex-col gap-14 md:flex-row'>
        {teachersData.map((teacher, index) => (
          <div
            key={teacher.name + index}
            className='relative flex min-w-72 max-w-788 flex-1 flex-col items-center rounded-2xl bg-white text-center '
          >
            <div className='absolute -top-8 m-auto w-28 rounded-full bg-white lg:-top-12 lg:w-40 2xl:-top-20 2xl:w-60'>
              <div className='flex flex-col items-center justify-center p-1.5'>
                <img
                  className='rounded-full'
                  src={`${teacher.photo}`}
                  alt={`Foto de ${teacher.name}`}
                />
              </div>
            </div>
            <div className='mt-20 px-8 lg:mt-28 lg:px-12 2xl:mt-36 2xl:px-20'>
              <p className='my-1 text-17 lg:text-25 2xl:text-40'>
                {teacher.name}
              </p>
              <p className='mb-1 text-12 font-normal lg:mb-2 lg:text-14 2xl:mb-1 2xl:text-15'>
                {teacher.subtitle}
              </p>
              <div className='flex  items-center justify-center'>
                {teacher.linkedin_url && (
                  <a href={teacher.linkedin_url} target='_blank'>
                    <img className='h-12 w-12' src={`${linkedin}`}></img>
                  </a>
                )}
                {teacher.instagram_url && (
                  <a href={teacher.instagram_url} target='_blank'>
                    <img className='h-12 w-12' src={`${instagram}`}></img>
                  </a>
                )}
                {teacher.youtube_url && (
                  <a href={teacher.youtube_url} target='_blank'>
                    <img className='h-12 w-12' src={`${youtube}`}></img>
                  </a>
                )}
                {teacher.github_url && (
                  <a href={teacher.github_url} target='_blank'>
                    <div className='flex h-12 w-12'>
                      <img className='m-auto h-8 w-8' src={`${github}`}></img>
                    </div>
                  </a>
                )}
              </div>
              <p className='mb-12 text-15 text-description'>
                {teacher.description}
              </p>
            </div>
            <div className='absolute bottom-1.5 right-1.5 h-3.5 w-3.5 rounded-full bg-darkBlueBox lg:h-6 lg:w-6 2xl:h-8 2xl:w-8'></div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center text-center'>
        <p className='mb-3.5 mt-8 text-15 text-white'></p>
      </div>
      <Swiper
        className='max-w-[1632px] pb-14 sm:pb-0'
        slidesPerView={1.15}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img
            className='h-full w-full rounded-3xl'
            src={WillianWaldemarPhoto}
            alt='Conversa entre Willian e Waldemar'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='h-full w-full rounded-3xl'
            src={DevLabCastPhoto}
            alt='Converrsa no Devlabcast'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='h-full w-full rounded-3xl'
            src={YoutubePhoto}
            alt='Foto do Youtube'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Teachers
