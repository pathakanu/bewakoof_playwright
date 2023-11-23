import { addButton, addCart } from "../pageobjects/addToCart";
class addToCart{
    constructor(page){
        this.page = page;
    }
    async addCart() {
        await this.page.locator(addButton).click();
        const bag = this.page.locator(addCart);
        await bag.click();
        await this.page.waitForTimeout(2000);
    }
}

export default addToCart;
