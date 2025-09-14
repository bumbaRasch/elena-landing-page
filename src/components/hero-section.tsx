"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { useTranslation } from "@/hooks/use-translation"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                {t.hero.description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                {t.hero.cta}
              </Button>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-full max-w-md aspect-[4/5] rounded-2xl shadow-lg overflow-hidden">
                <OptimizedImage
                  src="./image/example-hero.webp"
                  alt="Musikstudio mit Klavier und Gitarre"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-200 dark:bg-gray-700 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}