import { useState } from 'react'

const navigationLinks = [
  { label: 'Start', href: '#start' },
  { label: 'Menu', href: '#menu' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Kontakt', href: '#kontakt' },
]

function BrandLogo() {
  return (
    <a
      aria-label="Bemol Pizzeria — strona główna"
      className="flex shrink-0 items-center gap-2.5 text-white"
      href="#start"
    >
      <svg
        aria-hidden="true"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 40 40"
      >
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 10v20m1-19h6a5 5 0 0 1 0 10h-6m0 0h7a5 5 0 0 1 0 10h-7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        />
        <circle cx="11" cy="30" r="3" fill="#D6FA62" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-wide">BEMOL</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.24em]">
          PIZZERIA
        </span>
      </span>
    </a>
  )
}

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
    <header className="relative z-10 w-full px-5 py-4 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <BrandLogo />

        <nav aria-label="Główna nawigacja" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="text-xs font-semibold tracking-[0.18em] transition-colors hover:text-[#D6FA62] lg:text-sm"
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Profil użytkownika"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/80 transition-colors hover:border-[#D6FA62] hover:text-[#D6FA62] sm:flex"
            type="button"
          >
            <span className="h-5 w-5">
              <AccountIcon />
            </span>
          </button>
          <button
            className="flex h-11 items-center gap-2 rounded-full border border-white/80 px-3 text-xs font-medium transition-colors hover:border-[#D6FA62] hover:text-[#D6FA62] sm:px-4"
            type="button"
          >
            <span aria-hidden="true" className="h-[18px] w-[18px]">
              <BagIcon />
            </span>
            Koszyk
          </button>
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/80 md:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {isMenuOpen ? '×' : '☰'}
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Główna nawigacja"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-[#192019]/95 px-5 py-4 backdrop-blur md:hidden"
        >
          <ul className="mx-auto flex max-w-[1440px] flex-col">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  className="block py-3 text-sm font-semibold tracking-[0.16em] hover:text-[#D6FA62]"
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
