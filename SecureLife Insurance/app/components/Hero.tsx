"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">SecureLife Insurance</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ваш надежный партнер в мире страхования с 1985 года. Мы предлагаем комплексные страховые решения,
            разработанные экспертами с многолетним опытом для защиты вашего будущего и обеспечения спокойствия в любой
            жизненной ситуации.
          </motion.p>
          <motion.ul
            className="mt-6 text-base leading-7 text-muted-foreground list-disc list-inside"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <li>Индивидуальный подход к каждому клиенту</li>
            <li>Широкий спектр страховых продуктов для частных лиц и бизнеса</li>
            <li>Быстрое урегулирование претензий в течение 5 рабочих дней</li>
            <li>Инновационные технологии оценки рисков и обслуживания клиентов</li>
            <li>Более 1 000 000 довольных клиентов по всей стране</li>
          </motion.ul>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/products" className="apple-button">
              Изучить Наши Продукты
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-foreground">
              Узнать больше о нас <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Концепция страховой защиты"
              width={600}
              height={600}
              className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

