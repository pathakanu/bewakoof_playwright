import loginSelector from "../pageobjects/selector_login";
class loginPage{
    constructor(page){
        this.page=page;
    }
    async login(username, password){
        await this.page.waitForURL('https://www.bewakoof.com/');
        await this.page.locator(loginSelector.LOGIN_BUTTON).click();

        await this.page.locator(loginSelector.WEB_EMAIL_LOGIN).click();
        await this.page.waitForURL("https://www.bewakoof.com/login/email");
        await this.page.fill(loginSelector.EMAIL_INPUT, username);
        await this.page.fill(loginSelector.PASSWORD_INPUT, password);
        await this.page.click(loginSelector.SUBMIT_BUTTON);
        await this.page.locator(loginSelector.CLOSE_POPUP).click();
        await this.page.locator(loginSelector.USER_ICON).hover();
    }
}

export default loginPage;
