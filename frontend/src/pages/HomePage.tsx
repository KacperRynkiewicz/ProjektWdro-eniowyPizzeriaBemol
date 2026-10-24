import './HomePage.css'
import Header from '../components/Header'
import HeroContent from '../components/HeroContent'
import heroPizza from '../assets/hero-pizza.jpg'
import MenuSection from '../components/MenuSection'

function HomePage() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <section className="relative isolate min-h-screen" id="start">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center] sm:object-[65%_center]"
          fetchPriority="high"
          height={850}
          src={heroPizza}
          width={1042}
        />
        <div aria-hidden="true" className="hero-shade absolute inset-0 -z-10" />
        <Header />
        <HeroContent />
      </section>
      <MenuSection />
    </main>
  )
}

export default HomePage
