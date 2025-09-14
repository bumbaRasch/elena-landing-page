"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"

const languages = [
  { code: "de", name: "DE" },
  { code: "ru", name: "RU" },
]

export function FloatingLanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find(lang => lang.code === language)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Select value={language} onValueChange={setLanguage}>
        <SelectTrigger className="w-[70px] h-[40px] bg-white/90 dark:bg-gray-800/90 border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-200">
          <span className="text-sm font-bold tracking-wide">
            {currentLanguage?.name}
          </span>
        </SelectTrigger>
        <SelectContent side="top" className="mb-2">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              <span className="font-medium">{lang.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}