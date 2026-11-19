'use client';

import CoreServiceSchema from '@/components/schema/CoreServiceSchema';

import { ArrowRight, Check } from 'lucide-react';
import ContactDialog from '../../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import { ecommerceMonthlyTiers } from '@/data/pricing';
import { FORMSPREE_CONTACT_ENDPOINT } from '@/data/site';
import { PageBreadcrumb } from '../../../components/ui/PageBreadcrumb';
import AuditForm from '../../../components/brand/AuditForm';
import MarkerNote from '../../../components/brand/MarkerNote';
import OrangeUnderline from '../../../components/brand/OrangeUnderline';
import Reveal from '../../../components/brand/Reveal';
import ServiceTabs, { type ServiceTabItem } from '../../../components/service/ServiceTabs';
import ServiceFaq, { type ServiceFaqItem } from '../../../components/service/ServiceFaq';
import ServiceCta from '../../../components/service/ServiceCta';

const results = [
  { metric: '340%', label: 'Average organic traffic increase' },
  { metric: '127%', label: 'Revenue growth from organic' },
  { metric: '89%', label: 'Improvement in product rankings' },
  { metric: '45%', label: 'Increase in conversion rate' },
];

const ecommerceServiceTabs: ServiceTabItem[] = [
  {
    id: 'product-page-optimization',
    title: 'Product Page Optimization',
    description:
      'Transform your product pages into conversion machines with optimized titles, descriptions, images, and schema markup that ranks and sells.',
    features: ['Product schema markup', 'Keyword-rich descriptions', 'Image optimization', 'Review integration'],
  },
  {
    id: 'technical-e-commerce-seo',
    title: 'Technical E-commerce SEO',
    description:
      'Solve complex technical challenges unique to online stores - crawl budget, faceted navigation, duplicate content, and site speed.',
    features: ['Crawl optimization', 'URL structure', 'Canonical tags', 'Core Web Vitals'],
  },
  {
    id: 'conversion-rate-optimization',
    title: 'Conversion Rate Optimization',
    description:
      'Turn traffic into customers with data-driven CRO that improves your checkout flow, product presentation, and user experience.',
    features: ['A/B testing', 'Cart abandonment', 'UX improvements', 'Trust signals'],
  },
  {
    id: 'platform-specific-seo',
    title: 'Platform-Specific SEO',
    description:
      'Expert optimization for Shopify, WooCommerce, BigCommerce, and Magento with platform-native solutions.',
    features: ['Shopify SEO', 'WooCommerce optimization', 'Theme optimization', 'App integration'],
  },
  {
    id: 'marketplace-optimization',
    title: 'Marketplace Optimization',
    description:
      'Expand your reach on Amazon, Etsy, and eBay with marketplace SEO that improves product visibility and drives sales.',
    features: ['Amazon A9 algorithm', 'Etsy search ranking', 'Listing optimization', 'Review strategy'],
  },
  {
    id: 'e-commerce-content-strategy',
    title: 'E-commerce Content Strategy',
    description:
      'Build authority and drive organic traffic with buying guides, product comparisons, and category content that converts.',
    features: ['Buying guides', 'Category pages', 'Blog strategy', 'Link building'],
  },
];

const platforms = [
  { name: 'Shopify', description: 'Theme optimization, app integration, speed improvements' },
  { name: 'WooCommerce', description: 'WordPress SEO, plugin optimization, server performance' },
  { name: 'BigCommerce', description: 'Built-in SEO features, custom development' },
  { name: 'Magento', description: 'Enterprise solutions, complex catalog optimization' },
  { name: 'Amazon', description: 'A9 algorithm, listing optimization, brand registry' },
  { name: 'Custom Platforms', description: 'Headless commerce, custom solutions' },
];

/* Pricing cards render pricing.ts ecommerceMonthlyTiers directly: name,
   badge, subtitle (the card title), price, description (product range), and
   features all live in pricing.ts and match the page's previous cards. */
const pricingButtonLabels = ['Get Started', 'Get Started', 'Contact Us'];

const ecommerceFaqs: ServiceFaqItem[] = [
  {
    question: 'How is e-commerce SEO different from regular SEO?',
    answer:
      'E-commerce SEO involves unique challenges like product page optimization, category structure, faceted navigation, duplicate content from variants, and product schema. We specialize in solving these platform-specific issues that general SEO agencies often miss.',
    schemaText:
      'E-commerce SEO involves unique challenges like product page optimization, category structure, faceted navigation, duplicate content from variants, and product schema. We specialize in solving these platform-specific issues that general SEO agencies often miss.',
  },
  {
    question: 'Which platforms do you work with?',
    answer:
      'We work with all major e-commerce platforms including Shopify, WooCommerce, BigCommerce, Magento, and custom solutions. We also optimize for marketplaces like Amazon, Etsy, and eBay.',
    schemaText:
      'We work with all major e-commerce platforms including Shopify, WooCommerce, BigCommerce, Magento, and custom solutions. We also optimize for marketplaces like Amazon, Etsy, and eBay.',
  },
  {
    question: 'How long until I see sales increase?',
    answer:
      'Technical fixes and product page optimizations can show results within 30-60 days. Category rankings and significant traffic increases typically take 3-6 months. Most clients see meaningful revenue growth within the first 90 days.',
    schemaText:
      'Technical fixes and product page optimizations can show results within 30-60 days. Category rankings and significant traffic increases typically take 3-6 months. Most clients see meaningful revenue growth within the first 90 days.',
  },
  {
    question: 'Do you help with Amazon SEO?',
    answer:
      "Yes. Amazon SEO (A9 algorithm optimization) is part of our marketplace optimization service. We help with listing optimization, keyword research, backend keywords, and review strategies specific to Amazon's ranking factors.",
    schemaText:
      "Yes. Amazon SEO (A9 algorithm optimization) is part of our marketplace optimization service. We help with listing optimization, keyword research, backend keywords, and review strategies specific to Amazon's ranking factors.",
  },
];

export default function EcommerceSEOPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } =
    useContactDialog('E-commerce SEO Audit');

  return (
    <div className="min-h-screen bg-paper">
      <CoreServiceSchema
        name="E-commerce SEO That Drives Sales"
        description="Search optimization built around revenue, not rankings. We focus on the pages that convert and build authority where buyers are searching."
        url="https://aiogrowthseo.com/services/ecommerce-seo"
      />
      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Get Your Free E-commerce SEO Audit"
        description="Let's analyze your online store and create a strategy to increase organic traffic and sales."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      {/* Hero */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[
              { label: 'Services', href: '/services' },
              { label: 'E-commerce SEO', href: '/services/ecommerce-seo', current: true },
            ]}
            className="mb-10 text-navy/60 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <p className="mb-5 text-[15px] font-semibold text-pen-text">
                E-commerce Growth Specialist
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
                <OrangeUnderline>E-commerce SEO</OrangeUnderline> That Drives Sales
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-navy/75">
                Stop losing sales to competitors who rank higher. Our e-commerce SEO strategies
                help Shopify, WooCommerce, and marketplace sellers dominate organic search and
                convert browsers into buyers.
              </p>

              <AuditForm
                endpoint={FORMSPREE_CONTACT_ENDPOINT}
                serviceLabel="E-commerce SEO Audit"
                buttonLabel="Get Your Free E-commerce Audit"
                formType="services_form"
                className="max-w-xl"
              />

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    selectService('Product Page Optimization');
                    openDialog();
                  }}
                  className="group inline-flex items-center gap-1.5 font-bold text-brand hover:underline"
                >
                  Optimize My Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Search result mock (illustrative) */}
            <Reveal className="relative mx-auto w-full max-w-md">
              <MarkerNote className="absolute -top-3 left-0 z-10 text-[24px] sm:-left-4">
                your products, page one
              </MarkerNote>
              <div className="rounded-[1.75rem] border border-hairline bg-white p-6 shadow-2xl">
                <p className="text-sm font-bold tracking-[0.18em] text-navy/50">
                  ILLUSTRATIVE SEARCH RESULT
                </p>
                <div className="mt-5 rounded-2xl border border-hairline p-4">
                  <p className="text-sm font-medium text-navy/50">yourstore.com/products</p>
                  <p className="mt-1.5 text-lg font-bold leading-snug text-brand">
                    Your Product - Top-Rated Pick for Buyers
                  </p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-navy/70">
                    Keyword-rich descriptions, review stars in the results, and pages built to
                    convert the click into a sale.
                  </p>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {[
                    'Product pages ranking for buying keywords',
                    'Category pages capturing high-volume searches',
                    'Review schema showing stars in results',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-navy/75"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  Mock result for illustration, not a specific client ranking.
                </p>
              </div>
              <MarkerNote className="absolute -bottom-5 left-8 z-10 text-[24px]">
                built to sell
              </MarkerNote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Results stats: figures from the live page's own copy */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <Reveal className="relative">
            <div className="grid gap-10 rounded-[1.75rem] bg-navy p-8 sm:grid-cols-2 md:p-10 lg:grid-cols-4">
              {results.map((result) => (
                <div key={result.label}>
                  <p className="text-5xl font-extrabold tracking-tight text-white">
                    {result.metric}
                  </p>
                  <p className="mt-1.5 text-[15px] font-medium leading-snug text-white/60">
                    {result.label}
                  </p>
                </div>
              ))}
            </div>
            <MarkerNote className="absolute -bottom-4 right-8 z-10 text-[24px] text-sun">
              from our store clients
            </MarkerNote>
          </Reveal>
        </div>
      </section>

      {/* Services tabs */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What&apos;s included</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              E-commerce SEO Services
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Comprehensive optimization designed specifically for online stores
            </p>
          </div>
          <ServiceTabs
            services={ecommerceServiceTabs}
            ariaLabel="E-commerce SEO services"
            idPrefix="ecommerce"
          />
        </div>
      </section>

      {/* Platforms */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Platforms</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Platforms We Optimize
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Expert SEO for every major e-commerce platform and marketplace
            </p>
          </div>
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div key={platform.name} className="mt-10 border-t-2 border-hairline pt-5">
                <h3 className="text-xl font-extrabold tracking-tight text-navy">
                  {platform.name}
                </h3>
                <p className="mt-2 leading-relaxed text-navy/70">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing: prices from pricing.ts tiers, card copy is the page's own */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Pricing</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              E-commerce SEO Pricing
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Scalable packages for stores of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ecommerceMonthlyTiers.map((tier, index) => {
              const highlighted = index === 1;
              return (
                <div
                  key={tier.name}
                  className={`flex flex-col rounded-3xl border p-8 ${
                    highlighted
                      ? 'border-navy bg-navy text-white shadow-xl'
                      : 'border-hairline bg-white shadow-sm'
                  }`}
                >
                  <p
                    className={`text-sm font-bold tracking-[0.14em] ${
                      highlighted ? 'text-sun' : 'text-pen-text'
                    }`}
                  >
                    {tier.badge.toUpperCase()}
                  </p>
                  <h3
                    className={`mt-3 text-2xl font-extrabold tracking-tight ${
                      highlighted ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {tier.subtitle}
                  </h3>
                  <p
                    className={`mt-4 text-4xl font-extrabold tracking-tight ${
                      highlighted ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`mt-1.5 text-[15px] ${
                      highlighted ? 'text-white/60' : 'text-navy/60'
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-[15px] leading-relaxed ${
                          highlighted ? 'text-white/85' : 'text-navy/75'
                        }`}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            highlighted ? 'text-sun' : 'text-brand'
                          }`}
                          strokeWidth={3}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => selectService(tier.serviceLabel)}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 font-bold transition ${
                      highlighted
                        ? 'bg-pen text-white hover:bg-pen/90'
                        : 'bg-brand text-white hover:bg-brand/90'
                    }`}
                  >
                    {pricingButtonLabels[index]}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceFaq faqs={ecommerceFaqs} withSchema />

      <ServiceCta
        heading="Ready to Grow Your Online Store?"
        copy="Get your free e-commerce SEO audit and discover exactly what's preventing your products from ranking."
        endpoint={FORMSPREE_CONTACT_ENDPOINT}
        serviceLabel="E-commerce SEO Audit"
        buttonLabel="Get Your Free E-commerce Audit"
      />
    </div>
  );
}
