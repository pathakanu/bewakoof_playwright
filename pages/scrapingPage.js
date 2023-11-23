import Scroll from "./scroll";
import menSelector from "../pageobjects/menSelector";
import womenSelector from "../pageobjects/womenSelector";
import { expect } from "playwright/test";

class scrapPage{
    constructor(page){
        this.page = page;
    }

    async scrap(gender){
        if(gender == 'Men'){
            await this.page.locator(menSelector.menButton).click();
            await expect(this.page).toHaveURL(menSelector.menHomeLink);
            const scroll = new Scroll(this.page);

            scroll.scroll(1);
            const tshirt = await this.page.locator(menSelector.printTButton);
            scroll.scroll(2);
            await tshirt.click();

            await this.page.waitForURL('https://www.bewakoof.com/men-printed-tshirts?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
            await this.page.mouse.wheel(0, 1000);
            await this.page.waitForTimeout(1000);
            scroll.scroll(4);
            await this.page.waitForTimeout(1000);
            await this.page.goBack();
            await this.page.waitForTimeout(1000);

            const fshirt = await this.page.locator(menSelector.fullTButton);
            scroll.scroll(1);
            await fshirt.click();

            await this.page.waitForURL('https://www.bewakoof.com/men-full-sleeve-t-shirts?manufacturer_brand=bewakoof%C2%AE');
            scroll.scroll(3);
            await this.page.waitForTimeout(1000);
            await this.page.goBack();
            await this.page.waitForTimeout(1000);
            await expect(this.page).toHaveURL(menSelector.menHomeLink);

            const oshirt = await this.page.locator(menSelector.overTButton);
            // await tshirt.scrollIntoViewIfNeeded();
            scroll.scroll(1);
            await oshirt.click();
            await expect(this.page).toHaveURL('https://www.bewakoof.com/oversized-t-shirts-for-men?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
            await this.page.mouse.wheel(0, 1000);
            await this.page.waitForTimeout(1000);
            scroll.scroll(1);
            await this.page.waitForTimeout(1000);
            await this.page.goBack();
            await expect(this.page).toHaveURL(menSelector.menHomeLink);
        }
        else{
            const scroll = new Scroll(this.page);
            const women = await this.page.locator(womenSelector.womenButton);
            await women.click();

            await expect(this.page).toHaveURL(womenSelector.womenHomeLink);

            scroll.scroll(1);
            const bshirt = await this.page.locator(womenSelector.wBoyfriendT);
            await this.page.mouse.wheel(0, 1000);
            await bshirt.click();

            await this.page.waitForURL('https://www.bewakoof.com/women-boyfriend-tshirts?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
            await this.page.mouse.wheel(0, 1000);
            await this.page.waitForTimeout(1000);
            scroll.scroll(4);
            await this.page.waitForTimeout(1000);
            await this.page.goBack();
            await this.page.waitForTimeout(1000);

            const fshirt = await this.page.locator(womenSelector.wPrintT);
            // await tshirt.scrollIntoViewIfNeeded();
            await this.page.mouse.wheel(0, 1000);
            await fshirt.click();

            await this.page.waitForURL('https://www.bewakoof.com/women-printed-t-shirts?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
            scroll.scroll(1);
            await this.page.waitForTimeout(1000);
            await this.page.goBack();
            await expect(this.page).toHaveURL(womenSelector.womenHomeLink);

            const oshirt = await this.page.locator(womenSelector.wOverS);
            // await tshirt.scrollIntoViewIfNeeded();
            await this.page.mouse.wheel(0, 1000);
            await oshirt.click();
            await this.page.waitForURL('https://www.bewakoof.com/oversized-t-shirts-for-women?manufacturer_brand=bewakoof%C2%AE_bewakoof__air%C2%AE__1.0');
            await this.page.mouse.wheel(0, 1000);
            await this.page.waitForTimeout(1000);
            scroll.scroll(3);
            await this.page.waitForTimeout(1000);
            await this.page.goBack();
            await expect(this.page).toHaveURL(womenSelector.womenHomeLink);
        }
    }
}

export default scrapPage;
