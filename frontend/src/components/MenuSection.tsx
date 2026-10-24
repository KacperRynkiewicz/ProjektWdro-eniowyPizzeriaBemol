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

function MenuSection() {
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
          {['Pizza', 'Burgery', 'Pasta', 'Sałatki', 'Napoje'].map((category, index) => (
            <li key={category}>
              <button
                aria-current={index === 0 ? 'true' : undefined}
                className="min-h-11 rounded-full bg-[#1D261B] px-6 text-xs font-medium uppercase tracking-[0.13em] text-white disabled:cursor-not-allowed disabled:bg-[#EAE6DC] disabled:text-[#686C62]"
                disabled={index !== 0}
                title={index !== 0 ? 'Ta kategoria będzie dostępna wkrótce' : undefined}
                type="button"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((pizza, index) => (
            <PizzaCard index={index} key={pizza.name} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
