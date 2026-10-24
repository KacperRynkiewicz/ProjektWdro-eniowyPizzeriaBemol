function LocationIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function ContactDetails() {
  return (
    <section aria-labelledby="contact-details-heading" className="rounded-[1.75rem] bg-surface-dark p-6 text-white sm:p-10">
      <h2 className="mb-8 font-display text-4xl uppercase" id="contact-details-heading">
        Kontakt
      </h2>
      <address className="flex flex-col gap-6 text-sm leading-relaxed not-italic">
        <div className="flex items-start gap-4">
          <LocationIcon />
          <p className="text-white/65">ul. Kościuszki 19<br />83-300 Kartuzy</p>
        </div>
        <a
          className="flex min-h-6 items-center gap-4 transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          href="tel:+48586810000"
        >
          <svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24">
            <path d="m7 3 3 5-2.5 2.5a15 15 0 0 0 6 6L16 14l5 3-1 4C10 22 2 14 3 4l4-1Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
          <span className="text-white/65">+48 58 681 00 00</span>
        </a>
      </address>

      <div className="mt-6 flex items-start gap-4 text-sm leading-relaxed">
        <svg aria-hidden="true" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        </svg>
        <ul aria-label="Godziny otwarcia" className="text-white/65">
          <li>Pon–Czw: 12:00–22:00</li>
          <li>Pt–Sob: 12:00–23:00</li>
          <li>Nd: 12:00–22:00</li>
        </ul>
      </div>

      <div className="mt-10 rounded-2xl bg-lime p-6 text-surface-dark sm:p-7">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em]">Lokalizacja</p>
        <h3 className="mb-2 mt-5 font-display text-4xl uppercase">Kartuzy</h3>
        <p className="text-sm leading-relaxed">Jesteśmy w centrum miasta, 3 minuty spacerem od rynku.</p>
        <a
          aria-label="Pokaż lokalizację Pizzerii Bemol w Google Maps"
          className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-dark text-white transition-colors hover:bg-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-dark"
          href="https://www.google.com/maps/search/?api=1&query=Pizzeria+Bemol+Ko%C5%9Bciuszki+19+Kartuzy"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LocationIcon />
        </a>
      </div>
    </section>
  )
}

export default ContactDetails
