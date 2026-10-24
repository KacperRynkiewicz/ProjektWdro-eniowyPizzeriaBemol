import logoMark from '../assets/logo-mark.svg'

function BrandLogo() {
  return (
    <a
      aria-label="Bemol Pizzeria — strona główna"
      className="flex shrink-0 items-center gap-2.5 text-white"
      href="#start"
    >
      <img
        aria-hidden="true"
        alt=""
        className="h-10 w-10"
        src={logoMark}
      />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-wide">BEMOL</span>
        <span className="mt-1 text-[0.55rem] font-semibold tracking-[0.24em]">
          PIZZERIA
        </span>
      </span>
    </a>
  )
}

export default BrandLogo
