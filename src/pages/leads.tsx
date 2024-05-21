import Companies from '../components/companies/companies'
import FirstPage from '../components/header-sign-in/firstPage'
import Learn from '../components/learn/learn'
import Modules from '../components/modules/modules'
import Teachers from '../components/teachers/teachers'

function LeadsPage() {
  return (
    <main className='min-h-screen font-segoe font-bold'>
      <FirstPage />
      <Learn />
      <Modules />
      <Teachers />
      <Companies />
    </main>
  )
}

export default LeadsPage
