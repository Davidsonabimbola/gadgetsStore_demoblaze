const {Given,When,Then} = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
const { test, expect, playwright } = require("@playwright/test");
const EcomsignUPPage = require('../../Page/SignUP_Feature')


let page
let Ecom_SignupPage
Given('I am on the homepage of Demoblaze,',{timeout:5000},async()=>{
    const browser = await chromium.launch({
        headless: false,
        //slowMo: 2000
    });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoblaze.com/');
    await expect(page.locator('[id="contcont"]')).toBeVisible()
    page.waitForTimeout(1000)
})

When('I click on the signup button,',{timeout:5000},async()=>{
    // await page.getByRole('link', { name: 'Sign up' }).click()
    Ecom_SignupPage = new EcomsignUPPage(page)
    await Ecom_SignupPage.start_SignUp()
    
    
})

When('I enter the username {word} correctly,',{timeout:5000}, async(username)=>{
    //await page.locator('[id="sign-username"]').pressSequentially(username)
    Ecom_SignupPage = new EcomsignUPPage(page)
    Ecom_SignupPage.enterUsername(username)
   
})


When('I enter the password {string} correctly,',{timeout:5000}, async(password)=>{
    //await page.locator('[id="sign-password"]').pressSequentially(password)
    Ecom_SignupPage = new EcomsignUPPage(page)
    Ecom_SignupPage.enterPassword(password)
    
})

When('I click on the Signup button,',{timeout:5000}, async()=>{
//     const signUP_locate = page.locator('[class="modal-footer"]')
//   await signUP_locate.getByRole('button',{name: 'Sign up'}).click()
Ecom_SignupPage = new EcomsignUPPage(page)
  Ecom_SignupPage.end_SignUp()
  
})
Then('my account should be created and I should receive a confirmation message that my account has been successfully registered.',{timeout:5000},async()=>{
    Ecom_SignupPage = new EcomsignUPPage(page)
    Ecom_SignupPage.toastMessage()


})