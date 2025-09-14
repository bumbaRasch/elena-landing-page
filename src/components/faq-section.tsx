"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/hooks/use-translation"

export function FAQSection() {
  const { t } = useTranslation()

  const faqData = [
    {
      id: "1",
      question: t.faq.questions.experience.q,
      answer: t.faq.questions.experience.a
    },
    {
      id: "2",
      question: t.faq.questions.age.q,
      answer: t.faq.questions.age.a
    },
    {
      id: "3",
      question: t.faq.questions.duration.q,
      answer: t.faq.questions.duration.a
    },
    {
      id: "4",
      question: t.faq.questions.location.q,
      answer: t.faq.questions.location.a
    },
    {
      id: "5",
      question: t.faq.questions.instruments.q,
      answer: t.faq.questions.instruments.a
    },
    {
      id: "6",
      question: t.faq.questions.schedule.q,
      answer: t.faq.questions.schedule.a
    },
    {
      id: "7",
      question: t.faq.questions.trial.q,
      answer: t.faq.questions.trial.a
    },
    {
      id: "8",
      question: t.faq.questions.payment.q,
      answer: t.faq.questions.payment.a
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t.faq.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.faq.subtitle}
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t.faq.cta.question}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 rounded-lg font-medium transition-colors"
          >
            {t.faq.cta.button}
          </a>
        </div>
      </div>
    </section>
  )
}