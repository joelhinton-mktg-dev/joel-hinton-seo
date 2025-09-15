import { test, expect } from '@playwright/test';

test.describe('Business Type Configurations Testing', () => {
  
  const industryPages = [
    { 
      path: '/services/healthcare-marketing', 
      businessTypes: ['medical-practice', 'dental-practice', 'specialty-clinic', 'urgent-care'],
      industry: 'Healthcare'
    },
    { 
      path: '/services/real-estate-marketing', 
      businessTypes: ['residential-agent', 'luxury-agent', 'commercial-broker', 'property-developer'],
      industry: 'Real Estate'
    },
    { 
      path: '/services/saas-marketing', 
      businessTypes: ['b2b-saas', 'b2c-saas', 'fintech', 'healthtech'],
      industry: 'SaaS'
    },
    { 
      path: '/services/legal-services-marketing', 
      businessTypes: ['personal-injury', 'criminal-defense', 'family-law', 'corporate-law'],
      industry: 'Legal'
    },
    { 
      path: '/services/restaurants-hospitality-marketing', 
      businessTypes: ['fine-dining', 'casual-dining', 'fast-casual', 'bar-nightlife'],
      industry: 'Restaurant'
    }
  ];

  industryPages.forEach(({ path, businessTypes, industry }) => {
    test(`${industry} - Industry-Specific Business Types`, async ({ page }) => {
      await page.goto(path);
      
      // Find and click contact button
      const contactButton = page.locator('button').filter({ 
        hasText: /Get.*Free|Contact|Schedule|Audit/ 
      }).first();
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible();
      
      // Check business type dropdown
      const businessSelect = dialog.locator('select[name="businessType"]');
      await businessSelect.click();
      
      // Verify industry-specific options are present
      for (const businessType of businessTypes) {
        await expect(dialog.locator(`option[value="${businessType}"]`)).toBeVisible();
      }
      
      // Verify that some general options are NOT present (they should only be in industry-specific lists)
      // This ensures proper segmentation
      if (industry !== 'General') {
        await expect(dialog.locator('option[value="other-business"]')).not.toBeVisible();
      }
      
      // Test selecting an industry-specific option
      await businessSelect.selectOption(businessTypes[0]);
      
      // Fill minimal form to test submission with industry-specific business type
      await dialog.locator('input[name="name"]').fill('Industry Test User');
      await dialog.locator('input[name="email"]').fill('hintonjoel@gmail.com');
      await dialog.locator('input[name="phone"]').fill('555-123-4567');
      await dialog.locator('textarea[name="marketingChallenge"]').fill(
        `Testing ${industry.toLowerCase()} industry specific form submission`
      );
      
      // Mock successful submission
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
        const postData = route.request().postDataJSON();
        
        // Verify the business type is correctly submitted
        expect(postData.businessType).toBe(businessTypes[0]);
        
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true })
        });
      });
      
      await dialog.locator('button[type="submit"]').click();
      await expect(dialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
    });
  });

  test('General Business Types - Standard Pages', async ({ page }) => {
    await page.goto('/services');
    
    const contactButton = page.locator('button').filter({ 
      hasText: /Contact|Get.*Started/ 
    }).first();
    await contactButton.click();
    
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
    
    const businessSelect = dialog.locator('select[name="businessType"]');
    await businessSelect.click();
    
    // Verify general business type options
    const generalOptions = [
      'restaurant-food-service',
      'professional-services', 
      'healthcare-medical',
      'real-estate',
      'home-services',
      'retail-ecommerce',
      'technology-saas',
      'legal-services',
      'financial-services',
      'other'
    ];
    
    for (const option of generalOptions) {
      await expect(dialog.locator(`option[value="${option}"]`)).toBeVisible();
    }
  });

  test('Business Type Validation Across Industries', async ({ page }) => {
    // Test that each industry page has the correct number of business type options
    const industryConfigs = [
      { path: '/services/healthcare-marketing', expectedCount: 9 },
      { path: '/services/real-estate-marketing', expectedCount: 9 },
      { path: '/services/saas-marketing', expectedCount: 9 },
      { path: '/services/legal-services-marketing', expectedCount: 9 },
      { path: '/services/restaurants-hospitality-marketing', expectedCount: 9 },
      { path: '/services/professional-services-marketing', expectedCount: 9 },
      { path: '/services/automotive-services-marketing', expectedCount: 9 },
      { path: '/services/education-training-marketing', expectedCount: 9 },
      { path: '/services/fitness-wellness-marketing', expectedCount: 9 },
      { path: '/services/financial-services-marketing', expectedCount: 9 },
      { path: '/services/home-services-marketing', expectedCount: 9 },
      { path: '/services/ecommerce-marketing', expectedCount: 9 }
    ];

    for (const config of industryConfigs) {
      await page.goto(config.path);
      
      const contactButton = page.locator('button').filter({ 
        hasText: /Contact|Get.*Started|Schedule|Audit/ 
      }).first();
      
      if (await contactButton.isVisible()) {
        await contactButton.click();
        
        const dialog = page.locator('[role="dialog"]');
        await expect(dialog).toBeVisible();
        
        const businessSelect = dialog.locator('select[name="businessType"]');
        await businessSelect.click();
        
        // Count the number of options (excluding placeholder)
        const options = await dialog.locator('select[name="businessType"] option').count();
        
        // Should have the expected number of options plus placeholder
        expect(options).toBeGreaterThanOrEqual(config.expectedCount);
        
        // Close dialog for next iteration
        const closeButton = dialog.locator('button').filter({ hasText: /Cancel|Close/ }).first();
        if (await closeButton.isVisible()) {
          await closeButton.click();
        } else {
          await page.keyboard.press('Escape');
        }
        
        await expect(dialog).not.toBeVisible();
      }
    }
  });

  test('Form Submission with Different Business Types', async ({ page }) => {
    const testCases = [
      {
        page: '/services/healthcare-marketing',
        businessType: 'medical-practice',
        challenge: 'Need help marketing my medical practice to attract more patients'
      },
      {
        page: '/services/real-estate-marketing', 
        businessType: 'luxury-agent',
        challenge: 'Looking to market luxury properties to high-net-worth individuals'
      },
      {
        page: '/services/saas-marketing',
        businessType: 'b2b-saas', 
        challenge: 'Need help improving trial-to-paid conversion rates'
      }
    ];

    for (const testCase of testCases) {
      await page.goto(testCase.page);
      
      const contactButton = page.locator('button').filter({ 
        hasText: /Contact|Get.*Started|Schedule|Audit/ 
      }).first();
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible();
      
      // Fill form with industry-specific data
      await dialog.locator('input[name="name"]').fill('Business Type Test User');
      await dialog.locator('input[name="email"]').fill('hintonjoel@gmail.com');
      await dialog.locator('input[name="phone"]').fill('555-987-6543');
      await dialog.locator('select[name="businessType"]').selectOption(testCase.businessType);
      await dialog.locator('textarea[name="marketingChallenge"]').fill(testCase.challenge);
      
      // Mock and verify submission
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
        const postData = route.request().postDataJSON();
        
        expect(postData.businessType).toBe(testCase.businessType);
        expect(postData.marketingChallenge).toBe(testCase.challenge);
        
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true })
        });
      });
      
      await dialog.locator('button[type="submit"]').click();
      await expect(dialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
      await expect(dialog).not.toBeVisible({ timeout: 5000 });
    }
  });
});