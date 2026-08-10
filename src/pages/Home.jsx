import useReveal from '../hooks/useReveal.js'
import Hero from '../components/Hero.jsx'
import Challenge from '../components/Challenge.jsx'
import Journey from '../components/Journey.jsx'
import Services from '../components/Services.jsx'
import WhoWhy from '../components/WhoWhy.jsx'
import Stats from '../components/Stats.jsx'
import WorkPreview from '../components/WorkPreview.jsx'
import Team from '../components/Team.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FinalCta from '../components/FinalCta.jsx'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />
      <Challenge />
      <Journey />
      <Services />
      <WhoWhy />
      <Stats />
      <WorkPreview />
      <Team />
      <Testimonials />
      <FinalCta />
    </>
  )
}
