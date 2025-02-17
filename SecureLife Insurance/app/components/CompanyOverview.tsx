"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          О Компании SecureLife Insurance
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Наша Миссия</h3>
            <p className="text-muted-foreground mb-6">
              Миссия SecureLife Insurance - обеспечивать финансовую стабильность и уверенность в завтрашнем дне для
              наших клиентов, предоставляя инновационные страховые решения и превосходный сервис.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Наши Ценности</h3>
            <ul className="list-disc list-inside text-muted-foreground mb-6">
              <li>Клиентоориентированность: Мы ставим интересы клиентов на первое место</li>
              <li>Инновации: Постоянно совершенствуем наши продукты и процессы</li>
              <li>Надежность: Выполняем свои обязательства точно и в срок</li>
              <li>Прозрачность: Обеспечиваем ясность во всех аспектах нашей работы</li>
              <li>Профессионализм: Наша команда - эксперты в страховании</li>
            </ul>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="SecureLife Insurance Office"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

