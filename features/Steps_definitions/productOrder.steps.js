const {Given,When,Then} = require('@cucumber/cucumber')
const { test, expect, playwright } = require("@playwright/test");
const { chromium } = require("@playwright/test");



Given('I am logged in with userName {string} and password {string} and I view the product details,',{timeout:20000},async(userName,password)=>{
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

Then('the product should be added to my shopping cart and I should see a confirmation message {string}.', {timeout:10000},async(confirmationMessage)=>{
    page.on('dialog', async (dialog) => {
        console.log(dialog.message()); // Print the message to the console or assert against it
        expect(dialog.message()).toContain(confirmationMessage); // Verify the pop-up message content
        await dialog.accept(); // Accept the alert dialog
    })   
    await page.locator('[id="cartur"]').click()

})


Given('I am viewing my shopping cart,',{timeout: 20000},async()=>{
const browser = await chromium.launch({
    headless: false,
});
const context = await browser.newContext();
page = await context.newPage();
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
})

When('I click the {string} button,', {timeout:10000},async(PlaceOrder)=>{
    await page.locator('[class="btn btn-success"]').filter({hasText:PlaceOrder}).click()

})

Then('I should be prompted to enter my personal and payment information,',{timeout:40000},async()=>{
    await expect(page.locator('[id="orderModal"]')).toBeVisible()
})

When('when I successfully complete the form,', {timeout:20000},async()=>{
    var recipentName = 'Tristan Boluwaji'
    var recipentCountry = 'Nigeria'
    var recipentCity = 'Lagos'
    var recipentCard_number = '536798762345'
    var recipentCard_month = '06'
    var recipentCard_year = '24'

    await page.locator('[id="name"]').fill(recipentName)
await page.locator('[id="country"]').fill(recipentCountry)
await page.locator('[id="city"]').fill(recipentCity)
await page.locator('[id="card"]').fill(recipentCard_number)
await page.locator('[id="month"]').fill(recipentCard_month)
await page.locator('[id="year"]').fill(recipentCard_year)

 await page.getByRole('button',{name: 'Purchase'}).click()

})

Then('I should get my order details and toast message {string}',{timeout:40000},async(toastMessage)=>{
    await expect(page.locator('[class="lead text-muted "]')).toBeVisible()
console.log(await page.locator('h2').nth(2).textContent())
 expect(await page.locator('h2').nth(2).textContent()).toContain(toastMessage)
})


// When('I click on cart {string} button,', {timeout:10000},async(Cart)=>{
//     await page.getByRole('link',{name: Cart}).click()
// })

When('I click the delete {string} button next to a product,', {timeout:40000},async(Delete)=>{

    const itemTable = await page.locator('[id="tbodyid"]')
   await expect(itemTable).toBeVisible()
    await itemTable.getByRole('link',{name: Delete}).click()
})


When('I click on cart button,', {timeout:40000},async()=>{
        const addTo_Cart = await page.getByRole('link',{name:'Add to cart'}) // add to cart button
    // const addTo_Cart = await page.locator('[class="btn btn-success btn-lg"]').filter({hasText:'Add to cart'}) // add to cart button
    await expect(await page.locator('[class="description description-tabs"]')).toBeTruthy()
    await expect(await addTo_Cart).toBeVisible()
 
    await addTo_Cart.click({force:true})
 
 
    page.on('dialog', async (dialog) => {
     console.log(dialog.message()); // Print the message to the console or assert against it
     expect(dialog.message()).toContain('Product added.'); // Verify the pop-up message content
     await dialog.accept(); 
 })

    await page.locator('[id="cartur"]').click()
   
})


Then('the product should be removed from my cart and the total price should be updated accordingly.', {timeout:80000},async()=>{
    const itemTable = await page.locator('[id="tbodyid"]')
    expect(await itemTable).not.toBeVisible()
    
})


Given('I have previously placed an order and I view my shopping cart,',{timeout: 40000},async()=>{
    const browser = await chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    page = await context.newPage();
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
    
    })
