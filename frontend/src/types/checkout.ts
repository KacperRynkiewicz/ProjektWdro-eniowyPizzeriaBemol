export type FulfillmentMethod = 'delivery' | 'pickup'
export type PaymentMethod = 'blik' | 'card' | 'on-receipt'

export interface CheckoutContactData {
  fullName: string
  phone: string
  email: string
}

export interface CheckoutAddressData {
  street: string
  building: string
  postalCode: string
  city: string
  notes: string
}
