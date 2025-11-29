import { CheckCircle2, BookOpen, Award, Target } from "lucide-react"

const activities = [
  {
    type: "lesson",
    title: "Завершён урок",
    description: "Словари в Python",
    time: "2 часа назад",
    icon: CheckCircle2,
    color: "text-accent",
  },
  {
    type: "course",
    title: "Начат новый курс",
    description: "React и Next.js",
    time: "Вчера",
    icon: BookOpen,
    color: "text-primary",
  },
  {
    type: "achievement",
    title: "Получено достижение",
    description: "7 дней подряд",
    time: "3 дня назад",
    icon: Award,
    color: "text-amber-500",
  },
  {
    type: "milestone",
    title: "Достигнута цель",
    description: "50% курса Python",
    time: "4 дня назад",
    icon: Target,
    color: "text-accent",
  },
  {
    type: "lesson",
    title: "Завершён урок",
    description: "CSS Grid layouts",
    time: "5 дней назад",
    icon: CheckCircle2,
    color: "text-accent",
  },
]

export function DashboardActivity() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold text-foreground">Активность</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-3">
            <div className={`mt-0.5 ${activity.color}`}>
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <p className="mt-1 text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
