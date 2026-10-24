import type { PaymentMethod } from '../../types/checkout'

interface PaymentMethodSelectorProps {
  value: PaymentMethod
  onChange: (value: PaymentMethod) => void
}

const paymentMethods = [
  { value: 'blik', label: 'BLIK', description: 'Kod w aplikacji' },
  { value: 'card', label: 'Karta online', description: 'Visa / Mastercard' },
  { value: 'on-receipt', label: 'Przy odbiorze', description: 'Karta lub gotówka' },
] as const

function PaymentMethodSelector({ value, onChange }: PaymentMethodSelectorProps) {
  return (
    <fieldset className="min-w-0 rounded-[1.75rem] bg-white p-6 sm:p-8">
      <legend className="sr-only">Metoda płatności</legend>
      <div aria-hidden="true" className="mb-6 flex items-center gap-4 border-b border-surface-dark/15 pb-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime font-display text-lg">04</span>
        <h2 className="font-display text-3xl uppercase">Metoda płatności</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {paymentMethods.map((method) => (
          <label
            className={`flex cursor-pointer flex-col rounded-2xl border p-4 transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-surface-dark ${value === method.value
              ? 'border-orange bg-orange/[0.04]'
              : 'border-surface-dark/15 bg-[#F8F6F0] hover:border-surface-dark/40'}`}
            key={method.value}
          >
            <input
              checked={value === method.value}
              className="mb-5 h-4 w-4 cursor-pointer accent-orange"
              name="paymentMethod"
              onChange={() => onChange(method.value)}
              type="radio"
              value={method.value}
            />
            <span className="text-sm font-semibold">{method.label}</span>
            <span className="mt-1 text-[0.65rem] leading-relaxed text-muted">{method.description}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default PaymentMethodSelector
