import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Play } from "lucide-react"

const userCourses = [
  {
    id: "1",
    title: "Python для начинающих",
    icon: "🐍",
    progress: 65,
    nextLesson: "Словари и множества",
    lastAccessed: "Сегодня",
  },
  {
    id: "3",
    title: "Веб-разработка",
    icon: "🌐",
    progress: 42,
    nextLesson: "Flexbox и Grid",
    lastAccessed: "Вчера",
  },
  {
    id: "5",
    title: "React и Next.js",
    icon: "⚛️",
    progress: 18,
    nextLesson: "Компоненты и props",
    lastAccessed: "3 дня назад",
  },
  {
    id: "6",
    title: "SQL и базы данных",
    icon: "🗄️",
    progress: 85,
    nextLesson: "Оптимизация запросов",
    lastAccessed: "Неделю назад",
  },
]

export function DashboardCourses() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">Мои курсы</h2>
        <Button variant="ghost" size="sm" asChild className="gap-1 text-muted-foreground">
          <Link href="/courses">
            Все курсы
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="space-y-4">
        {userCourses.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className="group flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:bg-muted/50"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl">{course.icon}</div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <span className="text-sm font-medium text-foreground">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="mt-2 h-1.5" />
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Далее: {course.nextLesson}</span>
                <span>{course.lastAccessed}</span>
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Play className="h-4 w-4" />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  )
}
