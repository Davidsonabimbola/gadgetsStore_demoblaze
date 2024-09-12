// @ts-check
const { test, expect } = require('@playwright/test');

test('Sign up by new user', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('[id="contcont"]')).toBeVisible()
  await page.getByRole('link', { name: 'Sign up' }).click()

  await page.locator('[id="sign-username"]').pressSequentially('Vichy')
  await page.locator('[id="sign-password"]').pressSequentially('12.Bricman')

  const signUP_locate = page.locator('[class="modal-footer"]')
  await signUP_locate.getByRole('button',{name: 'Sign up'}).click()

});


