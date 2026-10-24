import restaurantInterior from '../assets/restaurant-interior.jpg'

function AboutHero() {
  return (
    <section
      aria-labelledby="about-page-heading"
      className="bg-cream px-5 py-16 text-surface-dark sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
        <div>
          <p className="mb-7 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange">
            <span aria-hidden="true" className="h-px w-8 bg-current" />
            Nasza historia
          </p>
          <h1
            className="font-display text-[clamp(3rem,7.5vw,7rem)] uppercase leading-[0.95] tracking-[-0.035em]"
            id="about-page-heading"
          >
            <span className="block">Dobre</span>
            <span className="block">miejsce</span>
            <span className="block">ma swój</span>
            <span className="block italic text-orange">rytm.</span>
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-loose text-muted sm:text-base">
            Zaczynaliśmy od prostego pomysłu: stworzyć w Kartuzach miejsce, do którego
            chce się wracać. Bemol łączy włoskie podejście do pizzy z lokalną
            gościnnością i swobodną atmosferą.
          </p>
        </div>

        <img
          alt="Wnętrze restauracji z nakrytymi stołami i nastrojowym oświetleniem"
          className="aspect-[0.88] w-full rounded-[1.75rem] object-cover"
          fetchPriority="high"
          height={733}
          src={restaurantInterior}
          width={1100}
        />
      </div>
    </section>
  )
}

export default AboutHero
