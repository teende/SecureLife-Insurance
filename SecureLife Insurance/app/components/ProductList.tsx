"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const products = [
  {
    title: "Страхование Жизни",
    description: "Обеспечьте финансовую защиту своих близких в случае непредвиденных обстоятельств.",
    icon: "🏠",
    details: [
      "Срочное страхование жизни",
      "Пожизненное страхование",
      "Страхование с накоплением",
      "Групповое страхование жизни для сотрудников",
    ],
  },
  {
    title: "Медицинское Страхование",
    description: "Получите доступ к качественной медицинской помощи и защитите свое здоровье.",
    icon: "🏥",
    details: [
      "Добровольное медицинское страхование (ДМС)",
      "Страхование от несчастных случаев и болезней",
      "Страхование критических заболеваний",
      "Международное медицинское страхование",
    ],
  },
  {
    title: "Автострахование",
    description: "Защитите себя и свой автомобиль от рисков на дороге.",
    icon: "🚗",
    details: [
      "ОСАГО (обязательное страхование)",
      "КАСКО (добровольное страхование)",
      "Страхование от несчастных случаев водителя и пассажиров",
      "Помощь на дороге 24/7",
    ],
  },
  {
    title: "Страхование Недвижимости",
    description: "Обеспечьте защиту вашего дома и имущества от различных рисков.",
    icon: "🏡",
    details: [
      "Страхование квартир и домов",
      "Страхование от стихийных бедствий",
      "Страхование ответственности перед третьими лицами",
      "Страхование ипотеки",
    ],
  },
  {
    title: "Туристическое Страхование",
    description: "Путешествуйте с уверенностью, зная, что вы защищены в любой точке мира.",
    icon: "✈️",
    details: [
      "Медицинские расходы за границей",
      "Страхование багажа",
      "Отмена или прерывание поездки",
      "Страхование гражданской ответственности за рубежом",
    ],
  },
  {
    title: "Страхование Бизнеса",
    description: "Комплексная защита для вашего бизнеса, от малых предприятий до крупных корпораций.",
    icon: "💼",
    details: [
      "Страхование имущества предприятий",
      "Страхование ответственности",
      "Страхование от перерыва в производстве",
      "Страхование кибер-рисков",
    ],
  },
]

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={product.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background rounded-3xl shadow-lg p-6 hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
        >
          <div className="text-4xl mb-4">{product.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{product.title}</h3>
          <p className="text-muted-foreground mb-4">{product.description}</p>
          <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
            {product.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <Link href="/contact" className="text-primary hover:underline inline-flex items-center">
            Узнать больше
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
        </motion.div>
      ))}
    </div>
  )
}

