import './HeroContent.css'
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
    <div className="hero-content">
      <div className="hero-content__eyebrow">
        <span aria-hidden="true" className="hero-content__rule" />
        <span>Kartuzy · od 2011</span>
      </div>

      <h1 className="hero-content__title">
        <span className="hero-content__line">Pizza, która</span>
        <span className="hero-content__line">
          <span className="hero-content__accent">gra</span> pierwsze
        </span>
        <span className="hero-content__line">skrzypce.</span>
      </h1>

      <p className="hero-content__description">
        Wypiekamy ją na Twoich oczach. Z najlepszych składników, bez
        kompromisów i zawsze w dobrym rytmie.
      </p>

      <div className="hero-content__actions">
        <a
          className="hero-content__button hero-content__button--primary"
          href="#menu"
        >
          Zamów online
          <span className="hero-content__icon">
            <ArrowIcon />
          </span>
        </a>
        <a
          className="hero-content__button hero-content__button--secondary"
          href="#menu"
        >
          Zobacz menu
        </a>
      </div>

      <div className="hero-content__details">
        <span className="hero-content__detail">
          <span className="hero-content__icon">
            <DeliveryIcon />
          </span>
          Dostawa 40–60 min
        </span>
        <span className="hero-content__detail">
          <span className="hero-content__icon">
            <LocationIcon />
          </span>
          Kartuzy i okolice
        </span>
      </div>
    </div>
  )
}

export default HeroContent
