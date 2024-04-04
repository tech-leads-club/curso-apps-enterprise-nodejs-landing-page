import waldemar from '../../assets/waldemar.jpg'

const members = [
  {
    name: 'Iglan Cardeal',
    occupation: 'Back-End NodeJS/ Java Developer',
    description:
      'Seria um bom tópico inclusive para incluir no curso. Apesar de eu usar docker, acho que existem maneiras de melhorar a ponto de executar 1 comando, apenas, no terminal e já ter o ambiente pronto para testar localmente.',
    photo: waldemar,
  },
  {
    name: 'Pedro Brun',
    occupation: 'Software Engineer',
    description:
      'Muito curioso sobre o que vai resultar dessa MagicAI. Tá cada vez mais claro que a AI veio pra levantar a régua da profissão, já que o básico ficou muito mais fácil de ser feito.',
    photo: waldemar,
  },
  {
    name: 'Renato Vicente',
    occupation: 'Software Engineer',
    description:
      'Não sou um tech lead 😆, porém, demonstrar que você não é um adversário da equipe, nem está lá para iniciar uma espécie de inquisição às caças às bruxas, é uma das atitudes mais positivas que você pode tomar.',
    photo: waldemar,
  },
]

const CommunityMembers = () => {
  return (
    <section className='px-5 mt-12 flex flex-col items-center sm:mt-14 lg:mt-16 2xl:mt-20'>
      <p className='text-communityMemberTitle text-center text-15 sm:text-20 lg:text-25 2xl:text-35'>
        VEJA O QUE OS MEMBROS DA COMUNIDADE TEM A DIZER
      </p>
      <div className='mt-9 flex flex-col gap-16 sm:mt-16 lg:flex-row lg:gap-2 lg:mt-24 2xl:mt-36 2xl:gap-10'>
        {members.map((member, index) => (
          <div
            key={index}
            className='flex flex-col gap-4 w-80 items-start 2xl:w-100'
          >
            <div className='flex gap-2 items-center'>
              <img className='w-16 sm: 2xl:w-24' src={member.photo} alt='' />
              <div className='flex flex-col gap-1 items-start'>
                <p className='text-14 text-communityMemberTitle sm:text-15 lg:text-17 2xl:text-20'>
                  {member.name}
                </p>
                <p className='text-11 font-normal text-communityMemberTitle sm:text-12 lg:text-14 2xl:text-15'>
                  {member.occupation}
                </p>
              </div>
            </div>
            <p className='text-12 text-communityMemberTitle pl-8 2xl:pl-10'>
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CommunityMembers
