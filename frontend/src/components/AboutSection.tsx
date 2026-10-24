import pizzaOven from '../assets/pizza-oven.jpg'

const features = [
  'Ciasto dojrzewa 48h',
  'Włoska mąka tipo 00',
  'Świeże składniki',
  'Wypiek na miejscu',
]

function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="bg-surface-dark px-5 py-20 text-cream sm:px-8 lg:px-10 lg:py-28"
      id="o-nas"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-2 lg:gap-24">
        <figure className="relative isolate overflow-hidden rounded-[1.75rem]">
          <img
            alt="Rozpalony piec do wypieku pizzy w pizzerii Bemol"
            className="aspect-[0.86] w-full object-cover"
            height={734}
            loading="lazy"
            src={pizzaOven}
            width={1100}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark/90 via-transparent to-transparent"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-7">
            <div>
              <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                Nasz sekret
              </p>
              <p className="font-display text-2xl uppercase leading-tight lg:text-3xl">
                Ogień i cierpliwość
              </p>
            </div>
            <span
              aria-hidden="true"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 32 32">
                <path
                  d="M9 25a11 11 0 0 1 16-14M10 19l14-7M10 25l-1-6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </figcaption>
        </figure>

        <div>
          <p className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-lime">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Bemol od kuchni
          </p>
          <h2
            className="font-display text-[clamp(2.5rem,4.5vw,4.75rem)] uppercase leading-[0.95] tracking-[-0.035em]"
            id="about-heading"
          >
            <span className="block">Lokalny charakter.</span>
            <span className="block italic text-lime">Włoski</span>
            <span className="block">temperament.</span>
          </h2>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            Bemol to miejsce stworzone z miłości do dobrego jedzenia i spotkań przy
            jednym stole. Stawiamy na prostotę: świeże składniki, autorskie receptury
            i ciasto, któremu dajemy czas.
          </p>
          <ul className="mt-9 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                className="flex items-center gap-3 border-t border-white/15 py-5 text-xs font-medium"
                key={feature}
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-lime"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m3 8 3 3 7-7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
