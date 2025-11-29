import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Star, Clock } from "lucide-react"

const recommendations = [
  {
    id: "2",
    title: "Машинное обучение",
    description: "Идеально подходит после Python — изучите основы ML",
    icon: "🤖",
    level: "Продвинутый",
    duration: "40 часов",
    rating: 4.8,
    reason: "Продолжение Python",
  },
  {
    id: "9",
    title: "Алгоритмы и структуры данных",
    description: "Улучшите навыки программирования для собеседований",
    icon: "🧮",
    level: "Средний",
    duration: "38 часов",
    rating: 4.9,
    reason: "Популярно у Python-разработчиков",
  },
]

const levelColors: Record<string, string> = {
  Начальный: "bg-accent/10 text-accent border-accent/20",
  Средний: "bg-primary/10 text-primary border-primary/20",
  Продвинутый: "bg-orange-500/10 text-orange-600 border-orange-500/20",
}

export function DashboardRecommendations() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Рекомендации ИИ</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {recommendations.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className="group rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:bg-muted/50"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl">
                {course.icon}
              </div>
              <Badge variant="outline" className={levelColors[course.level]}>
                {course.level}
              </Badge>
            </div>

            <h3 className="mb-1 font-semibold text-foreground group-hover:text-primary transition-colors">
              {course.title}
            </h3>
            <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{course.description}</p>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  {course.rating}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {course.duration}
                </span>
              </div>
            </div>

            <div className="mt-3 rounded-lg bg-primary/5 px-3 py-2 text-xs text-primary">{course.reason}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
