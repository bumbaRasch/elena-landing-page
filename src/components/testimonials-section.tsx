"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

const avatars = [
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
]

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

export function TestimonialsSection() {
  const { t } = useTranslation()
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {t.testimonials.reviews.map((testimonial: {text: string; name: string; age: string; instrument: string}, index: number) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-gray-400 dark:text-gray-500 transform rotate-180" />
                      </div>

                      {/* Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed text-sm">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Author Info */}
                      <div className="mt-auto flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={avatars[index]} alt={testimonial.name} />
                          <AvatarFallback className="text-xs font-medium">
                            {getInitials(testimonial.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">
                            {testimonial.name}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs">
                            {testimonial.age} • {testimonial.instrument}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.testimonials.stats.students.number}</div>
            <div className="text-gray-600 dark:text-gray-300">{t.testimonials.stats.students.label}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.testimonials.stats.experience.number}</div>
            <div className="text-gray-600 dark:text-gray-300">{t.testimonials.stats.experience.label}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t.testimonials.stats.rating.number}</div>
            <div className="text-gray-600 dark:text-gray-300">{t.testimonials.stats.rating.label}</div>
          </div>
        </div>
      </div>
    </section>
  )
}