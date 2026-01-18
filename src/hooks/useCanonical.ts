import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://aiogrowthseo.com';

/**
 * Hook to generate canonical URL for current route
 * Uses window.location.pathname to get the current path
 * @param overridePath - Optional path override (useful for dynamic routes like blog/:slug)
 * @returns Canonical URL string
 */
export const useCanonical = (overridePath?: string): string => {
  const location = useLocation();
  const pathname = overridePath || location.pathname;
  
  // Ensure pathname starts with /
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // Remove trailing slash except for root
  const normalizedPath = cleanPath === '/' ? '' : cleanPath.replace(/\/$/, '');
  
  return `${BASE_URL}${normalizedPath}`;
};
