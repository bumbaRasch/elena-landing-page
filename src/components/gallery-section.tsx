"use client"

import * as React from "react"
import { OptimizedImage } from "@/components/optimized-image"
import { useTranslation } from "@/hooks/use-translation"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export function GallerySection() {
  const { t } = useTranslation()
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const galleryImages = [
    {
      id: 1,
      src: "/image/photos/example_1-photo.webp",
      alt: "Musikstudio mit Flügel",
      title: t.gallery.images.studio
    },
    {
      id: 2,
      src: "/image/photos/example_2-photo.webp",
      alt: "Musikinstrumente",
      title: t.gallery.images.instruments
    },
    {
      id: 3,
      src: "/image/photos/example_3-photo.webp",
      alt: "Klavierunterricht",
      title: t.gallery.images.lessons
    },
    {
      id: 4,
      src: "/image/photos/example_4-photo.webp",
      alt: "Musiktheorie",
      title: t.gallery.images.theory
    },
    {
      id: 5,
      src: "/image/photos/example_5-photo.webp",
      alt: "Konzertsaal",
      title: t.gallery.images.concerts
    }
  ]

  return (
    <section id="gallery" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto mb-12 px-4 md:px-0" data-aos="zoom-in" data-aos-delay="200">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-xl">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={625}
                      className="w-full h-full object-cover transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                      priority={image.id === 1}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:p-6">
                      <h3 className="text-white text-base md:text-lg font-semibold">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white/80 hover:bg-white border-gray-200 text-gray-900 dark:bg-gray-800/80 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-100 -left-12" />
            <CarouselNext className="hidden md:flex bg-white/80 hover:bg-white border-gray-200 text-gray-900 dark:bg-gray-800/80 dark:hover:bg-gray-700 dark:border-gray-700 dark:text-gray-100 -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}