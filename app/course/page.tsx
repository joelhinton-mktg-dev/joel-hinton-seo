import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Activity,
  BarChart3,
  Bug,
  Check,
  ChevronDown,
  Eye,
  GitBranch,
  LineChart,
  RefreshCw,
  Search,
  X,
  type LucideIcon,
} from 'lucide-react';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import CountUp from '../../components/brand/CountUp';
import MarkerNote from '../../components/brand/MarkerNote';
import OrangeUnderline from '../../components/brand/OrangeUnderline';
import Reveal from '../../components/brand/Reveal';
import SunriseMark from '../../components/brand/SunriseMark';
import { COURSE_CHECKOUT_URL } from '@/data/site';

const PAGE_URL = 'https://aiogrowthseo.com/course';
const PAGE_TITLE = 'Build Your Own Agentic Website | AIO Growth SEO';
const PAGE_DESCRIPTION =
  'Build a website your AI agent runs. It reads your search data each week, drafts the pages you are missing and ships what you approve. $297 once.';

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const heroFeeds = [
  'Search Console',
  'GA4',
  'Clarity',
  'DataForSEO',
  'Screaming Frog',
  'GitHub + Vercel',
];

const definitionSteps = [
  {
    title: 'It reads your numbers',
    body: 'Search Console, GA4 and Clarity tell the agent what people searched, where they clicked and what they did once they arrived.',
  },
  {
    title: 'It spots what is missing',
    body: 'DataForSEO and Screaming Frog turn up the searches you are absent from and the pages that outrank yours.',
  },
  {
    title: 'It writes the fix',
    body: 'A new page, a rewrite, schema or an internal link, matched to the way you talk and the way your site looks.',
  },
  {
    title: 'You approve, then it ships',
    body: 'Changes go out through GitHub and Vercel only after you have signed off on them.',
  },
];

const loopSteps = [
  {
    title: 'Read',
    body: 'The agent pulls the past week of searches, rankings, conversions and visitor behavior out of accounts you own.',
  },
  {
    title: 'Find',
    body: 'It checks your pages against live results and the competition, then sorts the gaps by how much money is riding on each.',
  },
  {
    title: 'Draft',
    body: 'It prepares the page you lack or the repair you need, following your voice guide and your design system.',
  },
  {
    title: 'Approve',
    body: 'The draft waits for you. Read it, change it or turn it down. Nothing is published without your yes.',
  },
  {
    title: 'Ship and measure',
    body: 'Approved work goes live by way of GitHub and Vercel, and the following run looks at whether it moved anything.',
  },
];

const stages = [
  {
    label: 'POSITION + RESEARCH',
    title: 'Know the market before you touch the site.',
    points: [
      'Files that tell your agent who you are, what you sell and who buys it',
      'A topical map drawn from actual search data instead of a hunch',
      'A list of pages to build, sorted by the revenue behind each one',
      'Site architecture settled before any code gets written',
    ],
  },
  {
    label: 'BUILD + SHIP',
    title: 'Put a real site on a domain you control.',
    points: [
      'A design system made from your brand that the agent has to follow',
      'Responsive code that belongs to you, kept in GitHub and hosted on Vercel',
      'A voice guide, the pages that sell and the pages that support them',
      'A publishing pace you can keep up on a normal work week',
    ],
  },
  {
    label: 'RANK + GET QUOTED',
    title: 'Earn the ranking, then earn the mention.',
    points: [
      'Complete on-page SEO, with schema that validates and audits with no errors',
      'Short passages written so ChatGPT, Gemini and Perplexity can cite them',
      'Every place the web describes your business, mapped, with the conflicts corrected',
      'A verified Google Business Profile connected to your location pages',
    ],
  },
  {
    label: 'SCALE + LOOP',
    title: 'Grow the page set and keep it honest.',
    points: [
      'Location, service and topic pages generated from a single data contract',
      'Quality gates that stop thin pages: a quotable answer block, a unique specific fact on every page, no shared paragraphs',
      'The weekly loop, including its prompt, its guardrails and a receipt for each run',
      'A scorecard that takes about a minute to read',
    ],
  },
];

/* Structural numbers only. No lesson or file counts until the product is packaged. */
const structureStats = [
  { value: 10, label: 'parts' },
  { value: 6, label: 'data feeds' },
  { value: 5, label: 'loop steps' },
  { value: 1, label: 'system' },
];

const dataFeeds: Array<{
  icon: LucideIcon;
  name: string;
  job: string;
  points: string[];
}> = [
  {
    icon: Search,
    name: 'Google Search Console',
    job: 'Shows the demand you already have.',
    points: [
      'Searches that are climbing, slipping or stuck',
      'Pages people see in results but do not click',
      'Early position drops, caught before the phone gets quiet',
    ],
  },
  {
    icon: BarChart3,
    name: 'Google Analytics 4',
    job: 'Tells paying rankings apart from vanity rankings.',
    points: [
      'Conversions for each page',
      'The searches that turn into inquiries',
      'How much revenue each page has at stake',
    ],
  },
  {
    icon: Eye,
    name: 'Microsoft Clarity',
    job: 'Lets you watch why a ranking page fails to sell.',
    points: [
      'A heatmap for any page on the site',
      'Session recordings of people who gave up and left',
      'Rage clicks and clicks that go nowhere',
    ],
  },
  {
    icon: LineChart,
    name: 'DataForSEO',
    job: 'Brings in volume, positions and live results when you schedule them.',
    points: [
      'Search volume and difficulty by keyword',
      'Rankings tracked per keyword and per market',
      'Current search results in a form your agent can use',
    ],
  },
  {
    icon: Bug,
    name: 'Screaming Frog',
    job: 'Crawls your own site the way Google sees it.',
    points: [
      'Broken links, redirect chains and repeated titles',
      'Thin pages, plus orphan pages nothing links to',
      'Schema and metadata checked across the whole site in one pass',
    ],
  },
  {
    icon: GitBranch,
    name: 'GitHub + Vercel',
    job: 'Publishes to your domain with no developer to wait on.',
    points: [
      'Branches and previews, so you review before release',
      'Domain, SSL and the production site',
      'Every release is one you authorize',
    ],
  },
];

const loopCardPoints = [
  'One scheduled run',
  'The data sources above',
  'Tasks sorted by what they are worth',
  'A report on each run, in plain English',
];

const curriculum = [
  {
    title: 'Get oriented',
    body: 'Learn what an AI agent does, see how the pieces connect and install the right desktop app. There is no terminal and no code in this part.',
  },
  {
    title: 'Wire your stack',
    body: 'Create each account and key the safe way, so your agent can work from your own search data.',
  },
  {
    title: 'Research the market',
    body: 'Turn real search data into a topical map, then into a list of pages sorted by revenue.',
  },
  {
    title: 'Design and build the site',
    body: 'Give your agent a design system to follow and get your actual site live on your domain.',
  },
  {
    title: 'Rank in Google and AI answers',
    body: 'Work through on-page SEO from top to bottom, write passages answer engines can cite and validate your schema.',
  },
  {
    title: 'Win local and the map pack',
    body: 'Verify your Google Business Profile, set up a review system and connect both to your location pages.',
  },
  {
    title: 'Write and ship your pages',
    body: 'Create your voice guide, publish your first money pages and settle into a pace you can sustain.',
  },
  {
    title: 'Scale safely',
    body: 'Produce programmatic location and service pages from a single template, with quality gates that block thin ones.',
  },
  {
    title: 'Make AI search know who you are',
    body: 'Find how the web describes your business and correct the places where it disagrees with itself.',
  },
  {
    title: 'Run the weekly loop',
    body: 'Get the prompt, the guardrails and the scorecard. Start with manual runs, then schedule it.',
  },
];

const courseInputs = ['Your business and offer', 'Your domain', 'The market you sell into'];

const whoFor = [
  'Owner-led service businesses',
  'Consultants, marketers and small agencies',
  'Anyone with a website who would rather own the growth system than rent it',
];

const whoNotFor = [
  'People after passive income. The system pays only when somebody runs it.',
  'Ecommerce stores. Shopify-style stores are outside what the course covers.',
  'Businesses that will not make it without leads this month. Search is too slow to rescue you.',
];

const outcomes = [
  'Put up a site on your own domain that your AI agent operates, and publish to it with no developer involved.',
  'Size up a market and tell which pages are worth money before you write them.',
  'Write pages made for Google rankings and for citations in ChatGPT, Gemini and Perplexity.',
  'Roll out service and location pages in volume, behind quality gates that keep thin ones off your site.',
  'Get your Google Business Profile ready for the map pack, linked to the pages that sell.',
  'Run the weekly loop, so the site keeps getting better while you take care of customers.',
];

const proofItems = [
  {
    label: 'Volusia Christmas Lights',
    figure: '72 pages live',
    body: 'A site built with this system from a topical map. Its permanent-lighting and palm-tree pages sit in the top 10 on Google for their searches, at positions of roughly 7 to 9 in November 2026 data.',
  },
  {
    label: 'This site, aiogrowthseo.com',
    figure: 'Positions 3 to 8',
    body: 'The same weekly loop runs here. A refreshed GEO guide went from zero impressions to positions 3 to 8 on its core searches within days of Google recrawling it.',
  },
  {
    label: "AIO's own traffic",
    figure: 'Up about a fifth',
    body: 'Impressions grew by about a fifth and average position improved through the November 2026 core update, while the loop ran.',
  },
];

const boxItems = [
  {
    title: 'The whole course in one file',
    body: 'Your AI agent works through it alongside you.',
  },
  {
    title: 'The skill pack for Claude Code',
    body: 'The instructions that teach your agent to do each job.',
  },
  {
    title: 'The Connection Guide',
    body: 'Setup steps for every account and data pipe, with cost caps before you connect anything.',
  },
  {
    title: 'A START HERE guide',
    body: 'Get set up in about five minutes.',
  },
  {
    title: 'Lifetime access',
    body: 'One payment, no subscription, and a download link that keeps working.',
  },
];

const afterSteps = [
  {
    title: 'Pay once on Stripe.',
    body: 'The course is $297 and there is nothing to pay monthly.',
  },
  {
    title: 'Get your download.',
    body: 'The link appears on the confirmation page, and a copy goes to your email.',
  },
  {
    title: 'Unzip it and read START HERE.',
    body: 'The download is a small zip file. Open it on your computer and begin there.',
  },
  {
    title: 'Load the skills into your agent.',
    body: 'You will use Claude Code, and START HERE walks you through it.',
  },
  {
    title: 'Hand over the course file.',
    body: 'Ask your agent to begin at Part 1. It moves through the parts in order and builds as it goes, and it waits for your yes before anything is published.',
  },
  {
    title: 'Connect each account on request.',
    body: 'Your agent will ask for Search Console, Analytics, GitHub, Vercel and the others. Each step is in the Connection Guide.',
  },
];

/* Plain strings, so the visible answers and the FAQPage schema are the same text. */
const courseFaqs = [
  {
    question: 'What is an agentic website?',
    answer:
      'It is a website that an AI agent can operate for you. Every week the agent goes through your search data, your own pages and your competitors, then prepares the next page or fix. It publishes only the work you have approved.',
  },
  {
    question: 'Do I get a finished website?',
    answer:
      'No. You and your AI agent build it together, on a domain and accounts that belong to you. The lessons, skill files and Connection Guide take you through every step.',
  },
  {
    question: 'Do I need to be technical?',
    answer:
      'No. The work happens inside a desktop AI app, which is how we do it too. If you are comfortable typing a message and pasting in a file, you can run all of it. The course assumes no background and introduces every tool ahead of the point where you need it.',
  },
  {
    question: 'What do I actually get when I pay?',
    answer:
      'A single download with four things in it: the whole course in one file, the skill pack for Claude Code, the Connection Guide and a START HERE guide. You also get a $300 credit toward having AIO build it for you later.',
  },
  {
    question: 'What else will I pay for?',
    answer:
      "Your own domain, your Claude subscription and DataForSEO, which uses prepaid credit and bills each call in cents. Search Console, GA4, Clarity and Screaming Frog's free tier cover the data side to start. Vercel's free plan is for non-commercial sites, so check its current paid plan if yours is for a business. You learn to put a cap on every one of these before connecting it.",
  },
  {
    question: 'How much time does it take?',
    answer:
      'Most lessons are a few minutes of reading, with your agent building as you go. Nothing is locked, so you can move as quickly or slowly as you like. Search needs months to develop, so commit to a few of them with the weekly loop running before deciding whether it works.',
  },
  {
    question: 'Is this a subscription?',
    answer:
      'No. You pay $297 one time and keep access for life. Nothing renews, there are no seats to buy and there is no platform you have to stay signed in to.',
  },
  {
    question: 'Why pay for this when SEO advice is free?',
    answer:
      'Free advice explains things and leaves the doing to you. You learn that internal links matter, and the article ends. The course hands your agent working instructions instead: what to build, the order to build it in and when to stop. We run the same system for clients.',
  },
  {
    question: 'Can I just ask ChatGPT to do this?',
    answer:
      'Yes, and you will get the average of everything people have published about SEO, including plenty of tactics that no longer work. What makes a model useful is context. The course supplies it: your market, your data, your pages and rules that hold back thin ones.',
  },
  {
    question: 'Will AI-written pages rank?',
    answer:
      'Filler does not hold up, because Google passes over it and so do buyers. You will write a voice guide and work to a standard, and the programmatic pages have to clear quality gates. That discipline is behind the results on this page.',
  },
  {
    question: 'Will this make me a specific amount of money?',
    answer:
      'No one can honestly give you a figure, and you should walk away from anybody who tries. Your outcome depends on how much of the system you put to work.',
  },
  {
    question: 'Is personal support included?',
    answer:
      'No. The course is self-guided, and your AI agent goes through the lessons with you. It does not come with calls, a community or ongoing personal support. If you want someone to handle it, look at the done-for-you build.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: courseFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const courseOffer = {
  '@type': 'Offer',
  price: '297',
  priceCurrency: 'USD',
  availability: 'https://schema.org/InStock',
  url: PAGE_URL,
};

const courseSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Build Your Own Agentic Website',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  inLanguage: 'en-US',
  provider: {
    '@type': 'Organization',
    name: 'AIO Growth SEO',
    url: 'https://aiogrowthseo.com',
  },
  creator: {
    '@type': 'Person',
    name: 'Joel Hinton',
  },
  offers: { ...courseOffer, category: 'Paid' },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Build Your Own Agentic Website',
  description: PAGE_DESCRIPTION,
  url: PAGE_URL,
  brand: {
    '@type': 'Brand',
    name: 'AIO Growth SEO',
  },
  offers: courseOffer,
};

const pad = (n: number) => String(n).padStart(2, '0');

function BuyButton({ variant = 'blue' }: { variant?: 'blue' | 'navy' }) {
  return (
    <a
      href={COURSE_CHECKOUT_URL}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-4 text-lg font-bold text-white shadow-lg sm:px-8 transition-colors ${
        variant === 'blue' ? 'bg-brand hover:bg-navy' : 'bg-navy hover:bg-navy-deep'
      }`}
    >
      Get the course - $297
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

function CheckDot() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
      <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden="true" />
    </span>
  );
}

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-paper">
      {[courseSchema, productSchema, faqSchema].map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* 1. Hero */}
      <section className="bg-paper bg-waves">
        <div className="container mx-auto px-6 pt-10 pb-24">
          <PageBreadcrumb
            items={[{ label: 'Course', current: true }]}
            className="mb-10 bg-transparent pt-0 pb-0 text-navy/60 [&>div]:px-0 [&_a]:text-navy/60 [&_a:hover]:text-brand [&_[aria-current]]:text-navy [&_svg]:text-navy/40"
          />
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-wide text-pen-text">
                For anyone whose website quit pulling its weight
              </p>
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy md:text-5xl lg:text-[54px]">
                Build your own <OrangeUnderline>agentic website</OrangeUnderline> and get found in
                Google and AI answers in 2026
              </h1>
              <p className="mb-4 max-w-2xl text-lg leading-relaxed text-navy/75">
                An agentic website is one your AI agent can operate. Each week the agent goes
                through your search data, works out which page you should have and writes a draft
                of it. You decide what goes live.
              </p>
              <p className="mb-6 max-w-2xl text-lg leading-relaxed text-navy/75">
                This course teaches you to build one with Claude Code, on a domain you own. You work
                through research, design and code, then SEO, AI answers and local search, and finish
                with the weekly loop.
              </p>
              <p className="mb-8 text-[15px] text-navy/60">
                Created by <span className="font-semibold text-navy">Joel Hinton</span>. Published
                by AIO Growth SEO, Daytona Beach, FL.
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="The six data feeds">
                {heroFeeds.map((feed) => (
                  <li
                    key={feed}
                    className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80"
                  >
                    <Check className="h-4 w-4 text-brand" strokeWidth={3} aria-hidden="true" />
                    {feed}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <MarkerNote className="absolute -top-8 right-4 text-[26px]">pay once</MarkerNote>
              <div className="rounded-[1.75rem] border border-hairline bg-white p-8 text-center shadow-2xl">
                <SunriseMark size={48} className="mx-auto mb-5" />
                <p className="text-sm font-bold tracking-[0.12em] text-muted-foreground">
                  BUILD IT YOURSELF FOR
                </p>
                <p className="mt-2 text-6xl font-extrabold tracking-tight text-navy">$297</p>
                <p className="mb-7 mt-3 font-medium text-navy/70">One payment, lifetime access</p>
                <BuyButton />
                <p className="mt-5 text-sm leading-relaxed text-navy/60">
                  Includes a $300 credit toward having AIO build it for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What an agentic website is */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What you are building</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              What an agentic website is
            </h2>
            <p className="text-lg leading-relaxed text-navy/75">
              Most sites freeze on launch day. An agentic website stays in motion because it is
              tied into an AI agent and into data from your own business. The agent studies your
              pages, the search results and the sites you compete with. Then it drafts new pages
              and repairs older ones, and each change waits for your approval.
            </p>
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {definitionSteps.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-hairline bg-paper p-7">
                <p className="text-3xl font-extrabold tracking-tight text-brand">
                  {pad(index + 1)}
                </p>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-navy/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Why you need one */}
      <section className="bg-navy py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-[15px] font-semibold text-sun">Why you need one</p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-[44px]">
              Launch day was the best your website ever got.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-white/80">
            <p>
              Look at it now. You have the pages you started with, wording from a couple of years
              back and a few searches where you sort of rank.
            </p>
            <p>
              Meanwhile the market went on without it. Buyers have new questions and new places to
              ask them. Competitors kept publishing. AI engines now answer people who never make
              it to a website at all.
            </p>
            <p>
              A standard site cannot see any of that, let alone act on it. An agentic website
              sees it.{' '}
              <span className="font-semibold text-white">What happens next is your call.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 4. The weekly loop */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The weekly loop</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              The same loop we run at AIO, every week
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Five steps, in this order. Your agent handles the reading and the drafting. The
              decisions stay with you.
            </p>
          </div>
          <div className="relative mt-16">
            <div
              className="absolute left-[10%] right-[10%] top-7 hidden h-1 rounded-full bg-gradient-to-r from-brand via-brand to-pen lg:block"
              aria-hidden="true"
            />
            <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {loopSteps.map((step, index) => {
                const isApprove = step.title === 'Approve';
                return (
                  <li key={step.title} className="relative lg:text-center">
                    {isApprove && (
                      <MarkerNote className="absolute -top-9 left-0 text-[24px] lg:left-auto lg:right-4">
                        this one is you
                      </MarkerNote>
                    )}
                    <span
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-[3px] text-lg font-extrabold lg:mx-auto ${
                        isApprove
                          ? 'border-pen bg-pen text-white'
                          : 'border-brand bg-paper text-brand'
                      }`}
                    >
                      {pad(index + 1)}
                    </span>
                    <h3 className="mt-5 text-xl font-extrabold tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-navy/70">{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
          <p className="mt-14 flex items-start gap-3 text-lg font-semibold text-navy lg:justify-center">
            <RefreshCw className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            Every week adds more pages and more fixes, and your site stays in step with your
            market.
          </p>
        </div>
      </section>

      {/* 5. What you build */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What you build</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              A site you own, then the routine that grows it
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              The work comes in four stages. Each one sets up the next.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {stages.map((stage, index) => (
              <div key={stage.label} className="rounded-3xl border border-hairline bg-paper p-8">
                <p className="text-sm font-bold tracking-wide text-pen-text">
                  {pad(index + 1)} · {stage.label}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">
                  {stage.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {stage.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 leading-relaxed text-navy/80">
                      <CheckDot />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 rounded-3xl bg-navy p-8 text-center md:grid-cols-4">
            {structureStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-white/70">{stat.label}</dt>
                <dd className="text-5xl font-extrabold tracking-tight text-white">
                  <CountUp end={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 6. Data feeds */}
      <section className="bg-band py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The data behind it</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Six data feeds, six separate jobs
            </h2>
            <p className="text-lg leading-relaxed text-navy/70">
              Without data, an agent guesses. These six connections give it something true to
              work from.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dataFeeds.map((feed) => (
              <div
                key={feed.name}
                className="rounded-3xl border border-hairline bg-cream p-7 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-tint">
                  <feed.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm font-bold text-pen-text">{feed.name}</p>
                <h3 className="mt-1 text-xl font-extrabold leading-snug tracking-tight text-navy">
                  {feed.job}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {feed.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-navy/75"
                    >
                      <CheckDot />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 rounded-3xl bg-navy p-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pen">
                <Activity className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-sun">The weekly loop</p>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Where all six come together
                </h3>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {loopCardPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-white/85">
                  <CheckDot />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-navy/75">
            The accounts and keys are yours, and you bring them. Before you connect any of them,
            the course covers what it costs and how to put a cap on it.
          </p>
        </div>
      </section>

      {/* 7. Curriculum */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">The curriculum</p>
              <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Ten parts, from zero to a running loop
              </h2>
              <p className="text-lg leading-relaxed text-navy/70">
                Take them in order, one part at a time.
              </p>
              <div className="relative mt-10 rounded-3xl border border-hairline bg-white p-7 shadow-sm">
                <MarkerNote className="absolute -top-5 right-6 text-[24px]">
                  just three things
                </MarkerNote>
                <h3 className="text-lg font-extrabold tracking-tight text-navy">
                  All it needs from you
                </h3>
                <ol className="mt-4 space-y-3">
                  {courseInputs.map((input, index) => (
                    <li key={input} className="flex items-center gap-3 font-medium text-navy/85">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-white">
                        {index + 1}
                      </span>
                      {input}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <ol>
              {curriculum.map((part, index) => (
                <li key={part.title} className="flex gap-5 border-b border-hairline py-5 first:pt-0">
                  <span className="w-9 shrink-0 text-2xl font-extrabold tracking-tight text-brand">
                    {pad(index + 1)}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight text-navy">
                      {part.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-navy/70">{part.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 8. Who it is for */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Is this you?</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Who should take it, and who should skip it
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border-2 border-brand bg-brand-tint/60 p-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">Who it is for</h3>
              <ul className="mt-5 space-y-3">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 leading-relaxed text-navy/85">
                    <CheckDot />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-hairline bg-paper p-8">
              <h3 className="text-2xl font-extrabold tracking-tight text-navy">
                Who it is not for
              </h3>
              <ul className="mt-5 space-y-3">
                {whoNotFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 leading-relaxed text-navy/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/15">
                      <X className="h-3.5 w-3.5 text-navy" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. What you will be able to do */}
      <section className="bg-brand-tint/60 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The skills you keep</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              What you will be able to do
            </h2>
          </div>
          <ul className="grid gap-5 md:grid-cols-2">
            {outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex items-start gap-3 rounded-2xl border border-hairline bg-white p-5 leading-relaxed text-navy/85"
              >
                <CheckDot />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. Proof */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">Proof</p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              We teach what we do for a living
            </h2>
            <p className="text-lg leading-relaxed text-navy/75">
              Each outcome below comes from a site running this same system. The results belong to
              us. They do not predict yours.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {proofItems.map((item, index) => (
              <Reveal key={item.label} delay={index * 90} className="h-full">
                <div className="h-full rounded-3xl border border-hairline bg-white p-8 shadow-sm">
                  <p className="text-sm font-bold text-pen-text">{item.label}</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight text-navy">
                    {item.figure}
                  </p>
                  <p className="mt-4 leading-relaxed text-navy/75">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg font-semibold leading-relaxed text-navy">
            We will not promise you a figure, and we would be wary of anyone who will. How far this
            takes you comes down to how much of the system you put to work.
          </p>
        </div>
      </section>

      {/* 11. The honest part */}
      <section className="bg-band py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-4 text-[15px] font-semibold text-pen-text">The honest part</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              The building is <OrangeUnderline>still on you</OrangeUnderline>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-navy/80">
            <p>
              We kept the lessons short, and your agent carries most of the load. But you are the
              one building the site, you approve each page before it is published and the weekly
              loop stops the week you stop.
            </p>
            <p>
              Allow it a few months. Search feels slow in the beginning. Once your pages start to
              support each other, it can pick up quicker than you expected.
            </p>
            <p>
              Would you rather hand it off? That is a reasonable choice, and it is the work we do
              for clients day in and day out.{' '}
              <a
                href="#done-for-you"
                className="font-semibold text-brand underline hover:text-navy"
              >
                See the done-for-you build
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 12. A note from Joel */}
      <section className="bg-white py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
            A note from Joel
          </h2>
          <p className="text-xl leading-relaxed text-navy/85">
            I run this system every week on my own sites and for clients. Volusia Christmas Lights
            was built in public with it, from a topical map to 72 live pages, so you can see
            exactly what the system produces before you spend a dollar. This course is that
            playbook, written for you and your agent.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <SunriseMark size={44} />
            <p className="leading-snug text-navy/70">
              <span className="block font-bold text-navy">Joel Hinton</span>
              Founder, AIO Growth SEO, Daytona Beach, FL
            </p>
          </div>
        </div>
      </section>

      {/* 13. What you get */}
      <section className="bg-paper bg-waves py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">What you get</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              Pay once and the whole system is yours
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <ul className="rounded-3xl border border-hairline bg-white px-8 py-3 shadow-sm">
              {boxItems.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 border-b border-hairline py-5 last:border-0"
                >
                  <CheckDot />
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-navy/70">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="relative flex flex-col justify-center rounded-3xl bg-sun p-8">
              <MarkerNote tone="navy" className="absolute -top-4 right-6 text-[26px]">
                toward your build
              </MarkerNote>
              <p className="text-5xl font-extrabold tracking-tight text-navy">$300 credit</p>
              <p className="mb-7 mt-4 text-lg leading-relaxed text-navy">
                Your $297 counts as a $300 credit toward having AIO build it for you, if you
                decide to upgrade later.
              </p>
              <BuyButton variant="navy" />
            </div>
          </div>
        </div>
      </section>

      {/* 14. After you buy */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-[15px] font-semibold text-pen-text">After you buy</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
              From checkout to your first build
            </h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {afterSteps.map((step, index) => (
              <li key={step.title} className="rounded-3xl border border-hairline bg-paper p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-extrabold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-extrabold tracking-tight text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-navy/70">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-3xl text-lg font-semibold leading-relaxed text-navy">
            Where it leads: a fully agentic website that improves week after week and helps
            your business win in AI search. Your part is saying yes to the changes.
          </p>
        </div>
      </section>

      {/* 15. Done for you */}
      <section id="done-for-you" className="scroll-mt-16 bg-navy py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-[15px] font-semibold text-sun">
              The Agentic SEO Engine (the Answer Engine)
            </p>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-[40px]">
              Have us build it for you
            </h2>
            <p className="text-lg leading-relaxed text-white/80">
              Prefer to keep your hands on the business? We will build the system and run it for
              you.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              <span className="font-bold text-white">The guarantee:</span> within 90 days of
              launch, ChatGPT, Perplexity, or Google AI Overviews will name your business when
              someone asks who provides your main service in your city. If not, AIO keeps working
              at no additional charge until they do.
            </p>
          </div>
          <div className="rounded-3xl bg-cream p-8 shadow-xl">
            <p className="text-4xl font-extrabold tracking-tight text-navy">$2,500 setup</p>
            <p className="mt-2 text-xl font-semibold text-navy/75">then $1,500/month to run it</p>
            <p className="mt-5 flex items-start gap-2.5 leading-relaxed text-navy/80">
              <CheckDot />
              Own the course? Your $300 credit applies to the setup.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-center text-lg font-bold text-white transition-colors hover:bg-navy"
            >
              Talk to us about building yours
            </Link>
          </div>
        </div>
      </section>

      {/* 16. FAQ. Native details instead of ServiceFaq: its accordion leaves closed
          answers out of the HTML, and these have to match the FAQPage schema. */}
      <section className="bg-paper py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="mb-4 text-[15px] font-semibold text-pen-text">Questions</p>
              <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-navy md:text-[40px]">
                Before you decide
              </h2>
              <p className="text-lg leading-relaxed text-navy/70">
                Direct answers to what people ask about the course.
              </p>
            </div>
            <div>
              {courseFaqs.map((faq) => (
                <details key={faq.question} className="group border-b border-hairline">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-bold text-navy hover:text-brand [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronDown
                      className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="pb-6 text-base leading-relaxed text-navy/75">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 17. Final buy block */}
      <section className="bg-brand bg-waves-light py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Build your own agentic website
          </h2>
          <p className="text-6xl font-extrabold tracking-tight text-white">$297</p>
          <p className="mt-3 text-lg font-semibold text-white">One payment, lifetime access</p>
          <p className="mx-auto mb-9 mt-4 max-w-xl text-lg leading-relaxed text-white/85">
            Includes a $300 credit toward the done-for-you build, should you ever want us to take
            over.
          </p>
          <BuyButton variant="navy" />
        </div>
      </section>
    </div>
  );
}
