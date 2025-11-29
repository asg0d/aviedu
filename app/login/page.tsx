import Link from "next/link"
import { LoginForm } from "@/components/login-form"
import { Sparkles } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-12">
        <div className="max-w-md text-center">
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground">Добро пожаловать в AviEdu</h2>
          <p className="text-lg text-muted-foreground">
            Персональное обучение с помощью искусственного интеллекта. Более 200 курсов и 50 000 студентов.
          </p>
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
            <h1 className="text-2xl font-bold text-foreground">Вход в аккаунт</h1>
            <p className="mt-2 text-muted-foreground">Введите свои данные для входа в систему</p>
          </div>

          <LoginForm />

          <p className="text-center text-sm text-muted-foreground">
            Нет аккаунта?{" "}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Зарегистрироваться
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
