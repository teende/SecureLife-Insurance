"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"

const timelineEvents = [
  {
    year: 1985,
    title: "Основание SecureLife Insurance",
    description: "Начало нашего пути в страховании с фокусом на защиту семей.",
    details:
      "Основанная группой опытных актуариев и страховых экспертов, SecureLife Insurance начала свою деятельность с предоставления инновационных решений по страхованию жизни.",
  },
  {
    year: 1995,
    title: "Запуск Комплексного Медицинского Страхования",
    description: "Расширение портфеля услуг для обеспечения полной защиты здоровья клиентов.",
    details:
      "Мы разработали уникальные программы медицинского страхования, включающие профилактику заболеваний и доступ к передовым методам лечения.",
  },
  {
    year: 2005,
    title: "Внедрение Цифровых Технологий",
    description: "Революция в обслуживании клиентов с помощью передовых IT-решений.",
    details:
      "Запуск онлайн-платформы для управления полисами и подачи претензий, значительно упростившей взаимодействие клиентов с компанией.",
  },
  {
    year: 2010,
    title: "Выход на Международный Рынок",
    description: "Расширение деятельности за пределы страны и начало глобальных операций.",
    details:
      "Открытие офисов в ключевых финансовых центрах мира, предложение международных страховых продуктов для экспатов и глобальных корпораций.",
  },
  {
    year: 2015,
    title: "Внедрение ИИ в Оценку Рисков",
    description: "Использование искусственного интеллекта для повышения точности андеррайтинга.",
    details:
      "Разработка собственных алгоритмов машинного обучения для анализа больших данных, что позволило предложить более персонализированные и справедливые тарифы.",
  },
  {
    year: 2023,
    title: "Запуск Программы Устойчивого Развития",
    description: "Интеграция принципов ESG в страховые продукты и операционную деятельность.",
    details:
      "Внедрение экологически ориентированных страховых решений, поддержка социальных инициатив и усиление корпоративного управления для обеспечения долгосрочной устойчивости бизнеса.",
  },
]

const ShieldIcon = ({ progress }: { progress: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.64 20.59 3.09 16.01 3.09 11.12V6.73C3.09 5.91 3.71 5.01 4.48 4.75L10.05 2.26C11.3 1.81 12.71 1.81 13.96 2.26L19.53 4.75C20.29 5.01 20.92 5.91 20.92 6.73V11.12H20.91Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section ref={containerRef} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">История Нашего Успеха</h2>
          <p className="mt-4 text-lg text-muted-foreground">Более 35 лет инноваций и надежной защиты наших клиентов</p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20"
            style={{ scaleY: scaleX }}
          />

          <motion.div
            className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-primary"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
          >
            <ShieldIcon progress={useTransform(scrollYProgress, [0, 1], [0.5, 1]) as any} />
          </motion.div>

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0]
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />
      <div className="z-20">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <div className="w-3 h-3 bg-background rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-background rounded-lg shadow-md border border-primary/10">
          <span className="font-bold text-primary">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
          <p className="text-muted-foreground">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

