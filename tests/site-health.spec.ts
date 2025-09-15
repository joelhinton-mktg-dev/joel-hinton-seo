import { test, expect } from '@playwright/test';

test.describe('Live Site Health Check', () => {
  
  test('Netlify deployment is accessible and loads correctly', async ({ page }) => {
    // Navigate to the live site
    await page.goto('/');
    
    // Check that the page loads and has the expected title
    await expect(page).toHaveTitle(/Joel Hinton|Marketing|SEO/);
    
    // Verify main navigation is present
    const navigation = page.locator('nav');
    await expect(navigation).toBeVisible();
    
    // Check for key page elements
    await expect(page.locator('h1')).toBeVisible();
    
    // Verify that JavaScript is working (React app loaded)
    await expect(page.locator('[data-testid], button, [role="button"]')).toHaveCount({ min: 1 });
  });

  test('Key pages are accessible', async ({ page }) => {
    const keyPages = [
      '/',
      '/services',
      '/results',
      '/contact',
      '/about',
      '/services/healthcare-marketing',
      '/services/real-estate-marketing',
      '/services/local-seo'
    ];

    for (const pagePath of keyPages) {
      await page.goto(pagePath);
      
      // Check that page doesn't have 404 or server errors
      await expect(page.locator('body')).not.toContainText('404');
      await expect(page.locator('body')).not.toContainText('Page Not Found');
      await expect(page.locator('body')).not.toContainText('Internal Server Error');
      
      // Verify page has loaded with content
      await expect(page.locator('h1, h2')).toHaveCount({ min: 1 });
      
      // Check that navigation is present on all pages
      await expect(page.locator('nav')).toBeVisible();
    }
  });

  test('Forms are present on test pages', async ({ page }) => {
    const formPages = [
      { path: '/', expectedForms: ['Hero', 'ContactDialog'] },
      { path: '/services/healthcare-marketing', expectedForms: ['ContactDialog'] },
      { path: '/about', expectedForms: ['Contact Form'] },
      { path: '/services/local-seo', expectedForms: ['ContactDialog'] },
      { path: '/contact', expectedForms: ['ContactDialog'] }
    ];

    for (const { path } of formPages) {
      await page.goto(path);
      
      // Look for form trigger buttons
      const formButtons = page.locator('button').filter({ 
        hasText: /Contact|Get.*Started|Schedule|Free.*Audit|Call|Started/ 
      });
      
      // Should have at least one form button
      await expect(formButtons.first()).toBeVisible();
      
      // Verify clicking a button opens a dialog or form
      await formButtons.first().click();
      
      const dialog = page.locator('[role="dialog"]');
      await expect(dialog).toBeVisible({ timeout: 5000 });
      
      // Close dialog for next iteration
      await page.keyboard.press('Escape');
      await expect(dialog).not.toBeVisible({ timeout: 5000 });
    }
  });

  test('Responsive design works on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('/');
    
    // Check that mobile navigation works
    const mobileMenuButton = page.locator('button').filter({ hasText: /Menu|☰|≡/ }).first();
    
    if (await mobileMenuButton.isVisible()) {
      await mobileMenuButton.click();
      
      // Mobile menu should open
      const mobileMenu = page.locator('nav [role="menu"], nav ul, .mobile-menu');
      await expect(mobileMenu.first()).toBeVisible();
    }
    
    // Test that forms work on mobile
    const contactButton = page.locator('button').filter({ 
      hasText: /Contact|Get.*Started/ 
    }).first();
    
    await contactButton.click();
    
    const dialog = page.locator('[role="dialog"]');
    await expect(dialog).toBeVisible();
    
    // Verify form fields are accessible on mobile
    await expect(dialog.locator('input[name="name"]')).toBeVisible();
    await expect(dialog.locator('input[name="email"]')).toBeVisible();
  });

  test('Console errors are minimal', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Filter out common non-critical errors
    const criticalErrors = consoleErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('analytics') && 
      !error.includes('third-party')
    );
    
    // Should have minimal critical console errors
    expect(criticalErrors.length).toBeLessThan(3);
  });
});