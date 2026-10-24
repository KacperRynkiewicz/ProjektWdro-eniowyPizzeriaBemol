import { useState } from 'react'
import PizzaCard, { type Pizza } from './PizzaCard'
import diavola from '../assets/diavola.jpg'
import burrata from '../assets/burrata.jpg'
import prosciutto from '../assets/prosciutto.jpg'

const pizzas: Pizza[] = [
  {
    name: 'Diavola',
    badge: 'Ostra',
    price: 39,
    image: diavola,
    imageHeight: 558,
    description: 'sos pomidorowy, mozzarella fior di latte, spianata piccante, jalapeño',
  },
  {
    name: 'Burrata',
    badge: 'Bestseller',
    price: 45,
    image: burrata,
    imageHeight: 1220,
    description: 'sos pomidorowy, mozzarella, burrata, pomidorki cherry, pesto, rukola',
  },
  {
    name: 'Prosciutto',
    badge: 'Klasyka',
    price: 43,
    image: prosciutto,
    imageHeight: 1350,
    description: 'sos pomidorowy, mozzarella, prosciutto crudo, grana padano, rukola',
  },
]

const categories = ['Pizza', 'Burgery', 'Pasta', 'Sałatki', 'Napoje'] as const
type MenuCategory = typeof categories[number]

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Pizza')
  const visiblePizzas = activeCategory === 'Pizza' ? pizzas : []

  return (
    <section aria-labelledby="menu-heading" className="bg-[#F7F3EA] px-5 py-20 text-[#1D261B] sm:px-8 lg:px-10 lg:py-28" id="menu">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-12">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em]">
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              Nasze menu
            </p>
            <h2 className="font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(2.25rem,5vw,4rem)] uppercase leading-none tracking-[-0.035em]" id="menu-heading">
              Poznaj nasze <span className="italic text-[#E84B2B]">hity</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#686C62]">
            Każdą pizzę przygotowujemy na lekkim, długo dojrzewającym cieście i wypiekamy w bardzo wysokiej temperaturze.
          </p>
        </div>

        <ul aria-label="Kategorie menu" className="mt-10 flex flex-wrap gap-2 border-b border-[#1D261B]/15 pb-5">
          {categories.map((category) => (
            <li key={category}>
              <button
                aria-controls="menu-results"
                aria-pressed={activeCategory === category}
                className={`min-h-11 cursor-pointer rounded-full px-6 text-xs font-medium uppercase tracking-[0.13em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D261B] ${activeCategory === category
                  ? 'bg-[#1D261B] text-white'
                  : 'bg-[#EAE6DC] text-[#686C62] hover:bg-[#DCD7CA]'}`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div aria-live="polite" id="menu-results">
          {visiblePizzas.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePizzas.map((pizza, index) => (
                <PizzaCard index={index} key={pizza.name} pizza={pizza} />
              ))}
            </div>
          ) : (
            <p className="mt-8 rounded-2xl border border-[#1D261B]/15 px-6 py-12 text-center text-sm text-[#686C62]">
              Kategoria „{activeCategory}” nie ma jeszcze dodanych produktów.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
