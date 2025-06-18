import { test, expect } from '@playwright/test';

test('Login with valid credentials and check inventory', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
    // await page.pause();

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page.locator('.inventory_list')).toBeVisible();

  await expect(page).toHaveTitle(/Swag Labs/);
});
