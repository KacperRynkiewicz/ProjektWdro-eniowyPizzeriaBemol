function ContactHero() {
  return (
    <section
      aria-labelledby="contact-page-heading"
      className="bg-cream px-5 pb-10 pt-16 text-surface-dark sm:px-8 sm:pb-12 sm:pt-20 lg:px-10 lg:pt-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <p className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange">
          <span aria-hidden="true" className="h-px w-8 bg-current" />
          Znajdź nas
        </p>
        <h1
          className="font-display text-[clamp(2.75rem,7.5vw,7rem)] uppercase leading-[0.95] tracking-[-0.035em]"
          id="contact-page-heading"
        >
          Wpadnij do <span className="italic text-orange">Bemola</span>
        </h1>
      </div>
    </section>
  )
}

export default ContactHero
