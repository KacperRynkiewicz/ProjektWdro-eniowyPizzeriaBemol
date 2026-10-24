import Header from '../components/Header'
import MenuHero from '../components/MenuHero'
import MenuCatalog from '../components/MenuCatalog'

function MenuPage() {
  return (
    <div className="min-h-screen bg-cream text-surface-dark">
      <Header variant="light" />
      <main>
        <MenuHero />
        <MenuCatalog />
      </main>
    </div>
  )
}

export default MenuPage
