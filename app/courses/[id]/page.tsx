import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseHero } from "@/components/course-hero"
import { CourseModules } from "@/components/course-modules"
import { CourseInfo } from "@/components/course-info"

const courseData = {
  id: "1",
  title: "Python для начинающих",
  description:
    "Полный курс программирования на Python с нуля до уверенного уровня. Вы изучите основы синтаксиса, работу с данными, функции, ООП и создадите свои первые проекты.",
  level: "Начальный",
  icon: "🐍",
  progress: 35,
  lessons: 48,
  duration: "24 часа",
  students: 12500,
  rating: 4.9,
  reviews: 1847,
  author: {
    name: "Алексей Петров",
    avatar: "/professional-male-instructor.png",
    title: "Senior Python Developer",
    students: 45000,
    courses: 8,
  },
  skills: ["Python", "Алгоритмы", "ООП", "Работа с файлами", "API"],
  requirements: [
    "Базовые навыки работы с компьютером",
    "Желание учиться программированию",
    "Никакого предварительного опыта не требуется",
  ],
  includes: [
    "48 видео-уроков",
    "120+ практических заданий",
    "Проекты для портфолио",
    "Сертификат по завершению",
    "Пожизненный доступ",
  ],
}

const modules = [
  {
    id: "1",
    title: "Введение в Python",
    lessons: [
      {
        id: "1-1",
        title: "Установка Python и настройка среды",
        duration: "15:30",
        completed: true,
        type: "video" as const,
      },
      { id: "1-2", title: "Первая программа: Hello World", duration: "12:45", completed: true, type: "video" as const },
      { id: "1-3", title: "Переменные и типы данных", duration: "25:00", completed: true, type: "video" as const },
      {
        id: "1-4",
        title: "Практика: Базовые операции",
        duration: "20:00",
        completed: false,
        type: "practice" as const,
      },
      { id: "1-5", title: "Тест по модулю", duration: "15:00", completed: false, type: "quiz" as const },
    ],
  },
  {
    id: "2",
    title: "Управляющие конструкции",
    lessons: [
      { id: "2-1", title: "Условные операторы if/else", duration: "22:15", completed: false, type: "video" as const },
      { id: "2-2", title: "Циклы for и while", duration: "28:30", completed: false, type: "video" as const },
      { id: "2-3", title: "Практика: Задачи на циклы", duration: "35:00", completed: false, type: "practice" as const },
      { id: "2-4", title: "Вложенные конструкции", duration: "18:45", completed: false, type: "video" as const },
      { id: "2-5", title: "Тест по модулю", duration: "20:00", completed: false, type: "quiz" as const },
    ],
  },
  {
    id: "3",
    title: "Функции и модули",
    lessons: [
      { id: "3-1", title: "Создание функций", duration: "26:00", completed: false, type: "video" as const },
      {
        id: "3-2",
        title: "Параметры и возвращаемые значения",
        duration: "24:30",
        completed: false,
        type: "video" as const,
      },
      { id: "3-3", title: "Lambda-функции", duration: "15:00", completed: false, type: "video" as const },
      { id: "3-4", title: "Работа с модулями", duration: "20:15", completed: false, type: "video" as const },
      {
        id: "3-5",
        title: "Практика: Создание калькулятора",
        duration: "40:00",
        completed: false,
        type: "practice" as const,
      },
    ],
  },
  {
    id: "4",
    title: "Структуры данных",
    lessons: [
      { id: "4-1", title: "Списки и кортежи", duration: "30:00", completed: false, type: "video" as const },
      { id: "4-2", title: "Словари и множества", duration: "28:00", completed: false, type: "video" as const },
      { id: "4-3", title: "Методы коллекций", duration: "25:15", completed: false, type: "video" as const },
      {
        id: "4-4",
        title: "Практика: Работа с данными",
        duration: "45:00",
        completed: false,
        type: "practice" as const,
      },
    ],
  },
  {
    id: "5",
    title: "Объектно-ориентированное программирование",
    lessons: [
      { id: "5-1", title: "Классы и объекты", duration: "32:00", completed: false, type: "video" as const },
      { id: "5-2", title: "Наследование и полиморфизм", duration: "35:00", completed: false, type: "video" as const },
      { id: "5-3", title: "Инкапсуляция", duration: "22:00", completed: false, type: "video" as const },
      { id: "5-4", title: "Финальный проект", duration: "60:00", completed: false, type: "practice" as const },
    ],
  },
]

export default function CoursePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CourseHero course={courseData} />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="flex-1">
                <CourseModules modules={modules} />
              </div>
              <aside className="w-full shrink-0 lg:w-80">
                <CourseInfo course={courseData} />
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
