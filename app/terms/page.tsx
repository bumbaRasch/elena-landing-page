"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft, FileText, CreditCard, AlertTriangle, Scale, Settings } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.navigation.home}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {t.terms.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t.terms.lastUpdated}: September 2025
          </p>
        </div>

        <div className="grid gap-6">
          {/* Introduction */}
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 dark:text-gray-300">{t.terms.intro}</p>
            </CardContent>
          </Card>

          {/* Scope */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                {t.terms.scope.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.terms.scope.content}</p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                {t.terms.services.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.terms.services.content}</p>
              <ScrollArea className="h-32 w-full rounded border p-3">
                <ul className="space-y-2 text-sm">
                  {t.terms.services.list.map((service: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">{t.terms.services.duration}</p>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                {t.terms.pricing.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.terms.pricing.content}</p>
              <Separator />
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.terms.pricing.packages}</p>
            </CardContent>
          </Card>

          {/* Cancellation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {t.terms.cancellation.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.terms.cancellation.policy}</p>
              <Separator />
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.terms.cancellation.teacher}</p>
            </CardContent>
          </Card>

          {/* Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                {t.terms.liability.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">{t.terms.liability.content}</p>
            </CardContent>
          </Card>

          {/* Applicable Law */}
          <Card>
            <CardHeader>
              <CardTitle>{t.terms.law.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">{t.terms.law.applicable}</p>
              <p className="text-sm">{t.terms.law.jurisdiction}</p>
              <p className="text-sm">{t.terms.law.severability}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}