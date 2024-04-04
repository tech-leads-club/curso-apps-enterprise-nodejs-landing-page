interface IYoutubeVideoProps {
  embedId: string
}

const YoutubeVideo = ({ embedId }: IYoutubeVideoProps) => {
  return (
    <div className='mt-10 aspect-w-16 aspect-h-9 flex justify-center'>
      <iframe
        className='h-56 w-full sm:h-96 md:max-w-[800px] md:h-[440px] lg:max-w-[1100px] lg:h-[570px] 2xl:max-w-[1600px] 2xl:h-[600px]'
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