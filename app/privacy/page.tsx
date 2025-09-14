"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useTranslation } from "@/hooks/use-translation"
import { ArrowLeft, Shield, User, Database, Settings, Mail } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
            {t.privacy.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t.privacy.lastUpdated}: September 2025
          </p>
        </div>

        <div className="grid gap-6">
          {/* Data Controller */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {t.privacy.controller.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">{t.privacy.controller.name}</p>
              <p>{t.privacy.controller.address}</p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {t.privacy.controller.email}
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                {t.privacy.dataCollection.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.privacy.dataCollection.contactForm}</p>
              <ScrollArea className="h-24 w-full rounded border p-3">
                <ul className="space-y-1 text-sm">
                  {t.privacy.dataCollection.formData.map((item: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">{t.privacy.dataCollection.legalBasis}</p>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {t.privacy.dataUsage.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.privacy.dataUsage.purpose}</p>
              <ScrollArea className="h-20 w-full rounded border p-3">
                <ul className="space-y-1 text-sm">
                  {t.privacy.dataUsage.purposes.map((item: string, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                {t.privacy.userRights.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t.privacy.userRights.intro}</p>
              <ScrollArea className="h-32 w-full rounded border p-3">
                <ul className="space-y-2 text-sm">
                  {t.privacy.userRights.rights.map((right: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{right}</span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">{t.privacy.userRights.contact}</p>
            </CardContent>
          </Card>

          {/* Data Storage */}
          <Card>
            <CardHeader>
              <CardTitle>{t.privacy.dataRetention.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.privacy.dataRetention.period}</p>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle>{t.privacy.security.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{t.privacy.security.measures}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}