import { Link } from 'react-router-dom'

function AboutPhilosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="border-b border-white/15 bg-surface-dark px-5 py-20 text-center text-white sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-8 flex items-center justify-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-lime">
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          Nasza filozofia
        </p>
        <h2
          className="font-display text-[clamp(2.5rem,6.5vw,5.5rem)] uppercase leading-[1.05] tracking-[-0.035em]"
          id="philosophy-heading"
        >
          <span className="block">Mniej składników.</span>
          <span className="block">Więcej <span className="italic text-lime">smaku.</span></span>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-loose text-white/60 sm:text-base">
          Nie szukamy skrótów. Wybieramy dobre produkty, pracujemy ręcznie i dajemy
          każdemu etapowi tyle czasu, ile naprawdę potrzebuje.
        </p>
        <Link
          className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-lime px-8 py-4 text-sm uppercase tracking-[0.12em] text-surface-dark transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
          to="/menu"
        >
          Poznaj nasze menu
        </Link>
      </div>
    </section>
  )
}

export default AboutPhilosophy
