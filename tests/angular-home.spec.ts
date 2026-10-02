import { test, expect } from '@playwright/test';

test('open angular application', async ({ page }) => {
  await page.goto('http://localhost:4200');

  await expect(page).toHaveTitle(/./);
});