"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, ChevronUp, Filter, RotateCcw } from "lucide-react"

const categories = [
  { id: "programming", label: "Программирование", count: 85 },
  { id: "data-science", label: "Анализ данных", count: 42 },
  { id: "design", label: "Дизайн", count: 28 },
  { id: "marketing", label: "Маркетинг", count: 23 },
  { id: "business", label: "Бизнес", count: 19 },
  { id: "languages", label: "Языки", count: 15 },
]

const levels = [
  { id: "beginner", label: "Начальный" },
  { id: "intermediate", label: "Средний" },
  { id: "advanced", label: "Продвинутый" },
]

export function CourseFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [duration, setDuration] = useState([0, 100])
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    levels: true,
    duration: true,
  })

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]))
  }

  const toggleLevel = (id: string) => {
    setSelectedLevels((prev) => (prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]))
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const resetFilters = () => {
    setSelectedCategories([])
    setSelectedLevels([])
    setDuration([0, 100])
  }

  return (
    <div className="space-y-6 rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <span className="font-semibold text-foreground">Фильтры</span>
        </div>
        <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 gap-1 text-xs text-muted-foreground">
          <RotateCcw className="h-3 w-3" />
          Сбросить
        </Button>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => toggleSection("categories")}
          className="flex w-full items-center justify-between text-sm font-medium text-foreground"
        >
          Категории
          {expandedSections.categories ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.categories && (
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <Label
                    htmlFor={category.id}
                    className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                  >
                    {category.label}
                  </Label>
                </div>
                <span className="text-xs text-muted-foreground">{category.count}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-px bg-border" />

      <div className="space-y-4">
        <button
          onClick={() => toggleSection("levels")}
          className="flex w-full items-center justify-between text-sm font-medium text-foreground"
        >
          Уровень сложности
          {expandedSections.levels ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.levels && (
          <div className="space-y-3">
            {levels.map((level) => (
              <div key={level.id} className="flex items-center gap-2">
                <Checkbox
                  id={level.id}
                  checked={selectedLevels.includes(level.id)}
                  onCheckedChange={() => toggleLevel(level.id)}
                />
                <Label
                  htmlFor={level.id}
                  className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  {level.label}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-px bg-border" />

      <div className="space-y-4">
        <button
          onClick={() => toggleSection("duration")}
          className="flex w-full items-center justify-between text-sm font-medium text-foreground"
        >
          Длительность
          {expandedSections.duration ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
        {expandedSections.duration && (
          <div className="space-y-4">
            <Slider value={duration} onValueChange={setDuration} max={100} step={5} className="w-full" />
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{duration[0]} ч</span>
              <span>{duration[1]} ч</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
