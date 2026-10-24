import { createContext, useContext } from 'react'
import type { Pizza } from '../components/PizzaCard'

interface CartContextValue {
  items: { product: Pizza; quantity: number }[]
  isOpen: boolean
  count: number
  total: number
  openCart: () => void
  closeCart: () => void
  addItem: (name: string) => void
  increase: (name: string) => void
  decrease: (name: string) => void
  remove: (name: string) => void
}

export const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const cart = useContext(CartContext)
  if (!cart) throw new Error('useCart requires CartProvider')
  return cart
}
