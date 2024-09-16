const {Given,When,Then} = require('@cucumber/cucumber')
const { test, expect, playwright } = require("@playwright/test");
const { chromium } = require("@playwright/test");


Given('I am logged in with userName {string} and password {string} and I view the product details,',{timeout:10000},async(userName,password)=>{
    const browser = await chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoblaze.com/');
    await expect(page.locator('[id="contcont"]')).toBeVisible()

    await page.getByRole('link', { name: 'Log in' }).click()

  await page.locator('[id="loginusername"]').fill(userName)
   await page.locator('[id="loginpassword"]').fill(password)

  const login_locate = page.locator('[class="modal-footer"]')
  await login_locate.getByRole('button',{name: 'Log in'}).click()
})



When('I select a product {string} and click the {string} button,',{timeout:50000},async(product,addtoCart)=>{
    const productListing = await page.locator('[id="tbodyid"]')
  const targerProduct = await productListing.locator('[class="col-lg-4 col-md-6 mb-4"]')
  const titleSection = await targerProduct.locator('[class="card-title"]')
  const productLink = await titleSection.locator('a')
   await productLink.filter({hasText:product}).click()

   const addTo_Cart = await page.getByRole('link',{name:addtoCart}) // add to cart button

   await expect(page.locator('[class="description description-tabs"]')).toBeTruthy()
   await expect(addTo_Cart).toBeVisible()

   await addTo_Cart.click()
})

Then('the product should be added to my shopping cart and I should see a confirmation message that the product was successfully added.', {timeout:10000},async()=>{
    page.on('dialog', async (dialog) => {
        console.log(dialog.message()); // Print the message to the console or assert against it
        expect(dialog.message()).toContain('Product added.'); // Verify the pop-up message content
        await dialog.accept(); // Accept the alert dialog
    })
    
    await page.locator('[id="cartur"]').click()

})