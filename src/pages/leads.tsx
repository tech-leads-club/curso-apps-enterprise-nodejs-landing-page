import Companies from '../components/companies/companies'
import FirstPage from '../components/firstPage/firstPage'
import Learn from '../components/learn/learn'
import Modules from '../components/modules/modules'
import Teachers from '../components/teachers/teachers'

const dataModules = [
  {
    name: 'AULA 1: FUNDAMENTOS DA CONSTRUÇÃO DE SOFTWARE ENTERPRISE',
    topics: [
      'Porque overengineering acontece',
      'Principios da arquitetura evolutiva',
      'Construindo o software certo',
      'Arquitetura simples, flexivel e aberta a mudanças',
      'Designs Patterns fundamentais',
    ],
  },
  {
    name: 'AULA 2: ARQUITETURA MODULAR EM ESCALA',
    topics: [
      'Módulos vs Microsserviços vs Monolitos',
      'Como arquitetar um sistema modular',
      'Comunicação entre módulos',
      'Banco de dados e módulos',
      'Modularização extrema',
    ],
  },
]

function LeadsPage() {
  return (
    <main className='min-h-screen font-segoe font-bold'>
      <FirstPage />
      <Learn />
      <Modules modules={dataModules} />
      <Teachers />
      <Companies renderLastPhrase={false} />
    </main>
  )
}

export default LeadsPage
