# AIO Growth SEO - Next.js Marketing Website

A high-performance, SEO-optimized marketing website built with Next.js 14, featuring static site generation (SSG) for maximum crawlability and Core Web Vitals performance.

🔗 **Live Site:** [aiogrowthseo.com](https://aiogrowthseo.com)

---

## 🎯 Project Overview

This project demonstrates **context engineering** and **AI-assisted development** to build a fully crawlable, SEO-optimized website with 52+ static pages in under two weeks.

### The Challenge
The original React SPA had critical SEO issues:
- **3/10 crawlability score** - content invisible to search engines
- **Empty HTML shell** - all content loaded via JavaScript
- **AI crawlers couldn't index content** - missed GEO optimization opportunities
- **Incomplete sitemap** - 32% of pages missing

### The Solution
Migrated to Next.js with Static Site Generation (SSG), using Claude and Cursor IDE for systematic, AI-assisted development.

| Metric | Before (React SPA) | After (Next.js SSG) |
|--------|-------------------|---------------------|
| Crawlability Score | 3/10 | **10/10** |
| Sitemap URLs | 34 | **51** |
| HTML Content | Client-rendered | **Pre-rendered** |
| AI/GEO Visibility | None | **Full** |
| Build Output | SPA bundle | **52 static pages** |

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router, SSG) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Deployment** | Vercel |
| **Forms** | Formspree |
| **Analytics** | Google Analytics 4 (GDPR compliant) |
| **Schema** | JSON-LD (LocalBusiness, Service, FAQ) |

---

## 📁 Project Structure
```
├── app/                      # Next.js App Router
│   ├── blog/[slug]/         # Dynamic blog posts
│   ├── guides/[slug]/       # Dynamic SEO guides
│   ├── industries/[slug]/   # Dynamic industry pages
│   ├── [location-pages]/    # 9 local SEO pages
│   └── layout.tsx           # Root layout with schema
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── schema/              # JSON-LD schema components
│   └── [feature]/           # Feature components
├── src/
│   ├── data/                # Content data (industries, locations, guides)
│   └── types/               # TypeScript definitions
├── lib/                     # Utilities and helpers
└── public/                  # Static assets & sitemap
```

---

## 🚀 Key Features

### SEO & Technical Excellence
- ✅ **Static Site Generation** - All 52 pages pre-rendered at build time
- ✅ **Comprehensive Schema Markup** - LocalBusiness, Service, FAQ JSON-LD
- ✅ **Dynamic XML Sitemap** - Auto-generated with proper priorities
- ✅ **Optimized Meta Tags** - Unique titles, descriptions, Open Graph for all pages
- ✅ **Core Web Vitals** - Optimized for LCP, FID, CLS

### Content Architecture
- **9 Location Pages** - Programmatic local SEO (Daytona Beach, Ormond Beach, Port Orange, etc.)
- **6 Service Pages** - SEO, Local SEO, GEO Optimization, E-commerce, Lead Gen, Custom Tools
- **12 Industry Pages** - Healthcare, Legal, Real Estate, Home Services, and more
- **Blog & Guides** - Content marketing with dynamic routing

### GEO Optimization (AI Search Ready)
- Structured content for AI crawlers (ChatGPT, Perplexity, Google SGE)
- Entity-based content architecture
- Answer-focused content formatting

---

## 🧠 Development Approach: Context Engineering

This project showcases **context engineering** - the practice of providing AI assistants with rich, structured context to achieve complex development goals.

### Tools & Workflow
1. **Claude** - Strategic planning, architecture decisions, SEO audits
2. **Claude Code** - Systematic file migrations, bulk updates across 50+ files
3. **Cursor IDE** - Real-time code assistance and refinement
4. **Vercel** - Deployment and preview environments

### Migration Process
1. **Audit Phase** - AI-assisted analysis of existing React SPA SEO issues
2. **Planning Phase** - Migration strategy with URL preservation
3. **Execution Phase** - Systematic page-by-page migration using Claude Code
4. **Validation Phase** - Crawlability testing and schema validation
5. **Deployment Phase** - Vercel deployment with branch previews

---

## 🏃‍♂️ Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📈 Results

- **52 static pages** generated at build time
- **51 URLs** in XML sitemap
- **Sub-second load times** on all pages
- **100% crawlable** by search engines and AI systems
- **Complete schema markup** for rich search results

---

## 🔒 Security Note

This is a public portfolio repository. Environment variables and sensitive configuration are managed through Vercel's environment settings and are not committed to this repository.

---

## 📄 License

This project is proprietary software for AIO Growth SEO. Code structure and patterns may be referenced for educational purposes.

---

## 👤 Author

**Joel Hinton**  
SEO & GEO Optimization Specialist  
[AIO Growth SEO](https://aiogrowthseo.com) • Daytona Beach, FL

Built with context engineering, caffeine, and Claude ☕🤖
