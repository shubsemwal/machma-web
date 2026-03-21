import './App.css'
import Footer from './components/Footer'
import MachmaAbout from './components/MachmaAbout'
import MachmaHero from './components/MachmaHero'
import MachmaInvitation from './components/MachmaInvitation'
import MachmaReport from './components/MachmaReport'
import MachmaSponsors from './components/MachmaSponsors'
import MachmaVisitorProfile from './components/MachmaVisitorProfile'
import MachmaWhyJoin from './components/MachmaWhyJoin'

function App() {
  return (
    <>
    <MachmaHero />
    <MachmaAbout />
    <MachmaReport />
    <MachmaWhyJoin />
    <MachmaInvitation />
    <MachmaVisitorProfile />
    <MachmaSponsors />
    <Footer />
    </>
  )
}

export default App
