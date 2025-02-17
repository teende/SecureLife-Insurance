import type { Metadata } from "next"
import SolutionsList from "../components/SolutionsList"

export const metadata: Metadata = {
  title: "Наши Страховые Решения | SecureLife Insurance",
  description:
    "Ознакомьтесь с нашими комплексными страховыми решениями от SecureLife Insurance. Мы предлагаем индивидуальные подходы для частных лиц, семей и бизнеса.",
}

export default function SolutionsPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Наши Страховые Решения</h1>
      <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
        В SecureLife Insurance мы понимаем, что каждый клиент уникален. Наши страховые решения разработаны с учетом
        индивидуальных потребностей и обеспечивают комплексную защиту для различных жизненных ситуаций.
      </p>
      <SolutionsList />
    </div>
  )
}

