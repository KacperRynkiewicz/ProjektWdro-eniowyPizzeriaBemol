import { useState, type FormEvent } from 'react'

function ContactForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Wysyłanie wiadomości jest jeszcze niedostępne. Skontaktuj się z nami telefonicznie. Twoja wiadomość nie została wysłana.')
  }

  const inputClasses = 'w-full rounded-2xl border border-surface-dark/15 bg-[#F8F6F0] px-4 py-4 text-sm text-surface-dark placeholder:text-muted/80 focus:border-surface-dark focus:outline-2 focus:outline-offset-2 focus:outline-surface-dark'
  const labelClasses = 'mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.12em]'

  return (
    <section aria-labelledby="contact-form-heading" className="rounded-[1.75rem] bg-white p-6 text-surface-dark sm:p-10">
      <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-orange">Napisz do nas</p>
      <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl" id="contact-form-heading">
        W czym możemy pomóc?
      </h2>

      <form className="mt-8" onChange={() => setStatus('')} onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor="contact-name">Imię</label>
            <input autoComplete="given-name" className={inputClasses} id="contact-name" maxLength={100} name="name" placeholder="Twoje imię" required type="text" />
          </div>
          <div>
            <label className={labelClasses} htmlFor="contact-email">E-mail</label>
            <input autoComplete="email" className={inputClasses} id="contact-email" maxLength={254} name="email" placeholder="adres@email.pl" required type="email" />
          </div>
        </div>

        <div className="mt-5">
          <label className={labelClasses} htmlFor="contact-subject">Temat</label>
          <input className={inputClasses} id="contact-subject" maxLength={200} name="subject" placeholder="Czego dotyczy wiadomość?" required type="text" />
        </div>

        <div className="mt-5">
          <label className={labelClasses} htmlFor="contact-message">Wiadomość</label>
          <textarea className={`${inputClasses} min-h-36 resize-y`} id="contact-message" maxLength={5000} name="message" placeholder="Napisz wiadomość..." required rows={5} />
        </div>

        <button
          className="mt-5 inline-flex min-h-14 w-full cursor-pointer items-center justify-center rounded-full bg-surface-dark px-6 py-4 text-sm uppercase tracking-[0.12em] text-white transition-colors hover:bg-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-dark"
          type="submit"
        >
          Wyślij wiadomość
        </button>
        <p aria-live="polite" className="mt-4 text-sm leading-relaxed text-muted" role="status">{status}</p>
      </form>
    </section>
  )
}

export default ContactForm
