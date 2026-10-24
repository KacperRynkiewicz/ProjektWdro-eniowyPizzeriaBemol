import logoMark from '../assets/logo-mark.svg'
import './BrandLogo.css'

function BrandLogo() {
  return (
    <a
      aria-label="Bemol Pizzeria — strona główna"
      className="brand-logo"
      href="#start"
    >
      <img
        aria-hidden="true"
        alt=""
        className="brand-logo__mark"
        src={logoMark}
      />
      <span className="brand-logo__text">
        <span className="brand-logo__name">BEMOL</span>
        <span className="brand-logo__tagline">
          PIZZERIA
        </span>
      </span>
    </a>
  )
}

export default BrandLogo
