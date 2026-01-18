'use client';

import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';
import ContactDialog from '../../components/ContactDialog';
import { useContactDialog } from '@/hooks/useContactDialog';
import { businessTypes } from '@/types/contact-forms';
import ProfessionalServiceSchema from '@/components/schema/ProfessionalServiceSchema';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  TrendingUp,
  BarChart3,
  Database,
  Target,
  Cog,
  Workflow,
  Search,
  Users,
  Sparkles
} from 'lucide-react';

export default function CustomToolsAutomationPage() {
  const { isOpen, selectedService, openDialog, closeDialog, selectService } = useContactDialog('Marketing Automation Consultation');

  return (
    <>
      <PageBreadcrumb
        items={[
          { label: "Custom Tools & Automation", current: true }
        ]}
      />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
              <Cog className="w-4 h-4 mr-2" />
              Marketing Automation Solutions
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Custom <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Marketing Tools</span> Built for Your Business
            </h1>

            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Stop wrestling with generic marketing software. We build SEO automation tools, lead generation systems,
              and reporting dashboards designed specifically for how your business operates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                onClick={() => {
                  selectService('Custom Marketing Tools');
                  openDialog();
                }}
              >
                <Zap className="w-5 h-5 mr-2" />
                Discuss Your Needs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg border-emerald-300 hover:bg-emerald-50"
                onClick={() => {
                  selectService('Automation Discovery Call');
                  openDialog();
                }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Discovery Call
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              <div className="p-4">
                <Search className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium">SEO Automation</p>
              </div>
              <div className="p-4">
                <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Lead Generation</p>
              </div>
              <div className="p-4">
                <BarChart3 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Custom Dashboards</p>
              </div>
              <div className="p-4">
                <Workflow className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Workflow Automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Marketing Technology <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Built for Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every tool we build is designed to save you time, capture more leads, and give you the insights you need to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SEO Automation Tools */}
            <Card className="card-professional border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">SEO Automation Tools</CardTitle>
                    <CardDescription>Automate the tedious, focus on strategy</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Custom tools that automate rank tracking, content optimization scoring, technical audit checks,
                  and competitor monitoring—all tailored to your specific SEO workflow.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">Automated rank tracking with custom alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">Content optimization scoring systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">Technical SEO monitoring dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">Competitor change detection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lead Generation Systems */}
            <Card className="card-professional border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Lead Generation Systems</CardTitle>
                    <CardDescription>Capture and qualify leads automatically</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Complete lead capture systems with smart forms, qualification workflows, and automated follow-up
                  sequences that integrate with your existing CRM and sales process.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Smart multi-step lead capture forms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Automated lead scoring and qualification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">CRM integration and data sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span className="text-sm">Follow-up automation sequences</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reporting Dashboards */}
            <Card className="card-professional border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Reporting Dashboards</CardTitle>
                    <CardDescription>The metrics that matter, at a glance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Custom dashboards that pull data from all your marketing channels into one view. See exactly
                  what&apos;s working, what needs attention, and where to focus your efforts.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm">Multi-channel data aggregation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm">Custom KPI tracking and alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm">Automated report generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm">Client-facing reporting portals</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workflow Automation */}
            <Card className="card-professional border-2 border-emerald-100 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Workflow Automation</CardTitle>
                    <CardDescription>Eliminate repetitive marketing tasks</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Connect your marketing tools and automate the repetitive tasks that eat up your team&apos;s time.
                  From content publishing to social scheduling to client onboarding.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Cross-platform tool integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Automated content publishing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Client onboarding workflows</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Task automation and notifications</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Custom Tools Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Custom <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Beats Generic</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Off-the-shelf marketing tools force you to work their way. Custom tools work the way you do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-professional text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Exact Fit</h3>
                <p className="text-muted-foreground">
                  Every feature built for your specific workflow. No bloat, no workarounds, no &quot;we&apos;ll make it work&quot; compromises.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Your Data, Your Control</h3>
                <p className="text-muted-foreground">
                  Own your marketing data and infrastructure. No vendor lock-in, no surprise price increases, no feature removals.
                </p>
              </CardContent>
            </Card>

            <Card className="card-professional text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Grows With You</h3>
                <p className="text-muted-foreground">
                  Add features as you need them. Scale without hitting tier limits or paying for seats you don&apos;t use.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who Benefits Most from <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Custom Marketing Tools</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  Marketing Agencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                    <span>White-label client reporting dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                    <span>Multi-client campaign management tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                    <span>Automated deliverable generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                    <span>Scalable lead gen for agency growth</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  In-House Marketing Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-1" />
                    <span>Unified marketing performance dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-1" />
                    <span>Automated competitive monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-1" />
                    <span>Lead routing and assignment automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-1" />
                    <span>Cross-department workflow integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-600" />
                  E-commerce Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mt-1" />
                    <span>Product page SEO automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mt-1" />
                    <span>Inventory-aware marketing automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mt-1" />
                    <span>Customer journey tracking dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-600 mt-1" />
                    <span>Abandoned cart recovery systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  Local & Multi-Location Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                    <span>Multi-location review management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                    <span>Local rank tracking by location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                    <span>Appointment booking and lead routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                    <span>Location-specific reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Build Your <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Custom Solution</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm">
                We map your current workflow, pain points, and goals to understand exactly what you need.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">
                We create a detailed blueprint showing exactly how your custom tool will work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Build</h3>
              <p className="text-muted-foreground text-sm">
                We develop your tool with regular check-ins to ensure it matches your expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Launch & Support</h3>
              <p className="text-muted-foreground text-sm">
                We deploy, train your team, and provide ongoing support as you scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How much does a custom marketing tool cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Projects typically range from $5,000 for focused single-purpose tools to $25,000+ for comprehensive
                marketing automation systems. We provide detailed quotes after understanding your specific needs during
                the discovery call. The key comparison: a $15,000 custom tool that you own forever vs. $500-1,500/month
                in SaaS subscriptions that add up to $18,000+ over just one year.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                How long does it take to build a custom tool?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Simple automation tools and dashboards can be ready in 2-4 weeks. More complex lead generation
                systems or multi-integration platforms typically take 6-10 weeks. We provide a detailed timeline
                during the proposal phase so you know exactly what to expect.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Do I own the tool after it&apos;s built?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, completely. You own 100% of the code and can host it wherever you choose. There are no licensing
                fees, no monthly charges, and no restrictions on how you use it. We can provide ongoing maintenance
                and updates if you want, but it&apos;s entirely optional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Can you integrate with our existing tools?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely. We build tools that connect with your existing CRM (HubSpot, Salesforce, Pipedrive, etc.),
                email platforms, analytics tools, and any other systems you use. Integration is often a key benefit—
                bringing data together that was previously siloed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                What if I need changes after the tool is built?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer flexible maintenance packages for ongoing updates and feature additions. Small tweaks are
                often included in our standard support. For larger feature additions, we provide clear scoping and
                pricing upfront. Since you own the code, you can also have any developer make changes if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Custom Marketing Tools?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss your workflow, your challenges, and how custom tools can transform your marketing efficiency.
            </p>
          </div>

          <Card className="card-professional shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">
                Schedule a Discovery Call
              </CardTitle>
              <CardDescription className="text-lg">
                Get a detailed project proposal within 48 hours of our call
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                onClick={() => {
                  selectService('Custom Tools Discovery Call');
                  openDialog();
                }}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                We&apos;ll discuss your needs, show relevant examples, and provide a clear project outline.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Custom solutions for agencies, in-house teams, and growing businesses across Florida
            </p>
          </div>
        </div>
      </section>

      <ContactDialog
        isOpen={isOpen}
        onClose={closeDialog}
        title="Custom Marketing Tools & Automation"
        description="Tell us about your marketing workflow challenges and we'll show you how custom tools can help."
        defaultService={selectedService}
        businessTypes={businessTypes.general}
      />

      <ProfessionalServiceSchema
        serviceName="Custom Digital Marketing Tools & Automation"
        serviceDescription="Custom SEO automation tools, lead generation systems, reporting dashboards, and workflow automation built for your specific business needs"
        serviceUrl="https://aiogrowthseo.com/custom-tools-automation"
        serviceType="Marketing Automation Services"
      />
    </>
  );
}
