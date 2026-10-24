import Header from '../components/Header'
import HeroContent from '../components/HeroContent'
import heroPizza from '../assets/hero-pizza.jpg'
import MenuSection from '../components/MenuSection'

function HomePage() {
  return (
    <main className="min-h-screen bg-[#111610] text-white">
      <section className="home-hero relative isolate min-h-screen" id="start">
        <img
          alt=""
          aria-hidden="true"
          className="home-hero__image absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
          height={850}
          src={heroPizza}
          width={1042}
        />
        <div aria-hidden="true" className="home-hero__shade absolute inset-0 -z-10" />
        <Header />
        <HeroContent />
      </section>
      <MenuSection />
    </main>
  )
}

export default HomePage
