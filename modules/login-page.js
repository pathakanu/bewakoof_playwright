class loginPage{
    constructor(page){
        this.page=page;
    }
    async login(username, password){
        await this.page.fill("[id='email_input']", username);
        await this.page.fill("[id='mob_password']", password);
        await this.page.click("[id='mob_login_password_submit']");
    }
}

export default loginPage;
