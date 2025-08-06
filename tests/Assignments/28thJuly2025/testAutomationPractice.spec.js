import { test, expect } from '@playwright/test';

test('testAutomationPractice', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  // await page.getByLabel('Country:').selectOption('uk');

  let select = page.locator('#country');
  
  const optionLength = page.locator('#country option');
  await expect(optionLength).toHaveCount(10);

  const options = await page.$$('#country option');
  await expect(options).toHaveLength(10);

  expect(options.find(option => option.textContent().then( txt => txt.includes('Nepal')))).toHaveLength(1);

});