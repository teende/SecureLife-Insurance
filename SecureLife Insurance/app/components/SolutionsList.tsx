"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const solutions = [
  {
    title: "Комплексная Защита Семьи",
    description: "Индивидуальный страховой план для всей семьи, включающий жизнь, здоровье и имущество.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    details: [
      "Страхование жизни всех членов семьи",
      "Медицинское страхование с широким покрытием",
      "Страхование недвижимости и личного имущества",
      "Специальные условия для детей и пожилых членов семьи",
    ],
  },
  {
    title: "Профессиональная Защита",
    description:
      "Специализированное страхование для различных профессий, включая страхование профессиональной ответственности.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    details: [
      "Страхование от профессиональных ошибок",
      "Юридическая защита при судебных разбирательствах",
      "Компенсация потери дохода при временной нетрудоспособности",
      "Страхование профессионального оборудования",
    ],
  },
  {
    title: "Защита Бизнеса 360°",
    description: "Комплексное страховое решение для малого и среднего бизнеса.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    details: [
      "Страхование имущества и оборудования",
      "Страхование ответственности перед третьими лицами",
      "Страхование от перерыва в производстве",
      "Киберстрахование",
    ],
  },
  {
    title: "Глобальное Покрытие",
    description: "Премиальное международное страхование для частых путешественников и экспатов.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    details: [
      "Покрытие медицинских расходов по всему миру",
      "Доступ к лучшим клиникам и специалистам",
      "Эвакуация и репатриация в экстренных случаях",
      "Телемедицина 24/7 на нескольких языках",
    ],
  },
  {
    title: "Экологическое Страхование",
    description: "Инновационные страховые решения для защиты окружающей среды и поддержки устойчивого развития.",
    imageUrl: "/placeholder.svg?height=800&width=600",
    details: [
      "Страхование ответственности за загрязнение окружающей среды",
      "Покрытие расходов на очистку и восстановление экосистем",
      "Страхование возобновляемых источников энергии",
      "Поддержка экологических проектов и инициатив",
    ],
  },
  {
    title: "Индивидуальные Решения",
    description: "Персонализированные страховые планы, учитывающие уникальные потребности и обстоятельства клиента.",
    imageUrl: "/placeholder.svg?height=600&width=800",
    details: [
      "Анализ индивидуальных рисков и потребностей",
      "Комбинирование различных видов страхования",
      "Гибкие условия и опции покрытия",
      "Персональный менеджер для сопровождения",
    ],
  },
]

export default function SolutionsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {solutions.map((solution, index) => (
        <motion.div
          key={solution.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
        >
          <div className="relative h-48">
            <Image
              src={solution.imageUrl || "/placeholder.svg"}
              alt={solution.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 flex items-end p-6">
              <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground mb-4">{solution.description}</p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
              {solution.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <Link href="/contact" className="text-primary hover:underline inline-flex items-center">
              Подробнее о решении
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
    </div>
  )
}

