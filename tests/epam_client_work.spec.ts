import { test, expect } from '@playwright/test';

test('EPAM Client Work Test', async ({ page }) => {
  // Navigate to the EPAM website
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.getByRole('link', { name: 'Services', exact: true }).click();

  // Click on "Explore Our Client Work"
  await page.getByText('Explore Our Client Work').nth(1).click();

  // Verify that the "Client Work" text is visible on the page
  await expect(page.getByText('Client Work')).toBeVisible();
});