import { useState, useEffect } from 'react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieConsentHook {
  preferences: CookiePreferences | null;
  hasConsent: boolean;
  consentDate: string | null;
  updatePreferences: (newPreferences: CookiePreferences) => void;
  clearConsent: () => void;
  canUseAnalytics: boolean;
  canUseMarketing: boolean;
  canUseFunctional: boolean;
}

export const useCookieConsent = (): CookieConsentHook => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasConsent, setHasConsent] = useState(false);
  const [consentDate, setConsentDate] = useState<string | null>(null);

  useEffect(() => {
    // Load cookie preferences from localStorage
    const loadPreferences = () => {
      try {
        const consent = localStorage.getItem('cookie-consent');
        const date = localStorage.getItem('cookie-consent-date');
        
        if (consent) {
          const prefs = JSON.parse(consent);
          setPreferences(prefs);
          setHasConsent(true);
          setConsentDate(date);
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Error loading cookie preferences:', error);
        }
        // Clear invalid data
        localStorage.removeItem('cookie-consent');
        localStorage.removeItem('cookie-consent-date');
      }
    };

    loadPreferences();

    // Listen for storage changes (for multi-tab support)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent' || e.key === 'cookie-consent-date') {
        loadPreferences();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setHasConsent(true);
    const now = new Date().toISOString();
    setConsentDate(now);
    
    localStorage.setItem('cookie-consent', JSON.stringify(newPreferences));
    localStorage.setItem('cookie-consent-date', now);
    
    // Trigger custom event for other components to listen
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: { preferences: newPreferences, date: now }
    }));
  };

  const clearConsent = () => {
    setPreferences(null);
    setHasConsent(false);
    setConsentDate(null);
    
    localStorage.removeItem('cookie-consent');
    localStorage.removeItem('cookie-consent-date');
    
    // Trigger custom event
    window.dispatchEvent(new CustomEvent('cookieConsentCleared'));
  };

  return {
    preferences,
    hasConsent,
    consentDate,
    updatePreferences,
    clearConsent,
    canUseAnalytics: preferences?.analytics ?? false,
    canUseMarketing: preferences?.marketing ?? false,
    canUseFunctional: preferences?.functional ?? false,
  };
};

// Utility function to check if specific cookie type is allowed
export const canUseCookieType = (type: keyof Omit<CookiePreferences, 'essential'>): boolean => {
  try {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) return false;
    
    const preferences: CookiePreferences = JSON.parse(consent);
    return preferences[type] ?? false;
  } catch {
    return false;
  }
};

// Utility function to get all current preferences
export const getCookiePreferences = (): CookiePreferences | null => {
  try {
    const consent = localStorage.getItem('cookie-consent');
    return consent ? JSON.parse(consent) : null;
  } catch {
    return null;
  }
};

export default useCookieConsent;