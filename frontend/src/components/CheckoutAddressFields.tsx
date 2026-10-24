import type { CheckoutAddressData } from '../types/checkout'

interface CheckoutAddressFieldsProps {
  value: CheckoutAddressData
  onChange: (value: CheckoutAddressData) => void
}

function CheckoutAddressFields({ value, onChange }: CheckoutAddressFieldsProps) {
  const inputClasses = 'min-h-13 w-full rounded-2xl border border-surface-dark/15 bg-[#F8F6F0] px-4 py-4 text-sm placeholder:text-muted/80 focus:border-surface-dark focus:outline-2 focus:outline-offset-2 focus:outline-surface-dark'
  const labelClasses = 'mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.12em]'

  function updateField(field: keyof CheckoutAddressData, nextValue: string) {
    onChange({ ...value, [field]: nextValue })
  }

  return (
    <fieldset className="min-w-0 rounded-[1.75rem] bg-white p-6 sm:p-8">
      <legend className="sr-only">Adres dostawy</legend>
      <div aria-hidden="true" className="mb-6 flex items-center gap-4 border-b border-surface-dark/15 pb-5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime font-display text-lg">03</span>
        <h2 className="font-display text-3xl uppercase">Adres dostawy</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
        <div>
          <label className={labelClasses} htmlFor="checkout-street">Ulica</label>
          <input
            autoComplete="address-line1"
            className={inputClasses}
            id="checkout-street"
            name="street"
            onChange={(event) => updateField('street', event.target.value)}
            pattern={String.raw`.*\S.*`}
            placeholder="Nazwa ulicy"
            required
            type="text"
            value={value.street}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="checkout-building">Numer</label>
          <input
            autoComplete="address-line2"
            className={inputClasses}
            id="checkout-building"
            name="building"
            onChange={(event) => updateField('building', event.target.value)}
            pattern={String.raw`.*\S.*`}
            placeholder="12 / 4"
            required
            type="text"
            value={value.building}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_2fr]">
        <div>
          <label className={labelClasses} htmlFor="checkout-postal-code">Kod pocztowy</label>
          <input
            autoComplete="postal-code"
            className={inputClasses}
            id="checkout-postal-code"
            maxLength={6}
            name="postalCode"
            onChange={(event) => updateField('postalCode', event.target.value)}
            pattern="[0-9]{2}-[0-9]{3}"
            placeholder="83-300"
            required
            title="Podaj kod pocztowy w formacie 83-300"
            type="text"
            value={value.postalCode}
          />
        </div>
        <div>
          <label className={labelClasses} htmlFor="checkout-city">Miejscowość</label>
          <input
            autoComplete="address-level2"
            className={inputClasses}
            id="checkout-city"
            name="city"
            onChange={(event) => updateField('city', event.target.value)}
            pattern={String.raw`.*\S.*`}
            placeholder="Kartuzy"
            required
            type="text"
            value={value.city}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClasses} htmlFor="checkout-delivery-notes">Uwagi dla dostawcy</label>
        <textarea
          className={`${inputClasses} min-h-24 resize-y`}
          id="checkout-delivery-notes"
          name="deliveryNotes"
          onChange={(event) => updateField('notes', event.target.value)}
          placeholder="Kod do bramy, piętro..."
          rows={3}
          value={value.notes}
        />
      </div>

      <p className="mt-5 rounded-2xl bg-[#F0EDE4] px-5 py-4 text-xs leading-relaxed text-muted">
        Dostępność i koszt dostawy pod wskazany adres wymagają potwierdzenia.
      </p>
    </fieldset>
  )
}

export default CheckoutAddressFields
