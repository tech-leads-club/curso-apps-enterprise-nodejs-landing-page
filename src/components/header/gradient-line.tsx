const GradientLine = () => {
  return (
    <svg
      className="my-2 w-[193px] sm:w-[220px] sm:my-3 lg:w-[300px] 2xl:w-[377px]"
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='377'
      height='5'
      viewBox='0 0 377 5'
    >
      <defs>
        <radialGradient
          id='radial-gradient'
          cx='0.5'
          cy='0.5'
          r='0.47'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0' stopColor='#4f72ff' />
          <stop offset='1' stopColor='#4476ff' stopOpacity='0' />
        </radialGradient>
      </defs>
      <rect
        id='Rectangle_4'
        data-name='Rectangle 4'
        width='377'
        height='5'
        fill='url(#radial-gradient)'
      />
    </svg>
  )
}

export default GradientLine