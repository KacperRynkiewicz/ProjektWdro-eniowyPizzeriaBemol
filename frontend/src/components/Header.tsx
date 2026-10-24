import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const navigationLinks = [
  { label: 'Start', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Kontakt', href: '/kontakt' },
]

interface NavigationLinkProps {
  label: string
  href: string
  className: string
  activeClassName: string
  onNavigate?: () => void
}

function NavigationLink({ label, href, className, activeClassName, onNavigate }: NavigationLinkProps) {
  if (href.includes('#')) {
    return <a className={className} href={href} onClick={onNavigate}>{label}</a>
  }

  return (
    <NavLink
      className={({ isActive }) => `${className} ${isActive ? activeClassName : ''}`}
      end
      onClick={onNavigate}
      to={href}
    >
      {label}
    </NavLink>
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

interface HeaderProps {
  variant?: 'light' | 'dark'
}

function Header({ variant = 'dark' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLight = variant === 'light'
  const linkColor = isLight ? 'hover:text-orange' : 'hover:text-lime-hover'
  const activeLinkColor = isLight ? 'text-orange' : 'text-lime'
  const buttonBorder = isLight ? 'border-surface-dark/15 hover:border-orange hover:text-orange' : 'border-white/80 hover:border-lime-hover hover:text-lime-hover'

  return (
    <header className={`relative z-10 w-full px-5 py-4 sm:px-8 lg:px-10 ${isLight ? 'border-b border-black/10 bg-cream/95 text-surface-dark backdrop-blur-md' : 'text-white'}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <BrandLogo variant={variant} />

        <nav aria-label="Główna nawigacja" className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-10">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <NavigationLink
                  activeClassName={activeLinkColor}
                  className={`text-xs tracking-[0.18em] transition-colors lg:text-sm ${isLight ? 'font-normal uppercase' : 'font-semibold'} ${linkColor}`}
                  href={href}
                  label={label}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Profil użytkownika"
            className={`hidden h-11 w-11 items-center justify-center rounded-full border transition-colors sm:flex ${buttonBorder}`}
            type="button"
          >
            <span className="h-5 w-5">
              <AccountIcon />
            </span>
          </button>
          <button
            className={`flex h-11 items-center gap-2 rounded-full border px-3 text-xs font-medium transition-colors sm:px-4 ${isLight ? 'border-surface-dark bg-surface-dark text-white hover:bg-dark' : buttonBorder}`}
            type="button"
          >
            <span aria-hidden="true" className="h-[18px] w-[18px]">
              <BagIcon />
            </span>
            Koszyk
          </button>
          <button
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            className={`ml-1 flex h-11 w-11 items-center justify-center rounded-full border md:hidden ${buttonBorder}`}
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
          className={`absolute inset-x-0 top-full border-b px-5 py-4 backdrop-blur md:hidden ${isLight ? 'border-black/10 bg-cream/95' : 'border-white/10 bg-[#192019]/95'}`}
          id="mobile-navigation"
        >
          <ul className="mx-auto flex max-w-[1440px] flex-col">
            {navigationLinks.map(({ label, href }) => (
              <li key={label}>
                <NavigationLink
                  activeClassName={activeLinkColor}
                  className={`block py-3 text-sm tracking-[0.16em] ${isLight ? 'font-normal uppercase' : 'font-semibold'} ${linkColor}`}
                  href={href}
                  label={label}
                  onNavigate={() => setIsMenuOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
