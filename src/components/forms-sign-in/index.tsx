import { SyntheticEvent, useState } from 'react'

export default function LeftFirstPage() {
  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm((dataForm) => ({
      ...dataForm,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    // Enviar pra API - salvar no Contexto
    console.log(dataForm)
  }

  return (
    <div >
      <div className='flex h-[25rem] w-full items-center justify-center  pr-5   sm:h-96  md:w-full  lg:h-[480px] lg:w-[50vw] 2xl:h-[700px] 2xl:w-[49vw] '>
        <div className='flex flex-col items-center justify-center lg:ml-10 xl:ml-20 2xl:ml-10'>
          <div className=' lg:text-18 mb-4 w-[60%] text-left  font-segoe font-light sm:mb-8 xl:mb-10 2xl:mb-16 2xl:w-[55%] 2xl:text-30'>
            Lorem ipsum dolor sit amet. Ea galisum harum vel distinctio
            voluptatibus non temporibus
          </div>
          <form
            onSubmit={handleSubmit}
            className='relative h-80 w-[70%] rounded-2xl bg-colorForms shadow-lg sm:w-[60%] md:h-80   lg:h-[24rem] lg:w-[70%] xl:h-[22rem] xl:w-[60%] 2xl:h-[32rem] 2xl:w-[55%] '
          >
            <div className=' mb-8 flex-col pt-8 text-center text-12 lg:mb-12 lg:text-12  xl:mb-10 xl:text-15 2xl:mb-20 2xl:pt-12 2xl:text-15'>
              <p className='text-12  md:text-14 lg:text-15 '>
                Inscreva-se agora e se prepare para
              </p>
              <p> aprender a escrever software de qualidade!</p>
            </div>
            <div className='mt-3 flex justify-center'>
              <input
                name='name'
                className='w-[85%]  rounded-md border-0 bg-grayBox p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-3 md:leading-5 lg:leading-7 2xl:leading-10'
                placeholder='Nome'
                onChange={handleChangeValue}
              />
            </div>
            <div className='mt-3 flex justify-center xl:mt-3 2xl:mt-6'>
              <input
                name='email'
                className='w-[85%] rounded-md border-0 bg-grayBox p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-3 md:leading-5 lg:leading-7 2xl:leading-10'
                placeholder='E-mail'
                onChange={handleChangeValue}
              />
            </div>
            <div className='mt-3 flex justify-center xl:mt-3 2xl:mt-6'>
              <input
                name='phone'
                className='w-[85%] rounded-md border-0 bg-grayBox p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-3 md:leading-5 lg:leading-7 2xl:leading-10'
                placeholder='WhatsApp'
                onChange={handleChangeValue}
              />
            </div>
            <div className='mt-6 flex justify-center lg:mt-8 xl:mt-6 2xl:mt-8 '>
              <button
                type='submit'
                className='flex w-[85%] justify-center rounded-md bg-blueButtonLight  px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blueButtonMiddle sm:leading-5  md:leading-6 lg:leading-7  2xl:leading-10'
              >
                GARANTIR MINHA VAGA
              </button>
            </div>
            <div className='flex'>
              <div className='absolute bottom-[-1.2rem] right-[-2rem]  mb-2 mr-5 h-8 w-8 rounded-lg bg-blue-500 sm:h-[2.3rem] sm:w-[2.3rem]  '></div>
              <div className='absolute bottom-1 right-[-2.3rem] mb-6 h-6 w-6 rounded-md bg-blue-500  '></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
