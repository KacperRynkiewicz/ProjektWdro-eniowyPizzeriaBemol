const statistics = [
  { value: '2011', label: 'Rok otwarcia' },
  { value: '48 h', label: 'Dojrzewa nasze ciasto' },
  { value: '100%', label: 'Przygotowywane na miejscu' },
]

function AboutStats() {
  return (
    <section
      aria-label="Bemol w liczbach"
      className="bg-lime px-5 py-12 text-surface-dark sm:px-8 sm:py-16 lg:px-10"
    >
      <dl className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10">
        {statistics.map(({ value, label }) => (
          <div className="flex flex-col border-t border-surface-dark/20 pt-6" key={label}>
            <dt className="order-2 mt-2 text-xs font-medium uppercase tracking-[0.12em]">
              {label}
            </dt>
            <dd className="font-display text-[clamp(2.75rem,5vw,4rem)] leading-none tracking-tight">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default AboutStats
