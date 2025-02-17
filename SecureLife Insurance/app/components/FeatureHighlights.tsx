"use client"

import { motion } from "framer-motion"
import { Shield, Heart, Briefcase, Home } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Надежная Защита",
    description: "Мы обеспечиваем комплексную страховую защиту для вашего спокойствия.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Забота о Клиентах",
    description: "Индивидуальный подход и поддержка на каждом этапе сотрудничества.",
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Профессионализм",
    description: "Наша команда экспертов гарантирует высокое качество услуг.",
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Комплексные Решения",
    description: "От личного страхования до защиты бизнеса - мы предлагаем полный спектр услуг.",
  },
]

export default function FeatureHighlights() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Почему Выбирают SecureLife Insurance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-primary/10 p-3 rounded-full mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/about" className="text-primary hover:underline">
            Узнать больше о нашей компании →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

