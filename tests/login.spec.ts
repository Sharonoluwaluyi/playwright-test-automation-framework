import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(loginPage.getSuccessMessage()).toContainText(
    'You logged into a secure area!'
  );
});
