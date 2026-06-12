/** Build-time constant — safe for server and client markup (no hydration mismatch). */
export const COPYRIGHT_YEAR = new Date().getFullYear();

export const SITE_PHONE = '(386) 322-2932';
export const SITE_PHONE_TEL = '+13863222932';
export const SITE_PHONE_DISPLAY = `+1 ${SITE_PHONE}`;

export const SITE_EMAIL = 'info@aiogrowthseo.com';

/** Google Tag Manager container — GA4 (G-8LRYYJ3JVP) is configured inside GTM, not in code. */
export const GTM_CONTAINER_ID = 'GTM-5JZLHMHS';

/**
 * Primary Formspree notification address for contact/quote submissions.
 * Multi-recipient notification (also notify joel@aiogrowthseo.com + Samantha)
 * must be configured in the Formspree dashboard for each form ID — not in code alone.
 */
export const FORMSPREE_NOTIFICATION_EMAIL = 'sales@aiogrowthseo.com';

/** Hero / homepage quick-contact form */
export const FORMSPREE_HERO_ENDPOINT = 'https://formspree.io/f/mjkejnko';

/** Site-wide contact dialog and standard quote forms */
export const FORMSPREE_CONTACT_ENDPOINT = 'https://formspree.io/f/xrbarnbp';

/** Landing page multi-step forms (local-seo-offer, free-seo-audit) */
export const FORMSPREE_LP_ENDPOINT = 'https://formspree.io/f/mjggakgp';
