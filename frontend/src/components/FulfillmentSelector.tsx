import type { FulfillmentMethod } from '../types/checkout'

interface FulfillmentSelectorProps {
  value: FulfillmentMethod
  onChange: (value: FulfillmentMethod) => void
}

const methods = [
  { value: 'delivery', label: 'Dostawa', description: '40–60 min · od 8 zł' },
  { value: 'pickup', label: 'Odbiór osobisty', description: '20–30 min · bez opłat' },
] as const

function FulfillmentSelector({ value, onChange }: FulfillmentSelectorProps) {
  return (
    <fieldset className="min-w-0 rounded-[1.75rem] bg-white p-6 sm:p-8">
      <legend className="sr-only">Sposób odbioru</legend>
      <div aria-hidden="true" className="mb-6 flex items-center gap-4 border-b border-surface-dark/15 pb-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime font-display text-lg">01</span>
        <h2 className="font-display text-3xl uppercase">Sposób odbioru</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {methods.map((method) => (
          <label
            className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-colors ${value === method.value ? 'border-orange bg-orange/[0.04]' : 'border-surface-dark/15 bg-[#F8F6F0] hover:border-surface-dark/40'}`}
            key={method.value}
          >
            <input
              checked={value === method.value}
              className="peer sr-only"
              name="fulfillment"
              onChange={() => onChange(method.value)}
              type="radio"
              value={method.value}
            />
            <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-surface-dark" />
            <span aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${value === method.value ? 'bg-orange text-white' : 'bg-[#EAE6DC] text-surface-dark'}`}>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24">
                {method.value === 'delivery' ? (
                  <>
                    <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                  </>
                ) : (
                  <path d="M5 8h14l-1 13H6L5 8ZM9 9V5a3 3 0 0 1 6 0v4" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
                )}
              </svg>
            </span>
            <span>
              <span className="block text-sm font-semibold">{method.label}</span>
              <span className="mt-1 block text-[0.65rem] leading-relaxed text-muted">{method.description}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default FulfillmentSelector
