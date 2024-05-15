import { SyntheticEvent, useState } from 'react'

export default function Form() {
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
    <div className='md:mr-10 lg:mr-10'>
      <div className='flex h-56 w-full items-center justify-center bg-red-800   pl-5 pr-5 sm:h-96  md:max-w-[600px] lg:h-[480px] lg:w-[900px] 2xl:h-[500px] 2xl:w-[1600px]'>
        <div>
          <div className='mb-8  w-9/12 text-left font-segoe font-light lg:text-25'>
            Lorem ipsum dolor sit amet. Ea galisum harum vel distinctio
            voluptatibus non temporibus
          </div>
          <form
            onSubmit={handleSubmit}
            className='w-[65%] rounded-2xl bg-white   shadow-lg md:h-80 lg:h-96'
          >
            <div className='mb-16  flex-col pt-16   text-center'>
              <p className='text-12  md:text-14 lg:text-15'>
                Inscreva-se agora e se prepare para
              </p>
              <p> aprender a escrever software de qualidade!</p>
            </div>
            <div className='mt-3 flex justify-center'>
              <input
                name='name'
                className='w-[83%]  rounded-md border-0 bg-grayBox p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                placeholder='Nome'
                onChange={handleChangeValue}
              />
            </div>
            <div className='mt-3 flex justify-center'>
              <input
                name='email'
                className='w-[83%] rounded-md border-0 bg-grayBox p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                placeholder='E-mail'
                onChange={handleChangeValue}
              />
            </div>
            <div className='mt-3 flex justify-center'>
              <input
                name='phone'
                className='w-[83%] rounded-md border-0 bg-grayBox p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                placeholder='WhatsApp'
                onChange={handleChangeValue}
              />
            </div>
            <div className='mt-4 flex justify-center'>
              <button
                type='submit'
                className='flex w-[83%] justify-center rounded-md bg-blueButtonLight px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  transition-colors hover:bg-blueButtonMiddle'
              >
                GARANTIR MINHA VAGA
              </button>
            </div>
            <div className='flex h-12 w-[115%] justify-end  '>
              <div className=' mb-2 mr-4 h-10 w-10 rounded-lg bg-blue-500'></div>
              <div className=' mb-6 h-6 w-6 rounded-md bg-blue-500'></div>
            </div>
          </form>
          {/* <div className='flex h-16 w-[65%] bg-green-400'> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
