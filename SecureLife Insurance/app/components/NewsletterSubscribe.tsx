"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email({ message: "Пожалуйста, введите действительный адрес электронной почты." }),
})

export default function NewsletterSubscribe() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      alert("Спасибо за подписку на нашу рассылку!")
    }, 2000)
  }

  return (
    <section className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">Будьте в курсе и под защитой</h2>
          <p className="text-muted-foreground mb-6 text-center">
            Подпишитесь на нашу рассылку, чтобы получать последние советы по страхованию, новости отрасли и эксклюзивные
            предложения.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Введите ваш email" {...field} className="rounded-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? "Подписка..." : "Подписаться"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

