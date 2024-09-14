const { test, expect, playwright } = require("@playwright/test");

class EcomLoginPage{
    constructor(page){
        this.page = page;
    
    }
    async start_login(){
        await this.page.getByRole('link', { name: 'Log in' }).click()
    }

    async enter_firstName(firstName){
        await this.page.locator('[id="loginusername"]').fill(firstName)
    }

    async enter_password(password){
        await this.page.locator('[id="loginusername"]').fill(password)
    }

    async end_login(){
        const loginLocator = page.locator('[class="modal-footer"]')
    await loginLocator.getByRole('button',{name: 'Log in'}).click()
    }

    async dashboard_display(){
        await expect(page.locator('[id="logout2"]')).toBeVisible()
    }
}

module.exports = EcomLoginPage