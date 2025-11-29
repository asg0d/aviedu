import { BookOpen, Clock, Award, Flame } from "lucide-react"

const stats = [
  {
    label: "Курсов в процессе",
    value: "4",
    icon: BookOpen,
    color: "bg-primary/10 text-primary",
  },
  {
    label: "Часов обучения",
    value: "47",
    icon: Clock,
    color: "bg-accent/10 text-accent",
  },
  {
    label: "Сертификатов",
    value: "2",
    icon: Award,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    label: "Дней подряд",
    value: "12",
    icon: Flame,
    color: "bg-orange-500/10 text-orange-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
        >
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
            <stat.icon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
