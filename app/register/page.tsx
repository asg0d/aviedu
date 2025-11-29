import Link from "next/link"
import { RegisterForm } from "@/components/register-form"
import { Sparkles, CheckCircle2 } from "lucide-react"

const benefits = [
  "Доступ к 200+ курсам",
  "Персональные рекомендации ИИ",
  "Сертификаты по завершению",
  "Отслеживание прогресса",
]

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-12">
        <div className="max-w-md">
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground">Начните обучение уже сегодня</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Присоединяйтесь к сообществу из 50 000+ студентов и развивайте навыки с помощью ИИ.
          </p>

          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center lg:text-left">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 lg:hidden">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AviEdu</span>
            </Link>
            <h1 className="text-2xl font-bold text-foreground">Создать аккаунт</h1>
            <p className="mt-2 text-muted-foreground">Зарегистрируйтесь бесплатно и начните обучение</p>
          </div>

          <RegisterForm />

          <p className="text-center text-sm text-muted-foreground">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Войти
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
