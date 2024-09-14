const { test, expect, playwright } = require("@playwright/test");

class EcomsignUPPage{
constructor(page){
    this.page = page;
    this.signUP_locate = page.locator('[class="modal-footer"]')

}
async start_SignUp(){
    await this.page.getByRole('link', { name: 'Sign up' }).click()
    
}

async enterUsername(username){
    await this.page.locator('[id="sign-username"]').waitFor();
    this.page.locator('[id="sign-username"]').clear()
    await this.page.locator('[id="sign-username"]').fill(username)
    
    
}

async enterPassword(password){
    await this.page.locator('[id="sign-password"]').waitFor();
    this.page.locator('[id="sign-password"]').clear()
    await this.page.locator('[id="sign-password"]').fill(password)
}

async end_SignUp(){
await this.signUP_locate.getByRole('button',{name: 'Sign up'}).click()

}


async toastMessage(){  
    this.page.on('dialog', async (dialog) => {
        console.log(dialog.message()); // Print the message to the console or assert against it
        expect(dialog.message()).toContain('Sign up successful'); // Verify the pop-up message content
        await dialog.accept(); // Accept the alert dialog
    })
}
    

}
module.exports = EcomsignUPPage