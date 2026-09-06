import useReveal from '../hooks/useReveal.js'
import Hero from '../components/Hero.jsx'
import Challenge from '../components/Challenge.jsx'
import Services from '../components/Services.jsx'
import Team from '../components/Team.jsx'
import WorkPreview from '../components/WorkPreview.jsx'
import Why from '../components/Why.jsx'
import FinalCta from '../components/FinalCta.jsx'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />
      <WorkPreview />
      <Challenge />
      <Services />
      <Team />
      <Why />
      <FinalCta />
    </>
  )
}
