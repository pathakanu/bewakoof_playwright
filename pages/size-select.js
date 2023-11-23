import { sprintf } from "sprintf-js";

class Size{
    constructor (page){
        this.page = page;
    }
    async select(){
        const n=1;
        while(n>=1){
            const loc = sprintf("[class='selectSize'] div:nth-child(%d)", n);
            const elementSelector = await this.page.locator(loc);
            const isDisabled = await elementSelector.isDisabled();


            if(isDisabled){
                n++;

            }
            else{
                return n;
            }
        }
    }

    async click(n){
        const xxl = await this.page.getByText('2XL').isEnabled();
        if(xxl == true){
            const loc = sprintf("[class='selectSize'] div:nth-child(%d)", n);
            await this.page.locator(loc).click();
        }
        else{
            await this.page.getByText('NOTIFY ME').click();
            this.notify();
        }
    }

    async notify(){
        const locator_ = await this.page.locator("[class='d-flex flex-wrap'] div:nth-child(1)");
        await locator_.click();
        await this.page.getByText('YES, NOTIFY ME').click();
        return;
    }
}

export default Size;
