import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Готовы начать обучение?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Присоединяйтесь к тысячам студентов, которые уже развивают свои навыки с помощью AviEdu. Регистрация
            бесплатна.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2 px-8">
              <Link href="/register">
                Создать аккаунт
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">Посмотреть курсы</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
