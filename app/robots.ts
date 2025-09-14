import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://max-mustermann-musik.de' // Замените на ваш реальный домен

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/robots.txt',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}