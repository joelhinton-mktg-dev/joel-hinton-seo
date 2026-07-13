import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const SITE_URL = "https://aiogrowthseo.com"

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function toAbsoluteUrl(href?: string): string | undefined {
  if (!href) return undefined
  if (href.startsWith("http")) return href
  return `${SITE_URL}${href.startsWith("/") ? href : `/${href}`}`
}

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ items, className }) => {
  const schemaItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    ...items.map((item, index) => {
      const url = toAbsoluteUrl(item.href)
      return {
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(url ? { item: url } : {}),
      }
    }),
  ]

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  }

  return (
    <section className={cn("pt-24 pb-8 bg-background", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-6">
        <nav aria-label="breadcrumb" className="text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5">
            <li className="inline-flex items-center gap-1.5">
              <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-3 h-3" />
                Home
              </Link>
            </li>
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <li role="presentation" aria-hidden="true" className="[&>svg]:size-3.5">
                  <ChevronRight />
                </li>
                <li className="inline-flex items-center gap-1.5">
                  {item.current ? (
                    <span role="link" aria-disabled="true" aria-current="page" className="font-medium text-foreground">
                      {item.label}
                    </span>
                  ) : item.href ? (
                    <Link href={item.href} className="hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default PageBreadcrumb
