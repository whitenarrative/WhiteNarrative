import './Hero.css'

const heroDesktopVideoUrl = '/hero-reel-desktop.mp4'
const heroMobileVideoUrl = '/hero-reel-mobile.mp4'

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
          <source media="(max-width: 640px)" src={heroMobileVideoUrl} type="video/mp4" />
          <source src={heroDesktopVideoUrl} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
