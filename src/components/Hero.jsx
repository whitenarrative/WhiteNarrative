import './Hero.css'

const heroVideoUrl = '/hero-reel.mp4'

export default function Hero() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section id="home" className="hero" aria-label="White Narrative showreel">
      <div className="hero__media" aria-hidden="true">
        <video
          className="hero__video"
          autoPlay={!reduceMotion}
          loop={!reduceMotion}
          muted
          playsInline
          preload="auto"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
