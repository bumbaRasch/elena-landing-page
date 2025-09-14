import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export function useTranslation() {
  const { language } = useLanguage()

  const t = translations[language]

  return { t, language }
}