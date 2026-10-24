import type { CheckoutContactData } from '../../types/checkout'

interface CheckoutContactFieldsProps {
  value: CheckoutContactData
  onChange: (value: CheckoutContactData) => void
}

function CheckoutContactFields({ value, onChange }: CheckoutContactFieldsProps) {
  const inputClasses = 'min-h-13 w-full rounded-2xl border border-surface-dark/15 bg-[#F8F6F0] px-4 py-4 text-sm placeholder:text-muted/80 focus:border-surface-dark focus:outline-2 focus:outline-offset-2 focus:outline-surface-dark'
  const labelClasses = 'mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.12em]'

  function updateField(field: keyof CheckoutContactData, nextValue: string) {
    onChange({ ...value, [field]: nextValue })
  }

  return (
    <fieldset className="min-w-0 rounded-[1.75rem] bg-white p-6 sm:p-8">
      <legend className="sr-only">Dane kontaktowe</legend>
      <div aria-hidden="true" className="mb-6 flex items-center gap-4 border-b border-surface-dark/15 pb-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime font-display text-lg">02</span>
        <h2 className="font-display text-3xl uppercase">Dane kontaktowe</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses} htmlFor="checkout-full-name">Imię i nazwisko</label>
          <input
            autoComplete="name"
            className={inputClasses}
            id="checkout-full-name"
            name="fullName"
            onChange={(event) => updateField('fullName', event.target.value)}
            pattern={String.raw`.*\S.*`}
            placeholder="Jan Kowalski"
            required
            type="text"
            value={value.fullName}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="checkout-phone">Numer telefonu</label>
          <input
            autoComplete="tel"
            className={inputClasses}
            id="checkout-phone"
            name="phone"
            onChange={(event) => updateField('phone', event.target.value)}
            pattern={String.raw`\+?[0-9][0-9\s\-]{6,19}`}
            placeholder="+48 000 000 000"
            required
            title="Podaj numer telefonu, np. +48 123 456 789"
            type="tel"
            value={value.phone}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClasses} htmlFor="checkout-email">E-mail</label>
          <input
            autoComplete="email"
            className={inputClasses}
            id="checkout-email"
            name="email"
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="adres@email.pl"
            required
            type="email"
            value={value.email}
          />
        </div>
      </div>
    </fieldset>
  )
}

export default CheckoutContactFields
