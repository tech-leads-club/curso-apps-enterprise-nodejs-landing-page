import ArchitecturePhoto from '../../assets/architecture.jpg'
import DecisionPhoto from '../../assets/decision_photo.jpg'
import NodePhoto from '../../assets/node_photo.jpg'
import PatternsPhoto from '../../assets/patterns.jpg'
import UnitTestPhoto from '../../assets/unit_test_photo.jpg'
import VersusPhoto from '../../assets/versus_photo.jpg'
import ArrowIcon from '../icons/arrow'

const learnTexts = [
  {
    photo: NodePhoto,
    text: 'Node.js e NestJS em grande escala.',
  },
  {
    photo: DecisionPhoto,
    text: 'Tomar decisões técnicas efetivas e liderar.',
  },
  {
    photo: VersusPhoto,
    text: 'Monolito vs Microsserviço vs Arquitetura',
  },
  {
    photo: UnitTestPhoto,
    text: 'Testes de unidade, integração e ponta a ponta.',
  },
  {
    photo: ArchitecturePhoto,
    text: 'Arquitetura modular em grande escala',
  },
  {
    photo: PatternsPhoto,
    text: 'Padrões de arquitetura enterprise e quando adotar DDD, Hexagonal',
  },
]

const Learn = () => {
  return (
    <section className='px-5 pt-12 pb-10 relative lg:pt-16 2xl:pt-24'>
      <div className='flex justify-center'>
        <div className='bg-darkBox text-center text-white text-15 absolute -top-5 px-9 py-2 border border-solid border-grayBorder border-1 sm:text-20 sm:-top-6 lg:text-25 2xl:text-40 2xl:-top-8'>
          <p>O QUE VOCÊ VAI APRENDER</p>
        </div>
      </div>
      <div className='flex justify-center bg-grayBox'>
        <div className='bg-white flex gap-2 overflow-x-auto 2xl:max-w-[1400px]'>
          {learnTexts.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center gap-2 min-w-28 min-h-32'
            >
              <img className='w-12 sm:w-12 lg:w-16 2xl:w-24' src={item.photo} />
              <p className='text-12 text-phase '>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learn
