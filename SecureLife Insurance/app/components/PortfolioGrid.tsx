"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Комплексная Защита Семьи",
    description: "Индивидуальный страховой план для всей семьи, включающий жизнь, здоровье и имущество.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Комплексное Страхование",
    details: [
      "Страхование жизни всех членов семьи с общим покрытием до 20 000 000 рублей",
      "Семейное ДМС с доступом к лучшим клиникам страны",
      "Страхование недвижимости и личного имущества на сумму до 10 000 000 рублей",
      "Специальные условия для детей и пожилых членов семьи",
      "Бесплатные ежегодные профилактические осмотры для всей семьи",
    ],
  },
  {
    id: 2,
    title: "Профессиональная Защита Врачей",
    description:
      "Специализированное страхование для медицинских работников, включая страхование профессиональной ответственности.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Профессиональное Страхование",
    details: [
      "Страхование от врачебных ошибок с лимитом ответственности до 5 000 000 рублей",
      "Юридическая защита и представительство в суде при профессиональных спорах",
      "Компенсация потери дохода при временной нетрудоспособности до 100 000 рублей в месяц",
      "Страхование медицинского оборудования от повреждений и кражи",
      "Программа поддержки психического здоровья для медицинских работников",
    ],
  },
  {
    id: 3,
    title: "Умное Автострахование",
    description: "Инновационное автострахование с использованием телематики для персонализированных тарифов.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Автострахование",
    details: [
      "Индивидуальные тарифы на основе стиля вождения с экономией до 40% на страховке",
      "Мобильное приложение для отслеживания поездок и анализа вождения",
      "Скидки за безопасное вождение и бонусы за непрерывное страхование",
      "Быстрое урегулирование убытков через приложение в течение 24 часов",
      "Бесплатная техническая помощь на дороге по всей России",
    ],
  },
  {
    id: 4,
    title: "Защита Бизнеса 360°",
    description: "Комплексное страховое решение для малого и среднего бизнеса.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Бизнес-страхование",
    details: [
      "Страхование имущества и оборудования на сумму до 50 000 000 рублей",
      "Страхование ответственности перед третьими лицами с лимитом до 10 000 000 рублей",
      "Страхование от перерыва в производстве с компенсацией до 1 000 000 рублей в месяц",
      "Киберстрахование с защитой от хакерских атак и утечки данных",
      "Бесплатный аудит безопасности бизнеса и консультации по управлению рисками",
    ],
  },
  {
    id: 5,
    title: "Глобальное Медицинское Покрытие",
    description: "Премиальное международное медицинское страхование для частых путешественников и экспатов.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Медицинское Страхование",
    details: [
      "Покрытие медицинских расходов по всему миру с лимитом до 1 000 000 евро",
      "Доступ к лучшим клиникам и специалистам в более чем 190 странах",
      "Экстренная эвакуация и репатриация в случае необходимости",
      "Телемедицина 24/7 на нескольких языках с ведущими специалистами",
      "Покрытие расходов на профилактические обследования и вакцинацию",
    ],
  },
  {
    id: 6,
    title: "Экологическое Страхование",
    description: "Инновационные страховые решения для защиты окружающей среды и поддержки устойчивого развития.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Специализированное Страхование",
    details: [
      "Страхование ответственности за загрязнение окружающей среды с лимитом до 100 000 000 рублей",
      "Покрытие расходов на очистку и восстановление экосистем",
      "Страхование возобновляемых источников энергии и зеленых технологий",
      "Поддержка экологических проектов и инициатив с возможностью получения грантов",
      "Скидки на страховые премии для компаний, внедряющих экологически чистые технологии",
    ],
  },
]

const categories = ["Все", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("Все")

  const filteredProjects = filter === "Все" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Наши Страховые Решения</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Изучите наш ассортимент профессиональных страховых продуктов, разработанных для защиты ваших интересов в
            различных сферах жизни и бизнеса.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors mb-2 ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="text-primary hover:underline inline-flex items-center">
                    Узнать Больше
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

