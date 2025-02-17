"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Готовы Обеспечить Свое Будущее?
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Наши эксперты готовы помочь вам выбрать оптимальное страховое решение. Свяжитесь с нами сегодня и сделайте
          первый шаг к уверенному будущему.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
          >
            Получить Консультацию
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

