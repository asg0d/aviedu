"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export function RegisterForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    router.push("/dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            type="text"
            placeholder="Александр"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@mail.ru"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Пароль</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Минимум 8 символов"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              minLength={8}
              className="h-11 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            checked={formData.terms}
            onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
            required
            className="mt-0.5"
          />
          <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground cursor-pointer leading-relaxed">
            Я принимаю{" "}
            <a href="#" className="text-primary hover:underline">
              условия использования
            </a>{" "}
            и{" "}
            <a href="#" className="text-primary hover:underline">
              политику конфиденциальности
            </a>
          </Label>
        </div>
      </div>

      <Button type="submit" className="w-full h-11" disabled={isLoading || !formData.terms}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Регистрация...
          </>
        ) : (
          "Создать аккаунт"
        )}
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">или зарегистрируйтесь через</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button type="button" variant="outline" className="h-11 bg-transparent">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
          </svg>
          Google
        </Button>
        <Button type="button" variant="outline" className="h-11 bg-transparent">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.01 13.55h-1.4c-.53 0-.69-.43-1.64-1.38-.82-.79-1.19-.9-1.39-.9-.28 0-.36.08-.36.47v1.26c0 .34-.1.55-1 .55-1.48 0-3.12-.9-4.27-2.56-1.74-2.44-2.22-4.27-2.22-4.65 0-.2.08-.38.47-.38h1.4c.35 0 .48.16.62.53.68 1.97 1.81 3.69 2.28 3.69.17 0 .25-.08.25-.52v-2.02c-.05-.92-.53-1-.53-1.33 0-.16.13-.33.35-.33h2.2c.3 0 .4.16.4.51v2.73c0 .29.13.4.22.4.17 0 .32-.11.64-.43.99-1.11 1.7-2.83 1.7-2.83.1-.2.26-.38.62-.38h1.4c.42 0 .51.22.42.51-.18.83-1.87 3.2-1.87 3.2-.15.24-.21.35 0 .62.15.2.64.62 1 1 .66.72 1.17 1.33 1.31 1.74.14.43-.08.65-.47.65z" />
          </svg>
          VK
        </Button>
      </div>
    </form>
  )
}
