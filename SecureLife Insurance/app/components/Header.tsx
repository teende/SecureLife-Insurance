"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SecureLife Insurance</span>
            <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="SecureLife Insurance Logo" />
          </Link>
        </div>
        <div className="flex gap-x-6">
          <Link
            href="/products"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Продукты
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Решения
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            О нас
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            Контакты
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 text-primary hover:text-primary-foreground transition-colors"
              animate={{
                backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
              }}
              whileHover={{
                backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </motion.button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}

