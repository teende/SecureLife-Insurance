"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    content:
      "SecureLife Insurance обеспечила мою семью надежной защитой. Их индивидуальный подход и профессионализм впечатляют!",
    author: "Анна Петрова",
    position: "Клиент, Семейное страхование",
  },
  {
    id: 2,
    content:
      "Как владелец малого бизнеса, я высоко ценю комплексные решения SecureLife. Они действительно понимают потребности предпринимателей.",
    author: "Иван Сидоров",
    position: "Директор, ООО 'ТехноСтарт'",
  },
  {
    id: 3,
    content:
      "Быстрое урегулирование страхового случая и отличная поддержка. SecureLife Insurance - это надежный партнер в непредвиденных ситуациях.",
    author: "Елена Васильева",
    position: "Клиент, Автострахование",
  },
]

export default function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Что Говорят Наши Клиенты</h2>
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/10 p-8 rounded-lg text-center"
            >
              <p className="text-lg mb-6">"{testimonials[currentTestimonial].content}"</p>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt={testimonials[currentTestimonial].author}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background p-2 rounded-full shadow-lg"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background p-2 rounded-full shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

