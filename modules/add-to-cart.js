class addToCart{
    constructor(page){
        this.page = page;
    }
    async addCart() {
        await this.page.locator("//span[.='ADD TO BAG']").click();
        const bag = this.page.locator("//span[@class='cartCount']");
        await bag.click();
        await this.page.waitForTimeout(5000);
    }
}

export default addToCart;
