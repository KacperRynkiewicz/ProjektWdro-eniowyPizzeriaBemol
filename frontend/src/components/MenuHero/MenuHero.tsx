function MenuHero() {
  return (
    <section
      aria-labelledby="menu-page-heading"
      className="bg-surface-dark px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-lime">
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          Karta dań
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-12">
          <h1
            className="font-display text-[clamp(3rem,8vw,7rem)] uppercase leading-[0.95] tracking-[-0.035em]"
            id="menu-page-heading"
          >
            Nasze <span className="italic text-lime">menu</span>
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Wszystko przygotowujemy na bieżąco. Wybierz ulubione danie i zamów
            z dostawą lub odbiorem osobistym.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MenuHero
