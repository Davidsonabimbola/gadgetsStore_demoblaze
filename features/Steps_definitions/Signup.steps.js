const {Given,When,Then} = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
const { test, expect, playwright } = require("@playwright/test");
const EcomLoginPage = require('../../Page/SignUP_Feature')



let page
let Ecom_LoginPage
Given('I am on the homepage of Demoblaze,',{timeout:100*1000},async()=>{
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoblaze.com/');
    await expect(page.locator('[id="contcont"]')).toBeVisible()
})

When('I click on the signup button,',{timeout:100*1000},async()=>{
    // await page.getByRole('link', { name: 'Sign up' }).click()
    Ecom_LoginPage = new EcomLoginPage(page)
    await Ecom_LoginPage.start_SignUp()
    
})

When('I enter the username {word} correctly,',{timeout:100*1000}, async(username)=>{
    //await page.locator('[id="sign-username"]').pressSequentially(username)
    Ecom_LoginPage = new EcomLoginPage(page)
    Ecom_LoginPage.enterUsername(username)
})


When('I enter the password {string} correctly,',{timeout:100*1000}, async(password)=>{
    //await page.locator('[id="sign-password"]').pressSequentially(password)
    Ecom_LoginPage = new EcomLoginPage(page)
    Ecom_LoginPage.enterPassword(password)
})

When('I click on the Signup button,',{timeout:100*1000}, async()=>{
//     const signUP_locate = page.locator('[class="modal-footer"]')
//   await signUP_locate.getByRole('button',{name: 'Sign up'}).click()
  Ecom_LoginPage = new EcomLoginPage(page)
  Ecom_LoginPage.end_SignUp()
  
})
// Then('my account should be created'),async()=>{

// }