import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import FulfillmentSelector from '../components/FulfillmentSelector'
import CheckoutContactFields from '../components/CheckoutContactFields'
import CheckoutAddressFields from '../components/CheckoutAddressFields'
import PaymentMethodSelector from '../components/PaymentMethodSelector'
import CheckoutSummary from '../components/CheckoutSummary'
import { useCart } from '../context/useCart'
import type { CheckoutAddressData, CheckoutContactData, FulfillmentMethod, PaymentMethod } from '../types/checkout'

function CheckoutPage() {
  const cart = useCart()
  const [fulfillment, setFulfillment] = useState<FulfillmentMethod>('delivery')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('blik')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [status, setStatus] = useState('')
  const [contact, setContact] = useState<CheckoutContactData>({ fullName: '', phone: '', email: '' })
  const [address, setAddress] = useState<CheckoutAddressData>({
    street: '', building: '', postalCode: '', city: 'Kartuzy', notes: '',
  })

  if (cart.items.length === 0) return <Navigate replace to="/koszyk" />

  return (
    <section aria-labelledby="checkout-heading" className="px-5 py-16 text-surface-dark sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1440px]">
        <Link className="mb-6 inline-flex min-h-11 items-center gap-3 text-sm uppercase tracking-[0.12em] text-muted hover:text-orange" to="/menu">
          <span aria-hidden="true">←</span>Wróć do menu
        </Link>
        <p className="mb-6 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange">
          <span aria-hidden="true" className="h-px w-8 bg-current" />Ostatni krok
        </p>
        <h1 className="font-display text-[clamp(2.25rem,6vw,5.5rem)] uppercase leading-none tracking-[-0.035em]" id="checkout-heading">
          Realizacja <span className="italic text-orange">zamówienia</span>
        </h1>
        <form
          className="mt-10 grid items-start gap-8 lg:grid-cols-[1.2fr_1fr]"
          onChange={() => setStatus('')}
          onSubmit={(event) => {
            event.preventDefault()
            setStatus('Formularz został sprawdzony. Zamówienie nie zostało wysłane i nie pobrano płatności. Obsługa zamówień online będzie dostępna wkrótce.')
          }}
        >
          <div className="flex min-w-0 flex-col gap-6">
            <FulfillmentSelector onChange={setFulfillment} value={fulfillment} />
            <CheckoutContactFields onChange={setContact} value={contact} />
            {fulfillment === 'delivery' && (
              <CheckoutAddressFields onChange={setAddress} value={address} />
            )}
            <PaymentMethodSelector onChange={setPaymentMethod} value={paymentMethod} />
          </div>
          <CheckoutSummary
            acceptedTerms={acceptedTerms}
            fulfillment={fulfillment}
            onAcceptedTermsChange={setAcceptedTerms}
            status={status}
          />
        </form>
      </div>
    </section>
  )
}

export default CheckoutPage
