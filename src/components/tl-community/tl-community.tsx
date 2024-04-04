import TLCLogo from '../../assets/tlc_logo.jpg'
import TLCPost from '../../assets/tlc_post.png'

const TechLeadsCommunity = () => {
  return (
    <section className='h-tlCommunityBase px-5 sm:px-6 lg:px-10 lg:pt-10 2xl:px-14 2xl:h-tlCommunityXXL'>
      <div className='flex flex-col items-center lg:flex-row lg:items-start lg:justify-center'>
        <p className='text-center text-15 w-75 mt-5 mb-10 sm:text-20 sm:w-500 lg:mt-16 2xl:text-30 2xl:w-800 2xl:mt-28'>
          Tudo isso dentro de{' '}
          <span className='bg-blueBox text-white'>uma comunidade</span> com
          pessoas que querem{' '}
          <span className='bg-blueBox text-white'>entregar valor </span>
          com qualidade,{' '}
          <span className='bg-blueBox text-white'>assim como você.</span>
        </p>
        <div className=' w-80 relative lg:w-110 2xl:w-550'>
          <div className='bg-blueBox absolute left-16 rounded-full w-7 h-7 shadow-tlcBox lg:w-10 lg:h-10 lg:rounded-lg lg:left-24 2xl:w-14 2xl:h-14'></div>
          <div className=' bg-white absolute left-28 z-10 rounded-2xl shadow-tlcBox w-48 p-8 lg:left-44 lg:w-60 2xl:w-90'>
            <img src={TLCLogo} alt='Logo da Tech Leads Club' />
          </div>
          <div className='w-60 left-6 mt-14 absolute lg:w-80 2xl:w-110 2xl:mt-20'>
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
