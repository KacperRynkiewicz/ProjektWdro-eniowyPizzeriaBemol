import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import './CartDrawer.css'

const currency = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' })

function CartDrawer() {
  const cart = useCart()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (!cart.isOpen) {
      if (dialog.open) dialog.close()
      return
    }

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [cart.isOpen])

  return (
    <dialog
      aria-labelledby="cart-heading"
      className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-[450px] border-0 bg-cream p-0 text-surface-dark shadow-2xl backdrop:bg-black/50 open:flex open:flex-col motion-safe:open:animate-[cart-slide-in_220ms_ease-out]"
      id="cart-drawer"
      onCancel={(event) => { event.preventDefault(); cart.closeCart() }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) cart.closeCart()
      }}
      onClose={cart.closeCart}
      ref={dialogRef}
    >
      <div className="mx-6 flex shrink-0 items-center justify-between gap-4 border-b border-surface-dark/15 py-6">
        <div>
          <p className="mb-3 flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em]">
            <span aria-hidden="true" className="h-px w-8 bg-current" />Twoje zamówienie
          </p>
          <h2 className="font-display text-4xl uppercase leading-none" id="cart-heading">Koszyk</h2>
        </div>
        <button aria-label="Zamknij koszyk" className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-surface-dark/15 text-2xl hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2" onClick={cart.closeCart} type="button">×</button>
      </div>

      {cart.items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
          <span aria-hidden="true" className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#EAE6DC] text-muted">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24">
              <path d="M5 8h14l-1 13H6L5 8ZM9 9V5a3 3 0 0 1 6 0v4" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
            </svg>
          </span>
          <h3 className="font-display text-3xl uppercase">Jeszcze tu pusto</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">Dodaj coś pysznego z naszego menu.</p>
          <Link className="mt-7 rounded-full bg-surface-dark px-6 py-4 text-sm uppercase tracking-widest text-white hover:bg-dark" onClick={cart.closeCart} to="/menu">Wybierz pizzę</Link>
        </div>
      ) : (
        <>
          <ul aria-label="Produkty w koszyku" className="flex-1 overflow-y-auto px-6">
            {cart.items.map(({ product, quantity }) => (
              <li className="flex gap-4 border-b border-surface-dark/15 py-6" key={product.name}>
                <img alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover" src={product.image} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="font-display text-2xl">{product.name}</h3>
                    <span className="text-sm font-semibold tabular-nums">{currency.format(product.price * quantity)}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted">{currency.format(product.price)} / szt.</p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center rounded-full border border-surface-dark/25">
                      <button aria-label={`Zmniejsz ilość ${product.name}`} className="h-11 w-11 cursor-pointer rounded-full hover:bg-white" onClick={() => cart.decrease(product.name)} type="button">−</button>
                      <span className="min-w-6 text-center text-sm tabular-nums">{quantity}</span>
                      <button aria-label={`Zwiększ ilość ${product.name}`} className="h-11 w-11 cursor-pointer rounded-full hover:bg-white disabled:cursor-not-allowed disabled:opacity-40" disabled={quantity >= 99} onClick={() => cart.increase(product.name)} type="button">+</button>
                    </div>
                    <button aria-label={`Usuń ${product.name} z koszyka`} className="min-h-11 cursor-pointer text-xs text-muted underline hover:text-orange" onClick={() => cart.remove(product.name)} type="button">Usuń</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="shrink-0 border-t border-surface-dark/15 p-6">
            <p aria-live="polite" className="flex justify-between gap-4 text-lg font-semibold">
              <span>Suma produktów</span><span className="tabular-nums">{currency.format(cart.total)}</span>
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">Koszt dostawy i opakowania nie jest wliczony.</p>
            <button className="mt-5 min-h-12 w-full cursor-pointer rounded-full bg-surface-dark px-5 text-sm uppercase tracking-widest text-white hover:bg-dark" onClick={cart.closeCart} type="button">Kontynuuj zakupy</button>
          </div>
        </>
      )}
    </dialog>
  )
}

export default CartDrawer
