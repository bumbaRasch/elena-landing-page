"use client"

import { GraduationCap, Trophy } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { useTranslation } from "@/hooks/use-translation"

export function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="flex justify-center" data-aos="fade-right">
            <div className="w-full max-w-lg aspect-[4/5] rounded-2xl shadow-lg overflow-hidden">
              <OptimizedImage
                src="/image/example-about.webp"
                alt="Max Mustermann - Musiklehrer"
                width={500}
                height={625}
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Biography */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{t.about.education.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.about.education.description}
              </p>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{t.about.experience.title}</h3>
              </div>
              <div className="space-y-3">
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-medium">{t.about.experience.years}</p>
                  <p>{t.about.experience.students}</p>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-medium">{t.about.experience.competitions}</p>
                  <p>{t.about.experience.awards}</p>
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-medium">{t.about.experience.methods}</p>
                  <p>{t.about.experience.program}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}