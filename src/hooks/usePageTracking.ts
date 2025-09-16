import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackIndustryView, trackServiceInterest } from '@/lib/analytics';

// Extract page information from pathname
const getPageInfo = (pathname: string) => {
  // Remove leading slash and split by '/'
  const segments = pathname.replace(/^\//, '').split('/');
  
  // Determine page type and extract relevant information
  if (pathname === '/') {
    return { type: 'homepage', title: 'Homepage' };
  }
  
  if (segments[0] === 'industries') {
    const industry = segments[1];
    return { 
      type: 'industry', 
      title: `Industry - ${industry || 'Overview'}`,
      industry: industry 
    };
  }
  
  if (segments[0] === 'blog') {
    const slug = segments[1];
    return { 
      type: 'blog', 
      title: slug ? `Blog Post - ${slug}` : 'Blog Overview',
      slug: slug 
    };
  }
  
  // Service pages
  const servicePages = [
    'seo-services', 'growth-marketing', 'paid-advertising', 
    'local-seo', 'geo-optimization'
  ];
  
  if (servicePages.includes(segments[0])) {
    return { 
      type: 'service', 
      title: `Service - ${segments[0]}`,
      service: segments[0] 
    };
  }
  
  // Location pages
  const locationPages = [
    'florida-seo-services', 'orlando-digital-marketing', 'tampa-growth-marketing',
    'jacksonville-seo-consultant', 'miami-marketing-agency', 'fort-lauderdale-advertising',
    'daytona-beach-digital-marketing'
  ];
  
  if (locationPages.includes(segments[0])) {
    return { 
      type: 'location', 
      title: `Location - ${segments[0]}`,
      location: segments[0] 
    };
  }
  
  // Company pages
  const companyPages = ['about', 'contact', 'pricing', 'results', 'services'];
  if (companyPages.includes(segments[0])) {
    return { 
      type: 'company', 
      title: `Company - ${segments[0]}`,
      page: segments[0] 
    };
  }
  
  // Legal pages
  const legalPages = ['privacy', 'terms'];
  if (legalPages.includes(segments[0])) {
    return { 
      type: 'legal', 
      title: `Legal - ${segments[0]}`,
      page: segments[0] 
    };
  }
  
  // Default case
  return { 
    type: 'other', 
    title: `Page - ${segments[0] || 'Unknown'}`,
    page: segments[0] 
  };
};

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const pageInfo = getPageInfo(location.pathname);
    
    // Track basic pageview
    trackPageView(location.pathname, pageInfo.title);
    
    // Track specific page types with additional context
    switch (pageInfo.type) {
      case 'industry':
        if (pageInfo.industry) {
          trackIndustryView(pageInfo.industry, 'industry_page');
        }
        break;
        
      case 'service':
        if (pageInfo.service) {
          trackServiceInterest(pageInfo.service, 'page_view');
        }
        break;
        
      case 'location':
        // Track location page views for local SEO insights
        if (pageInfo.location) {
          trackServiceInterest(`local-${pageInfo.location}`, 'page_view');
        }
        break;
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Page tracking:', {
        pathname: location.pathname,
        pageInfo,
        timestamp: new Date().toISOString()
      });
    }
  }, [location.pathname]);

  return { currentPath: location.pathname };
};

export default usePageTracking;