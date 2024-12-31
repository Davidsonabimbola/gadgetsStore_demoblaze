// const { test, expect, playwright } = require("@playwright/test");
// class EcomOrderPage{
//     constructor(page){
//         this.page = page;
    
//     }

//     async loginToOrder(username,password){
//         await page.getByRole('link', { name: 'Log in' }).click()

//   await page.locator('[id="loginusername"]').fill(username)
//    await page.locator('[id="loginpassword"]').fill(password)

//   const login_locate = page.locator('[class="modal-footer"]')
//   await login_locate.getByRole('button',{name: 'Log in'}).click()

//     }
// }


// module.exports = EcomOrderPage