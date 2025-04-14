import { test, expect } from '@playwright/test';

const URL_UI = 'https://academybugs.com/find-bugs/';

test('test', async ({ page }) => {
  await page.goto(URL_UI, { timeout: 120000});
  await page.getByRole('link', { name: '50' }).click();
  await page.getByRole('heading', { name: 'What did you find out?'}, { timeout: 90000}).click();
  await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
  await page.locator('#close-popup').click();
});

// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.locator('#ec_product_image_effect_4281370').getByRole('link').click();
//   await page.getByRole('heading', { name: 'What did you find out?' }).click({
//     button: 'right'
//   });
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await expect(page.getByText('× What did you find out? What')).toBeVisible();
//   await page.locator('#close-popup').click();
//   await page.getByRole('link', { name: 'Dark Grey Jeans' }).click();
// });

// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.locator('#ec_product_image_3981370').getByRole('link', { name: 'Select Options' }).click();
//   await page.locator('#post-6190 form').getByText('Nam nec tellus a odio').click();
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await page.locator('#close-popup').click();
// });

// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Professional Suit' }).click();
//   await page.getByRole('img', { name: 'Orang' }).click();
//   await page.getByRole('img', { name: 'Yelow' }).click();
//   await page.getByRole('img', { name: 'Orang' }).click();
//   await page.getByText('Orang').click();
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await page.locator('#close-popup').click();
// });

// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.locator('#ec_product_image_3981370').getByRole('link', { name: 'Select Options' }).click();
//   await page.goto('https://academybugs.com/store/professional-suit/');
//   await page.getByRole('textbox', { name: 'Comment' }).click();
//   await page.getByRole('textbox', { name: 'Comment' }).fill('1111');
//   await page.getByRole('textbox', { name: 'Name*' }).click();
//   await page.getByRole('textbox', { name: 'Name*' }).fill('111');
//   await page.getByRole('textbox', { name: 'Email*' }).click();
//   await page.getByRole('textbox', { name: 'Email*' }).fill('11');
//   await page.getByRole('textbox', { name: 'Website' }).click();
//   await page.getByRole('textbox', { name: 'Website' }).fill('11');
//   await page.getByRole('button', { name: 'Post Comment' }).click();
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await page.locator('#close-popup').click();
// });

// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Professional Suit' }).click();
//   await page.getByRole('link', { name: 'L4 Development' }).click();
//   await page.goto('https://academybugs.com/extra/stored/l4-development/');
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await page.locator('#close-popup').click();
// });

// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Professional Suit' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'X', exact: true }).click();
//   const page1 = await page1Promise;
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
// });


// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Professional Suit' }).click();
//   await page.locator('#ec_currency_conversion').selectOption('EUR');
//   await page.locator('#ec_currency_conversion').selectOption('GBP');
//   await page.getByRole('heading', { name: 'You found a crash bug,' }).nth(1).click();
//   await page.locator('#ec_currency_conversion').selectOption('JPY');
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
// });


// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Professional Suit' }).click();
//   await page.getByRole('button', { name: 'SIGN IN' }).click();
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
// });



// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Professional Suit' }).click();
//   await page.getByRole('link', { name: '$15.00 - $19.99 (1)' }).click();
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await page.locator('#close-popup').click();
// });


// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Login for Pricing' }).click();
//   await page.goto('https://academybugs.com/account/');
//   await page.getByRole('button', { name: 'SIGN IN' }).click();
//   await expect(page.locator('#popmake-4406')).toContainText('#1 Awesome! You found a bug. Pretty easy right?');
//   await page.getByRole('button', { name: 'Close' }).click();
// });


// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Login for Pricing' }).click();
//   await page.goto('https://academybugs.com/account/');
//   await page.getByText('Не зарегистрированы? Нажмите кнопку ниже').click();
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await page.getByText('× What did you find out? What').click();
//   await page.locator('#close-popup').click();
// });


// test('test', async ({ page }) => {
//   await page.goto('https://academybugs.com/find-bugs/');
//   await page.getByRole('link', { name: 'Login for Pricing' }).click();
//   await page.goto('https://academybugs.com/account/');
//   await page.getByText('Password*').click();
//   await expect(page.locator('#bug-popup')).toContainText('What did you find out?');
//   await page.locator('#close-popup').click();
// });
