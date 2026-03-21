import './App.css'
import ExpoSection from './components/ExpoSection'
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
    <MachmaVisitorProfile />
    <MachmaSponsors />
    <ExpoSection />
    <MachmaInvitation />
    <Footer />
    </>
  )
}

export default App
