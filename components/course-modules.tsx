"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, PlayCircle, CheckCircle2, FileText, HelpCircle, Lock } from "lucide-react"

interface Lesson {
  id: string
  title: string
  duration: string
  completed: boolean
  type: "video" | "practice" | "quiz"
}

interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

interface CourseModulesProps {
  modules: Module[]
}

const lessonIcons = {
  video: PlayCircle,
  practice: FileText,
  quiz: HelpCircle,
}

export function CourseModules({ modules }: CourseModulesProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([modules[0]?.id || ""])

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => (prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]))
  }

  const getModuleProgress = (module: Module) => {
    const completed = module.lessons.filter((l) => l.completed).length
    return Math.round((completed / module.lessons.length) * 100)
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">Содержание курса</h2>
        <p className="text-muted-foreground">
          {modules.length} модулей • {modules.reduce((acc, m) => acc + m.lessons.length, 0)} уроков
        </p>
      </div>

      <div className="space-y-3">
        {modules.map((module, moduleIndex) => {
          const isExpanded = expandedModules.includes(module.id)
          const progress = getModuleProgress(module)
          const completedCount = module.lessons.filter((l) => l.completed).length

          return (
            <div key={module.id} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => toggleModule(module.id)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                    {moduleIndex + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {completedCount}/{module.lessons.length} уроков • {progress}% завершено
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {progress === 100 && <CheckCircle2 className="h-5 w-5 text-accent" />}
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-border">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const LessonIcon = lessonIcons[lesson.type]
                    const isAvailable =
                      moduleIndex === 0 || lessonIndex === 0 || module.lessons[lessonIndex - 1]?.completed

                    return (
                      <div
                        key={lesson.id}
                        className={`flex items-center justify-between border-b border-border/50 px-4 py-3 last:border-b-0 ${
                          isAvailable ? "hover:bg-muted/30 cursor-pointer" : "opacity-60"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                              lesson.completed ? "bg-accent/10" : "bg-muted"
                            }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle2 className="h-4 w-4 text-accent" />
                            ) : isAvailable ? (
                              <LessonIcon className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <Lock className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <p className={`text-sm ${lesson.completed ? "text-muted-foreground" : "text-foreground"}`}>
                              {lesson.title}
                            </p>
                            <p className="text-xs text-muted-foreground capitalize">
                              {lesson.type === "video" && "Видео"}
                              {lesson.type === "practice" && "Практика"}
                              {lesson.type === "quiz" && "Тест"}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
