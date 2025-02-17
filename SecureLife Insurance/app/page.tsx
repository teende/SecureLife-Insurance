import Hero from "./components/Hero"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import CompanyOverview from "./components/CompanyOverview"

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <FeatureCarousel />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}

