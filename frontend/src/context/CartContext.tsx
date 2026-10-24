import { useEffect, useReducer, useState, type ReactNode } from 'react'
import { pizzas } from '../data/menu'
import { cartReducer, type CartEntry } from './cartState'
import { CartContext } from './useCart'

const storageKey = 'bemol-cart-v1'

function readCart(): CartEntry[] {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(storageKey) ?? '[]')
    if (!Array.isArray(saved)) return []
    return pizzas.flatMap((pizza) => {
      const entry = saved.find((item) => item?.name === pizza.name)
      return entry && Number.isInteger(entry.quantity) && entry.quantity > 0
        ? [{ name: pizza.name, quantity: Math.min(entry.quantity, 99) }]
        : []
    })
  } catch {
    return []
  }
}

function useCartState() {
  const [entries, dispatch] = useReducer(cartReducer, [], readCart)
  const [isOpen, setIsOpen] = useState(false)
  const items = entries.flatMap((entry) => {
    const product = pizzas.find((pizza) => pizza.name === entry.name)
    return product ? [{ product, quantity: entry.quantity }] : []
  })

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(entries))
    } catch {
      // The cart remains available in memory if browser storage is disabled.
    }
  }, [entries])

  return {
    items,
    isOpen,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem: (name: string) => {
      if (!pizzas.some((pizza) => pizza.name === name)) return
      dispatch({ type: 'add', name })
      setIsOpen(true)
    },
    increase: (name: string) => dispatch({ type: 'increase', name }),
    decrease: (name: string) => dispatch({ type: 'decrease', name }),
    remove: (name: string) => dispatch({ type: 'remove', name }),
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useCartState()
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>
}
