import { test, expect } from '@playwright/test';

test('OrangeHRM login and logout', async ({ page }) => {
  // Navigate to OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Logout
  // await page.getByRole('listitem').filter({ hasText: 'first last' }).locator('i').click();
  // await page.getByRole('menuitem', { name: 'Logout' }).click();

  await expect(page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-navigation > header > div.oxd-topbar-header > div.oxd-topbar-header-title > span > h6')).toHaveText('Dashboard');
});


test('OrangeHRM login, add new user and logout', async ({ page }) => {
  // Navigate to OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Add new User
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form i').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('Test@1234');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('Test@1234');
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('test.user02');
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Anderson');
  await page.getByText('Peter Mac Anderson').click();
  await page.getByRole('button', { name: 'Save' }).click();

  // Logout
  await page.getByRole('listitem').filter({ hasText: 'first last' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test('OrangeHRM login, add job title and logout', async ({ page }) => {
  // Navigate to OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Add Job Title
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('QA Tests');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Responsible for manual and automated testing.');
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill('This is a test job title');
  await page.getByRole('button', { name: 'Save' }).click();

  // Logout
  await page.getByRole('listitem').filter({ hasText: 'Maria silva' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test('OrangeHRM login, add pay grade and logout', async ({ page }) => {
  // Navigate to OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Add Pay Grades
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('Grade A');
  await page.getByRole('button', { name: 'Save' }).click();

  // Logout
  await page.getByRole('listitem').filter({ hasText: 'Maria silva' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});
