function DeliverySection() {
  return (
    <section
      aria-labelledby="delivery-heading"
      className="relative isolate overflow-hidden bg-orange px-5 py-20 text-cream sm:px-8 lg:px-10 lg:py-24"
      id="dostawa"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-10 -z-10 select-none font-display text-[20rem] leading-none text-dark/5 sm:text-[26rem]"
      >
        B
      </span>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
        <div>
          <p className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-dark/70">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Dostawa
          </p>
          <h2
            className="max-w-3xl font-display text-[clamp(2.75rem,6vw,6rem)] uppercase leading-[0.95] tracking-[-0.035em]"
            id="delivery-heading"
          >
            <span className="block">Głód nie może</span>
            <span className="block">czekać.</span>
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-dark/75 sm:text-base">
            Zamów z dostawą do domu lub odbierz osobiście przy ul. Kościuszki 19.
            Sprawdzimy Twój adres i zajmiemy się resztą.
          </p>
        </div>

        <a
          className="flex h-40 w-40 shrink-0 items-center justify-center self-start rounded-full bg-lime text-center text-sm font-medium uppercase leading-relaxed tracking-[0.12em] text-surface-dark transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark md:h-44 md:w-44 md:self-auto lg:h-48 lg:w-48"
          href="#menu"
        >
          Zamów<br />teraz
        </a>
      </div>
    </section>
  )
}

export default DeliverySection
