import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Users, BookOpen, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Образование нового поколения</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Искусственный интеллект для{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              эффективного обучения
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Персональные рекомендации, адаптивные курсы и умная система отслеживания прогресса. Учитесь в своем темпе с
            помощью технологий ИИ.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2 px-8">
              <Link href="/register">
                Начать обучение
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
              <Link href="/courses">
                <Play className="h-4 w-4" />
                Смотреть курсы
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">50K+</div>
            <div className="text-sm text-muted-foreground">Активных студентов</div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div className="text-3xl font-bold text-foreground">200+</div>
            <div className="text-sm text-muted-foreground">Интерактивных курсов</div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-foreground">95%</div>
            <div className="text-sm text-muted-foreground">Завершают курсы</div>
          </div>
        </div>
      </div>
    </section>
  )
}
