import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import type { RegistrationData } from '../../types/auth'

function RegisterForm() {
  const [values, setValues] = useState<RegistrationData>({ name: '', email: '', password: '' })
  const [status, setStatus] = useState('')

  function updateField(field: keyof RegistrationData, value: string) {
    setValues((previous) => ({ ...previous, [field]: value }))
    setStatus('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Connect the registration API here when the backend is available.
    setStatus('Rejestracja nie jest jeszcze dostępna. Twoje konto nie zostało utworzone.')
  }

  const inputClasses = 'min-h-13 w-full rounded-2xl border border-surface-dark/15 bg-[#F8F6F0] px-4 py-4 text-sm placeholder:text-muted/80 focus:border-surface-dark focus:outline-2 focus:outline-offset-2 focus:outline-surface-dark'
  const labelClasses = 'mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.12em]'

  return (
    <form className="mt-9" onSubmit={handleSubmit}>
      <div>
        <label className={labelClasses} htmlFor="register-name">Imię</label>
        <input
          autoComplete="given-name"
          className={inputClasses}
          id="register-name"
          name="name"
          onChange={(event) => updateField('name', event.target.value)}
          pattern={String.raw`.*\S.*`}
          placeholder="Twoje imię"
          required
          type="text"
          value={values.name}
        />
      </div>
      <div className="mt-5">
        <label className={labelClasses} htmlFor="register-email">E-mail</label>
        <input
          autoComplete="email"
          className={inputClasses}
          id="register-email"
          name="email"
          onChange={(event) => updateField('email', event.target.value)}
          placeholder="adres@email.pl"
          required
          type="email"
          value={values.email}
        />
      </div>
      <div className="mt-5">
        <label className={labelClasses} htmlFor="register-password">Hasło</label>
        <input
          aria-describedby="register-password-hint"
          autoComplete="new-password"
          className={inputClasses}
          id="register-password"
          minLength={8}
          name="password"
          onChange={(event) => updateField('password', event.target.value)}
          placeholder="Minimum 8 znaków"
          required
          type="password"
          value={values.password}
        />
        <p className="sr-only" id="register-password-hint">Hasło musi zawierać co najmniej 8 znaków.</p>
      </div>
      <button className="mt-5 flex min-h-14 w-full cursor-pointer items-center justify-center rounded-full bg-surface-dark px-6 py-4 text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-dark" type="submit">
        Utwórz konto
      </button>
      <p aria-live="polite" className="mt-3 text-sm leading-relaxed text-muted" role="status">{status}</p>
      <div className="mt-5 text-center">
        <Link className="inline-flex min-h-11 items-center text-sm underline underline-offset-2 hover:text-orange focus-visible:outline-2 focus-visible:outline-offset-4" to="/logowanie">
          Masz już konto? Zaloguj się
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
