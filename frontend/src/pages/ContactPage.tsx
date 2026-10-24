import ContactHero from '../components/ContactHero'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.85fr_1.15fr]">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default ContactPage
