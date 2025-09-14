export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://max-mustermann-musik.de/#person",
        "name": "Max Mustermann",
        "jobTitle": "Musiklehrer",
        "description": "Professioneller Musiker und Pädagoge mit mehr als 10 Jahren Unterrichtserfahrung",
        "url": "https://max-mustermann-musik.de",
        "image": {
          "@type": "ImageObject",
          "url": "https://max-mustermann-musik.de/image/example-about.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Musterstadt",
          "addressCountry": "DE",
          "postalCode": "12345"
        },
        "knowsAbout": [
          "Klavierunterricht",
          "Gitarrenunterricht",
          "Gesangsunterricht",
          "Musiktheorie",
          "Gehörbildung"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://max-mustermann-musik.de/#business",
        "name": "Max Mustermann - Musikunterricht",
        "description": "Individueller Musikunterricht: Klavier, Gitarre, Gesang, Musiktheorie",
        "url": "https://max-mustermann-musik.de",
        "telephone": "+49 123 456789",
        "email": "max.mustermann@example.de",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Musterstraße 123",
          "addressLocality": "Musterstadt",
          "addressRegion": "Nordrhein-Westfalen",
          "postalCode": "12345",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.2277,
          "longitude": 6.7735
        },
        "openingHours": [
          "Mo-Su 09:00-21:00"
        ],
        "priceRange": "€€",
        "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
        "currenciesAccepted": "EUR",
        "serviceArea": {
          "@type": "City",
          "name": "Musterstadt"
        },
        "areaServed": "Musterstadt",
        "founder": {
          "@id": "https://max-mustermann-musik.de/#person"
        }
      },
      {
        "@type": "Service",
        "@id": "https://max-mustermann-musik.de/#piano-lessons",
        "name": "Klavierunterricht",
        "description": "Individueller Klavierunterricht für alle Niveaus",
        "provider": {
          "@id": "https://max-mustermann-musik.de/#business"
        },
        "serviceType": "Music Education",
        "areaServed": "Musterstadt",
        "offers": {
          "@type": "Offer",
          "price": "45",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "45",
            "priceCurrency": "EUR",
            "unitText": "pro Stunde"
          }
        }
      },
      {
        "@type": "Service",
        "@id": "https://max-mustermann-musik.de/#guitar-lessons",
        "name": "Gitarrenunterricht",
        "description": "Unterricht für Akustik- und E-Gitarre",
        "provider": {
          "@id": "https://max-mustermann-musik.de/#business"
        },
        "serviceType": "Music Education",
        "areaServed": "Musterstadt",
        "offers": {
          "@type": "Offer",
          "price": "40",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "40",
            "priceCurrency": "EUR",
            "unitText": "pro Stunde"
          }
        }
      },
      {
        "@type": "Service",
        "@id": "https://max-mustermann-musik.de/#vocal-lessons",
        "name": "Gesangsunterricht",
        "description": "Stimmbildung und Entwicklung der Gesangsfähigkeiten",
        "provider": {
          "@id": "https://max-mustermann-musik.de/#business"
        },
        "serviceType": "Music Education",
        "areaServed": "Musterstadt",
        "offers": {
          "@type": "Offer",
          "price": "42",
          "priceCurrency": "EUR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "42",
            "priceCurrency": "EUR",
            "unitText": "pro Stunde"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://max-mustermann-musik.de/#website",
        "url": "https://max-mustermann-musik.de",
        "name": "Max Mustermann - Musikunterricht",
        "description": "Professioneller Musikunterricht in Musterstadt",
        "publisher": {
          "@id": "https://max-mustermann-musik.de/#business"
        },
        "inLanguage": "de-DE"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}