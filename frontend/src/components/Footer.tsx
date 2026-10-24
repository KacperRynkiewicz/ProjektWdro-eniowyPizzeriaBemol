import BrandLogo from './BrandLogo'

const currentYear = new Date().getFullYear()

const openingHours = [
  { days: 'Pon–Czw', hours: '12:00–22:00' },
  { days: 'Pt–Sob', hours: '12:00–23:00' },
  { days: 'Niedziela', hours: '12:00–22:00' },
]

function Footer() {
  return (
    <footer className="bg-dark px-5 pb-7 pt-16 text-white sm:px-8 lg:px-10 lg:pt-20" id="kontakt">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandLogo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              Dobra pizza, dobry rytm. Wpadnij do nas w Kartuzach albo zamów prosto
              pod swoje drzwi.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-lime">
              Kontakt
            </h2>
            <address className="flex flex-col gap-4 text-sm leading-relaxed text-white/60 not-italic">
              <a
                className="flex min-h-6 items-center gap-3 transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                href="tel:+48586810000"
              >
                <svg aria-hidden="true" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24">
                  <path
                    d="m7 3 3 5-2.5 2.5a15 15 0 0 0 6 6L16 14l5 3-1 4C10 22 2 14 3 4l4-1Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                +48 58 681 00 00
              </a>
              <p className="flex items-start gap-3">
                <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span>ul. Kościuszki 19<br />83-300 Kartuzy</span>
              </p>
            </address>
          </div>

          <div>
            <h2 className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-lime">
              Godziny otwarcia
            </h2>
            <dl className="flex max-w-xs flex-col gap-3 text-sm text-white/60">
              {openingHours.map(({ days, hours }) => (
                <div className="flex justify-between gap-6" key={days}>
                  <dt>{days}</dt>
                  <dd className="whitespace-nowrap tabular-nums">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-[0.6rem] uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p>© {currentYear} Pizzeria Bemol. Wszelkie prawa zastrzeżone.</p>
          <span title="Polityka prywatności będzie dostępna wkrótce">Polityka prywatności</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
