import { Brain, Target, BarChart3, Zap, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "ИИ-рекомендации",
    description: "Персональные рекомендации курсов на основе ваших интересов, целей и стиля обучения.",
  },
  {
    icon: Target,
    title: "Адаптивное обучение",
    description: "Система подстраивается под ваш уровень знаний и темп освоения материала.",
  },
  {
    icon: BarChart3,
    title: "Детальная аналитика",
    description: "Отслеживайте прогресс, анализируйте сильные стороны и области для улучшения.",
  },
  {
    icon: Zap,
    title: "Интерактивные задания",
    description: "Практические задачи с мгновенной проверкой и подробным разбором ошибок.",
  },
  {
    icon: Shield,
    title: "Сертификаты",
    description: "Получайте официальные сертификаты по завершению курсов для портфолио.",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Учитесь в удобное время с любого устройства. Прогресс сохраняется автоматически.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Почему выбирают AviEdu</h2>
          <p className="text-lg text-muted-foreground">Современные технологии для максимально эффективного обучения</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
