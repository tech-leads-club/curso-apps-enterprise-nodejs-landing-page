import Companies from '../components/companies/companies'
import FirstPage from '../components/firstPage/firstPage'
import Learn from '../components/learn/learn'
import Modules from '../components/modules/modules'
import Teachers from '../components/teachers/teachers'

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
