"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Piano, Guitar, Mic, BookOpen, ArrowRight, BadgeCheck } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  const { t } = useTranslation()

  const services = [
    {
      id: 1,
      title: t.services.piano.title,
      description: t.services.piano.description,
      price: t.services.piano.price,
      features: t.services.piano.features,
      icon: Piano,
      popular: false
    },
    {
      id: 2,
      title: t.services.guitar.title,
      description: t.services.guitar.description,
      price: t.services.guitar.price,
      features: t.services.guitar.features,
      icon: Guitar,
      popular: true
    },
    {
      id: 3,
      title: t.services.vocal.title,
      description: t.services.vocal.description,
      price: t.services.vocal.price,
      features: t.services.vocal.features,
      icon: Mic,
      popular: false
    },
    {
      id: 4,
      title: t.services.theory.title,
      description: t.services.theory.description,
      price: t.services.theory.price,
      features: t.services.theory.features,
      icon: BookOpen,
      popular: false
    }
  ]

  return (
    <section id="services" className="py-16 md:py-32 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl space-y-6 text-center" data-aos="fade-up">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl text-gray-900 dark:text-gray-100">
            {t.services.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-balance">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mt-12" data-aos="fade-up" data-aos-delay="200">
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            {services.map((service) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={service.id}
                  className={cn(
                    "relative w-full text-left flex flex-col h-full",
                    service.popular && "ring-2 ring-gray-900 dark:ring-gray-100"
                  )}
                  data-aos="zoom-in"
                  data-aos-delay={300 + service.id * 100}
                >
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 dark:bg-gray-100 dark:text-gray-900">
                      {t.services.popular}
                    </Badge>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </div>
                    <CardTitle className="font-medium text-xl mb-2">{service.title}</CardTitle>
                    <div className="space-y-1">
                      <span className="block text-3xl font-semibold text-gray-900 dark:text-gray-100">
                        {service.price}
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{t.services.perLesson}</p>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-balance">
                      {service.description}
                    </p>

                    <div className="grid gap-2">
                      {service.features.map((feature, index) => (
                        <div
                          className="flex items-center gap-2 text-muted-foreground text-sm"
                          key={index}
                        >
                          <BadgeCheck className="h-4 w-4 text-gray-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-6">
                    <Button
                      className={cn(
                        "w-full",
                        service.popular
                          ? "bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100"
                      )}
                      variant={service.popular ? "default" : "secondary"}
                    >
                      {t.hero.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}