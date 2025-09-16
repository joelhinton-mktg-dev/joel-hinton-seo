import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Cookie, Settings, Shield, Info, CheckCircle, X, ExternalLink } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always required
    analytics: false,
    marketing: false,
    functional: false,
  });

  // Check if user has already made a choice
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error parsing cookie preferences:', error);
        }
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    
    // Initialize analytics and marketing tools here
    initializeAnalytics(allAccepted);
  };

  const handleRejectAll = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(essentialOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    
    initializeAnalytics(essentialOnly);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
    
    initializeAnalytics(preferences);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  // Initialize analytics tools based on consent
  const initializeAnalytics = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // Initialize Google Analytics or other analytics tools
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics cookies enabled');
      }
    }
    
    if (prefs.marketing) {
      // Initialize marketing pixels and tracking
      if (process.env.NODE_ENV === 'development') {
        console.log('Marketing cookies enabled');
      }
    }
    
    if (prefs.functional) {
      // Initialize functional cookies
      if (process.env.NODE_ENV === 'development') {
        console.log('Functional cookies enabled');
      }
    }
  };

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'Required for basic website functionality, security, and form submissions.',
      examples: 'Authentication, security, form data, preferences',
      required: true,
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      examples: 'Google Analytics, page views, user behavior, performance metrics',
      required: false,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaign effectiveness.',
      examples: 'Facebook Pixel, Google Ads, retargeting, conversion tracking',
      required: false,
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization features.',
      examples: 'Chat widgets, video players, social media embeds, preferences',
      required: false,
      color: 'bg-orange-100 text-orange-800 border-orange-200'
    }
  ];

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-none shadow-none">
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                {/* Cookie Icon and Message */}
                <div className="flex items-start gap-3 flex-1">
                  <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900">We value your privacy</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We use cookies to enhance your browsing experience, analyze website traffic, and deliver personalized content. 
                      By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more about our cookie policy.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <Dialog open={showSettings} onOpenChange={setShowSettings}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Settings className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                    </DialogTrigger>
                    <CookieSettingsDialog
                      preferences={preferences}
                      onPreferenceChange={handlePreferenceChange}
                      onSave={handleSaveSettings}
                      cookieCategories={cookieCategories}
                    />
                  </Dialog>
                  
                  <Button variant="outline" size="sm" onClick={handleRejectAll} className="text-xs">
                    Reject All
                  </Button>
                  
                  <Button size="sm" onClick={handleAcceptAll} className="text-xs">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Accept All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

interface CookieSettingsDialogProps {
  preferences: CookiePreferences;
  onPreferenceChange: (type: keyof CookiePreferences, value: boolean) => void;
  onSave: () => void;
  cookieCategories: Array<{
    id: string;
    name: string;
    description: string;
    examples: string;
    required: boolean;
    color: string;
  }>;
}

const CookieSettingsDialog: React.FC<CookieSettingsDialogProps> = ({
  preferences,
  onPreferenceChange,
  onSave,
  cookieCategories
}) => {
  return (
    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Cookie Preferences
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        {/* Privacy Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Your Privacy Matters</h4>
              <p className="text-sm text-blue-800">
                You have full control over which cookies we use. Essential cookies are required for the website to function, 
                but you can choose which additional cookies to allow.
              </p>
            </div>
          </div>
        </div>

        {/* Cookie Categories */}
        <div className="space-y-4">
          {cookieCategories.map((category) => (
            <Card key={category.id} className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-gray-900">{category.name}</h4>
                    <Badge className={category.color}>
                      {category.required ? 'Required' : 'Optional'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences[category.id as keyof CookiePreferences]}
                        onChange={(e) => onPreferenceChange(category.id as keyof CookiePreferences, e.target.checked)}
                        disabled={category.required}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"></div>
                    </label>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                
                <div className="text-xs text-gray-500">
                  <strong>Examples:</strong> {category.examples}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator />

        {/* Additional Information */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Info className="w-4 h-4" />
            <span>You can change these preferences at any time in our Privacy Policy.</span>
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a 
              href="/privacy" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="/terms" 
              className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
          <Button onClick={onSave} className="flex-1">
            <CheckCircle className="w-4 h-4 mr-2" />
            Save Preferences
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default CookieConsent;