"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-aos="fade-up">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{t.footer.brand.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t.footer.brand.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              {t.footer.navigation.title}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  {t.footer.navigation.home}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  {t.footer.navigation.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  {t.footer.navigation.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                  {t.footer.navigation.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              {t.footer.services.title}
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-300">{t.footer.services.piano}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-300">{t.footer.services.guitar}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-300">{t.footer.services.vocal}</span>
              </li>
              <li>
                <span className="text-sm text-gray-600 dark:text-gray-300">{t.footer.services.theory}</span>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
              {t.footer.contact.title}
            </h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p>max.mustermann@example.com</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} {t.footer.brand.name}. {t.footer.legal.copyright}
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              {t.footer.legal.privacy}
            </a>
            <a href="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              {t.footer.legal.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}