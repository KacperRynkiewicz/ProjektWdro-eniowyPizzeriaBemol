import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'

const currency = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' })

function CartPage() {
  const cart = useCart()

  if (cart.items.length === 0) {
    return (
      <section aria-labelledby="empty-cart-heading" className="flex min-h-[650px] flex-col items-center justify-center px-5 py-20 text-center sm:px-8 lg:px-10">
        <span aria-hidden="true" className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#EAE6DC] text-muted">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24">
            <path d="M5 8h14l-1 13H6L5 8ZM9 9V5a3 3 0 0 1 6 0v4" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        </span>
        <h1 className="font-display text-4xl uppercase sm:text-5xl" id="empty-cart-heading">Koszyk jest pusty</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">Dodaj produkty, zanim przejdziesz do realizacji zamówienia.</p>
        <Link className="mt-7 inline-flex min-h-14 items-center justify-center rounded-full bg-surface-dark px-8 text-sm uppercase tracking-[0.12em] text-white hover:bg-dark" to="/menu">
          Przejdź do menu
        </Link>
      </section>
    )
  }

  return (
    <section aria-labelledby="cart-page-heading" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange">
          <span aria-hidden="true" className="h-px w-8 bg-current" />Twoje zamówienie
        </p>
        <h1 className="font-display text-[clamp(3rem,7.5vw,7rem)] uppercase leading-none" id="cart-page-heading">Twój koszyk</h1>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl bg-white p-5 sm:p-8">
            <ul aria-label="Produkty w koszyku" className="divide-y divide-surface-dark/15">
              {cart.items.map(({ product, quantity }) => (
                <li className="flex gap-4 py-6 first:pt-0 last:pb-0 sm:gap-6" key={product.name}>
                  <img alt="" className="h-20 w-20 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-28" src={product.image} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h2 className="font-display text-3xl">{product.name}</h2>
                      <p className="font-semibold tabular-nums">{currency.format(product.price * quantity)}</p>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{product.description}</p>
                    <p className="mt-2 text-xs text-muted">{currency.format(product.price)} / szt.</p>
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-surface-dark/25">
                        <button aria-label={`Zmniejsz ilość ${product.name}`} className="h-11 w-11 cursor-pointer rounded-full hover:bg-cream" onClick={() => cart.decrease(product.name)} type="button">−</button>
                        <span className="min-w-6 text-center text-sm tabular-nums">{quantity}</span>
                        <button aria-label={`Zwiększ ilość ${product.name}`} className="h-11 w-11 cursor-pointer rounded-full hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40" disabled={quantity >= 99} onClick={() => cart.increase(product.name)} type="button">+</button>
                      </div>
                      <button aria-label={`Usuń ${product.name} z koszyka`} className="min-h-11 cursor-pointer text-sm text-muted underline hover:text-orange" onClick={() => cart.remove(product.name)} type="button">Usuń</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside aria-labelledby="cart-summary-heading" className="rounded-3xl bg-surface-dark p-6 text-white sm:p-8">
            <h2 className="font-display text-3xl uppercase" id="cart-summary-heading">Podsumowanie</h2>
            <p className="mt-6 flex justify-between gap-4 text-sm text-white/70"><span>Liczba produktów</span><span>{cart.count}</span></p>
            <p aria-live="polite" className="mt-5 flex flex-wrap justify-between gap-3 border-t border-white/20 pt-5 text-lg font-semibold">
              <span>Suma produktów</span><span className="tabular-nums">{currency.format(cart.total)}</span>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/60">Koszt dostawy i opakowania nie jest wliczony.</p>
            <p className="mt-6 text-sm leading-relaxed text-white/70">Składanie zamówień online będzie dostępne wkrótce.</p>
            <Link className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-lime px-6 text-center text-sm uppercase tracking-[0.12em] text-surface-dark hover:bg-cream" to="/menu">Kontynuuj zakupy</Link>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default CartPage
