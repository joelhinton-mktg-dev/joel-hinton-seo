import { Metadata } from 'next';
import { FileText, Mail, Phone, Gavel, AlertCircle, Users, DollarSign, Shield, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageBreadcrumb } from '../../components/ui/PageBreadcrumb';

export const metadata: Metadata = {
  title: 'Terms of Service | AIO Growth SEO | Legal Terms & Conditions',
  description: 'Terms of Service for AIO Growth SEO. Review the legal terms and conditions for our digital marketing consultation and services.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aiogrowthseo.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | AIO Growth SEO',
    description: 'Terms of Service for AIO Growth SEO. Review the legal terms and conditions for our services.',
    url: 'https://aiogrowthseo.com/terms',
  },
};

const lastUpdated = "January 15, 2025";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service - AIO Growth SEO",
  "description": "Legal terms and conditions for digital marketing services",
  "url": "https://aiogrowthseo.com/terms",
  "publisher": {
    "@type": "Organization",
    "name": "AIO Growth SEO"
  },
  "dateModified": lastUpdated
};

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <PageBreadcrumb
          items={[
            { label: "Terms of Service", current: true }
          ]}
        />

        <main className="pt-4 pb-16">
          <div className="container mx-auto max-w-4xl px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Gavel className="w-4 h-4 mr-2" />
                Legal Agreement
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-4">
                Legal terms and conditions governing the use of our digital marketing services and website.
              </p>
              <p className="text-sm text-slate-500">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="space-y-8">
              {/* Agreement */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;Client,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;)
                    and AIO Growth SEO (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) regarding your use of our website and services.
                  </p>
                  <p className="text-slate-700">
                    By accessing our website at aiogrowthseo.com or engaging our services, you agree to be bound by these Terms.
                    If you do not agree to these Terms, please do not use our website or services.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                      <p className="text-sm text-amber-800">
                        <strong>Important:</strong> These terms include a binding arbitration provision and class action waiver that affects your legal rights.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Description */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-2xl">Description of Services</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    AIO Growth SEO provides digital marketing consultation, strategy development, and implementation services, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>Search Engine Optimization (SEO) consultation and implementation</li>
                    <li>Growth marketing strategy development</li>
                    <li>Paid advertising campaign management and consulting</li>
                    <li>Marketing automation setup and optimization</li>
                    <li>Consumer psychology analysis and application</li>
                    <li>Website optimization and conversion improvement</li>
                    <li>Digital marketing training and education</li>
                    <li>Industry-specific marketing strategy for 15+ verticals</li>
                    <li>Marketing audit and competitive analysis</li>
                    <li>Lead generation and conversion optimization</li>
                  </ul>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Consultation Terms</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li><strong>Initial Consultation:</strong> Free 30-minute discovery call to assess needs and fit</li>
                      <li><strong>Project Scope:</strong> All work is defined by written proposals and service agreements</li>
                      <li><strong>Deliverables:</strong> Specific deliverables, timelines, and milestones are outlined in project agreements</li>
                      <li><strong>Communication:</strong> Regular progress updates via agreed communication channels</li>
                      <li><strong>Revisions:</strong> Reasonable revisions included within project scope; additional revisions may incur extra fees</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Performance Disclaimer:</strong> All services are provided on a consultation basis. We do not guarantee specific results,
                      rankings, or revenue outcomes. Success in digital marketing depends on various factors including market conditions,
                      competition, budget, implementation quality, and external factors beyond our control.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Client Responsibilities */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <CardTitle className="text-2xl">Client Responsibilities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">As a client, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li><strong>Provide Accurate Information:</strong> Supply complete, accurate, and current information about your business, goals, and requirements</li>
                    <li><strong>Timely Communication:</strong> Respond promptly to requests for information, feedback, or approvals</li>
                    <li><strong>Payment Obligations:</strong> Make payments according to agreed terms and schedules</li>
                    <li><strong>Content and Access:</strong> Provide necessary website access, content, and materials as required</li>
                    <li><strong>Compliance:</strong> Ensure your business practices comply with applicable laws and regulations</li>
                    <li><strong>Implementation:</strong> Implement recommended strategies and changes in good faith</li>
                    <li><strong>Confidentiality:</strong> Maintain confidentiality of proprietary strategies and methods shared</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Payment Terms */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-2xl">Payment Terms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Fees and Payment</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Service fees are outlined in individual service agreements or proposals</li>
                      <li>Payment terms are typically net 15 days unless otherwise specified</li>
                      <li>Late payments may incur a 1.5% monthly service charge</li>
                      <li>All fees are in USD and exclude applicable taxes</li>
                      <li>We accept major credit cards, ACH transfers, and wire transfers</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Refund Policy</h3>
                    <p className="text-slate-700 mb-2">
                      Given the consultative nature of our services:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Initial consultation fees are non-refundable after the session is completed</li>
                      <li>Project-based work may be eligible for partial refunds for undelivered services</li>
                      <li>Ongoing services may be cancelled with 30 days written notice</li>
                      <li>Third-party costs (advertising spend, software, etc.) are non-refundable</li>
                      <li>Refund requests must be submitted in writing within 30 days</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Intellectual Property */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-indigo-600" />
                    <CardTitle className="text-2xl">Intellectual Property Rights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Our Intellectual Property</h3>
                    <p className="text-slate-700">
                      All proprietary methodologies, strategies, frameworks, templates, and materials developed by AIO Growth SEO
                      remain our exclusive intellectual property. This includes our psychological marketing frameworks, optimization techniques,
                      and analytical methodologies.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Client Work Product</h3>
                    <p className="text-slate-700">
                      Client-specific strategies, reports, and implementations created for your business remain your property.
                      However, we retain the right to use general insights and learnings (without identifying information)
                      to improve our services and methodologies.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Website Content</h3>
                    <p className="text-slate-700">
                      All content on our website, including text, graphics, logos, and software, is protected by copyright and trademark laws.
                      You may not reproduce, distribute, or create derivative works without written permission.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimers and Limitations */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                    <CardTitle className="text-2xl">Disclaimers and Limitations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">No Guarantees</h3>
                    <p className="text-slate-700">
                      We provide professional consultation based on industry best practices and our experience. However, we cannot guarantee:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Specific search engine rankings or traffic increases</li>
                      <li>Revenue or lead generation outcomes</li>
                      <li>Immunity from algorithm changes or policy updates</li>
                      <li>Results timeframes or permanence</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Limitation of Liability</h3>
                    <p className="text-slate-700">
                      Our total liability to you for any claims arising from our services shall not exceed the total amount paid by you
                      to us in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Termination */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-red-600" />
                    <CardTitle className="text-2xl">Termination</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Termination by Client</h3>
                    <p className="text-slate-700">
                      You may terminate our services at any time with 30 days written notice. You remain responsible for payment
                      of all services rendered and costs incurred prior to termination.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Termination by Company</h3>
                    <p className="text-slate-700">
                      We may terminate our services immediately if you:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Breach these Terms or any service agreement</li>
                      <li>Fail to make required payments</li>
                      <li>Engage in illegal or unethical business practices</li>
                      <li>Request services outside our expertise or ethical standards</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Governing Law */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Governing Law and Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Governing Law</h3>
                    <p className="text-slate-700">
                      These Terms are governed by the laws of the State of Florida, without regard to conflict of law provisions.
                      Any disputes will be resolved in the courts of Volusia County, Florida.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">Arbitration</h3>
                    <p className="text-slate-700">
                      For disputes involving less than $10,000, either party may elect binding arbitration through the American Arbitration Association.
                      Arbitration proceedings will be conducted in Volusia County, Florida.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Changes to Terms */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    We reserve the right to update these Terms at any time. Changes will be posted on our website with an updated effective date.
                    Continued use of our services after changes constitutes acceptance of the revised Terms.
                    For material changes, we will provide 30 days notice to active clients.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    Questions About These Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700">Email: legal@aiogrowthseo.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700">Phone: +1 (386) 555-0123</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700">Mail: AIO Growth SEO, Daytona Beach, FL 32114</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
