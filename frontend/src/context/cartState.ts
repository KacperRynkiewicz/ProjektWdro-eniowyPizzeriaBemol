export interface CartEntry {
  name: string
  quantity: number
}

export type CartAction =
  | { type: 'add'; name: string }
  | { type: 'increase'; name: string }
  | { type: 'decrease'; name: string }
  | { type: 'remove'; name: string }

export function cartReducer(entries: CartEntry[], action: CartAction): CartEntry[] {
  const existing = entries.find((entry) => entry.name === action.name)

  if (action.type === 'remove') {
    return entries.filter((entry) => entry.name !== action.name)
  }
  if (!existing) {
    return action.type === 'add' ? [...entries, { name: action.name, quantity: 1 }] : entries
  }
  if (action.type === 'decrease' && existing.quantity === 1) {
    return entries.filter((entry) => entry.name !== action.name)
  }

  return entries.map((entry) => entry.name === action.name
    ? { ...entry, quantity: Math.min(99, entry.quantity + (action.type === 'decrease' ? -1 : 1)) }
    : entry)
}
