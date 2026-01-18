import { getCookiePreferences } from '@/hooks/useCookieConsent';

// GA4 Measurement ID
export const GA_TRACKING_ID = 'G-EB6WBLQY1P';

// Check if user has consented to analytics cookies
export const canUseAnalytics = (): boolean => {
  const preferences = getCookiePreferences();
  return preferences?.analytics ?? false;
};

// Initialize Google Analytics
export const initializeGA = (): void => {
  if (!canUseAnalytics()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('GA4: Analytics blocked by cookie preferences');
    }
    return;
  }

  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  
  // Make gtag available globally
  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    anonymize_ip: true, // GDPR compliance
    allow_google_signals: false, // GDPR compliance
    allow_ad_personalization_signals: false, // GDPR compliance
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('GA4: Initialized with ID:', GA_TRACKING_ID);
  }
};

// Track page views
export const trackPageView = (path: string, title?: string): void => {
  if (!canUseAnalytics() || typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('GA4: Page view tracked:', path, title);
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
): void => {
  if (!canUseAnalytics() || typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('event', eventName, {
    ...parameters,
    // Add default parameters
    timestamp: new Date().toISOString(),
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('GA4: Event tracked:', eventName, parameters);
  }
};

// Form submission tracking
export const trackFormSubmission = (
  formType: 'contact_dialog' | 'hero_form' | 'services_form' | 'custom_form',
  formLocation: string,
  businessType?: string,
  serviceName?: string
): void => {
  trackEvent('form_submit', {
    form_type: formType,
    form_location: formLocation,
    business_type: businessType,
    service_name: serviceName,
    event_category: 'engagement',
    value: 1,
  });
};

// Conversion tracking
export const trackConversion = (
  conversionType: 'contact_form' | 'consultation_request' | 'phone_click' | 'email_click' | 'strategy_session',
  value?: number,
  currency?: string
): void => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 1,
    currency: currency || 'USD',
    event_category: 'conversion',
  });
};

// Lead generation tracking
export const trackLead = (
  leadSource: string,
  leadType: 'consultation' | 'contact' | 'inquiry' | 'strategy_session',
  businessType?: string
): void => {
  trackEvent('generate_lead', {
    lead_source: leadSource,
    lead_type: leadType,
    business_type: businessType,
    event_category: 'lead_generation',
    value: 1,
  });
};

// User engagement tracking
export const trackEngagement = (
  engagementType: 'scroll' | 'time_on_page' | 'cta_click' | 'service_view',
  engagementValue?: string | number
): void => {
  trackEvent('engagement', {
    engagement_type: engagementType,
    engagement_value: engagementValue,
    event_category: 'user_engagement',
  });
};

// Industry page tracking
export const trackIndustryView = (industry: string, pageType: 'industry_page' | 'service_page'): void => {
  trackEvent('view_industry', {
    industry_name: industry,
    page_type: pageType,
    event_category: 'content_engagement',
  });
};

// Service interest tracking
export const trackServiceInterest = (
  serviceName: string,
  interactionType: 'button_click' | 'form_open' | 'pricing_view' | 'page_view'
): void => {
  trackEvent('service_interest', {
    service_name: serviceName,
    interaction_type: interactionType,
    event_category: 'service_engagement',
  });
};

// Performance tracking
export const trackPerformance = (): void => {
  if (!canUseAnalytics() || typeof window === 'undefined') {
    return;
  }

  // Track Core Web Vitals
  if ('web-vital' in window) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => trackEvent('web_vital_cls', { value: metric.value }));
      onFID((metric) => trackEvent('web_vital_fid', { value: metric.value }));
      onFCP((metric) => trackEvent('web_vital_fcp', { value: metric.value }));
      onLCP((metric) => trackEvent('web_vital_lcp', { value: metric.value }));
      onTTFB((metric) => trackEvent('web_vital_ttfb', { value: metric.value }));
    });
  }
};

// Initialize analytics when consent is given
export const handleConsentUpdate = (hasAnalyticsConsent: boolean): void => {
  if (hasAnalyticsConsent) {
    initializeGA();
    trackPageView(window.location.pathname, document.title);
  } else {
    // Disable analytics if consent is withdrawn
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied',
      });
    }
    if (process.env.NODE_ENV === 'development') {
      console.log('GA4: Analytics disabled due to consent withdrawal');
    }
  }
};

// Type declarations for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}