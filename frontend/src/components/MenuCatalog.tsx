import { useState } from 'react'
import { useCart } from '../context/useCart'
import type { Pizza } from './PizzaCard'
import { pizzas, categories, type MenuCategory } from '../data/menu'

function CatalogCard({ pizza }: { pizza: Pizza }) {
  const { addItem } = useCart()
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[1.05] overflow-hidden rounded-3xl">
        <img
          alt={`Pizza ${pizza.name}`}
          className="h-full w-full object-cover"
          height={pizza.imageHeight}
          loading="lazy"
          src={pizza.image}
          width={900}
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream px-3 py-2 text-[0.6rem] font-bold uppercase tracking-wide">
          {pizza.badge}
        </span>
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-3 font-display">
        <h3 className="text-3xl tracking-tight">{pizza.name}</h3>
        <p className="shrink-0 text-2xl">{pizza.price} zł</p>
      </div>
      <p className="mb-6 mt-3 text-sm leading-relaxed text-muted">{pizza.description}</p>
      <button
        aria-label={`Dodaj ${pizza.name} do koszyka`}
        className="mt-auto flex min-h-11 items-center justify-center gap-3 rounded-full border border-surface-dark px-5 text-sm uppercase tracking-[0.12em] disabled:cursor-not-allowed"
        onClick={() => addItem(pizza.name)}
        type="button"
      >
        <span aria-hidden="true" className="text-xl">+</span>
        Dodaj
      </button>
    </article>
  )
}

function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Pizza')
  const visiblePizzas = activeCategory === 'Pizza' ? pizzas : []

  return (
    <section aria-label="Dania z naszego menu" className="bg-cream px-5 py-16 text-surface-dark sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        <ul aria-label="Kategorie menu" className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                aria-controls="catalog-results"
                aria-pressed={activeCategory === category}
                className={`min-h-12 cursor-pointer rounded-full px-6 text-sm uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-dark ${activeCategory === category
                  ? 'bg-orange text-white'
                  : 'bg-[#EAE6DC] text-muted hover:bg-[#DCD7CA]'}`}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div aria-live="polite" className="mt-12" id="catalog-results">
          {visiblePizzas.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePizzas.map((pizza) => <CatalogCard key={pizza.name} pizza={pizza} />)}
            </div>
          ) : (
            <p className="rounded-2xl border border-surface-dark/15 px-6 py-12 text-center text-sm text-muted">
              Kategoria „{activeCategory}” nie ma jeszcze dodanych produktów.
            </p>
          )}
        </div>

        <p className="mt-12 border-t border-surface-dark/20 pt-6 text-xs leading-relaxed text-muted">
          Masz alergię lub nietolerancję? Zapytaj obsługę o szczegółowy wykaz alergenów.
          Do każdego zamówienia doliczamy koszt opakowania.
        </p>
      </div>
    </section>
  )
}

export default MenuCatalog
