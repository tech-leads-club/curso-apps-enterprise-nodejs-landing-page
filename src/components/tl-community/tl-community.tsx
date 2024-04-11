import TLCLogo from '../../assets/tlc_logo.jpg'
import TLCPost from '../../assets/tlc_post.png'

const TechLeadsCommunity = () => {
  return (
    <section className='h-tlCommunityBase px-5 sm:px-6 lg:px-10 lg:pt-10 2xl:h-tlCommunityXXL 2xl:px-14'>
      <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-center'>
        <p className='mb-10 mt-5 max-w-[550px] text-center text-15 sm:max-w-[800px] sm:text-20 lg:mt-16 lg:max-w-[550px] 2xl:mt-28 2xl:max-w-[800px] 2xl:text-30'>
          Tudo isso dentro de{' '}
          <span className='bg-blueBox text-white'>uma comunidade</span> com
          pessoas que querem{' '}
          <span className='bg-blueBox text-white'>entregar valor </span>
          com qualidade,{' '}
          <span className='bg-blueBox text-white'>assim como você.</span>
        </p>
        <div className=' relative w-80 lg:w-110 2xl:w-550'>
          <div className='absolute left-16 h-7 w-7 rounded-full bg-blueBox shadow-tlcBox lg:left-24 lg:h-10 lg:w-10 lg:rounded-lg 2xl:h-14 2xl:w-14'></div>
          <div className=' absolute left-28 z-10 w-48 rounded-2xl bg-white p-8 shadow-tlcBox lg:left-44 lg:w-60 2xl:w-90'>
            <img src={TLCLogo} alt='Logo da Tech Leads Club' />
          </div>
          <div className='absolute left-6 mt-14 w-60 lg:w-80 2xl:mt-20 2xl:w-110'>
            <img
              src={TLCPost}
              alt='Post feito por Waldemar no Tech Leads Club'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechLeadsCommunity
