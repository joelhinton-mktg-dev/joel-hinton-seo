import { getCookiePreferences } from '@/hooks/useCookieConsent';
import { GTM_CONTAINER_ID } from '@/data/site';

export interface AnalyticsConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const canUseAnalytics = (): boolean => {
  if (typeof window === 'undefined') return false;
  const preferences = getCookiePreferences();
  return preferences?.analytics ?? false;
};

/** Push to dataLayer only when analytics consent is granted. Safe to call from client event handlers. */
export const pushToDataLayer = (payload: Record<string, unknown>): void => {
  if (typeof window === 'undefined' || !canUseAnalytics()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (process.env.NODE_ENV === 'development') {
    console.log('GTM dataLayer:', payload);
  }
};

const isGtmScriptPresent = (): boolean => {
  if (typeof document === 'undefined') return false;
  return !!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}"]`);
};

/** Inject GTM container script + noscript iframe. Idempotent — safe to call once per session. */
export const loadGtmContainer = (): void => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  if (!canUseAnalytics() || isGtmScriptPresent()) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;
  document.head.appendChild(script);

  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.appendChild(noscript);

  if (process.env.NODE_ENV === 'development') {
    console.log('GTM: Container loaded:', GTM_CONTAINER_ID);
  }
};

/** Fired when the user actively grants consent (banner / settings save). */
export const pushConsentGranted = (prefs: AnalyticsConsentPreferences): void => {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_granted',
    analytics_consent: prefs.analytics,
    marketing_consent: prefs.marketing,
    functional_consent: prefs.functional,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('GTM: consent_granted pushed');
  }
};

/** Called from CookieConsent when the user updates preferences. */
export const handleConsentUpdate = (
  prefsOrAnalyticsEnabled: AnalyticsConsentPreferences | boolean,
): void => {
  const analyticsEnabled =
    typeof prefsOrAnalyticsEnabled === 'boolean'
      ? prefsOrAnalyticsEnabled
      : prefsOrAnalyticsEnabled.analytics;

  if (analyticsEnabled) {
    loadGtmContainer();
  }
};

/** Called from CookieConsent on accept / save when analytics is newly enabled. */
export const handleConsentGranted = (prefs: AnalyticsConsentPreferences): void => {
  if (!prefs.analytics) return;
  pushConsentGranted(prefs);
  loadGtmContainer();
};

/** Activate GTM for returning visitors who already consented (no consent_granted replay). */
export const activateGtmForExistingConsent = (): void => {
  if (!canUseAnalytics()) return;
  loadGtmContainer();
};

export type FormType = 'contact_dialog' | 'hero_form' | 'services_form' | 'custom_form';

export const trackFormSubmission = (
  formType: FormType,
  formLocation: string,
  businessType?: string,
  serviceName?: string,
): void => {
  pushToDataLayer({
    event: 'form_submit',
    form_type: formType,
    form_location: formLocation,
    business_type: businessType ?? '',
    service_name: serviceName ?? '',
  });
};

export const trackPhoneClick = (phoneNumber: string, linkLocation: string): void => {
  pushToDataLayer({
    event: 'phone_click',
    phone_number: phoneNumber,
    link_location: linkLocation,
  });
};

export type PrimaryCtaPage = '/agentic-seo' | '/local-lead-generation';

export const trackPrimaryCtaClick = (params: {
  pagePath: PrimaryCtaPage;
  ctaLabel: string;
  ctaLocation: string;
  serviceName?: string;
}): void => {
  pushToDataLayer({
    event: 'primary_cta_click',
    page_path: params.pagePath,
    cta_label: params.ctaLabel,
    cta_location: params.ctaLocation,
    service_name: params.serviceName ?? '',
  });
};

/** Legacy Vite app stubs — Next.js App Router uses GTM dataLayer helpers above. */
export const initializeGA = (): void => {};
export const trackPageView = (_path: string, _title?: string): void => {};
export const trackConversion = (_type: string, _value?: number, _currency?: string): void => {};
export const trackLead = (_source: string, _type: string, _businessType?: string): void => {};
export const trackEngagement = (_type: string, _value?: string | number): void => {};
export const trackIndustryView = (_industry: string, _pageType: string): void => {};
export const trackServiceInterest = (_service: string, _interaction: string): void => {};
export const trackPerformance = (): void => {};
