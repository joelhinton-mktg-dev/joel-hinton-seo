import { test, expect } from '@playwright/test';

test.describe('Form Debugging and Element Discovery', () => {
  
  test('Debug Homepage Form Elements', async ({ page }) => {
    console.log('=== DEBUGGING HOMEPAGE FORMS ===');
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find all buttons
    const allButtons = page.locator('button');
    const buttonCount = await allButtons.count();
    console.log(`Found ${buttonCount} buttons on homepage`);
    
    for (let i = 0; i < Math.min(buttonCount, 10); i++) {
      const button = allButtons.nth(i);
      const text = await button.textContent();
      const isVisible = await button.isVisible();
      console.log(`Button ${i}: "${text}" (visible: ${isVisible})`);
    }
    
    // Click first contact-related button
    const contactButton = page.locator('button').filter({ hasText: /Get.*Free.*SEO.*Audit|Contact|Get.*Started/ }).first();
    await contactButton.click();
    
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 10000 });
    console.log('Dialog opened successfully');
    
    // Debug form elements
    console.log('\n=== FORM ELEMENTS DEBUG ===');
    
    // Find all form inputs
    const inputs = dialog.locator('input');
    const inputCount = await inputs.count();
    console.log(`Found ${inputCount} input fields`);
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const name = await input.getAttribute('name');
      const id = await input.getAttribute('id');
      const type = await input.getAttribute('type');
      const placeholder = await input.getAttribute('placeholder');
      console.log(`Input ${i}: name="${name}", id="${id}", type="${type}", placeholder="${placeholder}"`);
    }
    
    // Find textareas
    const textareas = dialog.locator('textarea');
    const textareaCount = await textareas.count();
    console.log(`\nFound ${textareaCount} textarea fields`);
    
    for (let i = 0; i < textareaCount; i++) {
      const textarea = textareas.nth(i);
      const name = await textarea.getAttribute('name');
      const id = await textarea.getAttribute('id');
      const placeholder = await textarea.getAttribute('placeholder');
      console.log(`Textarea ${i}: name="${name}", id="${id}", placeholder="${placeholder}"`);
    }
    
    // Find select elements (both HTML and Radix)
    console.log('\n=== SELECT ELEMENTS DEBUG ===');
    
    const htmlSelects = dialog.locator('select');
    const htmlSelectCount = await htmlSelects.count();
    console.log(`Found ${htmlSelectCount} HTML select elements`);
    
    const radixSelects = dialog.locator('[role="combobox"]');
    const radixSelectCount = await radixSelects.count();
    console.log(`Found ${radixSelectCount} Radix select elements`);
    
    if (radixSelectCount > 0) {
      console.log('Testing Radix select interaction...');
      const firstSelect = radixSelects.first();
      await firstSelect.click();
      
      // Wait for options
      await page.waitForTimeout(2000);
      
      const options = page.locator('[role="option"]');
      const optionCount = await options.count();
      console.log(`Found ${optionCount} options in dropdown`);
      
      for (let i = 0; i < Math.min(optionCount, 10); i++) {
        const option = options.nth(i);
        const value = await option.getAttribute('data-value');
        const text = await option.textContent();
        console.log(`Option ${i}: value="${value}", text="${text}"`);
      }
      
      // Close dropdown
      await page.keyboard.press('Escape');
    }
    
    // Find submit buttons
    console.log('\n=== SUBMIT BUTTONS DEBUG ===');
    const submitButtons = dialog.locator('button[type="submit"]');
    const submitButtonCount = await submitButtons.count();
    console.log(`Found ${submitButtonCount} submit buttons`);
    
    for (let i = 0; i < submitButtonCount; i++) {
      const button = submitButtons.nth(i);
      const text = await button.textContent();
      const disabled = await button.isDisabled();
      console.log(`Submit button ${i}: "${text}" (disabled: ${disabled})`);
    }
  });

  test('Debug Healthcare Page Form Elements', async ({ page }) => {
    console.log('=== DEBUGGING HEALTHCARE PAGE FORMS ===');
    
    await page.goto('/services/healthcare-marketing');
    await page.waitForLoadState('networkidle');
    
    // Find contact buttons
    const contactButtons = page.locator('button').filter({ 
      hasText: /Get.*Free|Contact|Schedule|Audit/ 
    });
    const buttonCount = await contactButtons.count();
    console.log(`Found ${buttonCount} contact buttons on healthcare page`);
    
    for (let i = 0; i < buttonCount; i++) {
      const button = contactButtons.nth(i);
      const text = await button.textContent();
      console.log(`Contact button ${i}: "${text}"`);
    }
    
    if (buttonCount > 0) {
      await contactButtons.first().click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible({ timeout: 10000 });
      
      // Check business type options
      console.log('\n=== HEALTHCARE BUSINESS TYPE OPTIONS ===');
      const selectTrigger = dialog.locator('[role="combobox"]').first();
      
      if (await selectTrigger.isVisible()) {
        await selectTrigger.click();
        await page.waitForTimeout(2000);
        
        const options = page.locator('[role="option"]');
        const optionCount = await options.count();
        console.log(`Found ${optionCount} business type options`);
        
        // List all options
        for (let i = 0; i < optionCount; i++) {
          const option = options.nth(i);
          const value = await option.getAttribute('data-value');
          const text = await option.textContent();
          console.log(`Healthcare option ${i}: value="${value}", text="${text}"`);
        }
        
        // Check for healthcare-specific options
        const healthcareOptions = ['medical-practice', 'dental-practice', 'specialty-clinic'];
        for (const hcOption of healthcareOptions) {
          const found = page.locator(`[role="option"][data-value="${hcOption}"]`);
          const exists = await found.count() > 0;
          console.log(`Healthcare option "${hcOption}": ${exists ? '✓ Found' : '✗ Missing'}`);
        }
      }
    }
  });

  test('Debug Form Validation Messages', async ({ page }) => {
    console.log('=== DEBUGGING FORM VALIDATION ===');
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const contactButton = page.locator('button').filter({ hasText: /Contact|Get.*Started/ }).first();
    await contactButton.click();
    
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 10000 });
    
    // Try to submit empty form
    const submitButton = dialog.locator('button[type="submit"]');
    await submitButton.click();
    
    // Wait for validation messages
    await page.waitForTimeout(2000);
    
    // Look for error messages
    console.log('\n=== VALIDATION MESSAGES ===');
    
    const errorSelectors = [
      '.text-destructive',
      '.text-red-600',
      '.text-red-500',
      '.error',
      '[class*="error"]',
      '[data-testid*="error"]',
      'p:has-text("required")',
      'p:has-text("must be")',
      'p:has-text("Please enter")'
    ];
    
    for (const selector of errorSelectors) {
      const elements = dialog.locator(selector);
      const count = await elements.count();
      if (count > 0) {
        console.log(`Found ${count} elements with selector: ${selector}`);
        for (let i = 0; i < count; i++) {
          const text = await elements.nth(i).textContent();
          console.log(`  Error ${i}: "${text}"`);
        }
      }
    }
    
    // Check for invalid field styling
    console.log('\n=== INVALID FIELD STYLING ===');
    
    const inputs = dialog.locator('input');
    const inputCount = await inputs.count();
    
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i);
      const name = await input.getAttribute('name');
      const className = await input.getAttribute('class');
      const hasError = className?.includes('border-destructive') || className?.includes('error');
      console.log(`Input "${name}": ${hasError ? '✓ Has error styling' : '✗ No error styling'}`);
    }
  });

  test('Debug Console Errors and Network', async ({ page }) => {
    console.log('=== DEBUGGING CONSOLE AND NETWORK ===');
    
    const consoleMessages: any[] = [];
    const networkErrors: any[] = [];
    
    page.on('console', msg => {
      consoleMessages.push({
        type: msg.type(),
        text: msg.text(),
        location: msg.location()
      });
    });
    
    page.on('requestfailed', request => {
      networkErrors.push({
        url: request.url(),
        failure: request.failure()?.errorText
      });
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Open a form and try to submit
    const contactButton = page.locator('button').filter({ hasText: /Contact|Get.*Started/ }).first();
    await contactButton.click();
    
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible({ timeout: 10000 });
    
    // Fill form quickly
    const nameField = dialog.locator('input[name="name"], input#name');
    const emailField = dialog.locator('input[name="email"], input#email');
    
    if (await nameField.isVisible()) {
      await nameField.fill('Debug Test');
    }
    if (await emailField.isVisible()) {
      await emailField.fill('debug@test.com');
    }
    
    // Try to submit to see network activity
    const submitButton = dialog.locator('button[type="submit"]');
    await submitButton.click();
    
    // Wait for any network requests
    await page.waitForTimeout(3000);
    
    // Report console messages
    console.log('\n=== CONSOLE MESSAGES ===');
    const errors = consoleMessages.filter(msg => msg.type === 'error');
    const warnings = consoleMessages.filter(msg => msg.type === 'warning');
    
    console.log(`Found ${errors.length} console errors and ${warnings.length} warnings`);
    
    errors.forEach((error, i) => {
      console.log(`Error ${i}: ${error.text}`);
    });
    
    warnings.forEach((warning, i) => {
      console.log(`Warning ${i}: ${warning.text}`);
    });
    
    // Report network errors
    console.log('\n=== NETWORK ERRORS ===');
    console.log(`Found ${networkErrors.length} network errors`);
    
    networkErrors.forEach((error, i) => {
      console.log(`Network Error ${i}: ${error.url} - ${error.failure}`);
    });
  });
});