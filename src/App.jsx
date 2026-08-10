import useReveal from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Challenge from './components/Challenge.jsx'
import Journey from './components/Journey.jsx'
import Services from './components/Services.jsx'
import WhoWhy from './components/WhoWhy.jsx'
import Stats from './components/Stats.jsx'
import Work from './components/Work.jsx'
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'
import BehindTheScenes from './components/BehindTheScenes.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <Journey />
        <Services />
        <WhoWhy />
        <Stats />
        <Work />
        <Team />
        <Testimonials />
        <BehindTheScenes />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
