const { test, expect, playwright } = require("@playwright/test");

class EcomLoginPage{
constructor(page){
    this.page = page;
    this.signUP_locate = page.locator('[class="modal-footer"]')

}
async start_SignUp(){
    await this.page.getByRole('link', { name: 'Sign up' }).click()
}

async enterUsername(username){
    await this.page.locator('[id="sign-username"]').pressSequentially(username)
}

async enterPassword(password){
    await this.page.locator('[id="sign-password"]').pressSequentially(password)
}

async end_SignUp(){
await this.signUP_locate.getByRole('button',{name: 'Sign up'}).click()

}




}
module.exports = EcomLoginPage