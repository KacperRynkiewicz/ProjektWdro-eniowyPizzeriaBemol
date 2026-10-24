import Header from '../components/Header'
import HeroContent from '../components/HeroContent'

function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_80%_45%,rgba(74,82,47,0.2),transparent_50%),linear-gradient(110deg,#111610_0%,#192019_60%,#25291f_100%)] text-white">
      <section className="min-h-screen" id="start">
        <Header />
        <HeroContent />
      </section>
    </main>
  )
}

export default HomePage
