const {Given,When,Then} = require('@cucumber/cucumber')
const { test, expect, playwright } = require("@playwright/test");
const { chromium } = require("@playwright/test");
const EcomloginPage = require("../../Page/Login_Feature")

let page
let Ecom_LoginPage


Given('I am on the homepage of Demoblaze as an existing user,',{timeout:5000},async()=>{
    const browser = await chromium.launch({
        headless: false,
    });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demoblaze.com/');
    await expect(page.locator('[id="contcont"]')).toBeVisible()
})

When('I click on the top login button as an existing user,',{timeout:1000},async()=>{
    Ecom_LoginPage = new EcomloginPage(page)
    Ecom_LoginPage.start_login()
    
})

When('I enter the username {string} correctly as an existing user,',{timeout:1000},async(firstName)=>{
    Ecom_LoginPage = new EcomloginPage(page)
    Ecom_LoginPage.enter_firstName(firstName)
    
})

When('I enter the password {string} correctly as an existing user,',{timeout:1000},async(password)=>{
    Ecom_LoginPage = new EcomloginPage(page)
    Ecom_LoginPage.enter_password(password)
    
})

When('I click on the bottom login button as an existing user,',{timeout:1000},async()=>{
    Ecom_LoginPage = new EcomloginPage(page)
    Ecom_LoginPage.end_login()
    
})

When('dashboard should be displayed',async()=>{
    Ecom_LoginPage = new EcomloginPage(page)
    Ecom_LoginPage.dashboard_display()
    
})


