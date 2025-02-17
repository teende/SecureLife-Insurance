"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов." }),
  email: z.string().email({ message: "Пожалуйста, введите действительный адрес электронной почты." }),
  phone: z.string().min(10, { message: "Пожалуйста, введите действительный номер телефона." }),
  insuranceType: z.string().min(1, { message: "Пожалуйста, выберите тип страхования." }),
  message: z.string().min(10, { message: "Сообщение должно содержать не менее 10 символов." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      alert("Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время!")
    }, 2000)
  }

  return (
    <section className="bg-background py-20" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Получить Расчет</h2>
          <p className="text-lg text-muted-foreground">
            Готовы обезопасить свое будущее? Заполните форму ниже, и мы свяжемся с вами для предоставления
            персонализированного расчета.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван Иванов" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="ivan@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Номер телефона</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (999) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="insuranceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Тип страхования</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full p-2 rounded-md border border-input bg-background text-foreground"
                      >
                        <option value="">Выберите тип страхования</option>
                        <option value="life">Страхование жизни</option>
                        <option value="health">Медицинское страхование</option>
                        <option value="auto">Автострахование</option>
                        <option value="home">Страхование недвижимости</option>
                        <option value="travel">Туристическое страхование</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Дополнительная информация</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Расскажите нам подробнее о ваших потребностях в страховании..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Отправка..." : "Получить мой расчет"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

