import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Star, Clock, Users, BookOpen, Play } from "lucide-react"

interface CourseHeroProps {
  course: {
    title: string
    description: string
    level: string
    icon: string
    progress: number
    lessons: number
    duration: string
    students: number
    rating: number
    reviews: number
    author: {
      name: string
      avatar: string
      title: string
    }
  }
}

const levelColors: Record<string, string> = {
  Начальный: "bg-accent/10 text-accent border-accent/20",
  Средний: "bg-primary/10 text-primary border-primary/20",
  Продвинутый: "bg-orange-500/10 text-orange-600 border-orange-500/20",
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-card text-4xl shadow-sm">
                {course.icon}
              </div>
              <Badge variant="outline" className={levelColors[course.level]}>
                {course.level}
              </Badge>
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{course.title}</h1>

            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">{course.description}</p>

            <div className="mb-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-medium text-foreground">{course.rating}</span>
                <span>({course.reviews.toLocaleString()} отзывов)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                <span>{course.students.toLocaleString()} студентов</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                <span>{course.lessons} уроков</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={course.author.avatar || "/placeholder.svg"}
                alt={course.author.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{course.author.name}</p>
                <p className="text-sm text-muted-foreground">{course.author.title}</p>
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-border bg-card p-6 shadow-sm lg:w-80">
            {course.progress > 0 ? (
              <>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ваш прогресс</span>
                    <span className="font-medium text-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <Button className="w-full gap-2" size="lg">
                  <Play className="h-4 w-4" />
                  Продолжить обучение
                </Button>
              </>
            ) : (
              <Button className="w-full gap-2" size="lg">
                <Play className="h-4 w-4" />
                Начать курс
              </Button>
            )}
            <p className="mt-4 text-center text-xs text-muted-foreground">Бесплатный доступ ко всем материалам</p>
          </div>
        </div>
      </div>
    </section>
  )
}
