// @ts-check
const { test, expect } = require('@playwright/test');

test('Sign up by new user', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('[id="contcont"]')).toBeVisible()
  await page.getByRole('link', { name: 'Sign up' }).click()

  await page.locator('[id="sign-username"]').pressSequentially('Royco')
  await page.locator('[id="sign-password"]').pressSequentially('12.Bricman')

  const signUP_locate = page.locator('[class="modal-footer"]')
  await signUP_locate.getByRole('button',{name: 'Sign up'}).click()

  page.on('dialog', async (dialog) => {
    console.log(dialog.message()); // Print the message to the console or assert against it
    expect(dialog.message()).toContain('Sign up successful'); // Verify the pop-up message content
    await dialog.accept(); // Accept the alert dialog
});

});


test.only('Login by existing user', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('[id="contcont"]')).toBeVisible()
  await page.getByRole('link', { name: 'Log in' }).click()

  await page.locator('[id="loginusername"]').pressSequentially('Royco')
  await page.locator('[id="loginpassword"]').pressSequentially('12.Bricman')

  const login_locate = page.locator('[class="modal-footer"]')
  await login_locate.getByRole('button',{name: 'Log in'}).click()

});


