"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import Link from "next/link"

const features = [
  {
    title: "Страхование Жизни",
    description: "Обеспечьте финансовую защиту своих близких в случае непредвиденных обстоятельств.",
    icon: "🏠",
    details: [
      "Срочное страхование жизни с выплатой до 10 000 000 рублей",
      "Пожизненное страхование с накопительным компонентом",
      "Страхование от несчастных случаев и критических заболеваний",
      "Групповое страхование жизни для сотрудников компаний",
    ],
  },
  {
    title: "Медицинское Страхование",
    description: "Получите доступ к качественной медицинской помощи и защитите свое здоровье.",
    icon: "🏥",
    details: [
      "Добровольное медицинское страхование с широкой сетью клиник",
      "Международное медицинское страхование для лечения за рубежом",
      "Страхование от критических заболеваний с выплатой до 5 000 000 рублей",
      "Телемедицина и круглосуточная поддержка врачей",
    ],
  },
  {
    title: "Автострахование",
    description: "Защитите себя и свой автомобиль от рисков на дороге.",
    icon: "🚗",
    details: [
      "ОСАГО с дополнительными опциями защиты",
      "КАСКО с возможностью выбора рисков и франшизы",
      "Страхование от несчастных случаев водителя и пассажиров",
      "Техническая помощь на дороге 24/7 по всей России",
    ],
  },
  {
    title: "Страхование Недвижимости",
    description: "Обеспечьте защиту вашего дома и имущества от различных рисков.",
    icon: "🏡",
    details: [
      "Комплексное страхование квартир, домов и дач",
      "Защита от пожара, затопления, стихийных бедствий и противоправных действий третьих лиц",
      "Страхование гражданской ответственности перед соседями",
      "Специальные программы для ипотечного страхования",
    ],
  },
  {
    title: "Туристическое Страхование",
    description: "Путешествуйте с уверенностью, зная, что вы защищены в любой точке мира.",
    icon: "✈️",
    details: [
      "Медицинские расходы за границей с лимитом до 100 000 евро",
      "Страхование багажа и документов",
      "Компенсация при отмене или прерывании поездки",
      "Страхование гражданской ответственности за рубежом",
    ],
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Наши Страховые Продукты</h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[500px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {feature.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <Link href="/products" className="text-primary hover:underline inline-flex items-center">
                    Подробнее о {feature.title.toLowerCase()}
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

