import './HomePage.css'
import Header from '../components/Header'
import HeroContent from '../components/HeroContent'
import heroPizza from '../assets/hero-pizza.jpg'
import MenuSection from '../components/MenuSection'

function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero" id="start">
        <img
          alt=""
          aria-hidden="true"
          className="home-hero__image"
          fetchPriority="high"
          height={850}
          src={heroPizza}
          width={1042}
        />
        <div aria-hidden="true" className="home-hero__shade" />
        <Header />
        <HeroContent />
      </section>
      <MenuSection />
    </main>
  )
}

export default HomePage
