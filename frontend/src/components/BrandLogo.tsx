import logoMark from '../assets/logo-mark.svg'
import logoMarkDark from '../assets/logo-mark-dark.svg'
import { Link } from 'react-router-dom'

interface BrandLogoProps {
  variant?: 'light' | 'dark'
  compact?: boolean
}

function BrandLogo({ variant = 'dark', compact = false }: BrandLogoProps) {
  const isLight = variant === 'light'

  return (
    <Link
      aria-label="Bemol Pizzeria — strona główna"
      className={`flex shrink-0 items-center gap-2.5 ${isLight ? 'text-surface-dark' : 'text-white'}`}
      to="/"
    >
      <img
        aria-hidden="true"
        alt=""
        className="h-10 w-10"
        src={isLight ? logoMarkDark : logoMark}
      />
      <span className="flex flex-col leading-none">
        <span className={isLight || compact ? 'font-display text-2xl tracking-wide' : 'text-lg font-extrabold tracking-wide'}>BEMOL</span>
        {!isLight && !compact && (
          <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.24em]">
            PIZZERIA
          </span>
        )}
      </span>
    </Link>
  )
}

export default BrandLogo
