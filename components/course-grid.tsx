"use client"

import { useState } from "react"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List } from "lucide-react"

const allCourses = [
  {
    id: "1",
    title: "Python для начинающих",
    description: "Изучите основы программирования на Python с нуля. Идеально для новичков.",
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
  {
    id: "4",
    title: "Data Science с нуля",
    description: "Анализ данных, визуализация и статистика для начинающих",
    level: "Начальный",
    icon: "📊",
    progress: 0,
    lessons: 52,
    duration: "28 часов",
    students: 9400,
    rating: 4.7,
  },
  {
    id: "5",
    title: "React и Next.js",
    description: "Современная разработка веб-приложений на React",
    level: "Средний",
    icon: "⚛️",
    progress: 0,
    lessons: 44,
    duration: "26 часов",
    students: 11200,
    rating: 4.9,
  },
  {
    id: "6",
    title: "SQL и базы данных",
    description: "Проектирование БД и написание эффективных запросов",
    level: "Начальный",
    icon: "🗄️",
    progress: 0,
    lessons: 36,
    duration: "18 часов",
    students: 13600,
    rating: 4.8,
  },
  {
    id: "7",
    title: "UI/UX Дизайн",
    description: "Создание пользовательских интерфейсов и прототипирование",
    level: "Средний",
    icon: "🎨",
    progress: 0,
    lessons: 40,
    duration: "22 часа",
    students: 7800,
    rating: 4.7,
  },
  {
    id: "8",
    title: "DevOps практикум",
    description: "CI/CD, Docker, Kubernetes и облачные технологии",
    level: "Продвинутый",
    icon: "🚀",
    progress: 0,
    lessons: 58,
    duration: "36 часов",
    students: 5400,
    rating: 4.8,
  },
  {
    id: "9",
    title: "Алгоритмы и структуры данных",
    description: "Фундаментальные концепции для технических собеседований",
    level: "Средний",
    icon: "🧮",
    progress: 0,
    lessons: 64,
    duration: "38 часов",
    students: 10200,
    rating: 4.9,
  },
]

export function CourseGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("popular")

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          Найдено <span className="font-medium text-foreground">{allCourses.length}</span> курсов
        </p>
        <div className="flex items-center gap-3">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Сортировка" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">По популярности</SelectItem>
              <SelectItem value="rating">По рейтингу</SelectItem>
              <SelectItem value="newest">Сначала новые</SelectItem>
              <SelectItem value="price-asc">По цене ↑</SelectItem>
              <SelectItem value="price-desc">По цене ↓</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-1 rounded-lg border border-border p-1">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("grid")}
              aria-label="Сетка"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode("list")}
              aria-label="Список"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 xl:grid-cols-3" : "flex flex-col gap-4"}>
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button variant="outline" size="lg">
          Загрузить ещё
        </Button>
      </div>
    </div>
  )
}
