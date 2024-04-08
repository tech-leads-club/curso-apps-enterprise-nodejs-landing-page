const dataModules = [
  {
    name: 'FUNDAMENTOS DE CONSTRUÇÃO DE SOFTWARE ENTERPRISE',
    topics: [
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
    ],
  },
  {
    name: 'ARQUITETURA MODULAR EM ESCALA',
    topics: [
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
    ],
  },
  {
    name: 'MANTENDO SOFTWARE EM PRODUÇÃO',
    topics: [
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
      'Bla bla bla bla',
    ],
  },
]

const Modules = () => {
  return (
    <div className='flex flex-col items-center gap-6 bg-grayBox py-9 lg:flex-row lg:justify-center lg:py-20 2xl:py-28'>
      {dataModules.map((module) => (
        <div
          key={module.name}
          className='flex w-64 flex-col gap-5 lg:w-80 lg:gap-6 2xl:w-100 2xl:gap-8'
        >
          <div className='rounded-2xl bg-module text-center text-11 text-moduleTitle shadow-base sm:text-12 lg:text-15 2xl:text-20'>
            <div className='flex h-24 items-center justify-center lg:h-28 2xl:h-36'>
              <p>{module.name}</p>
            </div>
          </div>
          <div className='flex flex-col gap-1.5 text-white'>
            {module.topics.map((topic, index) => (
              <div
                key={index}
                className='flex items-center gap-2 rounded-md bg-listItemBox px-3 py-1 2xl:py-1.5'
              >
                <div className='h-1.5 w-1.5 rounded-full bg-white lg:h-2 lg:w-2 2xl:h-2.5 2xl:w-2.5'></div>
                <span className='text-11 sm:text-12 lg:text-15 2xl:text-20'>
                  {topic}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Modules
