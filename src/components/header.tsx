"use client"

import { Button } from "@/components/ui/button"
import { Music, Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { useTranslation } from "@/hooks/use-translation"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const menuItems = [
    { name: t.navigation.about, href: '#about' },
    { name: t.navigation.services, href: '#services' },
    { name: t.navigation.gallery, href: '#gallery' },
    { name: t.navigation.faq, href: '#faq' },
    { name: t.navigation.contact, href: '#contact' },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleMenuClick = () => setIsMenuOpen(false)

  return (
    <header className="bg-gray-50 border-b dark:bg-gray-950 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-gray-900 dark:text-gray-100" />
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">{t.brand.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <a href="#contact">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 cursor-pointer">
                {t.navigation.contact}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-900 dark:text-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t dark:border-gray-800">
            <nav className="py-4 space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleMenuClick}
                  className="block px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900">
                  {t.navigation.contact}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}