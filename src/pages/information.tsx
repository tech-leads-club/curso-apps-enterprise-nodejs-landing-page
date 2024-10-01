import CommunityMembers from '../components/community-members/community-members'
import Companies from '../components/companies/companies'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'
import Learn from '../components/learn/learn'
import Modules from '../components/modules/modules'
import Prices from '../components/prices/prices'
import Teachers from '../components/teachers/teachers'
import TechLeadsCommunity from '../components/tl-community/tl-community'

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
function InformationPage() {
  return (
    <main className='min-h-screen font-segoe font-bold'>
      <Header />
      <Learn />
      <Modules modules={dataModules} />
      <TechLeadsCommunity />
      <Teachers />
      <Companies />
      <Prices />
      <CommunityMembers />
      <Footer />
    </main>
  )
}

export default InformationPage
