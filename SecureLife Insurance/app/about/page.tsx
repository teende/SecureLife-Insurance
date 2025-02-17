import Timeline from "../components/Timeline"

export default function AboutPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">О Компании SecureLife Insurance</h1>
      <p className="text-lg text-center mb-12">
        SecureLife Insurance - ваш надежный партнер в мире страхования. Мы предоставляем широкий спектр страховых
        продуктов, чтобы защитить то, что важно для вас.
      </p>
      <Timeline />
    </div>
  )
}

