import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardCourses } from "@/components/dashboard-courses"
import { DashboardRecommendations } from "@/components/dashboard-recommendations"
import { DashboardActivity } from "@/components/dashboard-activity"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <section className="border-b border-border bg-background py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                АИ
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Привет, Александр!</h1>
                <p className="text-muted-foreground">Продолжайте обучение — вы на правильном пути</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <DashboardStats />

            <div className="mt-8 grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <DashboardCourses />
                <DashboardRecommendations />
              </div>
              <div>
                <DashboardActivity />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
