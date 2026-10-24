import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import type { LoginData } from '../types/auth'

function LoginForm() {
  const [values, setValues] = useState<LoginData>({ email: '', password: '' })
  const [status, setStatus] = useState('')

  function updateField(field: keyof LoginData, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }))
    setStatus('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Connect the login API here when the backend is available.
    setStatus('Logowanie nie jest jeszcze dostępne. Nie zostałeś zalogowany.')
  }

  const inputClasses = 'min-h-13 w-full rounded-2xl border border-surface-dark/15 bg-[#F8F6F0] px-4 py-4 text-sm placeholder:text-muted/80 focus:border-surface-dark focus:outline-2 focus:outline-offset-2 focus:outline-surface-dark'
  const labelClasses = 'mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.12em]'

  return (
    <form className="mt-9" onSubmit={handleSubmit}>
      <div>
        <label className={labelClasses} htmlFor="login-email">E-mail</label>
        <input
          autoComplete="username"
          className={inputClasses}
          id="login-email"
          name="email"
          onChange={(event) => updateField('email', event.target.value)}
          placeholder="adres@email.pl"
          required
          type="email"
          value={values.email}
        />
      </div>
      <div className="mt-5">
        <label className={labelClasses} htmlFor="login-password">Hasło</label>
        <input
          autoComplete="current-password"
          className={inputClasses}
          id="login-password"
          name="password"
          onChange={(event) => updateField('password', event.target.value)}
          placeholder="Minimum 8 znaków"
          required
          type="password"
          value={values.password}
        />
      </div>
      <button className="mt-5 flex min-h-14 w-full cursor-pointer items-center justify-center rounded-full bg-surface-dark px-6 py-4 text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-dark" type="submit">
        Zaloguj się
      </button>
      <p aria-live="polite" className="mt-3 text-sm leading-relaxed text-muted" role="status">{status}</p>
      <div className="mt-5 text-center">
        <Link className="inline-flex min-h-11 items-center text-sm underline underline-offset-2 hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-4" to="/rejestracja">
          Nie masz konta? Zarejestruj się
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
