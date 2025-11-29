import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseFilters } from "@/components/course-filters"
import { CourseGrid } from "@/components/course-grid"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Каталог курсов</h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Более 200 курсов по программированию, аналитике данных, дизайну и другим направлениям
            </p>

            <div className="relative max-w-xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Поиск курсов..." className="h-12 pl-10 pr-4 text-base" />
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-8 lg:flex-row">
              <aside className="w-full shrink-0 lg:w-64">
                <CourseFilters />
              </aside>
              <div className="flex-1">
                <CourseGrid />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
