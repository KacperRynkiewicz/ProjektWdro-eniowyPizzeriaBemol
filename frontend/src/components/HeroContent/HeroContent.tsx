function ArrowIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
      <path
        d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function DeliveryIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M8 4.5V8l2.25 1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
      <path
        d="M13 6.75c0 3.5-5 7.5-5 7.5S3 10.25 3 6.75a5 5 0 1 1 10 0Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="6.75" r="1.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function HeroContent() {
  return (
    <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] w-full max-w-[1440px] flex-col justify-center px-5 pb-8 pt-14 sm:px-8 lg:px-10">
      <div className="mb-8 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#D5F368] sm:mb-10">
        <span aria-hidden="true" className="h-px w-10 bg-current" />
        <span>Kartuzy · od 2011</span>
      </div>

      <h1 className="max-w-[900px] font-[Impact,'Arial_Narrow',sans-serif] text-[clamp(2.75rem,8vw,7.5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em]">
        <span className="block">Pizza, która</span>
        <span className="block">
          <span className="italic text-[#D5F368]">gra</span> pierwsze
        </span>
        <span className="block">skrzypce.</span>
      </h1>

      <p className="mt-6 max-w-[480px] text-sm leading-relaxed text-white/70 sm:mt-7 sm:text-base">
        Wypiekamy ją na Twoich oczach. Z najlepszych składników, bez
        kompromisów i zawsze w dobrym rytmie.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
        <a
          className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#D5F368] px-6 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#172016] transition-colors hover:bg-white sm:px-8"
          href="#menu"
        >
          Zamów online
          <span className="h-4 w-4">
            <ArrowIcon />
          </span>
        </a>
        <a
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 text-[0.68rem] font-medium uppercase tracking-[0.15em] text-white transition-colors hover:border-white hover:bg-white/10 sm:px-8"
          href="#menu"
        >
          Zobacz menu
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.6rem] font-medium uppercase tracking-[0.17em] text-white/60 sm:mt-12 sm:justify-end">
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4">
            <DeliveryIcon />
          </span>
          Dostawa 40–60 min
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-4 w-4">
            <LocationIcon />
          </span>
          Kartuzy i okolice
        </span>
      </div>
    </div>
  )
}

export default HeroContent
