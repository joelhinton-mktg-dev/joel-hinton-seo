import { Helmet } from 'react-helmet-async';
import { Shield, Mail, Phone, FileText, Eye, Lock, Database, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageBreadcrumb } from '@/components/ui/breadcrumb';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const lastUpdated = "December 15, 2024";
  
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Joel Hinton Digital Marketing | Data Protection & Privacy</title>
        <meta name="description" content="Privacy Policy for Joel Hinton Digital Marketing. Learn how we collect, use, and protect your personal information in compliance with GDPR and CCPA." />
        <meta name="robots" content="index, follow" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - Joel Hinton Digital Marketing",
            "description": "Privacy Policy detailing data collection, usage, and protection practices",
            "url": "https://joelhinton.com/privacy",
            "publisher": {
              "@type": "Organization",
              "name": "Joel Hinton Digital Marketing"
            },
            "dateModified": lastUpdated
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <PageBreadcrumb 
          items={[
            { label: "Privacy Policy", current: true }
          ]}
        />
        
        <main className="pt-4 pb-16">
          <div className="container mx-auto max-w-4xl px-6">
            {/* Header */}
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                <Shield className="w-4 h-4 mr-2" />
                Legal Document
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-slate-500">
                Last Updated: {lastUpdated}
              </p>
            </div>

            <div className="space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Eye className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-2xl">Overview</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Joel Hinton Digital Marketing ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                    or use our digital marketing services.
                  </p>
                  <p className="text-slate-700">
                    This policy applies to our website (joelhinton.com), our marketing consultation services, 
                    and any related services we provide. By using our services, you consent to the collection and use of information 
                    in accordance with this policy.
                  </p>
                </CardContent>
              </Card>

              {/* Information We Collect */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6 text-purple-600" />
                    <CardTitle className="text-2xl">Information We Collect</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Personal Information</h3>
                    <p className="text-slate-700 mb-2">
                      We may collect personal information that you voluntarily provide, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>Name and contact information (email address, phone number, mailing address)</li>
                      <li>Business information (company name, website URL, industry)</li>
                      <li>Marketing goals and challenges</li>
                      <li>Communication preferences</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-3">Automatically Collected Information</h3>
                    <p className="text-slate-700 mb-2">
                      When you visit our website, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website information</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* How We Use Information */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-2xl">How We Use Your Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    We use collected information for the following purposes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li><strong>Service Delivery:</strong> To provide digital marketing services, consultations, and support</li>
                    <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer service</li>
                    <li><strong>Business Operations:</strong> To process payments, maintain records, and manage our business</li>
                    <li><strong>Marketing:</strong> To send relevant marketing materials (with your consent)</li>
                    <li><strong>Website Improvement:</strong> To analyze website usage and improve user experience</li>
                    <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                    <li><strong>Security:</strong> To detect, prevent, and address technical issues and fraudulent activity</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Information Sharing */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    <CardTitle className="text-2xl">Information Sharing and Disclosure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations (email services, analytics, payment processing)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Protection:</strong> To protect our rights, property, or safety, or that of our clients</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Data Security */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Lock className="w-6 h-6 text-red-600" />
                    <CardTitle className="text-2xl">Data Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    We implement appropriate technical and organizational security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4">
                    <li>SSL/TLS encryption for data transmission</li>
                    <li>Secure data storage with access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited employee access on a need-to-know basis</li>
                    <li>Incident response procedures</li>
                  </ul>
                  <p className="text-slate-700">
                    While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. 
                    We cannot guarantee absolute security but continuously work to improve our security measures.
                  </p>
                </CardContent>
              </Card>

              {/* Your Rights */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Your Privacy Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
                    <li><strong>Access:</strong> Request access to your personal information we hold</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data in a portable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                    <li><strong>Restrict Processing:</strong> Request restriction of processing in certain circumstances</li>
                  </ul>
                  <p className="text-slate-700">
                    To exercise these rights, please contact us using the information provided below. 
                    We will respond to your request within 30 days.
                  </p>
                </CardContent>
              </Card>

              {/* Cookies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Our website uses cookies and similar technologies to enhance your browsing experience:
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-slate-900">Essential Cookies</h4>
                      <p className="text-slate-700 text-sm">Required for basic website functionality and security</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Analytics Cookies</h4>
                      <p className="text-slate-700 text-sm">Help us understand how visitors interact with our website</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Marketing Cookies</h4>
                      <p className="text-slate-700 text-sm">Used to deliver relevant advertisements and track campaign effectiveness</p>
                    </div>
                  </div>
                  <p className="text-slate-700">
                    You can control cookie settings through your browser preferences. However, disabling certain cookies may affect website functionality.
                  </p>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Policy Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. 
                    We will post the updated policy on our website and indicate the date of revision. 
                    We encourage you to review this policy periodically for any changes.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700">Email: privacy@joelhintonmarketing.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700">Phone: +1 (386) 555-0123</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-700">Mail: Joel Hinton Digital Marketing, Daytona Beach, FL 32114</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;