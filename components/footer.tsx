import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AviEdu</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Образовательная платформа нового поколения с персональными рекомендациями на основе ИИ.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Платформа</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Каталог курсов
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Личный кабинет
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Сертификаты
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Компания</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  О платформе
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Карьера
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Правовая информация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Оферта
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 AviEdu. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Telegram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="VK">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 13.55h-1.4c-.53 0-.69-.43-1.64-1.38-.82-.79-1.19-.9-1.39-.9-.28 0-.36.08-.36.47v1.26c0 .34-.1.55-1 .55-1.48 0-3.12-.9-4.27-2.56-1.74-2.44-2.22-4.27-2.22-4.65 0-.2.08-.38.47-.38h1.4c.35 0 .48.16.62.53.68 1.97 1.81 3.69 2.28 3.69.17 0 .25-.08.25-.52v-2.02c-.05-.92-.53-1-.53-1.33 0-.16.13-.33.35-.33h2.2c.3 0 .4.16.4.51v2.73c0 .29.13.4.22.4.17 0 .32-.11.64-.43.99-1.11 1.7-2.83 1.7-2.83.1-.2.26-.38.62-.38h1.4c.42 0 .51.22.42.51-.18.83-1.87 3.2-1.87 3.2-.15.24-.21.35 0 .62.15.2.64.62 1 1 .66.72 1.17 1.33 1.31 1.74.14.43-.08.65-.47.65z" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.8 8.001a2.75 2.75 0 00-1.94-1.94C18.12 5.5 12 5.5 12 5.5s-6.12 0-7.86.56a2.75 2.75 0 00-1.94 1.94A28.85 28.85 0 001.5 12a28.85 28.85 0 00.7 4 2.75 2.75 0 001.94 1.94c1.74.56 7.86.56 7.86.56s6.12 0 7.86-.56a2.75 2.75 0 001.94-1.94 28.85 28.85 0 00.7-4 28.85 28.85 0 00-.7-4zM9.75 15.02V8.98l5.24 3.02-5.24 3.02z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
