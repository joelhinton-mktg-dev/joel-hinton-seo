'use client';

import { useEffect } from 'react';
import { activateGtmForExistingConsent, handleConsentUpdate, trackPhoneClick } from '@/lib/analytics';
import type { AnalyticsConsentPreferences } from '@/lib/analytics';

const parseStoredPreferences = (): AnalyticsConsentPreferences | null => {
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return null;
    const prefs = JSON.parse(consent) as AnalyticsConsentPreferences & { essential?: boolean };
    return {
      analytics: prefs.analytics ?? false,
      marketing: prefs.marketing ?? false,
      functional: prefs.functional ?? false,
    };
  } catch {
    return null;
  }
};

const GoogleTagManager = () => {
  useEffect(() => {
    const prefs = parseStoredPreferences();
    if (prefs?.analytics) {
      activateGtmForExistingConsent();
    }

    const onConsentUpdated = (event: Event) => {
      const detail = (event as CustomEvent<{ preferences: AnalyticsConsentPreferences }>).detail;
      if (detail?.preferences) {
        handleConsentUpdate(detail.preferences);
      }
    };

    const onStorage = (event: StorageEvent) => {
      if (event.key !== 'cookie-consent') return;
      const updated = parseStoredPreferences();
      if (updated) {
        handleConsentUpdate(updated);
      }
    };

    const onPhoneClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a[href^="tel:"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      trackPhoneClick(anchor.getAttribute('href') ?? '', window.location.pathname);
    };

    window.addEventListener('cookieConsentUpdated', onConsentUpdated);
    window.addEventListener('storage', onStorage);
    document.addEventListener('click', onPhoneClick);

    return () => {
      window.removeEventListener('cookieConsentUpdated', onConsentUpdated);
      window.removeEventListener('storage', onStorage);
      document.removeEventListener('click', onPhoneClick);
    };
  }, []);

  return null;
};

export default GoogleTagManager;
