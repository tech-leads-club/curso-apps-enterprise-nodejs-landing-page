interface IYoutubeVideoProps {
  embedId: string
}

const YoutubeVideo = ({ embedId }: IYoutubeVideoProps) => {
  return (
    <div className=' aspect-w-12 aspect-h-6 mt-10  flex justify-center '>
      <iframe
        className='sm:w-100% h-56 w-full sm:h-96 md:h-[400px] md:w-full lg:h-[480px] lg:w-[50vw] xl:w-[50vw]  2xl:h-[700px] 2xl:max-w-[1020px] '
        src={`https://www.youtube.com/embed/${embedId}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YoutubeVideo
