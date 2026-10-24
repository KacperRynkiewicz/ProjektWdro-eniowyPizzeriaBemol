import './PizzaCard.css'

export interface Pizza {
  name: string
  badge: string
  price: number
  image: string
  imageHeight: number
  description: string
}

interface PizzaCardProps {
  pizza: Pizza
  index: number
}

function PizzaCard({ pizza, index }: PizzaCardProps) {
  return (
    <article aria-labelledby={`pizza-${index}`} className="pizza-card">
      <div className="pizza-card__media">
        <img
          alt={`Pizza ${pizza.name}`}
          className="pizza-card__image"
          height={pizza.imageHeight}
          loading="lazy"
          src={pizza.image}
          width={900}
        />
        <span className="pizza-card__badge">{pizza.badge}</span>
        <span className="pizza-card__price">{pizza.price} zł</span>
      </div>
      <div className="pizza-card__body">
        <h3 className="pizza-card__heading" id={`pizza-${index}`}>
          <span className="pizza-card__number">{String(index + 1).padStart(2, '0')}</span>
          <span className="pizza-card__name">{pizza.name}</span>
        </h3>
        <p className="pizza-card__description">{pizza.description}</p>
        <button
          aria-label={`Dodaj ${pizza.name} do koszyka — wkrótce`}
          className="pizza-card__button"
          disabled
          title="Zamawianie online będzie dostępne wkrótce"
          type="button"
        >
          <span aria-hidden="true" className="pizza-card__plus">+</span>
          Dodaj do koszyka
        </button>
      </div>
    </article>
  )
}

export default PizzaCard
