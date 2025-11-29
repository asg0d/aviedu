import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, Star, BookOpen } from "lucide-react"

interface Course {
  id: string
  title: string
  description: string
  level: string
  icon: string
  progress: number
  lessons: number
  duration: string
  students: number
  rating: number
}

interface CourseCardProps {
  course: Course
  showProgress?: boolean
}

const levelColors: Record<string, string> = {
  Начальный: "bg-accent/10 text-accent border-accent/20",
  Средний: "bg-primary/10 text-primary border-primary/20",
  Продвинутый: "bg-orange-500/10 text-orange-600 border-orange-500/20",
}

export function CourseCard({ course, showProgress = false }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="group block">
      <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-muted text-3xl">{course.icon}</div>
          <Badge variant="outline" className={levelColors[course.level]}>
            {course.level}
          </Badge>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed">{course.description}</p>

        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{course.lessons} уроков</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{course.rating}</span>
          </div>
        </div>

        {showProgress && course.progress > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Прогресс</span>
              <span className="font-medium text-foreground">{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="h-2" />
          </div>
        )}
      </div>
    </Link>
  )
}
