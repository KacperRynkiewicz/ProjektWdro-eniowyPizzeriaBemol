import pizzaImage from '../assets/burrata.jpg'
import LoginForm from '../components/LoginForm/LoginForm'

function LoginPage() {
  return (
    <section aria-labelledby="login-heading" className="grid md:min-h-[788px] md:grid-cols-2">
      <img
        alt="Pizza na drewnianej desce ze świeżą bazylią i pomidorami"
        className="h-64 w-full object-cover sm:h-80 md:h-full md:min-h-[788px]"
        height={1220}
        src={pizzaImage}
        width={900}
      />
      <div className="flex items-center justify-center px-5 py-12 sm:px-8 md:px-10 md:py-20 lg:px-12">
        <div className="w-full max-w-lg">
          <p className="mb-6 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-orange">
            <span aria-hidden="true" className="h-px w-8 bg-current" />Strefa klienta
          </p>
          <h1 className="font-display text-4xl uppercase leading-tight sm:text-5xl" id="login-heading">Witaj ponownie</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">Zaloguj się, aby szybciej składać kolejne zamówienia.</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export default LoginPage
