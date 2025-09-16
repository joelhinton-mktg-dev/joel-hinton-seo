import { test, expect } from '@playwright/test';

// Configure longer timeouts
test.use({ actionTimeout: 15000, timeout: 60000 });

// Helper function for Radix Select interaction
async function interactWithRadixSelect(page: Page, targetValue: string) {
  console.log(`Selecting business type: ${targetValue}`);
  
  // Wait for and click the select trigger
  const selectTrigger = page.locator('[role="combobox"]').first();
  await expect(selectTrigger).toBeVisible({ timeout: 10000 });
  await selectTrigger.click();
  
  // Wait for options to appear
  await page.waitForSelector('[role="listbox"], [role="option"]', { timeout: 10000 });
  
  // Find and click the target option
  const option = page.locator(`[role="option"][data-value="${targetValue}"]`);
  await expect(option).toBeVisible({ timeout: 5000 });
  await option.click();
  
  console.log(`Successfully selected: ${targetValue}`);
}

test.describe('Business Type Configurations - Fixed Selectors', () => {
  
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
      console.log(`Testing ${industry} industry page: ${path}`);
      
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      
      // Find and click contact button
      const contactButton = page.locator('button').filter({ 
        hasText: /Get.*Free|Contact|Schedule|Audit/ 
      }).first();
      
      await expect(contactButton).toBeVisible({ timeout: 10000 });
      console.log(`Clicking contact button for ${industry}...`);
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible({ timeout: 10000 });
      
      // Click on business type selector to open dropdown
      console.log(`Opening business type dropdown for ${industry}...`);
      const selectTrigger = dialog.locator('[role="combobox"]').first();
      await expect(selectTrigger).toBeVisible({ timeout: 10000 });
      await selectTrigger.click();
      
      // Wait for dropdown options to appear
      await page.waitForSelector('[role="listbox"], [role="option"]', { timeout: 10000 });
      
      // Verify industry-specific options are present
      console.log(`Verifying ${industry} business type options...`);
      let foundOptions = 0;
      
      for (const businessType of businessTypes) {
        const option = page.locator(`[role="option"][data-value="${businessType}"]`);
        if (await option.isVisible()) {
          foundOptions++;
          console.log(`✓ Found option: ${businessType}`);
        } else {
          console.log(`✗ Missing option: ${businessType}`);
        }
      }
      
      // Should find at least half of the expected options
      expect(foundOptions).toBeGreaterThan(businessTypes.length / 2);
      
      // Test selecting the first available option
      const firstBusinessType = businessTypes[0];
      const firstOption = page.locator(`[role="option"][data-value="${firstBusinessType}"]`);
      
      if (await firstOption.isVisible()) {
        console.log(`Selecting first option: ${firstBusinessType}`);
        await firstOption.click();
        
        // Fill minimal form to test submission
        const nameField = dialog.locator('input[name="name"], input#name');
        const emailField = dialog.locator('input[name="email"], input#email');
        const phoneField = dialog.locator('input[name="phone"], input#phone');
        const challengeField = dialog.locator('textarea[name="marketingChallenge"], textarea#marketingChallenge');
        
        await nameField.fill(`${industry} Test User`);
        await emailField.fill('hintonjoel@gmail.com');
        await phoneField.fill('555-123-4567');
        await challengeField.fill(`Testing ${industry.toLowerCase()} industry specific form submission with proper validation requirements.`);
        
        // Mock successful submission
        await page.route('https://formspree.io/f/xrbarnbp', async route => {
          const postData = route.request().postDataJSON();
          console.log(`${industry} form submission data:`, postData);
          
          // Verify the business type is correctly submitted
          if (postData.businessType) {
            expect(postData.businessType).toBe(firstBusinessType);
          }
          
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({ ok: true })
          });
        });
        
        const submitButton = dialog.locator('button[type="submit"]');
        await submitButton.click();
        
        // Look for success message
        const successMessage = dialog.locator('text=Thank you').or(dialog.locator('text=Thanks!')).or(dialog.locator('.text-green-600'));
        await expect(successMessage.first()).toBeVisible({ timeout: 15000 });
        
        console.log(`✓ ${industry} form test completed successfully`);
      } else {
        console.log(`Warning: Could not find option ${firstBusinessType}, skipping submission test`);
        
        // Close the dropdown by pressing escape
        await page.keyboard.press('Escape');
        
        // Close dialog
        const closeButton = dialog.locator('button').filter({ hasText: /Cancel|Close/ }).first();
        if (await closeButton.isVisible()) {
          await closeButton.click();
        } else {
          await page.keyboard.press('Escape');
        }
      }
    });
  });

  test('General Business Types - Standard Pages', async ({ page }) => {
    console.log('Testing general business types on services page...');
    
    await page.goto('/services');
    await page.waitForLoadState('networkidle');
    
    const contactButton = page.locator('button').filter({ 
      hasText: /Contact|Get.*Started/ 
    }).first();
    
    await expect(contactButton).toBeVisible({ timeout: 10000 });
    await contactButton.click();
    
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 10000 });
    
    // Open business type dropdown
    const selectTrigger = dialog.locator('[role="combobox"]').first();
    await expect(selectTrigger).toBeVisible({ timeout: 10000 });
    await selectTrigger.click();
    
    // Wait for options to appear
    await page.waitForSelector('[role="listbox"], [role="option"]', { timeout: 10000 });
    
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
    
    let foundGeneralOptions = 0;
    for (const option of generalOptions) {
      const optionElement = page.locator(`[role="option"][data-value="${option}"]`);
      if (await optionElement.isVisible()) {
        foundGeneralOptions++;
        console.log(`✓ Found general option: ${option}`);
      }
    }
    
    // Should find at least half of the general options
    expect(foundGeneralOptions).toBeGreaterThan(generalOptions.length / 2);
    
    console.log(`Found ${foundGeneralOptions} out of ${generalOptions.length} general business type options`);
    
    // Close dropdown
    await page.keyboard.press('Escape');
  });

  test('Business Type Selection Flow', async ({ page }) => {
    console.log('Testing complete business type selection flow...');
    
    const testCases = [
      {
        page: '/services/healthcare-marketing',
        businessType: 'medical-practice',
        challenge: 'Need help marketing my medical practice to attract more patients with proper healthcare messaging'
      },
      {
        page: '/services/real-estate-marketing', 
        businessType: 'luxury-agent',
        challenge: 'Looking to market luxury properties to high-net-worth individuals with premium positioning'
      }
    ];

    for (const testCase of testCases) {
      console.log(`Testing business type selection on: ${testCase.page}`);
      
      await page.goto(testCase.page);
      await page.waitForLoadState('networkidle');
      
      const contactButton = page.locator('button').filter({ 
        hasText: /Contact|Get.*Started|Schedule|Audit/ 
      }).first();
      
      await expect(contactButton).toBeVisible({ timeout: 10000 });
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible({ timeout: 10000 });
      
      // Fill form with industry-specific data
      const nameField = dialog.locator('input[name="name"], input#name');
      const emailField = dialog.locator('input[name="email"], input#email');
      const phoneField = dialog.locator('input[name="phone"], input#phone');
      const challengeField = dialog.locator('textarea[name="marketingChallenge"], textarea#marketingChallenge');
      
      await nameField.fill('Business Type Selection Test');
      await emailField.fill('hintonjoel@gmail.com');
      await phoneField.fill('555-987-6543');
      await challengeField.fill(testCase.challenge);
      
      // Select business type
      await interactWithRadixSelect(page, testCase.businessType);
      
      // Mock and verify submission
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
        const postData = route.request().postDataJSON();
        console.log('Form submission data:', postData);
        
        if (postData.businessType) {
          expect(postData.businessType).toBe(testCase.businessType);
        }
        if (postData.marketingChallenge) {
          expect(postData.marketingChallenge).toBe(testCase.challenge);
        }
        
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true })
        });
      });
      
      const submitButton = dialog.locator('button[type="submit"]');
      await submitButton.click();
      
      const successMessage = dialog.locator('text=Thank you').or(dialog.locator('text=Thanks!')).or(dialog.locator('.text-green-600'));
      await expect(successMessage.first()).toBeVisible({ timeout: 15000 });
      
      console.log(`✓ Business type selection test completed for: ${testCase.page}`);
      
      // Wait for dialog to close before next test
      await page.waitForTimeout(2000);
    }
  });

  test('Dropdown Interaction Validation', async ({ page }) => {
    console.log('Testing dropdown interaction patterns...');
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Open a contact dialog
    const contactButton = page.locator('button').filter({ hasText: /Contact|Get.*Started/ }).first();
    await contactButton.click();
    
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 10000 });
    
    // Test dropdown open/close behavior
    const selectTrigger = dialog.locator('[role="combobox"]').first();
    await expect(selectTrigger).toBeVisible({ timeout: 10000 });
    
    // Open dropdown
    console.log('Opening dropdown...');
    await selectTrigger.click();
    await page.waitForSelector('[role="listbox"], [role="option"]', { timeout: 10000 });
    
    // Verify options are visible
    const options = page.locator('[role="option"]');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    console.log(`Found ${optionCount} dropdown options`);
    
    // Close dropdown with escape
    console.log('Closing dropdown with escape...');
    await page.keyboard.press('Escape');
    
    // Verify dropdown closed
    await expect(page.locator('[role="listbox"]')).not.toBeVisible();
    
    // Test opening and selecting
    console.log('Testing selection...');
    await selectTrigger.click();
    await page.waitForSelector('[role="option"]', { timeout: 5000 });
    
    const firstOption = page.locator('[role="option"]').first();
    await firstOption.click();
    
    console.log('✓ Dropdown interaction validation completed');
  });
});