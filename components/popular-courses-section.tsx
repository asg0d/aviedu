import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CourseCard } from "@/components/course-card"
import { ArrowRight } from "lucide-react"

const popularCourses = [
  {
    id: "1",
    title: "Python для начинающих",
    description: "Изучите основы программирования на Python с нуля",
    level: "Начальный",
    icon: "🐍",
    progress: 0,
    lessons: 48,
    duration: "24 часа",
    students: 12500,
    rating: 4.9,
  },
  {
    id: "2",
    title: "Машинное обучение",
    description: "Основы ML и нейронных сетей с практическими проектами",
    level: "Продвинутый",
    icon: "🤖",
    progress: 0,
    lessons: 62,
    duration: "40 часов",
    students: 8200,
    rating: 4.8,
  },
  {
    id: "3",
    title: "Веб-разработка",
    description: "HTML, CSS, JavaScript и современные фреймворки",
    level: "Средний",
    icon: "🌐",
    progress: 0,
    lessons: 56,
    duration: "32 часа",
    students: 15800,
    rating: 4.9,
  },
]

export function PopularCoursesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Популярные курсы</h2>
            <p className="text-lg text-muted-foreground">Начните обучение с самых востребованных курсов</p>
          </div>
          <Button variant="outline" asChild className="gap-2 bg-transparent">
            <Link href="/courses">
              Все курсы
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
