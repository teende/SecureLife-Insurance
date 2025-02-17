import type { Metadata } from "next"
import ProductList from "../components/ProductList"

export const metadata: Metadata = {
  title: "Наши Страховые Продукты | SecureLife Insurance",
  description:
    "Изучите широкий спектр страховых продуктов от SecureLife Insurance. Мы предлагаем решения для защиты вашей жизни, здоровья, имущества и бизнеса.",
}

export default function ProductsPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Наши Страховые Продукты</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        SecureLife Insurance предлагает широкий спектр страховых продуктов, разработанных для защиты всех аспектов вашей
        жизни. Изучите наши предложения и найдите идеальное решение для ваших потребностей.
      </p>
      <ProductList />
    </div>
  )
}

