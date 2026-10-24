import { Link } from 'react-router-dom'
import BrandLogo from '../BrandLogo/BrandLogo'

const currentYear = new Date().getFullYear()

function PageFooter() {
  return (
    <footer className="bg-dark px-5 py-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-7 sm:flex-row sm:gap-6">
        <BrandLogo compact />

        <nav aria-label="Nawigacja w stopce">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs tracking-[0.12em] text-white/60">
            <li>
              <Link className="inline-flex min-h-11 items-center transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="inline-flex min-h-11 items-center transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime" to="/o-nas">
                O nas
              </Link>
            </li>
            <li>
              <Link className="inline-flex min-h-11 items-center transition-colors hover:text-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime" to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        <p className="shrink-0 text-[0.65rem] uppercase tracking-[0.12em] text-white/35">
          © {currentYear} Bemol
        </p>
      </div>
    </footer>
  )
}

export default PageFooter
