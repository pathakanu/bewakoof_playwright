// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
});

test('has title', async ({ page }) => {
  // await page.goto('https://www.flipkart.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
});

test('Login', async ({ page }) => {
  // await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  const profile_logo = await page.locator("//img[@alt='Sign in']");
  await profile_logo.hover();

  const Login = await page.locator("//li[.='My Profile']");
  await Login.click();

  const mobile_no = await page.locator("//input[@class='_2IX_2- VJZDxU']");
  await mobile_no.fill("9525500039");

  const button = await page.locator("//button[@class='_2KpZ6l _2HKlqd _3AWRsL']");
  await button.click();  

  await page.waitForURL('https://www.flipkart.com/account/?rd=0&link=home_account');
});

test('Add to Cart', async ({page}) => {
  // await page.goto('https://www.flipkart.com/');
  await page.getByRole('button', { name: '✕' }).click();
  const profile_logo = await page.locator("//img[@alt='Sign in']");
  await profile_logo.hover();

  const Login = await page.locator("//li[.='My Profile']");
  await Login.click();

  const mobile_no = await page.locator("//input[@class='_2IX_2- VJZDxU']");
  await mobile_no.fill("9525500039");

  const button = await page.locator("//button[@class='_2KpZ6l _2HKlqd _3AWRsL']");
  await button.click();  

  await page.waitForURL('https://www.flipkart.com/account/?rd=0&link=home_account');
  await page.goto('https://www.flipkart.com/');

  
});
