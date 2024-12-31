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


test('Login by existing user', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('[id="contcont"]')).toBeVisible()
  await page.getByRole('link', { name: 'Log in' }).click()

  await page.locator('[id="loginusername"]').pressSequentially('Royco')
  await page.locator('[id="loginpassword"]').pressSequentially('12.Bricman')

  const login_locate = page.locator('[class="modal-footer"]')
  await login_locate.getByRole('button',{name: 'Log in'}).click()

});


test.only('product ordering', async ({ page }) => {
  test.setTimeout(50000)
  await page.goto('https://demoblaze.com/');
  await expect(page.locator('[id="contcont"]')).toBeVisible()
  await page.getByRole('link', { name: 'Log in' }).click()

  await page.locator('[id="loginusername"]').fill('Royco')
  await page.locator('[id="loginpassword"]').fill('12.Bricman')

  const login_locate = page.locator('[class="modal-footer"]')
  await login_locate.getByRole('button',{name: 'Log in'}).click()

  const productListing = await page.locator('[id="tbodyid"]')
  const targerProduct = await productListing.locator('[class="col-lg-4 col-md-6 mb-4"]')
  const titleSection = await targerProduct.locator('[class="card-title"]')
  const productLink = await titleSection.locator('a')
   await productLink.filter({hasText:'Samsung galaxy s6'}).click()

   const addTo_Cart = await page.getByRole('link',{name:'Add to cart'}) // add to cart button

   

   await expect(page.locator('[class="description description-tabs"]')).toBeTruthy()
   await expect(addTo_Cart).toBeVisible()

   await addTo_Cart.click()


   page.on('dialog', async (dialog) => {
    console.log(dialog.message()); // Print the message to the console or assert against it
    expect(dialog.message()).toContain('Product added.'); // Verify the pop-up message content
    await dialog.accept(); // Accept the alert dialog
})

await page.locator('[id="cartur"]').click()

// select place order button

await page.locator('[class="btn btn-success"]').filter({hasText:'Place Order'}).click()


// assertion 
await expect(page.locator('[id="orderModal"]')).toBeVisible()

// fill the form
await page.locator('[id="name"]').fill('Tristan')
await page.locator('[id="country"]').fill('Nigeria')
await page.locator('[id="city"]').fill('Lagos')
await page.locator('[id="card"]').fill('536798762345')
await page.locator('[id="month"]').fill('06')
await page.locator('[id="year"]').fill('24')
await page.getByRole('button',{name: 'Purchase'}).click()
await expect(page.locator('[class="lead text-muted "]')).toBeVisible()
console.log(await page.locator('h2').nth(2).textContent())
 expect(await page.locator('h2').nth(2).textContent()).toContain('Thank you for your purchase!')

 



  

});

