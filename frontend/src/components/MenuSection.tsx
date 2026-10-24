import './MenuSection.css'
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
    <section aria-labelledby="menu-heading" className="menu-section" id="menu">
      <div className="menu-section__container">
        <div className="menu-section__header">
          <div>
            <p className="menu-section__eyebrow">
              <span aria-hidden="true" className="menu-section__rule" />
              Nasze menu
            </p>
            <h2 className="menu-section__title" id="menu-heading">
              Poznaj nasze <span className="menu-section__accent">hity</span>
            </h2>
          </div>
          <p className="menu-section__description">
            Każdą pizzę przygotowujemy na lekkim, długo dojrzewającym cieście i wypiekamy w bardzo wysokiej temperaturze.
          </p>
        </div>

        <ul aria-label="Kategorie menu" className="menu-section__categories">
          {['Pizza', 'Burgery', 'Pasta', 'Sałatki', 'Napoje'].map((category, index) => (
            <li key={category}>
              <button
                aria-current={index === 0 ? 'true' : undefined}
                className={index === 0
                  ? 'menu-section__category menu-section__category--active'
                  : 'menu-section__category'}
                disabled={index !== 0}
                title={index !== 0 ? 'Ta kategoria będzie dostępna wkrótce' : undefined}
                type="button"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="menu-section__grid">
          {pizzas.map((pizza, index) => (
            <PizzaCard index={index} key={pizza.name} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
