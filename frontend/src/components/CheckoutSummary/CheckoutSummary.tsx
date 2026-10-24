import { useState } from 'react'
import { useCart } from '../../context/useCart'
import type { FulfillmentMethod } from '../../types/checkout'

interface CheckoutSummaryProps {
  fulfillment: FulfillmentMethod
  acceptedTerms: boolean
  onAcceptedTermsChange: (value: boolean) => void
  status: string
}

const currency = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' })
const estimatedDeliveryFee = 8

function CheckoutSummary({ fulfillment, acceptedTerms, onAcceptedTermsChange, status }: CheckoutSummaryProps) {
  const cart = useCart()
  const [promoCode, setPromoCode] = useState('')
  const [promoStatus, setPromoStatus] = useState('')
  const deliveryFee = fulfillment === 'delivery' ? estimatedDeliveryFee : 0

  return (
    <aside aria-labelledby="checkout-summary-heading" className="min-w-0 rounded-[1.75rem] bg-surface-dark p-6 text-white sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-3xl uppercase" id="checkout-summary-heading">Twoje zamówienie</h2>
        <span className="text-[0.6rem] uppercase tracking-widest text-white/50">Produkty: {cart.count}</span>
      </div>

      <ul aria-label="Produkty w zamówieniu" className="mt-6 divide-y divide-white/15">
        {cart.items.map(({ product, quantity }) => (
          <li className="flex gap-3 py-5 first:pt-0" key={product.name}>
            <img alt="" className="h-16 w-16 shrink-0 rounded-xl object-cover" src={product.image} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <h3 className="font-semibold">{product.name}</h3>
                <span className="tabular-nums">{currency.format(product.price * quantity)}</span>
              </div>
              <div className="mt-3 inline-flex items-center rounded-full bg-white/10 text-sm">
                <button aria-label={`Zmniejsz ilość ${product.name}`} className="h-11 w-11 cursor-pointer rounded-full hover:bg-white/10" onClick={() => cart.decrease(product.name)} type="button">−</button>
                <span className="min-w-5 text-center tabular-nums">{quantity}</span>
                <button aria-label={`Zwiększ ilość ${product.name}`} className="h-11 w-11 cursor-pointer rounded-full hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40" disabled={quantity >= 99} onClick={() => cart.increase(product.name)} type="button">+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/15 py-6">
        <label className="mb-3 block text-[0.6rem] font-semibold uppercase tracking-widest text-white/60" htmlFor="checkout-promo">Kod rabatowy</label>
        <div className="flex rounded-full border border-white/20 p-1 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-lime">
          <input
            className="min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm placeholder:text-white/35 focus:outline-none"
            id="checkout-promo"
            name="promoCode"
            onChange={(event) => { setPromoCode(event.target.value); setPromoStatus('') }}
            placeholder="Wpisz kod"
            type="text"
            value={promoCode}
          />
          <button className="min-h-11 shrink-0 cursor-pointer rounded-full bg-white/10 px-4 text-sm uppercase tracking-wider hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40" disabled={!promoCode.trim()} onClick={() => setPromoStatus('Kody rabatowe nie są jeszcze obsługiwane. Rabat nie został naliczony.')} type="button">Dodaj</button>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-white/60" role="status">{promoStatus}</p>
      </div>

      <dl className="space-y-3 border-t border-white/15 py-6 text-sm text-white/60">
        <div className="flex justify-between gap-4"><dt>Produkty</dt><dd className="tabular-nums">{currency.format(cart.total)}</dd></div>
        <div className="flex justify-between gap-4"><dt>{fulfillment === 'delivery' ? 'Dostawa (szacunkowo)' : 'Odbiór osobisty'}</dt><dd className="tabular-nums">{currency.format(deliveryFee)}</dd></div>
      </dl>
      <p aria-live="polite" className="flex flex-wrap items-baseline justify-between gap-3 border-t border-white/15 pt-6">
        <span className="text-sm font-semibold">Razem (szacunkowo)</span>
        <span className="font-display text-4xl text-lime tabular-nums">{currency.format(cart.total + deliveryFee)}</span>
      </p>
      <p className="mt-3 text-xs leading-relaxed text-white/60">Koszt opakowania nie jest wliczony.{fulfillment === 'delivery' && ' Ostateczny koszt dostawy wymaga potwierdzenia adresu.'}</p>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-[0.65rem] leading-relaxed text-white/60">
        <input checked={acceptedTerms} className="mt-0.5 h-4 w-4 shrink-0 accent-lime" name="acceptedTerms" onChange={(event) => onAcceptedTermsChange(event.target.checked)} required type="checkbox" />
        <span>Akceptuję regulamin i politykę prywatności oraz potwierdzam poprawność danych.</span>
      </label>
      <button className="mt-6 flex min-h-14 w-full cursor-pointer items-center justify-center gap-4 rounded-full bg-lime px-5 py-4 text-sm uppercase tracking-[0.12em] text-surface-dark transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime" type="submit">
        Zamawiam i płacę <span aria-hidden="true">→</span>
      </button>
      <p className="mt-4 text-center text-xs leading-relaxed text-white/60">Podgląd formularza — zamówienia i płatności nie są jeszcze aktywne.</p>
      <p className="mt-3 text-sm leading-relaxed text-lime" role="status">{status}</p>
    </aside>
  )
}

export default CheckoutSummary
