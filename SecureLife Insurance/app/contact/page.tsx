import ContactForm from "../components/ContactForm"
import NewsletterSubscribe from "../components/NewsletterSubscribe"

export default function ContactPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Свяжитесь с Нами</h1>
      <ContactForm />
      <NewsletterSubscribe />
    </div>
  )
}

