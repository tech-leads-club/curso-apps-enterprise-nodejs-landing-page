const LineCircle = () => {
  return (
    <svg
      className='mt-4 hidden w-[95%] prices:flex'
      viewBox='0 0 840 20'
      shapeRendering='geometricPrecision'
      textRendering='geometricPrecision'
    >
      <line
        x1='-114.186853'
        y1='0'
        x2='685.813147'
        y2='0'
        transform='translate(126.186853 9.999998)'
        fill='none'
        stroke='#707070'
        strokeWidth='2'
        strokeOpacity='0.2'
      />
      <ellipse
        rx='8'
        ry='8.961868'
        transform='matrix(1 0 0 0.892671 820 10)'
        fill='none'
        stroke='#707070'
        strokeWidth='0.7'
        strokeOpacity='0.2'
      />
    </svg>
  )
}

export default LineCircle