import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

interface CourseInfoProps {
  course: {
    skills: string[]
    requirements: string[]
    includes: string[]
    author: {
      name: string
      avatar: string
      title: string
      students: number
      courses: number
    }
  }
}

export function CourseInfo({ course }: CourseInfoProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Вы научитесь</h3>
        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Курс включает</h3>
        <ul className="space-y-3">
          {course.includes.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Требования</h3>
        <ul className="space-y-3">
          {course.requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold text-foreground">Автор курса</h3>
        <div className="flex items-center gap-3">
          <img
            src={course.author.avatar || "/placeholder.svg"}
            alt={course.author.name}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-foreground">{course.author.name}</p>
            <p className="text-sm text-muted-foreground">{course.author.title}</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border pt-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">{course.author.students.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">Студентов</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-foreground">{course.author.courses}</p>
            <p className="text-xs text-muted-foreground">Курсов</p>
          </div>
        </div>
      </div>
    </div>
  )
}
