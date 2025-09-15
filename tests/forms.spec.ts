import { test, expect } from '@playwright/test';

// Test data
const testData = {
  email: 'hintonjoel@gmail.com',
  name: 'Test User',
  phone: '555-123-4567',
  marketingChallenge: 'Need help improving lead generation and conversion rates for my business',
  businessTypes: {
    general: 'professional-services',
    healthcare: 'medical-practice'
  }
};

test.describe('Form Testing Across Representative Pages', () => {
  
  test.describe('1. Index.tsx - Homepage Forms', () => {
    
    test('Hero Section Form - Validation and Submission', async ({ page }) => {
      await page.goto('/');
      
      // Find and click the Hero form trigger button
      const heroButton = page.locator('button').filter({ hasText: /Get.*Free.*SEO.*Audit|Start.*Free.*Analysis/ }).first();
      await expect(heroButton).toBeVisible();
      await heroButton.click();
      
      // Wait for hero dialog to open
      const heroDialog = page.locator('[role="dialog"]').first();
      await expect(heroDialog).toBeVisible();
      
      // Test validation - submit empty form
      const submitButton = heroDialog.locator('button[type="submit"]');
      await submitButton.click();
      
      // Check for validation errors
      await expect(heroDialog.locator('text=Name must be at least 2 characters')).toBeVisible();
      await expect(heroDialog.locator('text=Please enter a valid email address')).toBeVisible();
      await expect(heroDialog.locator('text=Please enter a valid phone number')).toBeVisible();
      
      // Fill out the form with valid data
      await heroDialog.locator('input[name="name"]').fill(testData.name);
      await heroDialog.locator('input[name="email"]').fill(testData.email);
      await heroDialog.locator('input[name="phone"]').fill(testData.phone);
      
      // Select business type
      await heroDialog.locator('select[name="businessType"]').selectOption(testData.businessTypes.general);
      
      // Fill marketing challenge
      await heroDialog.locator('textarea[name="marketingChallenge"]').fill(testData.marketingChallenge);
      
      // Mock the Formspree endpoint for mjkejnko
      await page.route('https://formspree.io/f/mjkejnko', async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true })
        });
      });
      
      // Submit the form
      await submitButton.click();
      
      // Wait for success message
      await expect(heroDialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
      
      // Verify dialog closes after success
      await expect(heroDialog).not.toBeVisible({ timeout: 5000 });
    });
    
    test('ContactDialog Form on Homepage', async ({ page }) => {
      await page.goto('/');
      
      // Find and click a ContactDialog trigger (different from hero form)
      const contactButton = page.locator('button').filter({ hasText: /Contact|Get.*Started|Schedule/ }).last();
      await contactButton.click();
      
      // Wait for ContactDialog to open
      const contactDialog = page.locator('[role="dialog"]').last();
      await expect(contactDialog).toBeVisible();
      
      // Test validation
      const submitBtn = contactDialog.locator('button[type="submit"]');
      await submitBtn.click();
      
      // Check validation errors
      await expect(contactDialog.locator('text=Name must be at least 2 characters')).toBeVisible();
      
      // Fill form
      await contactDialog.locator('input[name="name"]').fill(testData.name);
      await contactDialog.locator('input[name="email"]').fill(testData.email);
      await contactDialog.locator('input[name="phone"]').fill(testData.phone);
      await contactDialog.locator('select[name="businessType"]').selectOption(testData.businessTypes.general);
      await contactDialog.locator('textarea[name="marketingChallenge"]').fill(testData.marketingChallenge);
      
      // Mock ContactDialog endpoint
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true })
        });
      });
      
      await submitBtn.click();
      await expect(contactDialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
      await expect(contactDialog).not.toBeVisible({ timeout: 5000 });
    });
  });
  
  test.describe('2. HealthcareMarketing.tsx - Industry-Specific ContactDialog', () => {
    
    test('Healthcare ContactDialog with Industry Business Types', async ({ page }) => {
      await page.goto('/services/healthcare-marketing');
      
      // Click the healthcare-specific contact button
      const contactButton = page.locator('button').filter({ hasText: /Get.*Free.*Healthcare|Healthcare.*Audit|Contact/ }).first();
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible();
      
      // Verify healthcare-specific business type options are available
      const businessSelect = dialog.locator('select[name="businessType"]');
      await businessSelect.click();
      
      // Check for healthcare-specific options
      await expect(dialog.locator('option[value="medical-practice"]')).toBeVisible();
      await expect(dialog.locator('option[value="dental-practice"]')).toBeVisible();
      await expect(dialog.locator('option[value="specialty-clinic"]')).toBeVisible();
      
      // Test form submission with healthcare business type
      await dialog.locator('input[name="name"]').fill(testData.name);
      await dialog.locator('input[name="email"]').fill(testData.email);
      await dialog.locator('input[name="phone"]').fill(testData.phone);
      await businessSelect.selectOption(testData.businessTypes.healthcare);
      await dialog.locator('textarea[name="marketingChallenge"]').fill('Need help marketing my medical practice to attract more patients');
      
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
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
  
  test.describe('3. About.tsx - Custom Contact Form', () => {
    
    test('About Page Custom Form', async ({ page }) => {
      await page.goto('/about');
      
      // Find the contact form section
      const contactSection = page.locator('section').filter({ hasText: /Let.*s Work Together|Contact|Get Started/ });
      await expect(contactSection).toBeVisible();
      
      // Click to open the form dialog
      const contactButton = contactSection.locator('button').filter({ hasText: /Contact|Schedule|Get Started/ }).first();
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible();
      
      // Test validation on About page custom form
      const submitButton = dialog.locator('button[type="submit"]');
      await submitButton.click();
      
      await expect(dialog.locator('text=Name must be at least 2 characters')).toBeVisible();
      await expect(dialog.locator('text=Please enter a valid email address')).toBeVisible();
      
      // Fill the form
      await dialog.locator('input[name="name"]').fill(testData.name);
      await dialog.locator('input[name="email"]').fill(testData.email);
      await dialog.locator('input[name="phone"]').fill(testData.phone);
      await dialog.locator('select[name="businessType"]').selectOption(testData.businessTypes.general);
      await dialog.locator('textarea[name="marketingChallenge"]').fill('Interested in learning more about your strategic approach');
      
      // About page doesn't use Formspree, just shows success
      await submitButton.click();
      
      // Wait for success message (About page has custom success handling)
      await expect(dialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
    });
  });
  
  test.describe('4. LocalSEO.tsx - Hybrid Page (ContactDialog + Custom Form)', () => {
    
    test('LocalSEO ContactDialog', async ({ page }) => {
      await page.goto('/services/local-seo');
      
      // Test the ContactDialog first
      const contactDialogButton = page.locator('button').filter({ hasText: /Get.*Started|Contact|Schedule/ }).first();
      await contactDialogButton.click();
      
      const contactDialog = page.locator('[role="dialog"]');
      await expect(contactDialog).toBeVisible();
      
      // Fill and submit ContactDialog
      await contactDialog.locator('input[name="name"]').fill(testData.name);
      await contactDialog.locator('input[name="email"]').fill(testData.email);
      await contactDialog.locator('input[name="phone"]').fill(testData.phone);
      await contactDialog.locator('select[name="businessType"]').selectOption(testData.businessTypes.general);
      await contactDialog.locator('textarea[name="marketingChallenge"]').fill('Need help with local SEO rankings');
      
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true })
        });
      });
      
      await contactDialog.locator('button[type="submit"]').click();
      await expect(contactDialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
      
      // Wait for ContactDialog to close
      await expect(contactDialog).not.toBeVisible({ timeout: 5000 });
    });
    
    test('LocalSEO Custom Form', async ({ page }) => {
      await page.goto('/services/local-seo');
      
      // Look for a different form button that opens the custom form
      // This might be a "Free Audit" or specific LocalSEO form
      const customFormButton = page.locator('button').filter({ hasText: /Free.*Audit|SEO.*Analysis|Local.*Audit/ }).first();
      
      if (await customFormButton.isVisible()) {
        await customFormButton.click();
        
        // This should open a different dialog with custom form
        const customDialog = page.locator('[role="dialog"]').last();
        await expect(customDialog).toBeVisible();
        
        // Fill out the custom form
        await customDialog.locator('input[name="name"]').fill(testData.name);
        await customDialog.locator('input[name="email"]').fill(testData.email);
        await customDialog.locator('input[name="phone"]').fill(testData.phone);
        await customDialog.locator('select[name="businessType"]').selectOption(testData.businessTypes.general);
        await customDialog.locator('textarea[name="marketingChallenge"]').fill('Need comprehensive local SEO strategy');
        
        await customDialog.locator('button[type="submit"]').click();
        await expect(customDialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
      }
    });
  });
  
  test.describe('5. Contact.tsx - Standard ContactDialog', () => {
    
    test('Contact Page Standard Form', async ({ page }) => {
      await page.goto('/contact');
      
      // Test the main contact form
      const contactButton = page.locator('button').filter({ hasText: /Get.*Started|Contact|Send/ }).first();
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible();
      
      // Test invalid email validation
      await dialog.locator('input[name="name"]').fill(testData.name);
      await dialog.locator('input[name="email"]').fill('invalid-email');
      await dialog.locator('input[name="phone"]').fill(testData.phone);
      
      const submitButton = dialog.locator('button[type="submit"]');
      await submitButton.click();
      
      await expect(dialog.locator('text=Please enter a valid email address')).toBeVisible();
      
      // Fix email and complete form
      await dialog.locator('input[name="email"]').clear();
      await dialog.locator('input[name="email"]').fill(testData.email);
      await dialog.locator('select[name="businessType"]').selectOption(testData.businessTypes.general);
      await dialog.locator('textarea[name="marketingChallenge"]').fill('Looking for comprehensive marketing consultation');
      
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true })
        });
      });
      
      await submitButton.click();
      await expect(dialog.locator('text=Thanks! Request received')).toBeVisible({ timeout: 10000 });
      await expect(dialog).not.toBeVisible({ timeout: 5000 });
    });
  });
  
  test.describe('Modal Behavior Tests', () => {
    
    test('ContactDialog Opens and Closes Properly', async ({ page }) => {
      await page.goto('/');
      
      // Open dialog
      const contactButton = page.locator('button').filter({ hasText: /Contact|Get.*Started/ }).first();
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible();
      
      // Test close button
      const closeButton = dialog.locator('button').filter({ hasText: /Cancel|Close/ }).first();
      if (await closeButton.isVisible()) {
        await closeButton.click();
        await expect(dialog).not.toBeVisible();
      }
      
      // Test escape key
      await contactButton.click();
      await expect(dialog).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(dialog).not.toBeVisible();
      
      // Test clicking outside (if overlay is clickable)
      await contactButton.click();
      await expect(dialog).toBeVisible();
      
      // Click outside the dialog
      await page.mouse.click(50, 50);
      // Note: This might not close the dialog depending on implementation
    });
  });
  
  test.describe('Error Handling Tests', () => {
    
    test('Form Submission Error Handling', async ({ page }) => {
      await page.goto('/');
      
      const contactButton = page.locator('button').filter({ hasText: /Contact|Get.*Started/ }).first();
      await contactButton.click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible();
      
      // Fill form
      await dialog.locator('input[name="name"]').fill(testData.name);
      await dialog.locator('input[name="email"]').fill(testData.email);
      await dialog.locator('input[name="phone"]').fill(testData.phone);
      await dialog.locator('select[name="businessType"]').selectOption(testData.businessTypes.general);
      await dialog.locator('textarea[name="marketingChallenge"]').fill(testData.marketingChallenge);
      
      // Mock a failed response
      await page.route('https://formspree.io/f/xrbarnbp', async route => {
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Server error' })
        });
      });
      
      await dialog.locator('button[type="submit"]').click();
      
      // Check for error message
      await expect(dialog.locator('text=There was an error submitting the form')).toBeVisible({ timeout: 10000 });
    });
  });
});