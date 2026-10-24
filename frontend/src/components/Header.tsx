import './Header.css'
import { useState } from 'react'
import BrandLogo from './BrandLogo'

const navigationLinks = [
  { label: 'Start', href: '#start' },
  { label: 'Menu', href: '#menu' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Kontakt', href: '#kontakt' },
]

function AccountIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 19a6.5 6.5 0 0 1 13 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path
        d="M6.5 8h11l1 12h-13l1-12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9 9V6a3 3 0 0 1 6 0v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header__container">
        <BrandLogo />

        <nav aria-label="Główna nawigacja" className="site-header__nav">
          <ul className="site-header__links">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="site-header__link"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            aria-label="Profil użytkownika"
            className="site-header__button site-header__button--account"
            type="button"
          >
            <span className="site-header__icon">
              <AccountIcon />
            </span>
          </button>
          <button
            className="site-header__button site-header__button--cart"
            type="button"
          >
            <span aria-hidden="true" className="site-header__icon site-header__icon--bag">
              <BagIcon />
            </span>
            Koszyk
          </button>
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            className="site-header__button site-header__button--toggle"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span aria-hidden="true" className="site-header__toggle-symbol">
              {isMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Główna nawigacja"
          className="site-header__mobile-nav"
        >
          <ul className="site-header__mobile-links">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="site-header__mobile-link"
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
