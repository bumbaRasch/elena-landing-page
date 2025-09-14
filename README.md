# 🎹 Music Teacher Landing Page

> A modern, multilingual landing page for freelance music teachers with GDPR compliance and professional design.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Performance & SEO](#performance--seo)
- [Legal Compliance](#legal-compliance)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 🎯 About the Project

A professional, fully-featured landing page designed specifically for freelance music teachers. This project showcases modern web development practices with a focus on performance, accessibility, and user experience.

**Target Audience:** Freelance music teachers, music studios, private music instructors
**Languages Supported:** German (DE) and Russian (RU)

### Key Highlights

- ⚡ **Lightning Fast** - Built with Next.js 15 and Turbopack for optimal performance
- 🌍 **Multilingual** - Complete German and Russian translations
- 📱 **Responsive** - Mobile-first design that works on all devices
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🔐 **GDPR Compliant** - Built-in privacy policy and consent management
- 🎨 **Beautiful UI** - Modern design with shadcn/ui components

## ✨ Features

### 🌐 Core Features
- **Multilingual Support** - Seamless German/Russian language switching
- **Dark/Light Theme** - Automatic system theme detection with manual override
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Contact Form** - React Hook Form with Zod validation and GDPR consent

### 📄 Page Sections
- **Hero Section** - Eye-catching introduction with call-to-action
- **About Section** - Professional biography and credentials
- **Services Section** - Detailed service offerings with pricing
- **Gallery Section** - Image showcase with optimized WebP format
- **Testimonials** - Customer reviews with carousel display
- **FAQ Section** - Accordion-style frequently asked questions
- **Contact Section** - Professional contact form with validation

### 🏢 Business Features
- **GDPR Compliance** - Privacy policy and terms of service pages
- **SEO Optimization** - Meta tags, sitemap, and structured data
- **Performance Optimized** - Image optimization and lazy loading
- **Professional Branding** - Consistent design language throughout

### 🎛️ User Experience
- **Floating Language Switcher** - Bottom-left positioned for easy access
- **Back to Top Button** - Smooth scroll navigation
- **Toast Notifications** - User feedback for form submissions
- **Loading States** - Smooth transitions and loading indicators

## 🛠 Technology Stack

### Core Framework
- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - Latest React with concurrent features
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful component library
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### Form & Validation
- **[React Hook Form 7.62.0](https://react-hook-form.com/)** - Performant form library
- **[Zod 3.25.76](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### User Experience
- **[AOS 2.3.4](https://michalsnik.github.io/aos/)** - Animate On Scroll library
- **[Embla Carousel](https://www.embla-carousel.com/)** - Touch-friendly carousel
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[CVA](https://cva.style/docs)** - Class Variance Authority for component variants

### Development Tools
- **[ESLint 9](https://eslint.org/)** - Code linting and quality
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 18.17 or higher)
- **npm** (version 9.0 or higher) or **yarn** or **pnpm**
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/elena-landing-page.git
   cd elena-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment (if needed)**
   ```bash
   # Copy environment template (if exists)
   cp .env.example .env.local
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
elena-landing-page/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── privacy/                 # Privacy policy page
│   ├── terms/                   # Terms of service page
│   ├── manifest.ts              # Web app manifest
│   ├── sitemap.ts               # SEO sitemap
│   └── robots.ts                # SEO robots.txt
├── src/
│   ├── components/              # Reusable React components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── about-section.tsx    # About section
│   │   ├── contact-section.tsx  # Contact form section
│   │   ├── faq-section.tsx      # FAQ accordion
│   │   ├── footer.tsx           # Site footer
│   │   ├── gallery-section.tsx  # Image gallery
│   │   ├── header.tsx           # Site navigation
│   │   ├── hero-section.tsx     # Landing hero
│   │   ├── services-section.tsx # Services showcase
│   │   └── testimonials-section.tsx # Customer reviews
│   ├── hooks/                   # Custom React hooks
│   │   └── use-translation.tsx  # Translation hook
│   └── lib/                     # Utility functions
│       ├── translations.ts      # i18n translations
│       └── utils.ts             # Helper functions
├── public/                      # Static assets
│   ├── image/                   # Optimized images
│   │   ├── photos/              # Gallery images
│   │   ├── example-about.webp   # About section image
│   │   └── example-hero.webp    # Hero section image
│   └── *.svg                    # Icon assets
├── components.json              # shadcn/ui config
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies & scripts
```

## 📖 Usage

### Available Scripts

```bash
# Development with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Customization

#### 1. Update Content
Edit translations in `src/lib/translations.ts`:

```typescript
export const translations = {
  de: {
    brand: {
      name: "Your Name" // Update teacher name
    },
    // ... other translations
  },
  ru: {
    // Russian translations
  }
}
```

#### 2. Replace Images
- Add your photos to `public/image/photos/`
- Update hero and about images in `public/image/`
- Ensure images are optimized (WebP format recommended)

#### 3. Configure Contact Information
Update contact details in the translations file and footer component.

#### 4. Customize Styling
- Modify `app/globals.css` for global styles
- Use Tailwind classes for component-level styling
- Customize theme in `tailwind.config.ts`

## 🚀 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/elena-landing-page)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

**Netlify:**
```bash
npm run build
# Deploy the 'out' folder
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables
No environment variables are required for basic functionality. Add any API keys or external service configurations as needed.

## ⚡ Performance & SEO

### Performance Features
- **Next.js 15 with Turbopack** - Lightning-fast development and production builds
- **Image Optimization** - Automatic WebP conversion and lazy loading
- **Tree Shaking** - Only necessary JavaScript is shipped
- **Code Splitting** - Automatic route-based code splitting
- **Static Generation** - Pre-rendered pages for optimal loading

### SEO Features
- **Meta Tags** - Comprehensive SEO meta tags
- **Structured Data** - JSON-LD for better search indexing
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine crawler guidelines
- **Open Graph** - Social media sharing optimization
- **Multilingual SEO** - Language-specific meta tags

### Accessibility
- **WCAG 2.1 AA Compliance** - Meets accessibility standards
- **Semantic HTML** - Proper HTML structure and landmarks
- **ARIA Labels** - Screen reader friendly
- **Keyboard Navigation** - Full keyboard accessibility
- **Color Contrast** - Meets contrast ratio requirements

### Performance Scores
- **Lighthouse Performance: 95+**
- **First Contentful Paint: <1.5s**
- **Largest Contentful Paint: <2.5s**
- **Cumulative Layout Shift: <0.1**

## 🔐 Legal Compliance

### GDPR Compliance
- **Privacy Policy** - Complete GDPR-compliant privacy policy
- **Terms of Service** - Comprehensive terms and conditions
- **Consent Management** - Contact form with required privacy consent
- **Data Processing** - Transparent data collection and usage
- **User Rights** - Clear information about user data rights

### Features
- **Cookie Notice** - GDPR-compliant cookie information
- **Data Retention** - Clear data retention policies
- **Contact DPO** - Data protection officer contact information
- **Right to Deletion** - Process for data deletion requests

### Legal Pages
- `/privacy` - Comprehensive privacy policy
- `/terms` - Terms of service and conditions

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write descriptive commit messages
- Add comments for complex logic
- Ensure responsive design on all devices
- Test on both German and Russian languages

### Code Style
- Use functional components with hooks
- Prefer TypeScript interfaces over types
- Use Tailwind CSS for styling
- Follow Next.js 15 App Router patterns
- Maintain consistent file naming (kebab-case)

### Issues
- Use GitHub Issues for bug reports
- Include steps to reproduce
- Add screenshots for visual bugs
- Specify browser and device information

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

## 🙏 Acknowledgments

### Libraries & Tools
- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [React Hook Form](https://react-hook-form.com/) - Performant forms
- [Lucide](https://lucide.dev/) - Beautiful icon library

### Design Inspiration
- Modern web design trends
- Music education industry standards
- Accessibility-first design principles

### Images
- [Unsplash](https://unsplash.com/) - High-quality stock photos
- Professional music-themed imagery

---

<div align="center">

**Built with ❤️ for music educators**

[⭐ Star this repo](https://github.com/yourusername/elena-landing-page) | [🐛 Report Bug](https://github.com/yourusername/elena-landing-page/issues) | [💡 Request Feature](https://github.com/yourusername/elena-landing-page/issues)

</div>